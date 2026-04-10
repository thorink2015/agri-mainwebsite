# Hectar — Website

Website for **Hectar**, agricultural drone spraying service in Romania and Moldova.

**Live domain:** hectar.ro (to be connected)

---

## Stack

- [Astro](https://astro.build/) — static output, zero JS by default
- Plain CSS with custom properties — no frameworks, no Tailwind
- Netlify Forms — built-in form handling, zero config
- Plausible Analytics (optional) — GDPR-friendly, no cookie consent needed

---

## Dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## Deploy

Auto-deploys on push to `main` via Netlify.

Build command: `npm run build`  
Publish directory: `dist`

---

## File structure

```
src/
  layouts/
    BaseLayout.astro        # Global HTML shell, meta, schema, header/footer
  components/
    Header.astro
    Footer.astro
    Hero.astro
    ServiceCard.astro
    FAQItem.astro
    ContactForm.astro
  pages/
    index.astro             # /
    servicii/index.astro    # /servicii
    servicii/vie.astro      # /servicii/vie
    servicii/livezi.astro   # /servicii/livezi
    servicii/cereale.astro  # /servicii/cereale
    preturi.astro           # /preturi
    zone.astro              # /zone
    despre.astro            # /despre
    jurnal/index.astro      # /jurnal
    jurnal/[slug].astro     # /jurnal/[slug]
    intrebari-frecvente.astro
    contact.astro
    contact/trimis.astro    # POST success page (noindex)
    termeni.astro
    confidentialitate.astro
    cookies.astro
    sitemap.xml.ts          # Auto-generated sitemap
  content/
    jurnal/                 # Blog posts go here as .md files
  styles/
    global.css
public/
  favicon.ico
  icon.svg
  apple-touch-icon.png
  site.webmanifest
  robots.txt
  logo.png                  # PLACEHOLDER — replace with real logo
  og/
    home.jpg                # PLACEHOLDER — replace with real 1200x630 images
    servicii.jpg
    default.jpg
```

---

## Adding a blog post

Create a Markdown file in `src/content/jurnal/`:

```markdown
---
title: "Titlul articolului"
date: "2026-05-01"
excerpt: "Un paragraf scurt pentru lista de articole."
draft: false
---

Conținutul articolului în Markdown...
```

Then update `src/pages/jurnal/index.astro` and `src/pages/jurnal/[slug].astro`
to load from the content collection using Astro's `getCollection` API.

---

## Post-launch checklist

### Domain & DNS
- [ ] Register domain `hectar.ro` (or backup `hectar-agro.ro`)
- [ ] Also register `hectar.md` if expanding to Moldova
- [ ] Point DNS to Netlify (add CNAME or A record)
- [ ] Enable HTTPS in Netlify (auto via Let's Encrypt)

### Replace all placeholders
- [ ] `0700 000 000` → real phone/WhatsApp number (everywhere)
- [ ] `contact@hectar.ro` → real email (confirm domain setup)
- [ ] `[DENUMIRE JURIDICĂ]` → real company name (legal pages)
- [ ] `[ADRESĂ]` → registered address (legal pages)
- [ ] `[CUI]` → fiscal code (legal pages)
- [ ] `[NR]` → registry number (legal pages)
- [ ] `[DATA]` → publication date (legal pages)
- [ ] `[nume]` → founder first name (`/despre`)
- [ ] `/og/*.jpg` → real Open Graph images, 1200×630 px
- [ ] `/logo.png` → real PNG logo
- [ ] `/favicon.ico`, `/icon.svg`, `/apple-touch-icon.png` → real brand icons

### SEO & Search
- [ ] Submit domain to Google Search Console, verify, submit `/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Create **Google Business Profile**: category "Agricultural service",
      service area = Romania + Moldova — *single highest-leverage local SEO action*

### Directory listings (free, RO-specific)
- [ ] listafirme.ro
- [ ] firme-online.ro
- [ ] paginiaurii.ro
- [ ] romanian-companies.eu
- [ ] agrointel.ro (operator listings)
- [ ] proxydrone.eu

### Social & Messaging
- [ ] Create Facebook Page — link to site, post 2×/week minimum
- [ ] Set up WhatsApp Business — greeting + service catalog
- [ ] Consider Instagram for field photos (target: farmers 35–55 on Android)

### Analytics
- [ ] Add Plausible Analytics snippet to BaseLayout (no cookie consent needed)
  ```html
  <script defer data-domain="hectar.ro" src="https://plausible.io/js/script.js"></script>
  ```

### Testing
- [ ] Test contact form end-to-end (submit → check Netlify Forms dashboard)
- [ ] Test on mobile at 375px (primary audience)
- [ ] Run Lighthouse audit: target 95+ Performance, 100 Accessibility/Best Practices/SEO
- [ ] Check Core Web Vitals: LCP < 1.5s, CLS < 0.05, INP < 200ms

### Legal (before going live)
- [ ] Fill in all `[PLACEHOLDER]` fields in `/termeni` and `/confidentialitate`
- [ ] Set publication date in all three legal pages
- [ ] Verify GDPR compliance with a Romanian lawyer if needed
- [ ] Register as data controller with ANSPDCP if required

### Content (phase 2)
- [ ] Write first Jurnal de teren post (document first real treatment)
- [ ] Add real field photos (drone spraying, team, equipment)
- [ ] Add client testimonials (only real ones, no fabricated)
- [ ] Russian translation for Moldova market (`/ru/` folder)
- [ ] County-specific landing pages (`/zone/iasi`, `/zone/cahul`, etc.)
- [ ] Online booking calendar (Calendly or similar, embed in /contact)
