# Aster ID — landing page

A single-screen "coming soon" landing page for **Aster ID** — verified identity and sovereign data storage for scientists on the AT Protocol.

## Files

| File | Purpose |
|------|---------|
| `content.md` | **Edit here.** All copy + config (front-matter block) with a field reference below it. |
| `template.html` | HTML structure. `%%PLACEHOLDER%%` markers are filled from `content.md`. `{{ }}` are runtime bindings. |
| `styles.css` | **Edit here.** All styling (design tokens, layout, components, animations). Inlined at build time. |
| `Aster ID.dc.html` | **Generated — do not edit.** The deployable single-file page. |
| `aster-lockup.png` | Wordmark lockup (1268×318). |
| `aster-mark.png` | Icon mark (193×193). Also used as favicon / apple-touch-icon. |
| `uploads/` | Durable asset staging. |

## Editing & building

1. Edit copy / config in **`content.md`** (or markup in `template.html`).
2. Run **`npm run build`** (or `node build.mjs`).
3. Commit the regenerated `Aster ID.dc.html` and deploy / re-import to Durable.

`build.mjs` replaces `%%KEY%%` tokens in `template.html` with the matching front-matter value from `content.md`. Optional filters: `%%KEY|attr%%` (HTML-escape, default), `%%KEY|json%%` (emits a JSON/JS string literal, used in the `<script>` and JSON-LD blocks), `%%KEY|raw%%`. The build fails if a token has no matching key. See the field reference at the bottom of `content.md`.

### Formatting

`template.html` and `styles.css` are formatted with [Prettier](https://prettier.io) (config in `.prettierrc`, 150-col width).

- **`npm run format`** — reformat both files in place
- **`npx prettier --check template.html styles.css`** — verify without writing

### Hero treatments

Three interchangeable hero layouts, switchable via the `heroTreatment` prop (`balanced` \| `handle-first` \| `type-only`; default set by `hero_treatment` in `content.md`). Props also cover `cycleHandles` (animated handle swap — list in `content.md` `handles`) and `showWatermark`.

## Deploy checklist — before launch

Set these in `content.md`, then rebuild:

- [ ] **Signup flow** — verify the Leaflet subscription and confirmation redirect on the deployed page.
- [ ] **Footer links** — verify ATScience and Modal Foundation destinations.
- [ ] **Production domain** — `domain` is `https://aster.id/` (must end with `/`). Feeds the canonical / Open Graph / JSON-LD URLs.
- [ ] **Privacy policy** — the email form needs a linked privacy policy (and cookie consent if Durable injects any cookies/analytics). Not yet wired into the template.

---

## Website Specification

Audit website against the [Website Specification](https://specification.website) checklist. `audit_url` needs a public URL, so re-run it against the deployed site to cover the server/header items below.

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
