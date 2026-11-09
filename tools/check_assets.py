#!/usr/bin/env python3
"""Check that every local file the site refers to exists.

Reads every .html, .css and .js file and collects the local paths in src, srcset, href,
poster, url(...), og:image / twitter:image (https://asiansofboston.com/...) and the
"assets/..." strings in scripts. Page links (to folders like ../events/) are not checked.

    python3 tools/check_assets.py          # exit 1 and list what's missing
"""
import os, re, sys
from urllib.parse import unquote, urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "asiansofboston.com"
ASSET_EXT = re.compile(r"\.(css|js|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|mp4|webm|json|txt|xml)$", re.I)


def files(exts):
    for d, dirs, names in os.walk(ROOT):
        dirs[:] = [x for x in dirs if not x.startswith(".")]
        for n in names:
            if n.endswith(exts):
                yield os.path.join(d, n)


def local(ref, base_dir):
    """Map a reference to a file path in the repo, or None if it isn't a local file."""
    ref = ref.strip()
    if not ref or ref.startswith(("#", "data:", "mailto:", "tel:", "javascript:", "about:")):
        return None
    u = urlparse(ref)
    if u.scheme or ref.startswith("//"):
        if u.netloc.lower() not in (SITE, "www." + SITE):
            return None
        return os.path.join(ROOT, unquote(u.path).lstrip("/"))
    path = unquote(u.path)
    if path.startswith("/"):
        return os.path.join(ROOT, path.lstrip("/"))
    return os.path.normpath(os.path.join(base_dir, path))


def refs_in_html(text):
    for m in re.finditer(r'\b(src|href|poster)\s*=\s*"([^"]*)"', text):
        yield m.group(1), m.group(2)
    for m in re.finditer(r'\bsrcset\s*=\s*"([^"]*)"', text):
        for part in m.group(1).split(","):
            if part.strip():
                yield "srcset", part.strip().split()[0]
    for m in re.finditer(r'<meta\b[^>]*(?:og:image|twitter:image)"[^>]*\bcontent="([^"]*)"', text):
        yield "og", m.group(1)
    for m in re.finditer(r'url\(\s*[\'"]?([^\'")]+)', text):
        yield "url", m.group(1)


def main():
    missing, checked = [], 0
    for f in files((".html", ".css", ".js")):
        text = open(f, encoding="utf-8").read()
        base = os.path.dirname(f)
        found = []
        if f.endswith(".html"):
            for kind, ref in refs_in_html(text):
                path = local(ref, base)
                # href only counts for files (stylesheets, icons); page links aren't checked
                if path and (kind != "href" or ASSET_EXT.search(path)):
                    found.append((ref, path))
        elif f.endswith(".css"):
            for m in re.finditer(r'url\(\s*[\'"]?([^\'")]+)', text):
                path = local(m.group(1), base)
                if path:
                    found.append((m.group(1), path))
        else:  # scripts build paths from the site root (window.AOB_ROOT)
            for m in re.finditer(r'["\'](?:img:)?/?(assets/[^"\']+)["\']', text):
                found.append((m.group(1), os.path.join(ROOT, m.group(1))))
        for ref, path in found:
            checked += 1
            if not os.path.isfile(path):
                missing.append((os.path.relpath(f, ROOT), ref))
    for page, ref in missing:
        print(f"MISSING  {page}: {ref}")
    print(f"{checked} references checked, {len(missing)} missing")
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
