# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase: static HTML built by a zero-dependency Node script (`build.mjs`) that merges `content.md` (copy + front-matter config) into `template.html` (`%%PLACEHOLDER%%` tokens), producing the deployable `Aster ID.dc.html`. The output is a Durable CMS component export — `<x-dc>` markup with `{{ }}` client-side bindings expanded at runtime by `support.js`. Any structural edit goes through `template.html`; any copy/config edit goes through `content.md`, followed by `npm run build`.

## Users

Primary users are individuals, labs, and organizations in the research/scientific community — treated as equally first-class account holders (an individual scientist, a lab, and a department/org can each claim a verified `*.aster.id` identity). Their situation: doing scientific research and needing an identity and infrastructure layer that isn't owned or controlled by any single platform or institution. Their job-to-be-done: get a verified researcher identity, store their data somewhere sovereign, and (looking ahead) use that identity as a single credential across a growing set of research tools and services.

## Product Purpose

Aster ID gives scientists verified identity and sovereign data storage built on the AT Protocol. It exists so researchers aren't dependent on infrastructure owned by a university, a publisher, or a platform — identity and data are portable and remain with the researcher if they change institutions or the underlying service changes. It's independent and not-for-profit (an ATScience project, fiscally hosted by the Modal Foundation), launching autumn 2026. Success for this landing page specifically is qualified pre-launch signups via the email capture form.

## Positioning

Aster ID is the verified-identity passport for research on the open web: sign in once with a portable, AT-Protocol-native identity and sovereign data store, and use that same credential to unlock a growing gateway of research apps and services — rather than a siloed login tied to one employer, journal, or platform. ORCID verifies identity but carries no data and unlocks no ecosystem; an institutional account is tied to one employer's tools; a generic AT Protocol/Bluesky handle carries no research-specific verification or ecosystem access. The "gateway to an ecosystem of research apps/services" is a forward-looking, directional part of the positioning — no specific third-party integrations are locked in yet, so copy should describe the *capability* (one verified identity, extensible across future research tools) without naming concrete apps/services that don't exist yet.

## Operating Context

- The live surface today is a single-screen "coming soon" page: hero (three interchangeable treatments — `balanced` / `handle-first` / `type-only`, switched via `hero_treatment`), an animated cycling handle demo (`your-name` / `your-lab` / `your-org` → `*.aster.id`), an email signup form, and a footer with parent-org / fiscal-host links and social contact.
- Content and structural editing are deliberately separated (`content.md` vs `template.html`) so non-developers can update copy without touching markup.
- Deploy target is Durable (the `.dc.html` export is re-imported there); the page is also concurrently audited against the Website Specification checklist.

## Capabilities and Constraints

- Built on the AT Protocol (same underlying network as Bluesky); handles take the form `*.aster.id`.
- Independent, not-for-profit; parent org ATScience; fiscally hosted by the Modal Foundation.
- Launching autumn 2026 (per current copy — treat as the confirmed target, not fixed beyond what `content.md` states).
- The signup endpoint (`signup_endpoint` in `content.md`) is currently a placeholder (`https://example.org/aster-id/subscribe`) and must be pointed at a real POST endpoint before launch; the client currently swallows fetch errors silently.
- No privacy policy is yet linked from the email form — open item, not yet wired into the template.
- Footer links (`footer_link_1_href` / `footer_link_2_href` in `content.md`) already point at real URLs (ATScience, Modal Foundation) per current `content.md`, but the README's deploy checklist still flags them as unconfirmed — verify before launch.
- Undecided / not yet locked in: the specific research apps/services the "gateway" positioning refers to. Do not fabricate named integrations.

## Brand Commitments

Name: **Aster ID**. Existing assets: `aster-lockup.png` (wordmark, 1268×318) and `aster-mark.png` (icon mark, 193×193, also used as favicon/apple-touch-icon). The current visual identity (deep purple/lavender palette, EB Garamond + Inter type pairing, the mark/lockup) is technically not locked, but it has already received good outside feedback — default to preserving and extending it. Only deviate from it for a specific, well-justified reason (a concrete UX/conversion/accessibility problem it causes), not as a default creative choice; don't treat "open" as an invitation to redesign.

## Evidence on Hand

No testimonials, case studies, press, or usage data exist yet — this is a pre-launch "coming soon" page. Do not fabricate any of these. Real assets on hand: the wordmark/mark image files listed above, and the confirmed copy in `content.md`.

## Product Principles

1. Identity and data belong to the researcher, not the platform — every product decision should preserve portability and sovereignty.
2. Serve individuals, labs, and organizations as equally first-class account holders — don't design as if individuals are the only real user.
3. The "gateway to a research ecosystem" is the long-term differentiator, but it's directional — communicate the capability, not invented specifics.
4. Independence and not-for-profit status are load-bearing trust signals for this audience — preserve visibility of ATScience / Modal Foundation affiliation.
5. This page's one job pre-launch is qualified email signups — every element should serve that conversion, not dilute it.

## Accessibility & Inclusion

No product-specific accessibility requirement beyond general web standards was established. The incumbent implementation already covers a range of WCAG-adjacent practices (reduced-motion support, focus-visible states, accessible form labeling/error states, semantic landmarks); see `README.md`'s Website Specification audit for the current open items (color contrast on footer text, keyboard-accessible pause control for the auto-cycling handle, skip link).
