# BJalan Media Portfolio — Final Build Specification

This file is the authoritative implementation brief for the BJalan Media portfolio rebuild.

## Source documents
- Updated PRD v1.1: business goals, content model, proof labels, visual direction, admin-first requirement.
- TRD v1.0: technical architecture, security, data model, API, media handling, deployment.
- Final Build Specification v1.0: stress-tested decisions and launch acceptance criteria.

## Non-negotiable product rule
Normal business/content changes MUST NOT require source-code edits, Git commits, or redeployment.

Admin must be able to change:
- business name, tagline, bio, logo, contact links
- CTA text/links
- services, deliverables, prices
- projects and case studies
- DEMO/PILOT/CLIENT/CASE STUDY status
- audits and PDFs
- content samples
- strategy/calendar material
- testimonials
- images and media
- visibility, ordering, draft/publish/archive state

Code changes are reserved for new features, security fixes, schema/infrastructure changes, or major design-system changes.

## Business funnel
Content/outreach -> free mini-audit -> Growth Snapshot (₹999) -> retainer.
The portfolio is the credibility/conversion layer between outreach and action.

## Proof labels
- DEMO: spec/practice work; never imply a client relationship.
- PILOT — FREE: real business work delivered free.
- PILOT — INTRODUCTORY PROJECT: real business work delivered at introductory cost.
- CLIENT PROJECT: normal paid client work.
- CASE STUDY: approved client project with documented outcome/results.

Labels must be generated from structured data, not manually hard-coded into project pages.

## Public information architecture
- /
- /about
- /audits
- /content
- /strategy
- /projects
- /projects/:slug
- /services
- /contact

Homepage must communicate positioning, selected proof, services/process, founder preview and one primary CTA quickly.

## Admin information architecture
- /admin
- /admin/settings
- /admin/projects
- /admin/audits
- /admin/services
- /admin/content
- /admin/strategy
- /admin/testimonials
- /admin/media

Admin workflow: Login -> Edit/Create -> Save Draft -> Preview -> Publish.
Public site reads published records only.
Archive is preferred to destructive deletion.

## Target architecture
- GitHub: source control and deployment trigger.
- Cloudflare Pages/Workers: application and server-side API.
- Cloudflare D1: structured content database.
- Cloudflare R2: media storage.
- Application-level secure admin authentication for MVP.

Do NOT use GitHub Pages as production hosting for the commercial portfolio.
Do NOT use R2 r2.dev as the production media endpoint; serve media through the application/Worker.
Do NOT make Cloudflare Access a required MVP dependency because the zero-cost target should not depend on buying a domain.

## Data entities
site_settings, projects, audits, services, content_samples, strategies, testimonials, media, admin_users, activity_logs.

Every editable entity should support timestamps and status where relevant. Projects need slug, work_type, media references, objective/process/outcome, visibility and publication state.

## Security
- Server-side authorization on every admin API route.
- Strong salted password hash; never plaintext.
- Secure HttpOnly SameSite session cookies.
- HTTPS.
- CSRF protection for mutations.
- Login rate limiting/progressive delay.
- Server-side input validation.
- Upload MIME/extension/size validation; reject executable/script uploads.
- No database/storage secrets in frontend bundles.
- Public APIs expose published data only.
- Log important publish/archive/delete operations.

## Media
Media is stored outside source code. Initial allowed types: WebP, JPEG, PNG, controlled/sanitized SVG if needed, PDF. Recommended MVP limits: 10MB images and 25MB PDFs. Store alt text and metadata. Replace media by updating references rather than blindly overwriting objects.

## API behavior
Public read APIs should expose published content. Admin APIs require authenticated sessions and support CRUD plus publish/archive/media operations.

## Performance
Mobile-first, optimized images, lazy loading, stable aspect ratios, caching where safe, no unnecessary hero video, usable on slow mobile connections.

## Launch acceptance
Before declaring live, verify:
1. Admin login/logout works.
2. Owner can change CTA without code.
3. Owner can change a service price without code.
4. Owner can add/edit/archive a project without code.
5. Owner can upload/replace media without code.
6. Owner can publish/unpublish without code.
7. Drafts are invisible publicly.
8. Published content appears without redeployment.
9. Automatic trust labels work.
10. Mobile + desktop public/admin QA passes.
11. No secrets leak to browser.
12. Backup/export procedure exists and is tested.
13. At least one real pilot can be added without application code changes.

## Build order
1. Repository/environment setup.
2. D1 schema + migrations.
3. R2 media abstraction.
4. Server API.
5. Admin authentication/session.
6. Admin shell.
7. Settings CRUD.
8. Projects CRUD + work labels.
9. Services CRUD.
10. Audits/content/strategy/testimonials CRUD.
11. Media library.
12. Public pages from database.
13. Draft/publish/archive.
14. Caching/media delivery.
15. Security testing.
16. Responsive QA.
17. Seed P0 content.
18. Deploy.
19. Perform production admin-update tests.
20. Declare MVP complete only after successful tests.
