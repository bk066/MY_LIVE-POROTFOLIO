# Codex Build Prompt — BJalan Media Portfolio

You are building the BJalan Media business portfolio in this repository.

READ `docs/BUILD_SPEC.md` FIRST and treat it as the authoritative implementation contract.

## Mission
Turn this repository into a production-ready, responsive, admin-managed BJalan Media portfolio. Do not build a static portfolio with business data hard-coded into components.

## Existing repository
This repo currently contains an AI Studio/Vite-style starter. Inspect the existing source before changing it. Preserve useful work only if it fits the build specification; otherwise refactor/rebuild cleanly.

## Required outcome
The owner must be able to log into `/admin` and manage normal business content without editing code or redeploying:
- About/site settings
- CTA/contact links
- services and pricing
- projects
- DEMO/PILOT/CLIENT/CASE STUDY labels
- audits and PDFs
- content samples
- strategy material
- testimonials
- media
- ordering/visibility
- draft/publish/archive

## Architecture target
GitHub + Cloudflare Pages/Workers + D1 + R2.
Use server-side APIs between browser and D1/R2. Never expose secrets in frontend code.
Use application-level secure admin authentication for MVP.
Do not use GitHub Pages for production. Do not use r2.dev as the production media endpoint.

## UX requirements
Public:
- premium but minimal personal-brand visual system
- black/white/neutral-gray base with restrained deep navy/electric-blue accents
- mobile-first
- clear hero positioning
- selected proof
- services
- process
- founder preview
- primary CTA

Admin:
- simple owner-friendly dashboard
- clear navigation
- forms with validation
- Save Draft / Preview / Publish
- archive confirmation
- media picker/upload
- clear success/error feedback
- responsive enough for mobile admin use

## Data rules
Business content must live in the database, not inside page components. Public pages consume published records. Use stable IDs/slugs and archive instead of destructive deletion where possible.

## Trust labels
DEMO = spec work
PILOT — FREE = real free pilot
PILOT — INTRODUCTORY PROJECT = real low-cost pilot
CLIENT PROJECT = normal paid client work
CASE STUDY = approved result-backed client work
Generate the visible label automatically from structured work_type.

## Security
Implement strong password hashing, secure HttpOnly SameSite sessions, HTTPS assumptions, CSRF protection for mutations, login rate limiting/progressive delay, server-side authorization and validation, safe media upload validation, and no client-side secrets.

## Media
Store media outside source code. Validate file type/size. Store metadata and alt text. Serve production media through the application/Worker backed by R2.

## Quality gate
Do not stop at a visually good homepage. The project is incomplete until the admin CMS workflow works end-to-end.

Mandatory end-to-end test:
1. Login to admin.
2. Change CTA.
3. Change a service price.
4. Add a project.
5. Mark it DEMO/PILOT/CLIENT/CASE STUDY.
6. Upload an image.
7. Save Draft and verify it is not public.
8. Publish and verify it appears publicly.
9. Archive it and verify it disappears publicly.
10. Repeat at least one update without any code change or deployment.

## Development rules
- Keep components reusable and content-agnostic.
- Keep database migrations version-controlled.
- Use environment variables/secrets only server-side.
- Do not invent client results or pretend demo work is client work.
- Seed only clearly labeled demo content unless real source content is available.
- If a requirement is ambiguous, prefer the behavior specified in `docs/BUILD_SPEC.md`.
- Do not add paid SaaS dependencies for MVP.
- Keep the system portable enough for future infrastructure migration.

## Deliverables
- Working public portfolio.
- Working `/admin`.
- Database schema + migrations.
- Media storage integration abstraction.
- Secure authentication.
- CRUD/publish/archive workflows.
- Responsive UI.
- Tests for critical admin/public workflows.
- README with local setup, environment variables, deployment, migrations, backup/export and admin usage.

Start by auditing the current repository, then implement in small verifiable steps. Do not claim completion until the acceptance tests pass.
