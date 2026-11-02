/* Homepage study-site map. Expects window.STUDY_SITES / STUDY_INSTITUTIONS
   (rendered by _includes/study-map.html) and Leaflet on window.L. */
(function () {
  "use strict";

  var el = document.getElementById("study-map");
  if (!el || !window.L) return;

  var sites = window.STUDY_SITES || [];
  var institutions = window.STUDY_INSTITUTIONS || [];

  var map = L.map(el, {
    zoomControl: false,
    scrollWheelZoom: false,
    worldCopyJump: true,
    attributionControl: true
  });

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 17, attribution: "Imagery &copy; Esri, Maxar, Earthstar Geographics" }
  ).addTo(map);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 17, opacity: 0.75 }
  ).addTo(map);

  L.control.zoom({ position: "topright" }).addTo(map);
  L.control.scale({ position: "bottomleft", imperial: false }).addTo(map);

  // Only capture the scroll wheel once the visitor has engaged with the map.
  map.on("click", function () { map.scrollWheelZoom.enable(); });
  el.addEventListener("mouseleave", function () { map.scrollWheelZoom.disable(); });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmt(lat, lon) {
    return Math.abs(lat).toFixed(2) + "°" + (lat >= 0 ? "N" : "S") + "  " +
           Math.abs(lon).toFixed(2) + "°" + (lon >= 0 ? "E" : "W");
  }

  // Study sites show coordinates on the top line; places of study show the
  // degree there, with field, years, and place on separate lines below.
  function popupHtml(s) {
    if (s.degree) {
      return '<div class="geo-pop">' +
        '<p class="geo-pop__coords">' + esc(s.degree) + "</p>" +
        '<h3 class="geo-pop__name">' + esc(s.name) + "</h3>" +
        (s.field ? '<p class="geo-pop__line">' + esc(s.field) + "</p>" : "") +
        (s.years ? '<p class="geo-pop__line">' + esc(s.years) + "</p>" : "") +
        '<p class="geo-pop__region">' + esc(s.region) + "</p>" +
        "</div>";
    }
    var papers = (s.papers || []).map(function (p) {
      return '<li><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) +
             '</a><span>' + esc(p.venue) + " · " + esc(p.year) + "</span></li>";
    }).join("");
    return '<div class="geo-pop">' +
      '<p class="geo-pop__coords" style="color:' + esc(s.color || "") + '">' + fmt(s.lat, s.lon) + "</p>" +
      '<h3 class="geo-pop__name">' + esc(s.name) + "</h3>" +
      '<p class="geo-pop__region">' + esc(s.region) + " — " + esc(s.topic) + "</p>" +
      (papers ? '<ul class="geo-pop__papers">' + papers + "</ul>" : "") +
      "</div>";
  }

  // Proportional symbols: marker area scales with the number of related papers.
  var BASE_SIZE = 24;
  function markerSize(n) {
    return Math.round(BASE_SIZE * Math.sqrt(Math.max(n, 1)));
  }

  var bounds = [];
  var markers = sites.map(function (s, i) {
    var n = (s.papers || []).length;
    var d = markerSize(n);
    var icon = L.divIcon({
      className: "geo-marker",
      html: '<span class="geo-marker__inner" style="--c:' + esc(s.color) + '"><span class="geo-marker__pulse"></span><span class="geo-marker__dot"></span></span>',
      iconSize: [d, d],
      iconAnchor: [d / 2, d / 2],
      popupAnchor: [0, -d / 2]
    });
    bounds.push([s.lat, s.lon]);
    // Larger circles sit underneath smaller ones so every site stays clickable.
    return L.marker([s.lat, s.lon], { icon: icon, title: s.name, riseOnHover: true, zIndexOffset: -d * 10 })
      .bindPopup(popupHtml(s), { maxWidth: 320, className: "geo-popup" })
      .addTo(map);
  });

  // Places of study: small square icons with the same popup as study sites.
  // When a study site sits on the same spot (Urumqi), the icon is nudged east.
  // Each school also gets a hidden stage label ("M.Sc. · 2022–2025") that the
  // education animation below pops up above the icon.
  var stageLabels = [];
  institutions.forEach(function (s) {
    var crowded = sites.some(function (p) {
      return Math.abs(p.lat - s.lat) < 0.5 && Math.abs(p.lon - s.lon) < 0.5;
    });
    var w = 22, dx = crowded ? -(w / 2 + 14) : 0;
    var icon = L.divIcon({
      className: "geo-marker geo-marker--home",
      html: '<span class="geo-marker__dot"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>',
      iconSize: [w, w],
      iconAnchor: [w / 2 + dx, w / 2],
      popupAnchor: [-dx, -w / 2]
    });
    bounds.push([s.lat, s.lon]);
    L.marker([s.lat, s.lon], { icon: icon, title: s.name, zIndexOffset: 500 })
      .bindPopup(popupHtml(s), { maxWidth: 280, className: "geo-popup" })
      .addTo(map);

    var text = [s.degree, s.years].filter(Boolean).join(" · ");
    var label = L.marker([s.lat, s.lon], {
      icon: L.divIcon({
        className: "geo-stage",
        html: '<span class="geo-stage__label" style="left:' + (-dx) + 'px">' + esc(text) + "</span>",
        iconSize: [0, 0]
      }),
      interactive: false,
      keyboard: false,
      zIndexOffset: 1000
    }).addTo(map);
    stageLabels.push(label);
  });

  // Path through the places of study in chronological order: a faint solid
  // arc per leg, plus a short bright "comet" that travels each leg in turn
  // (Qingdao -> Urumqi, then Urumqi -> Pavia). pathLength="100" measures the
  // comet in percent of the leg, so it looks the same at every zoom level.
  var LEG_SECONDS = 2.4, COMET = 14;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var legs = institutions.length - 1, comets = [];
  for (var k = 1; k < institutions.length; k++) {
    var a = institutions[k - 1], b = institutions[k];
    var pts = [], bend = Math.min(10, Math.abs(b.lon - a.lon) / 6);
    var mLat = (a.lat + b.lat) / 2 + bend, mLon = (a.lon + b.lon) / 2;
    for (var t = 0; t <= 1.0001; t += 0.04) {
      var u = 1 - t;
      pts.push([u * u * a.lat + 2 * u * t * mLat + t * t * b.lat,
                u * u * a.lon + 2 * u * t * mLon + t * t * b.lon]);
    }
    L.polyline(pts, { className: "geo-arc", weight: 1.5, interactive: false }).addTo(map);
    var comet = L.polyline(pts, { className: "geo-arc-comet", weight: 3, lineCap: "round", interactive: false }).addTo(map);
    comets.push(comet);
  }

  // Legend: symbol size (research focus) and the education path.
  var legend = L.control({ position: "bottomleft" });
  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "geo-legend");
    div.innerHTML =
      '<span><i class="geo-legend__dot"></i><i class="geo-legend__dot geo-legend__dot--big"></i>Research focus</span>' +
      '<span><i class="geo-legend__path"></i>Education</span>';
    return div;
  };
  legend.addTo(map);

  function fitAll() {
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 5 });
  }
  fitAll();

  // Education animation, on one shared timeline of (legs + 1) slots:
  // slot i shows school i's stage label as the comet departs it, then the
  // comet travels leg i; the last slot shows the final school's label on
  // arrival and doubles as a pause before the loop restarts. Paths and labels
  // only exist once the map has a view, so this runs after fitAll().
  var SLOT = LEG_SECONDS * 1000, CYCLE = SLOT * (legs + 1);
  function loop(el, frames, i) {
    el.animate(frames, { duration: CYCLE, delay: SLOT * i, iterations: Infinity,
                         easing: "linear", fill: "backwards" });
  }

  comets.forEach(function (comet, i) {
    var path = comet.getElement();
    if (!path) return;
    if (!path.animate || reduceMotion) {
      path.style.display = "none";
      return;
    }
    path.setAttribute("pathLength", "100");
    loop(path, [
      { strokeDashoffset: COMET },
      { strokeDashoffset: -100, offset: 1 / (legs + 1) },
      { strokeDashoffset: -100 }
    ], i);
  });

  // Pop in over 0.35 s, hold until 1.4 s, then fade out slowly by 3.4 s.
  var pop = 350 / CYCLE, hold = 1400 / CYCLE, gone = 3400 / CYCLE;
  stageLabels.forEach(function (label, i) {
    var el = label.getElement() && label.getElement().firstChild;
    if (!el || !el.animate || reduceMotion) return;
    loop(el, [
      { opacity: 0, translate: "0 6px", scale: "0.92" },
      { opacity: 1, translate: "0 0", scale: "1", offset: pop, easing: "ease-out" },
      { opacity: 1, translate: "0 0", scale: "1", offset: hold },
      { opacity: 0, translate: "0 -4px", scale: "1", offset: gone },
      { opacity: 0, translate: "0 -4px", scale: "1" }
    ], i);
  });

  // Live cursor coordinates, like a GIS status bar.
  var readout = document.getElementById("geo-coords");
  if (readout) {
    var c = map.getCenter();
    readout.textContent = fmt(c.lat, c.lng);
    map.on("mousemove", function (e) { readout.textContent = fmt(e.latlng.lat, e.latlng.lng); });
  }

  // Two site lists share the same highlight state: names inside the map open
  // the popup in place (like clicking the marker); cards beside the map fly to
  // the site first.
  var names = Array.prototype.slice.call(document.querySelectorAll(".geo__site"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".geo__card"));
  function setActive(i) {
    names.concat(cards).forEach(function (b) {
      b.classList.toggle("is-active", Number(b.dataset.site) === i);
    });
  }
  names.forEach(function (b) {
    b.addEventListener("click", function () { markers[Number(b.dataset.site)].openPopup(); });
  });
  cards.forEach(function (b) {
    b.addEventListener("click", function () {
      var i = Number(b.dataset.site), s = sites[i];
      map.closePopup();
      map.flyTo([s.lat, s.lon], 8, { duration: 1.2 });
      map.once("moveend", function () { markers[i].openPopup(); });
    });
  });
  markers.forEach(function (m, i) {
    m.on("popupopen", function () { setActive(i); });
    m.on("popupclose", function () { setActive(-1); });
  });

  var reset = document.querySelector(".geo__reset");
  if (reset) {
    reset.addEventListener("click", function () { map.closePopup(); fitAll(); });
  }
})();
