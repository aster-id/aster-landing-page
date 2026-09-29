# Aster ID Landing Page

A "coming soon" page for **Aster ID** — verified identity and sovereign data storage for scientists on the AT Protocol.

## Development

### Editing
- `pages/` contains markdown files for quick editing of website content. `index.md` is for the homepage and site configuration.
  Each field must stay on one line — for a section with multiple paragraphs, add `section_N_body_2`, `section_N_body_3`, etc. (numbered consecutively); each becomes its own `<p>`.
- `src/styles.css` and `src/templates/` control the site styling and markup.
- `docs/uploads/` are hand-managed assets for the site build, including images, fonts, and licenses.

### Building
1. `npm run format` formats the build script, templates, and stylesheet. To check without changing files, use `npx prettier --check build.mjs 'src/tempaltes/*.html' src/styles.css`
2. `npm run build` regenerates the site; output is written into `docs/` - do not edit those files directly

## Deploy checklist — before launch

- [ ] **Signup flow** — verify the signup flow purpose and redirect.
- [ ] **About, FAQ, Privacy, Terms** — replace the lorem ipsum placeholder copy with reviewed content before publishing. Privacy and Terms are not usable policies yet.
- [ ] **Audit against the [Website Specification](https://specification.website) checklist.** 
  - [ ] `audit_url` needs a public URL, so re-run it against the deployed site to cover the server/header items.
