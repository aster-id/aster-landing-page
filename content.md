---
# ─────────────────────────────────────────────────────────────
# Aster ID landing page — editable copy & config.
# Edit values below, then run `npm run build` to regenerate
# `Aster ID.dc.html` from `template.html`.
# Lines starting with `#` are comments. Values are plain text
# (wrap in quotes if you need leading/trailing spaces, or if the
# value itself contains a colon — e.g. body: "...open web: a place...").
# ─────────────────────────────────────────────────────────────

# Brand / URLs
site_name: Aster ID
domain: https://aster.id/
contact_email: hello@aster.id
bluesky_url: https://bsky.app/profile/aster.id
parent_org: ATScience
founding_year: 2026

# <head> / social share
page_title: Aster ID — a home for researchers on the open web
meta_description: "Account and hosting for researchers on the open web — own your identity, website, data and connections. Not-for-profit, launching autumn 2026."
og_title: Aster ID
og_description: "An account and hosting for researchers on the open web — a place to build and own your identity, website, data and connections. Not-for-profit, built by researchers, for researchers."
jsonld_description: "Account and hosting for researchers on the open web: a place to build and own your identity, website, data and connections. Independent, not-for-profit, and built by researchers, for researchers."

# Hero
hero_treatment: balanced
handle_suffix: .aster.id
handles: "@your-name, @your-lab, @your-org"
eyebrow: Aster ID
headline: A home for researchers on the open web.
body: "An account and hosting for researchers on the open web: a place where you build and own your identity, website, data and connections. Not-for-profit, and built by researchers, for researchers."

# Signup form
signup_endpoint: https://example.org/aster-id/subscribe
email_label: Email address
email_placeholder: your@university.edu
submit_button: Notify me
error_invalid: That doesn't look like an email address.
error_empty: Please enter your email address.
error_network: Something went wrong — please try again.
success_message: Thank you — we'll write to you when Aster ID opens.
tagline: Launching autumn 2026.

# Footer (the two links appear inline in the fine-print sentence: "An {1} project, fiscally hosted by the {2}.")
footer_link_1_label: ATScience
footer_link_1_href: https://atproto.science/
footer_link_2_label: Modal Foundation
footer_link_2_href: https://www.modalfoundation.org/
---

# Field reference

Everything the build reads lives in the `---` block above. Notes:

| Field | Used for |
|-------|----------|
| `site_name` | JSON-LD `Organization.name` |
| `domain` | Canonical URL, `og:url`, `og:image` / `twitter:image` prefix, JSON-LD `url` / `logo`. **Must end with `/`.** |
| `contact_email` | Footer contact link (`mailto:`) + JSON-LD `email` |
| `bluesky_url` | Footer Bluesky icon link |
| `parent_org` / `founding_year` | JSON-LD `parentOrganization` / `foundingDate` |
| `page_title` | `<title>` |
| `meta_description` | `<meta name="description">` |
| `og_title` / `og_description` | Open Graph + Twitter card |
| `jsonld_description` | JSON-LD `description` |
| `hero_treatment` | Default layout: `balanced` \| `handle-first` \| `type-only` |
| `handle_suffix` | Text after the animated handle, e.g. `.aster.id` |
| `handles` | Comma-separated list that cycles in the hero (`your-name` → `your-name.aster.id`) |
| `eyebrow` | Small uppercase label — only shown in the `type-only` treatment |
| `headline` | The `<h1>` (same across all three treatments) |
| `body` | Supporting paragraph (same across all three treatments) |
| `signup_endpoint` | `POST` target for the email form (JSON body `{ email }`) |
| `email_label` | Visually-hidden `<label>` for the email input |
| `email_placeholder` / `submit_button` | Form input placeholder / button text |
| `error_invalid` / `error_empty` | Client-side validation messages |
| `error_network` | Shown if the signup POST fails (network/server error) — the form stays editable so the visitor can retry |
| `success_message` | Shown after a successful submit |
| `tagline` | Line under the form (`Launching autumn 2026.`) |
| `footer_link_1_*` / `footer_link_2_*` | Label + href for the two inline links in the footer's fine-print sentence |

Structural brand references (image `alt`, `aria-label`s like "Aster ID on Bluesky")
live in `template.html`, not here.
