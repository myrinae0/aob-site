/* The month calendar on /events, as super.so drew it from the Notion "events" database.
   The database rows below were copied from the live site (November 2026); the layout
   (week rows, multi-day bars, stacking, the "Today" button) follows super.so's markup. */
(function () {
  // [block id, title, icon ("img:<path>" or an emoji), page link or null, location, [[pill colour, tag]], start, end]
  var EVENTS = [
    ["31bc416e8d958196b08ac70ff29f2d0e", "EDC In Las Vegas 2026!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-05-15", "2026-05-17"],
    ["2f5c416e8d958196b1c5c4b57ee00722", "Weekend Trip to Acadia National Park", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-04-24", "2026-04-27"],
    ["315c416e8d958143b9c8f11bcc424b84", "Easter Potluck!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-04-05", "2026-04-05"],
    ["31ac416e8d95818ab8a4eaca0ae679b7", "TWICE! In Boston", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-04-03", "2026-04-04"],
    ["30bc416e8d958131ad56c64074f9a617", "AOB Language Exchange Session!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-03-14", "2026-03-14"],
    ["2f5c416e8d95815bb14ccabbb782aa8f", "Lunar New Year Chinatown Community Lion Dance Parade & Cultural Village", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-03-01", "2026-03-01"],
    ["2eac416e8d9581e29d66e64b5e64a508", "AOB Lunar New Year Feast!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-02-21", "2026-02-21"],
    ["2e4c416e8d95815a91f5d9a682592017", "2026 Tet Celebration", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-02-15", "2026-02-15"],
    ["2ddc416e8d9581ae8733c9a22ebe402a", "2026 Winter Tet Market", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-01-31", "2026-02-01"],
    ["2d2c416e8d958176ab8ac6428df12db1", "AOB goes to Activate Games", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-01-24", "2026-01-24"],
    ["2cfc416e8d958120bd01f09e7e9b6f37", "AYCE Korean BBQ Social at Sura!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2026-01-10", "2026-01-10"],
    ["2bbc416e8d9581f2b0e9cdd6ce165b94", "Brewery Social Igloo Edition!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-12-14", "2025-12-14"],
    ["2b4c416e8d9581afa699d48c72688203", "Ice Skating + Holiday Light Sightseeing!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-12-06", "2025-12-06"],
    ["2b2c416e8d9581898759df2f57340184", "🛍️ #ShopAAPI Holiday Market", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-12-03", "2025-12-03"],
    ["2a2c416e8d95810f8eaae24ae660b417", "2025 Friendsgiving Gathering!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-11-22", "2025-11-22"],
    ["2a7c416e8d9581938204cd5dab1ed06b", "🦎 Asian Joy Night at Lizard Boy: A New Musical", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-11-14", "2025-11-14"],
    ["294c416e8d958178a856de37ef649bcf", "Kim’s Convenience Play & Asian Joy Night", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-11-06", "2025-11-06"],
    ["283c416e8d95810894a2f597e5cea4df", "Autumn Stroll!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-25", "2025-10-25"],
    ["261c416e8d95819a8931c1226e9155cb", "Watertown Zine Fest", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-18", "2025-10-18"],
    ["27cc416e8d9581d2af27dc1d29c96518", "Speedfriending!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-10", "2025-10-10"],
    ["26ec416e8d958189b648d536125ac1c9", "Dinner Hangout on Thursday Twilight", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-09", "2025-10-09"],
    ["26ec416e8d9581edb4e8f022acdcf981", "2025 Trung Thu Together Festival", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-04", "2025-10-04"],
    ["273c416e8d95812db4e6d9e74cfbed0d", "📽️  Boston Asian American Film Festival Preview Party", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-10-02", "2025-10-02"],
    ["25fc416e8d9581f69239c70b031b7cbf", "Outdoor Picnic on the Shoreline!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-28", "2025-09-28"],
    ["262c416e8d95810d9977ef1718ddf45f", "Experience Chinatown Festival", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-27", "2025-09-27"],
    ["261c416e8d9581658bb5db661cfaad53", "2025 Made in Boston Festival", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-20", "2025-09-20"],
    ["26ec416e8d958107abb5f17b4efea85d", "Hugs", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-14", "2025-09-14"],
    ["25bc416e8d9581409da0d910b034f1c2", "Foodie Festivities: Lunch at Mountain House!", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-13", "2025-09-13"],
    ["262c416e8d9581ec933ae15c4ce89066", "The Ceremony: A New Nepali/Nigerian Play", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-09-11", "2025-10-05"],
    ["25dc416e8d9581e096bad2b7792d6e4d", "Ffd", "img:assets/img/notion-calendar_blue.svg", null, "", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["orange", "sports"], ["pink", "arts"], ["blue", "photography"], ["blue", "music"], ["brown", "gaming"], ["default", "books"]], "2025-08-27", "2025-08-28"],
    ["events-panda-fest", "Panda fest", "🎈", "/events/panda-fest", "boston, ma", [["green", "paid"], ["red", "food"], ["yellow", "social"], ["pink", "arts"]], "2025-05-02", "2025-05-04"],
    ["hwasa-mgm", "Hwasa @ MGM", "🎈", "/hwasa-mgm", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["blue", "music"]], "2025-03-30", "2025-03-30"],
    ["sara-landry-royale", "Sara Landry @ Royale", "🎈", "/sara-landry-royale", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["blue", "music"]], "2025-03-29", "2025-03-29"],
    ["events-book-club-is-back-but-what-will-people-say", "Book Club is Back!! - \"But What Will People Say?”", "🎈", "/events/book-club-is-back-but-what-will-people-say", "boston, ma", [["blue", "free"], ["default", "books"]], "2025-03-22", "2025-03-22"],
    ["events-knock2-roadrunner", "Knock2 @ Roadrunner", "🎈", "/events/knock2-roadrunner", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["pink", "arts"], ["blue", "music"]], "2025-03-09", "2025-03-09"],
    ["events-march-speedfriending", "march speedfriending", "🎈", "/events/march-speedfriending", "boston, ma", [["blue", "free"], ["purple", "rsvp"], ["yellow", "social"]], "2025-03-01", "2025-03-01"],
    ["events-raw-providence-artist-showcase", "RAW Providence Artist Showcase", "🎈", "/events/raw-providence-artist-showcase", "providence, ri", [["green", "paid"], ["purple", "rsvp"], ["pink", "arts"]], "2025-02-28", "2025-02-28"],
    ["events-board-game-night", "Board Game Night!", "🎈", "/events/board-game-night", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["red", "food"], ["yellow", "social"], ["brown", "gaming"]], "2025-02-25", "2025-02-25"],
    ["events-return-of-the-wood-snake", "Return of the Wood Snake", "🎈", "/events/return-of-the-wood-snake", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["pink", "arts"]], "2025-02-22", "2025-02-22"],
    ["yellow-face-play-asian-joy-night", "Yellow Face Play & Asian Joy Night", "🎈", "/yellow-face-play-asian-joy-night", "boston, ma", [["blue", "free"], ["green", "paid"], ["purple", "rsvp"], ["pink", "arts"]], "2025-02-21", "2025-02-21"],
    ["marvel-rivals", "Marvel Rivals ", "🎈", "/marvel-rivals", "boston, ma", [["blue", "free"], ["brown", "gaming"]], "2025-02-20", "2025-02-20"],
    ["william-black-bnl", "William Black @ BNL", "🎈", "/william-black-bnl", "boston, ma", [["green", "paid"], ["purple", "rsvp"], ["blue", "music"]], "2025-02-16", "2025-02-16"]
  ];

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];
  var SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var ROOT = window.AOB_ROOT || "/";
  var DAY = 864e5;

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function utc(iso) { var p = iso.split("-"); return Date.UTC(+p[0], p[1] - 1, +p[2]); }
  function link(uri) { return ROOT + uri.replace(/^\//, "") + "/"; }

  function card(e) {
    var id = e[0], title = esc(e[1]), icon = e[2], uri = e[3], loc = e[4], pills = e[5];
    var iconHtml = icon.indexOf("img:") === 0
      ? '<img width="16" height="16" class="notion-icon" loading="lazy" src="' + ROOT + icon.slice(4) +
        '" style="object-fit: contain; object-position: center center;">'
      : '<span class="notion-icon text" style="width: 16px; height: 16px; font-size: 16px; fill: var(--color-text-default-light);">' + icon + "</span>";
    var h = '<div id="block-' + id + '" class="notion-collection-card calendar' + (uri ? "" : " no-click") + '" style="height: 76px;">';
    if (uri) h += '<a id="block-' + id + '" href="' + link(uri) + '" class="notion-link notion-collection-card__anchor">' + title + "</a>";
    h += '<div class="notion-collection-card__content notion-collection-card__property-list">' +
      '<div class="notion-property notion-property__title notion-collection-card__property title notion-semantic-string">' +
      '<div class="notion-property__title__icon-wrapper">' + iconHtml + "</div>" + title + "</div>";
    if (loc) h += '<p class="notion-property notion-property__text property-79625364 notion-collection-card__property notion-semantic-string no-wrap">' + esc(loc) + "</p>";
    if (pills.length) {
      h += '<div class="notion-property notion-property__select no-wrap property-424d517a notion-collection-card__property">';
      for (var i = 0; i < pills.length; i++)
        h += '<span class="notion-pill pill-' + pills[i][0] + (i ? "" : " first") + '">' + esc(pills[i][1]) + "</span>";
      h += "</div>";
    }
    return h + "</div></div>";
  }

  function pct(n) { return +(n * 100 / 7).toPrecision(6) + "%"; }

  // At phone widths (546px and below) super.so drew the calendar without events or month names.
  var phone = window.matchMedia("(max-width: 546px)");

  function render(cal, year, month) {
    var now = new Date(), mobile = phone.matches;
    var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    var first = Date.UTC(year, month, 1);
    var start = first - new Date(first).getUTCDay() * DAY;            // Sunday on or before the 1st
    var last = Date.UTC(year, month + 1, 0);
    var weeks = Math.ceil((last - start + DAY) / (7 * DAY));
    var html = "";
    for (var w = 0; w < weeks; w++) {
      var ws = start + w * 7 * DAY, we = ws + 6 * DAY;
      var cells = "", items = "", slots = [];                          // slots[n] = columns taken
      for (var d = 0; d < 7; d++) {
        var t = ws + d * DAY, dt = new Date(t), m = dt.getUTCMonth();
        var cls = "notion-collection-calendar__date" + (w === weeks - 1 ? " no-border" : "") +
                  (d === 0 || d === 6 ? " weekend" : "") + (w === 0 ? " first" : "");
        // super.so greys out days outside the shown month, and any day not in the current year
        var active = m === month && dt.getUTCFullYear() === now.getFullYear();
        var num = "notion-collection-calendar__date-number" + (t === today ? " today" : "") + (active ? "" : " inactive");
        var label = (dt.getUTCDate() === 1 && !mobile ? SHORT[m] : "") + " " + dt.getUTCDate();
        cells += '<div class="' + cls + '"><div class="' + num + '">' + label + "</div></div>";
      }
      for (var i = 0; i < (mobile ? 0 : EVENTS.length); i++) {      // phones: super.so showed no events
        var e = EVENTS[i], es = utc(e[6]), ee = utc(e[7]);
        if (ee < ws || es > we) continue;
        var cont = es < ws, from = cont ? ws : es;
        var c0 = Math.round((from - ws) / DAY), c1 = Math.min(6, Math.round((ee - ws) / DAY));
        var span = Math.round((ee - from) / DAY) + 1;
        var s = 0;
        for (;; s++) {
          var taken = slots[s] || (slots[s] = []), clash = false;
          for (var c = c0; c <= c1; c++) if (taken[c]) clash = true;
          if (!clash) break;
        }
        for (c = c0; c <= c1; c++) slots[s][c] = true;
        items += '<div class="notion-collection-calendar__item-wrapper" style="left: ' + pct(c0) + "; width: " + pct(span) +
                 "; top: " + s * 82 + 'px;"><div class="notion-collection-calendar__item' + (cont ? " overflowRight" : "") + '">' +
                 card(e) + "</div></div>";
      }
      var height = slots.length ? 30 + slots.length * 82 : 68;
      html += '<div class="notion-collection-calendar__row" style="height: ' + height + 'px;">' +
              cells + items + "</div>";
    }
    cal.querySelector(".notion-collection-calendar__header-date").textContent = MONTHS[month] + " " + year;
    var rows = cal.querySelectorAll(".notion-collection-calendar__row");
    for (var r = 0; r < rows.length; r++) rows[r].parentNode.removeChild(rows[r]);
    cal.insertAdjacentHTML("beforeend", html);
  }

  var cal = document.querySelector(".notion-collection-calendar");
  if (!cal) return;
  var now = new Date(), y = now.getFullYear(), m = now.getMonth();
  render(cal, y, m);
  var redraw = function () { render(cal, y, m); };
  if (phone.addEventListener) phone.addEventListener("change", redraw); else phone.addListener(redraw);
  function go(delta) {
    if (delta === 0) { y = now.getFullYear(); m = now.getMonth(); }
    else { m += delta; if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } }
    render(cal, y, m);
  }
  cal.querySelector(".notion-collection-calendar__header-date-back").addEventListener("click", function () { go(-1); });
  cal.querySelector(".notion-collection-calendar__header-date-forward").addEventListener("click", function () { go(1); });
  cal.querySelector(".notion-collection-calendar__header-date-today").addEventListener("click", function () { go(0); });
})();
