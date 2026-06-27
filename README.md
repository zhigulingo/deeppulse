# Deep Pulse Production — website

A bilingual (English / Russian) one-page marketing site for **deeppulseproduction.com** —
underwater photo & video, freediving and equipment for dolphin tours and liveaboards.
Built as a static site: plain HTML, CSS and JavaScript, no build step.

## Run it locally

Any static server works. For example:

```bash
cd deeppulse
python3 -m http.server 4321
# then open http://localhost:4321
```

(Opening `index.html` directly also works, but a server is recommended so the
gallery images load with the correct paths.)

## Project structure

```
index.html              All page content (EN + RU side by side)
assets/css/styles.css   Design system, layout, responsive rules
assets/js/main.js       Language toggle, menu, package tabs, gallery lightbox, form
assets/img/             hero1–4, about, cta, favicon
assets/img/gallery/     g01–g15 (grid thumbs) + g01–g15-full (lightbox)
```

## Things you'll likely want to edit

- **Contact email** — currently the placeholder `hello@deeppulseproduction.com`.
  Replace it everywhere with your real address (in `index.html`: the contact chip
  and footer link; in `assets/js/main.js`: the `mailto:` in the form handler).
- **Instagram** — set to `@romeo_freediving` (`https://instagram.com/romeo_freediving`).
- **WhatsApp / Telegram** — not added yet. If you want a button, tell me the number/username.
- **Prices & package details** — all live in the `#packages` section of `index.html`.
  Each item has an English `<span class="lang lang-en">` and a Russian
  `<span class="lang lang-ru">` next to it — edit both.
- **Photos** — drop replacements into `assets/img/` keeping the same filenames, or
  ask me to regenerate optimised versions from new originals.

## Language toggle

The page ships in English by default. The **EN · RU** switch in the header swaps every
`.lang-en` / `.lang-ru` pair and remembers the choice in the browser. The `<body>` carries
`lang-en` or `lang-ru` as the active-language flag.

## Deploying to deeppulseproduction.com

It's a static site, so any static host works — Netlify, Vercel, Cloudflare Pages,
GitHub Pages, or plain shared hosting. Just upload the whole `deeppulse/` folder and
point the domain at it. No server or database needed.

---
Photography: Romeo Freediving (@romeo_freediving).
