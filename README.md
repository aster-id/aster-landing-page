# Aster ID Landing Page

A "coming soon" page for **Aster ID** — verified identity and sovereign data storage for scientists on the AT Protocol.

## Development

### Editing

- `pages/index.md` holds homepage copy and site configuration.
- The rest of `pages/` uses front matter for the page description and Markdown for the page content. The first `#` and everything up to the first `##` appear with a purple background. `##` sections and their contents appear on the white-paper background. Links, multiple paragraphs, lists, and subheadings are supported. Raw HTML is escaped. Remove `placeholder: true` from front matter when replacing draft copy.
- **Published Privacy and Terms pages additionally require `version` and `effective` front matter** (e.g. `version: 1.0` / `effective: 2030-01-31`, ISO date). The build emits this as a visible "Version … · Takes effect …" line with a `<time id="effect" datetime="…">` tag, which the portal parses to drive a legal-acceptance cycle that blocks the build without them.
- `src/styles.css` and `src/templates/` control the site styling and markup.
- `docs/uploads/` are hand-managed assets for the site build, including images, fonts, and licenses.

### Building

1. `npm run format` formats the build script, templates, and stylesheet. To check without changing files, use `npx prettier --check build.mjs 'src/templates/*.html' src/styles.css`
2. `npm run build` regenerates the site; output is written into `docs/` - do not edit those files directly

## Deploy checklist — before launch

- [ ] **Signup flow** — verify the signup flow purpose and redirect.
- [ ] **Audit against the [Website Specification](https://specification.website) checklist.**
  - [ ] `audit_url` needs a public URL, so re-run it against the deployed site to cover the server/header items.
