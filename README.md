# Aster ID Landing Page

A "coming soon" page for **Aster ID** — verified identity and sovereign data storage for scientists on the AT Protocol.

## Development

### Editing
- `pages/index.md` holds homepage copy and site configuration. 
- The rest of `pages/` uses front matter for the page description and Markdown for the page content. The first `#` and everything up to the first `##` appear with a purple background. `##` sections and their contents appear on the white-paper background. Links, multiple paragraphs, lists, and subheadings are supported. Raw HTML is escaped. Remove `placeholder: true` from front matter when replacing draft copy.
- `src/styles.css` and `src/templates/` control the site styling and markup.
- `docs/uploads/` are hand-managed assets for the site build, including images, fonts, and licenses.

### Building
1. `npm run format` formats the build script, templates, and stylesheet. To check without changing files, use `npx prettier --check build.mjs 'src/tempaltes/*.html' src/styles.css`
2. `npm run build` regenerates the site; output is written into `docs/` - do not edit those files directly

## Deploy checklist — before launch

- [ ] **Signup flow** — verify the signup flow purpose and redirect.
- [ ] **About, FAQ, Privacy, Terms** — replace the Redacted Script lorem ipsum with reviewed copy before publishing. Privacy and Terms are not usable policies yet.
- [ ] **Audit against the [Website Specification](https://specification.website) checklist.** 
  - [ ] `audit_url` needs a public URL, so re-run it against the deployed site to cover the server/header items.
