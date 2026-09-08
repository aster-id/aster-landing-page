# Aster ID — landing page

A single-screen "coming soon" landing page for **Aster ID** — verified identity and
sovereign data storage for scientists on the AT Protocol.

## Files

| File | Purpose |
|------|---------|
| `content.md` | **Edit here.** All copy + config (front-matter block) with a field reference below it. |
| `template.html` | The markup. `%%PLACEHOLDER%%` markers are filled from `content.md`; Durable's `{{ }}` bindings are left untouched. Edit for structural/style changes. |
| `build.mjs` | Zero-dependency build: `content.md` + `template.html` → `Aster ID.dc.html`. |
| `Aster ID.dc.html` | **Generated — do not edit.** The deployable page / Durable component export (`<x-dc>` / `<sc-if>` / `{{ }}` rendered client-side by `support.js`). |
| `support.js` | Durable runtime that expands the `<x-dc>` template. |
| `aster-lockup.png` | Wordmark lockup (1268×318). |
| `aster-mark.png` | Icon mark (193×193). Also used as favicon / apple-touch-icon. |
| `uploads/` | Durable asset staging. |
| `docs/` | `deciduous` decision-graph export (`graph-data.json`). |

## Editing & building

1. Edit copy / config in **`content.md`** (or markup in `template.html`).
2. Run **`npm run build`** (or `node build.mjs`).
3. Commit the regenerated `Aster ID.dc.html` and deploy / re-import to Durable.

`build.mjs` replaces `%%KEY%%` tokens in `template.html` with the matching
front-matter value from `content.md`. Optional filters: `%%KEY|attr%%`
(HTML-escape, default), `%%KEY|json%%` (emits a JSON/JS string literal, used in
the `<script>` and JSON-LD blocks), `%%KEY|raw%%`. The build fails if a token has
no matching key. See the field reference at the bottom of `content.md`.

### Hero treatments

Three interchangeable hero layouts, switchable via the `heroTreatment` prop
(`balanced` \| `handle-first` \| `type-only`; default set by `hero_treatment` in
`content.md`). Props also cover `cycleHandles` (animated handle swap — list in
`content.md` `handles`) and `showWatermark`.

## Deploy checklist — before launch

Set these in `content.md`, then rebuild:

- [ ] **Signup endpoint** — `signup_endpoint` is `https://example.org/aster-id/subscribe`.
      Point it at the real POST endpoint (JSON body `{ email }`). Note the client
      currently swallows fetch errors silently — consider surfacing failures.
- [ ] **Footer links** — `footer_link_1_href` / `footer_link_2_href` are `#`.
- [ ] **Production domain** — `domain` is `https://aster.id/` (must end with `/`).
      Feeds the canonical / Open Graph / JSON-LD URLs.
- [ ] **Privacy policy** — the email form needs a linked privacy policy (and cookie
      consent if Durable injects any cookies/analytics). Not yet wired into the template.

---

## Website Specification audit

Audited against the [Website Specification](https://specification.website) checklist
(`mcp.specification.website/mcp` — tools: `search`, `list_topics`, `get_topic`,
`get_checklist`, `audit_url`). `audit_url` needs a public URL, so re-run it against the
deployed site to cover the server/header items below.

### Fixes applied (in `template.html`)

| Spec item | Change |
|-----------|--------|
| `lang` attribute (Required) | `<html lang="en">` |
| `color-scheme` / `theme-color` (Recommended) | Added `<meta name="color-scheme" content="dark">` and `<meta name="theme-color" content="#4A357E">` |
| Script loading (Recommended) | `support.js` now loads with `defer` |
| Canonical URL (Recommended) | Added `<link rel="canonical" href="https://aster.id/">` |
| Open Graph / Twitter (Recommended) | Added `og:url`; made `og:image` absolute; added `twitter:image`; added `apple-touch-icon` |
| Structured data / JSON-LD (Recommended) | Added `Organization` JSON-LD block after `</x-dc>` |
| Image optimisation / CLS (Required) | Added intrinsic `width`/`height` + `decoding="async"` to all `<img>`; `loading="lazy"` on the decorative watermark |
| Descriptive link text / empty links | `SWAP ME` marker on the two placeholder footer links |
| Touch target size (Required) | Footer nav link padding `6px 2px → 11px 8px`; submit button `11px 26px → 13px 26px` |

### Already conformant

Reduced motion (CSS `@media` + JS `matchMedia` guard), visible `:focus-visible`
outline, accessible form (hidden `<label>`, `aria-invalid`, `aria-describedby`,
`role="status"` error), decorative images `alt="" aria-hidden`, semantic
`<main>` / `<footer>` / `<nav>`, `type="email"` + `autocomplete`, font `preconnect`
+ `display=swap`, `dvh` units, `rel="noopener"` on external links,
`text-wrap: pretty`, `<meta charset>` + `<meta viewport>` (zoom not disabled).

### Open — needs input or a deployed site

| Spec item | Action |
|-----------|--------|
| Privacy policy (Required) | Add a privacy policy page + link (email form). |
| Cookie consent (Required) | Confirm Durable injects no cookies/analytics; add consent if it does. |
| Graceful degradation / SSR (Recommended) | Verify Durable's **published** output is pre-rendered static HTML, not JS-only. Also re-check `support.js` preview still renders with `defer`. |
| Skip links (Required) | Add a skip link to `<main>`. |
| Colour contrast (Required) | Footer/caption text at `rgba(247,245,242,0.42–0.5)` is ~3:1 on `#4A357E`. Raise opacity to clear 4.5:1. |
| Descriptive link text (Required) | Real URLs for ATScience / Modal Foundation. |
| WCAG 2.2.2 pause control | The auto-cycling handle text pauses on hover only — add a keyboard-accessible pause (already fully stopped under `prefers-reduced-motion`). |
| HTTPS, HSTS, `X-Content-Type-Options`, clickjacking (`frame-ancestors` / `X-Frame-Options`), CSP, `Referrer-Policy`, `Permissions-Policy` (Required/Recommended) | Verify response headers on the deployed site. |
| Compression, `Cache-Control`, HTTP/2+3 (Required/Recommended) | Verify on deploy. |
| `robots.txt`, XML sitemap, custom 404, `/.well-known/security.txt` | Add to the deployed site. |
