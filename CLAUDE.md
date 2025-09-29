# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Legacy Wealth Advisory is a professional website for a boutique financial advisory firm specializing in estate planning, succession planning, and wealth protection services for high-net-worth individuals and business owners in the Greater Toronto Area.

**Key Stakeholder:** Damian Alexander - Financial Planner & Chartered Life Underwriter

## Technology Stack

### Planned Architecture
- **Frontend Framework:** Next.js (for Vercel deployment)
- **Hosting:** Vercel
- **CMS:** AWS (DynamoDB, S3, Lambda, API Gateway)
- **Styling:** Tailwind CSS or styled-components
- **Language:** TypeScript
- **Domain:** legacywealthadvisory.ca

## Development Commands

Since this is a greenfield project, these commands will be relevant after initial setup:

```bash
# Initial project setup (run once)
npx create-next-app@latest . --typescript --tailwind --app --eslint

# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Run tests (after test setup)
npm run test
```

## Project Structure

```
/
├── app/                    # Next.js 13+ app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Service pages
│   ├── resources/         # Resources page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, inputs, etc.)
│   ├── sections/         # Page sections
│   ├── layout/           # Layout components (header, footer)
│   └── forms/            # Form components
├── lib/                   # Utility functions and configurations
│   ├── aws/              # AWS service integrations
│   └── utils/            # Helper functions
├── styles/               # Global styles
├── public/               # Static assets
└── content/              # Content/copy for the site
```

## Key Implementation Requirements

### Core Features (Must Have for Launch)
1. **Homepage with all sections** as defined in prd.md
2. **Responsive design** - Mobile-first approach
3. **Contact form** with validation and spam protection
4. **Calendar booking integration** (Calendly or similar)
5. **Lead capture forms** for resource downloads
6. **SSL security** and PIPEDA compliance
7. **Basic SEO** implementation

### Design Guidelines
- **Primary Colors:** Deep blue (#002B5C or similar) for trust, gold accents (#D4AF37 or similar) for wealth
- **Typography:** Professional serif for headlines, clean sans-serif for body text
- **Responsive Breakpoints:** Mobile (320-767px), Tablet (768-1023px), Desktop (1024px+)

### Performance Requirements
- Page load time < 3 seconds
- Lighthouse score > 90 for all metrics
- Core Web Vitals optimized (LCP, FID, CLS)

## AWS CMS Architecture

The CMS will use the following AWS services:
- **DynamoDB Tables:**
  - Pages (page content management)
  - Resources (downloadable PDFs, guides)
  - Testimonials (client testimonials)
  - Contacts (form submissions)
- **S3:** Media storage for images and documents
- **CloudFront:** CDN for asset delivery
- **Lambda Functions:** API endpoints for CRUD operations
- **API Gateway:** RESTful API interface

## Critical Implementation Notes

1. **Security:** Never commit API keys, credentials, or sensitive information. Use environment variables.

2. **Compliance:** All financial service disclaimers must be reviewed before deployment. Include proper PIPEDA compliance notices.

3. **Form Handling:** All forms must include:
   - Proper validation
   - Spam protection (reCAPTCHA)
   - Success/error states
   - Data storage in AWS

4. **SEO Essentials:**
   - Implement proper meta tags for all pages
   - Create XML sitemap
   - Add schema markup for local business
   - Optimize images with proper alt text

5. **Accessibility:** Ensure WCAG 2.1 AA compliance throughout.

## Third-Party Integrations

- **Calendar Booking:** Calendly or Cal.com
- **Email Marketing:** Mailchimp, ActiveCampaign, or HubSpot
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Forms:** React Hook Form for validation
- **Animations:** Framer Motion for subtle animations

## Testing Approach

```bash
# Unit tests (Jest + React Testing Library)
npm run test

# E2E tests (Playwright or Cypress)
npm run test:e2e

# Accessibility testing
npm run test:a11y
```

## Deployment Process

1. Push to main branch triggers automatic Vercel deployment
2. Preview deployments for all pull requests
3. Environment variables managed in Vercel dashboard
4. Domain configuration through Vercel

## Contact Information

- **Client:** Damian Alexander
- **Cell:** 416-471-3766
- **Office:** 905-840-2222
- **Email:** damian@legacywealthadvisory.ca
- **Address:** 14-30 Eglinton Ave W, Mississauga, ON L5R 0C1