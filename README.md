# asiansofboston.com

The asians of boston website, as plain HTML, CSS and a little JavaScript.

It is a static copy of the site that was published from Notion through super.so
(copied November 2026). Every page, its text, images, fonts, colours, layout, the
mobile menu, the search box, the toggles and the events calendar match the
original. There is no build step: the files in this folder are the site.

```
index.html               home page
<page>/index.html        every other page, at the same address as before
                         (/events -> events/index.html, /blogs/homecooked-meals -> blogs/homecooked-meals/index.html)
404.html                 the "This page doesn't seem to exist" page
style.css                super.so / Notion / "funky" theme styles plus the site's own CSS,
                         trimmed to the rules the site uses
assets/fonts/            Space Grotesk (400, 500, 600, 700), the files super.so served
assets/img/              every image from the pages (downloaded from super.so and Notion)
assets/favicon.png       browser-tab icon
assets/js/site.js        toggles, mobile menu and search
assets/js/events-calendar.js   the month calendar on /events, with the events database rows
.nojekyll                tells GitHub Pages to serve the files as they are
```

## Pages

Home, events, blogs (and its four posts), photos, about, join, feedback,
speedfriending, the photo page `/events/sushi-dinner/newphoto`, and the 13 event
pages that the old site only reached through its search box and calendar
(`/events/panda-fest`, `/hwasa-mgm`, `/marvel-rivals`, ...).

`/discord`, `/facebook`, `/instagram`, `/steam`, `/donations` and `/alreadyfriends`
are the short links. As on the original, each is a small page that sends the
visitor straight on to the real address (the site's own "redirects v2" script) and
shows the link in case that doesn't happen.

## What runs in the browser

- **Tally forms** (`/join`, `/feedback`, `/speedfriending`): third-party
  iframes from tally.so, plus Tally's `embed.js`, exactly as before. Submissions
  go to Tally, not to super.so, so they keep working.
- **Short links**: the site's own redirect script, kept as written. One line was
  added so it also matches `/discord/` (pages now live in folders).
- **Button callouts**: the site's own script that marks small bordered callouts
  as clickable, kept as written.
- **site.js**: opens and closes toggles, the mobile menu, and the search box.
  super.so searched page titles through Notion; the copy searches the same list
  of published pages by title.
- **events-calendar.js**: draws the /events calendar for the current month, with
  back / Today / forward, from the 42 dated rows of the Notion events database.

There are no trackers, cookies or analytics (super.so's cookie banner code, Vercel
analytics and the Next.js runtime are gone).

## Small differences from the super.so site

- Search results come from a fixed list of the 31 pages super.so's search
  returned, matched by word start like the original. The order of results follows
  the original's for nearly every query, but not every one.
- On phones (546px wide and narrower) the /events calendar shows no events and no
  month names, because that is what super.so showed there.
- Link previews (Open Graph images) point to copies in `assets/og/`, resized to
  1200px where super.so served the full upload (up to 10 MB).
- Three links that were already broken on the original stay as they were:
  "we can plan it out →" on /events (`/ba59f98e34e0486f96676775c7e5dc43`), and the
  footer's discord / facebook / instagram links on
  /events/raw-providence-artist-showcase (the same address plus
  `/ecbf8a7de1e34512bb1b56b0f0b09f67` and `/e995c5f914e64f9292005ee12a3b14dc`).
  They lead to the 404 page, as before.

## Content that no longer updates itself

The old site re-read Notion on every visit. This copy is frozen as of November
2026: editing the Notion pages no longer changes the website. To change text,
edit the HTML. To add an event to the calendar, add a row to the `EVENTS` list at
the top of `assets/js/events-calendar.js`. The "events this week", "upcoming
events" and "previous events" lists on /events were empty on the original (all
events are in the past) and are empty here.

## Preview locally

```sh
cd ~/Developer/aob-site
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Use the server rather than opening the files
directly, so folder links (`events/`) resolve the way they will online.
The 404 page uses root paths (`/style.css`), so it only looks right at the root of
a domain (locally: <http://localhost:8000/404.html>).

## Publish with GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repository, go to **Settings > Pages**. Under **Build and deployment**,
   choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. Check the site at `https://<username>.github.io/<repo>/` before changing DNS.
   (Pages and links work there; only the 404 page needs the real domain.)
4. Add a file named `CNAME` at the root containing one line,
   `asiansofboston.com`, and push it (or type the domain under **Custom domain**
   in Settings > Pages, which commits the same file). This repository does not
   have it yet on purpose.
5. Change the website records at the domain's DNS host. The domain is registered
   with Squarespace Domains and uses Google Cloud DNS name servers
   (`ns-cloud-b1..b4.googledomains.com`), so the records are edited in Squarespace
   (Domains > asiansofboston.com > DNS settings).

   Current records (checked with `dig`, November 2026):

   | Host  | Type  | Data                                            |
   |-------|-------|-------------------------------------------------|
   | `@`   | A     | `76.76.21.21` (Vercel, for super.so)            |
   | `www` | CNAME | `cname.super.so.`                               |
   | `@`   | MX    | Google Workspace (`aspmx.l.google.com` and alt1-4) |
   | `@`   | TXT   | `v=spf1 include:_spf.google.com ~all`           |

   Remove the `@` A record and the `www` CNAME above, then add:

   | Host  | Type  | Data                    |
   |-------|-------|-------------------------|
   | `@`   | A     | `185.199.108.153`       |
   | `@`   | A     | `185.199.109.153`       |
   | `@`   | A     | `185.199.110.153`       |
   | `@`   | A     | `185.199.111.153`       |
   | `@`   | AAAA  | `2606:50c0:8000::153`   |
   | `@`   | AAAA  | `2606:50c0:8001::153`   |
   | `@`   | AAAA  | `2606:50c0:8002::153`   |
   | `@`   | AAAA  | `2606:50c0:8003::153`   |
   | `www` | CNAME | `<username>.github.io.` |

   (The AAAA records are optional; they add IPv6.)
6. Once DNS has updated and GitHub shows the domain as verified, tick
   **Enforce HTTPS** in Settings > Pages.
7. Cancel the super.so site only after <https://asiansofboston.com/> loads from
   GitHub.

> **Warning: do not touch the MX or TXT records.** Email for
> @asiansofboston.com (hello@asiansofboston.com) runs on Google Workspace and
> depends on the MX records (`aspmx.l.google.com` and the `alt` ones) and the TXT
> records (SPF, and any DKIM or domain-verification entries). Only the `@` A/AAAA
> records and the `www` record change.
