# Aster ID — landing page and reading pages

A single-screen "coming soon" landing page for **Aster ID** — verified identity and sovereign data storage for scientists on the AT Protocol.

## Files

| File | Purpose |
|------|---------|
| `content.md` | **Edit here.** All copy + config (front-matter block) with a field reference below it. |
| `template.html` | HTML structure. `%%PLACEHOLDER%%` markers are filled from `content.md`. `{{ }}` are runtime bindings. |
| `template-page.html`, `template-section.html` | Shared structure for the four static reading pages and their repeated sections. |
| `pages/*.md` | **Edit here.** Text-only front matter for About, FAQ, Privacy, and Terms. No HTML required for copy changes. |
| `styles.css` | **Edit here.** All styling (design tokens, layout, components, animations). Inlined at build time. |
| `Aster ID.dc.html` | **Generated — do not edit.** The deployable single-file page. |
| `index.html` | **Generated — do not edit.** The same homepage for ordinary static hosting. |
| `about.html`, `faq.html`, `privacy.html`, `terms.html` | **Generated — do not edit.** Static pages with the same header/footer as the landing page. |
| `uploads/aster-lockup.svg` | Header wordmark lockup. |
| `aster-mark.png` | Icon mark (193×193). Also used as favicon / apple-touch-icon. |
| `uploads/` | Durable asset staging. |

## Editing & building

1. Edit landing copy / config in **`content.md`**, or reading-page copy in **`pages/*.md`**.
2. Run **`npm run build`** (or `node build.mjs`).
3. For static hosting, deploy `index.html`, the four generated pages, `support.js`, and `uploads/` together. `Aster ID.dc.html` remains the Durable-compatible artifact. Navigation uses relative links.

`build.mjs` replaces `%%KEY%%` tokens in `template.html` with the matching front-matter value from `content.md`. The reading pages use the same front-matter parser: each `pages/*.md` supplies `name`, `kind`, `description`, `lead`, and consecutive `section_1_heading` / `section_1_body` fields (with optional `section_1_body_2`). `template-page.html` and `template-section.html` turn these into HTML. Optional token filters: `%%KEY|attr%%` (HTML-escape, default), `%%KEY|json%%` (JSON/JS string literal), `%%KEY|raw%%` (trusted generated markup). The build fails if a token has no matching key.

### Formatting

The templates, build script, and stylesheet are formatted with [Prettier](https://prettier.io) (config in `.prettierrc`, 150-col width). The simple front-matter format in `pages/*.md` keeps each field on one line.

- **`npm run format`** — reformat source files in place
- **`npx prettier --check build.mjs template.html template-page.html template-section.html styles.css`** — verify without writing

### Hero treatments

Three interchangeable hero layouts, switchable via the `heroTreatment` prop (`balanced` \| `handle-first` \| `type-only`; default set by `hero_treatment` in `content.md`). The `cycleHandles` prop controls the animated handle swap (list in `content.md` `handles`).

### Typography

`styles.css` defines font family, size, weight, line-height, and letter-spacing primitives, then composes them into `--type-*` role tokens. The current page uses:

| Content | Role |
|---------|------|
| Hero headline (`balanced`, `type-only`) | `display` (fluid 40–96px) |
| Hero headline (`handle-first`) | `heading-1` (fluid 30–36px) |
| Header “Aster ID” | SVG lockup |
| Hero paragraph | `lead` |
| Hero and card eyebrows | `eyebrow` |
| About link, signup button | `label-default` |
| Email input, validation error | `body-small` |
| Launch note, footer sentence | `metadata` |
| Animated handle | `code` family/weight/tracking with `heading-1` sizing, constrained to fit the card |

The page defaults to `body-default`; `heading-2` (fluid 24–28px) is available for future section headings. Fluid role sizes top out at the selected desktop primitives; text color remains separate from typography roles.

## Deploy checklist — before launch

Set these in `content.md`, then rebuild:

- [ ] **Signup flow** — verify the Leaflet subscription and confirmation redirect on the deployed page.
- [ ] **Footer links** — verify ATScience and Modal Foundation destinations.
- [ ] **Production domain** — `domain` is `https://aster.id/` (must end with `/`). Feeds the canonical / Open Graph / JSON-LD URLs.
- [ ] **About, FAQ, Privacy, Terms** — replace the Redacted Script lorem ipsum with reviewed copy before publishing. Privacy and Terms are not usable policies yet.
- [ ] **Privacy policy** — the email form needs a linked privacy policy (and cookie consent if Durable injects any cookies/analytics).
- [ ] **ID card** — replace its redacted placeholder bars with approved explanatory copy.

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
