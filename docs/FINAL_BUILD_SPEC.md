# BJalan Media Portfolio — Final Build Context

## Source of truth
This repository is being upgraded according to three project documents prepared in ChatGPT:

1. BJalan Media Portfolio PRD v1.1 — updated product requirements.
2. BJalan Media Portfolio TRD v1.0 — technical requirements.
3. BJalan Media Portfolio Final Build Specification v1.0 — final pre-coding decision document.

The non-negotiable product requirement is: after launch, normal business/content changes must be possible from `/admin` without editing source code, committing to GitHub, or redeploying.

## Business model
BJalan Media funnel: free content -> free mini-audit -> paid Growth Snapshot (₹999) -> retainer.
The portfolio is the credibility/conversion layer between outreach and the next action.

## Public site
Required sections/routes:
- Home
- About
- Instagram Audits
- Content
- Content Strategy
- Projects / Case Studies
- Services
- Contact

Home must act as the front door and communicate positioning, selected proof, services, process and one clear primary CTA.

## Admin CMS
Required private `/admin` area with authenticated owner access. The owner must be able to:
- edit About/profile/settings
- change tagline and CTAs
- create/edit/archive/publish projects
- mark work as DEMO, PILOT — FREE, PILOT — INTRODUCTORY PROJECT, CLIENT PROJECT, or CASE STUDY
- create/edit audit samples
- manage content samples
- manage strategy/calendar content
- manage services and prices
- manage testimonials
- upload/replace images and PDFs
- draft, preview, publish and archive content
- manage navigation visibility/order where implemented

Business content must be data-driven; do not hard-code portfolio copy into React components.

## Trust labels
- DEMO = spec/practice work only.
- PILOT — FREE = real business work delivered free.
- PILOT — INTRODUCTORY PROJECT = real business work at introductory/low cost.
- CLIENT PROJECT = normal paid client work.
- CASE STUDY = approved client project with documented outcome/results.
The frontend should render labels automatically from a controlled work_type field.

## Architecture target
- GitHub: source control and deployment trigger.
- Cloudflare Pages/Workers: application/public frontend + server-side API.
- Cloudflare D1: structured content database.
- Cloudflare R2: media storage.
- Application-level secure admin authentication for MVP.
- Do not use GitHub Pages as the production host.
- Do not use the R2 `r2.dev` endpoint as the production media URL; serve media through the application/Worker.
- Do not make Cloudflare Access a dependency for the zero-cost MVP.

## Security requirements
- Secure server-side admin authorization on every protected route.
- Passwords stored as strong salted hashes; never plaintext.
- Secure HttpOnly SameSite session cookies over HTTPS.
- CSRF protection for state-changing requests.
- Login rate limiting/progressive delay.
- Server-side input validation.
- Upload MIME/extension/size validation; reject executable uploads.
- Never expose database/storage secrets to the browser.
- Public APIs return published records only.

## Content states
DRAFT -> previewable only to admin -> PUBLISHED -> public.
ARCHIVED removes content from public navigation but preserves it for recovery/history.
Prefer archive over destructive delete.

## Media
Media lives outside source code. Store metadata in D1 and files in R2. Use generated stable object keys. Support image/PDF uploads. Store alt text. Recommended MVP limits: images 10MB/file, PDFs 25MB/file.

## Required public API behavior
Public API must provide published homepage, projects, project detail, services, audits, content samples, strategy and testimonials.
Admin API must support authentication, CRUD, media upload, publish and archive operations.

## Required acceptance test
The MVP is not complete until the owner can perform at least three real production admin changes (for example: change CTA, change a service price, add a project) and verify each change appears publicly without a code deployment.

## Existing repository note
The current repository is a Vite/React application and already contains packages including React, React Router, Three.js/React Three Fiber, GSAP, Tailwind and Lucide. Do not preserve unrelated demo/app behavior merely because it exists; refactor it toward the BJalan Media portfolio while avoiding unnecessary dependency churn.

## Build philosophy
Build the smallest production-quality system that satisfies the final specification. Do not add fake case studies, unnecessary animations, payment processing, CRM, analytics SaaS, multilingual support, team roles or other deferred features to the MVP.
