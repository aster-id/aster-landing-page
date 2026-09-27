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
blog_url: https://aster.leaflet.pub
roomy_url: https://roomy.space/did:plc:b6csk4ofw7vpwrgz2aci57ey
parent_org: ATScience
founding_year: 2026

# <head> / social share
page_title: Aster ID — a home for researchers on the open web
meta_description: "Account and hosting for researchers on the open web — own your identity, website, data and connections. Not-for-profit, launching autumn 2026."
og_title: Aster ID
og_description: "An account and hosting for researchers on the open web — a place to build and own your identity, website, data and connections. Not-for-profit, built by researchers, for researchers."
jsonld_description: "Account and hosting for researchers on the open web: a place to build and own your identity, website, data and connections. Independent, not-for-profit, and built by researchers, for researchers."

# About link (top-right) — points at the shared Notion hub for now (it lists
# "About Aster" and "FAQ" as sub-pages); swap for a real /about page later.
about_url: https://m4co.notion.site/Aster-3db96ae906558004956efd17bfdf97ae
about_label: About

# Hero
hero_treatment: balanced
handle_suffix: .aster.id
handles: "@your-name, @your-lab, @your-org"
eyebrow: Aster ID
headline_lead: A home for researchers
headline_tail: on the open web.
body: "An account and hosting for researchers on the open web: a place where you build and own your identity, website, data and connections. Not-for-profit, and built by researchers, for researchers."

# Signup form — subscribes via Leaflet (https://leaflet.pub), a real GET
# submission (not JS/fetch), so leaflet_subscribe_action must stay exactly
# as issued for this publication. Leaflet emails a confirmation link and
# sends the subscriber to leaflet_redirect_url.
leaflet_subscribe_url: https://leaflet.pub/api/auth/email-login
leaflet_subscribe_action: "%7B%22action%22%3A%22subscribe%22%2C%22publication%22%3A%22at%3A%2F%2Fdid%3Aplc%3Aifn645rwvsuolxg7o3w7ouo4%2Fsite.standard.publication%2F3mvimt7nmrs2m%22%7D"
leaflet_redirect_url: https://aster.leaflet.pub
email_label: Email address
email_placeholder: you@example.com
submit_button: Sign up for updates
error_invalid: That doesn't look like an email address.
error_empty: Please enter your email address.
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
| `blog_url` | Footer blog icon link (Aster ID's Leaflet publication) |
| `roomy_url` | Footer Roomy chat icon link |
| `about_url` | Destination for the top-right "About" link (currently the shared Notion hub — swap for a real page later) |
| `about_label` | Top-right link text |
| `parent_org` / `founding_year` | JSON-LD `parentOrganization` / `foundingDate` |
| `page_title` | `<title>` |
| `meta_description` | `<meta name="description">` |
| `og_title` / `og_description` | Open Graph + Twitter card |
| `jsonld_description` | JSON-LD `description` |
| `hero_treatment` | Default layout: `balanced` \| `handle-first` \| `type-only` |
| `handle_suffix` | Text after the animated handle, e.g. `.aster.id` |
| `handles` | Comma-separated list that cycles in the hero (`your-name` → `your-name.aster.id`) |
| `eyebrow` | Small uppercase label — only shown in the `type-only` treatment |
| `headline_lead` / `headline_tail` | The `<h1>` in all three treatments; the tail stays together when it fits. |
| `body` | Supporting paragraph (same across all three treatments) |
| `leaflet_subscribe_url` | The signup `<form>`'s `action` (Leaflet's email-login endpoint) |
| `leaflet_subscribe_action` | Hidden `action` field — encodes the Leaflet publication being subscribed to. Opaque; don't hand-edit, only replace wholesale if Leaflet reissues it |
| `leaflet_redirect_url` | Hidden `redirect` field — where Leaflet sends the subscriber after confirming |
| `email_label` | Visually-hidden `<label>` for the email input |
| `email_placeholder` / `submit_button` | Form input placeholder / button text |
| `error_invalid` / `error_empty` | Client-side validation messages (only shown when the browser blocks submission, e.g. bad email format) |
| `tagline` | Line under the form (`Launching autumn 2026.`) |
| `footer_link_1_*` / `footer_link_2_*` | Label + href for the two inline links in the footer's fine-print sentence |

Structural brand references (image `alt`, `aria-label`s like "Aster ID on Bluesky")
live in `template.html`, not here.
