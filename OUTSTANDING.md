# Outstanding Items — Notch Homepage

Items that may need attention before launch or future iteration.

---

## Assets

| Item | Status | Notes |
|------|--------|-------|
| **Lightstone logo** | Missing | `index.html` references `Lightstone-logo-cmyk-red-LRG.png` but no `.png` file exists in the project. Add the file or update the `src` to a valid path/URL. |
| **Adams Clinical logo** | External URL | Loaded from Squarespace CDN. Consider hosting locally for reliability. |
| **Moxy Hotels logo** | Local | `Moxy_Hotels_logo.svg` — present. |
| **Notch logos** | Local | `notch_logo_RGB__horizonatl_dark_bgr.svg`, `notch_logo_RGB__vertical_dark_bgr.svg` — present. |

---

## Links & CTAs

| Item | Current | Notes |
|------|---------|-------|
| **Request a Demo** | `#demo` (scrolls to final CTA) | No form or external demo URL. Add a demo form, Calendly link, or redirect when ready. |
| **Cookie banner Privacy Policy** | `https://www.hellonotch.com/privacy-policy.html` | Footer uses local `privacy-policy.html`. Consider updating cookie banner to `privacy-policy.html` for consistency when served locally. |

---

## Pages

| Page | Status |
|------|--------|
| `index.html` | Main homepage |
| `privacy-policy.html` | Present |
| `terms-of-service.html` | Present |

---

## Optional Enhancements

- **Mobile responsiveness** — Test and refine breakpoints for smaller screens.
- **Request a Demo form** — Replace anchor with form or booking integration.
- **Analytics** — Add tracking if desired (after cookie consent).
- **Favicon** — Add `favicon.ico` or `favicon.svg` if not already set.
