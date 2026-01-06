# Leomayn Website

Next.js website for Leomayn Solutions Ltd - AI operations and automation consultancy.

## Tech Stack

- **Framework:** Next.js 16.1.1 with App Router
- **Styling:** Tailwind CSS v4 with custom design system
- **Language:** TypeScript 5.9+
- **Fonts:** DM Serif Display, Manrope, JetBrains Mono (via next/font)
- **Email:** Resend API
- **CRM:** Attio API integration
- **Hosting:** Vercel (recommended)

## Features

- 13 fully responsive pages with custom design system
- Contact form with email notifications and CRM integration
- SEO optimized with metadata and sitemap
- Custom 404 page
- Static site generation for optimal performance
- Security headers configured
- Accessibility focused

## Project Structure

```
leomayn-website/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   ├── services/            # Services pages
│   │   ├── page.tsx         # Services overview
│   │   ├── diagnose/        # Diagnose phase
│   │   ├── define/          # Define phase
│   │   ├── deliver/         # Deliver phase
│   │   └── support/         # Support phase
│   ├── approach/            # Methodology page
│   ├── how-we-think/        # Principles page
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── privacy/             # Privacy policy
│   ├── not-found.tsx        # Custom 404 page
│   ├── api/
│   │   └── contact/         # Contact form API route
│   └── globals.css          # Global styles
├── components/
│   ├── NavBar.tsx           # Navigation with dropdown
│   ├── Footer.tsx           # Site footer
│   └── ServiceCard.tsx      # Reusable service card
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── robots.txt           # Search engine directives
│   └── images/              # Static images
├── docs-git-ignore/         # Private docs (not in Git)
├── .env.example             # Environment variables template
├── DEPLOYMENT.md            # Deployment guide
└── README.md                # This file
```

## Development

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Create environment file (optional for development)
cp .env.example .env.local

# Run development server
npm run dev
```

Open http://localhost:3000 to view the site.

### Building

```bash
# Production build
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## Environment Variables

See `.env.example` for all available environment variables.

### Required for Production

- `RESEND_API_KEY` - Email delivery (get from resend.com)

### Optional Integrations

- `ATTIO_API_KEY` - CRM integration (get from attio.com)
- `ATTIO_WEBSITE_LEADS_LIST_ID` - Attio list ID
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_CALENDLY_URL` - Calendly scheduling link

## Deployment

See `DEPLOYMENT.md` for comprehensive deployment instructions.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Design System

### Colors

- **Slate** (#1a3d56) - Primary text and dark elements
- **Rock** (#9ab8cb) - Muted accents
- **Coral** (#f7c9c0) - Primary CTA and highlights
- **Chalk** (#fffcfa) - Primary background
- **Pearl** (#fef8f1) - Secondary background
- **Canvas** (#fafaf8) - Tertiary background
- **Steel** (#9da7b0) - Borders and dividers

### Typography

- **Headings:** DM Serif Display
- **Body:** Manrope (400, 600, 700, 800)
- **Code:** JetBrains Mono

## Pages

1. **/** - Homepage with hero and 4-phase framework
2. **/services** - Services overview with 4 service cards
3. **/services/diagnose** - Diagnose phase details
4. **/services/define** - Define phase details
5. **/services/deliver** - Deliver phase details
6. **/services/support** - Support phase details
7. **/approach** - Methodology and philosophy
8. **/how-we-think** - 6 core principles
9. **/about** - Company and founder information
10. **/contact** - Contact form and Calendly integration
11. **/privacy** - Privacy policy
12. **/api/contact** - Contact form submission endpoint
13. Custom 404 page

## Documentation

- Implementation briefs in `docs-git-ignore/` (excluded from Git)
- Strategic brand documentation in separate leomayn-hq repository
- Deployment guide in `DEPLOYMENT.md`

## Repository

- **Website:** tomleomayn/leomayn-website
- **Strategy Docs:** tomleomayn/leomayn-hq
- **Status:** Production ready

## Support

For issues or questions, contact hello@leomayn.com
