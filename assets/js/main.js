/* ============================================================
   Deep Pulse Production — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Language ---------- */
  var TITLES = {
    en: "Deep Pulse Production — Underwater Photo & Video for Dolphin Tours",
    ru: "Deep Pulse Production — Подводное фото и видео для туров с дельфинами"
  };
  var langBtns = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));

  function setLang(lang) {
    if (lang !== "ru") lang = "en";
    document.body.classList.toggle("lang-ru", lang === "ru");
    document.body.classList.toggle("lang-en", lang === "en");
    document.documentElement.setAttribute("lang", lang);
    document.title = TITLES[lang];
    langBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    // placeholders
    document.querySelectorAll("[data-ph-en]").forEach(function (el) {
      var v = el.getAttribute("data-ph-" + lang);
      if (v != null) el.setAttribute("placeholder", v);
    });
    try { localStorage.setItem("dpp-lang", lang); } catch (e) {}
  }

  langBtns.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var saved = "en";
  try { saved = localStorage.getItem("dpp-lang") || "en"; } catch (e) {}
  setLang(saved);

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 30) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---------- Package tabs ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".pkg-tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".pkg-panel"));
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var key = tab.getAttribute("data-pkg");
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-panel") === key);
      });
    });
  });

  /* ---------- Gallery ---------- */
  var GALLERY = [
    { src: "g13", alt: "Pod of dolphins swimming through deep blue water" },
    { src: "g01", alt: "Freediver gliding through sun rays above a coral reef" },
    { src: "g02", alt: "Freediver in red beside a sea turtle over a sandy bottom" },
    { src: "g03", alt: "Two freedivers ascending with bubbles amid a school of fish" },
    { src: "g04", alt: "Freediver ascending toward the surface in warm light" },
    { src: "g05", alt: "Freediver descending head-first along the line" },
    { src: "g06", alt: "Two freedivers over a reef lit by surface sun rays" },
    { src: "g07", alt: "Monofin freediver gliding over white sand" },
    { src: "g08", alt: "Group of freedivers descending the competition line" },
    { src: "g09", alt: "Couple freediving together beneath glowing sun rays" },
    { src: "g10", alt: "Freediver descending toward the sandy seabed" },
    { src: "g11", alt: "Freedivers exploring a moody deep-blue reef" },
    { src: "g12", alt: "Freediver poised on a rock beneath the surface" }
  ];
  var grid = document.getElementById("galleryGrid");
  if (grid) {
    var html = "";
    GALLERY.forEach(function (g, i) {
      html +=
        '<a class="gallery-item" data-index="' + i + '" href="assets/img/gallery/' + g.src + '-full.jpg" aria-label="Open image">' +
        '<img src="assets/img/gallery/' + g.src + '.jpg" alt="' + g.alt + '" loading="lazy" />' +
        "</a>";
    });
    grid.innerHTML = html;
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbClose = document.getElementById("lbClose");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var current = 0;

  function showImg(i) {
    current = (i + GALLERY.length) % GALLERY.length;
    var g = GALLERY[current];
    lbImg.src = "assets/img/gallery/" + g.src + "-full.jpg";
    lbImg.alt = g.alt;
  }
  function openLb(i) {
    showImg(i);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lbImg.src = "";
  }
  if (grid) {
    grid.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery-item");
      if (!item) return;
      e.preventDefault();
      openLb(parseInt(item.getAttribute("data-index"), 10));
    });
  }
  lbClose.addEventListener("click", closeLb);
  lbPrev.addEventListener("click", function () { showImg(current - 1); });
  lbNext.addEventListener("click", function () { showImg(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") showImg(current - 1);
    else if (e.key === "ArrowRight") showImg(current + 1);
  });

  /* ---------- Hero slideshow ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  if (slides.length > 1) {
    var s = 0;
    setInterval(function () {
      slides[s].classList.remove("is-active");
      s = (s + 1) % slides.length;
      slides[s].classList.add("is-active");
    }, 6000);
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in-view");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- Contact form → mailto ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ru = document.body.classList.contains("lang-ru");
      var name = (form.name.value || "").trim();
      var email = (form.email.value || "").trim();
      var dates = (form.dates.value || "").trim();
      var msg = (form.message.value || "").trim();
      var subject = ru
        ? "Запрос тура — " + (name || "новый клиент")
        : "Tour enquiry — " + (name || "new client");
      var bodyLines = ru
        ? ["Имя: " + name, "Эл. почта: " + email, "Даты и маршрут: " + dates, "", msg]
        : ["Name: " + name, "Email: " + email, "Dates & route: " + dates, "", msg];
      var href =
        "mailto:hello@deeppulseproduction.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(bodyLines.join("\n"));
      window.location.href = href;
    });
  }
})();
