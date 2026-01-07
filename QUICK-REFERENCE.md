# Leomayn Website - Quick Reference Guide

## Site URLs

- **Production:** https://leomayn.com (propagating)
- **Vercel URL:** https://leomayn-website.vercel.app
- **Dashboard:** https://vercel.com/leomayn-projects/leomayn-website

## Making Updates

### Quick Deploy (Recommended)
```bash
# Make your changes
# Test locally
npm run dev

# Commit and push - Vercel auto-deploys
git add .
git commit -m "Your changes"
git push origin main
```

### Manual Deploy via CLI
```bash
# Deploy to production
vercel --prod

# Deploy preview (test before production)
vercel
```

## Common Tasks

### Update Content
```bash
# Edit any page in app/ directory
# e.g., app/about/page.tsx

# Test locally
npm run dev

# Deploy
git add .
git commit -m "Update about page"
git push origin main
```

### Update Styles
```bash
# Edit app/globals.css or component styles
# Changes in tailwind.config.js require rebuild

# Test
npm run dev

# Deploy
git push origin main
```

### Add New Page
```bash
# Create new file in app/
# e.g., app/new-page/page.tsx

# Add metadata export
export const metadata = {
  title: 'Page Title - Leomayn',
  description: 'Page description',
}

# Add to sitemap: public/sitemap.xml
# Test, commit, push
```

## Environment Variables

### View Current Variables
```bash
# In Vercel dashboard:
# Settings > Environment Variables

# Or via CLI:
vercel env ls
```

### Add New Variable
```bash
# Via CLI:
vercel env add VARIABLE_NAME

# Or in dashboard:
# Settings > Environment Variables > Add
```

### Update Existing Variable
```bash
# Remove old
vercel env rm VARIABLE_NAME production

# Add new
vercel env add VARIABLE_NAME production
```

## Testing

### Local Testing
```bash
npm run dev
# Visit http://localhost:3000
```

### Production Build Test
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Test Contact Form
```bash
curl -X POST https://leomayn.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'

# Should return: {"success":true}
```

## Troubleshooting

### Build Failed
```bash
# Check logs in Vercel dashboard
# Or run local build:
npm run build

# Check TypeScript errors:
npx tsc --noEmit
```

### Changes Not Showing
- Clear browser cache (Cmd+Shift+R)
- Check deployment succeeded in Vercel
- Wait 1-2 minutes for CDN cache

### Contact Form Not Working
- Check RESEND_API_KEY is set in Vercel
- Check Vercel Functions logs for errors
- Verify domain is verified in Resend dashboard

### CSS Not Loading
- Check Tailwind config is correct
- Run `npm run build` locally to test
- Clear browser cache

## Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm start               # Start production server
npx tsc --noEmit       # Type check

# Git
git status              # Check changes
git add .               # Stage all changes
git commit -m "msg"     # Commit
git push origin main    # Push (auto-deploys)

# Vercel
vercel login            # Login to Vercel
vercel --prod           # Deploy to production
vercel                  # Deploy preview
vercel ls               # List deployments
vercel logs             # View logs
vercel env ls           # List env variables
```

## Project Structure

```
app/
├── layout.tsx          # Root layout (fonts, metadata)
├── page.tsx            # Homepage
├── globals.css         # Global styles
├── services/           # Services pages
├── about/              # About page
├── contact/            # Contact page + form
├── api/contact/        # Contact form API
└── ...

components/
├── NavBar.tsx          # Navigation
├── Footer.tsx          # Footer
└── ServiceCard.tsx     # Service card component

public/
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine config
```

## Key Files

- **package.json** - Dependencies and scripts
- **tailwind.config.js** - Design system colors and fonts
- **next.config.js** - Next.js and security config
- **tsconfig.json** - TypeScript configuration
- **.env.example** - Environment variables template
- **DEPLOYMENT.md** - Full deployment guide

## Support

- **Email:** hello@leomayn.com
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs

## Rollback

If deployment breaks:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find last working deployment
4. Click "..." menu > "Promote to Production"

## Analytics

View in Vercel dashboard:
- Page views
- Performance metrics
- Geographic data
- Device breakdown

## DNS & Domain

Current DNS records:
- A: @ → 76.76.21.21
- CNAME: www → cname.vercel-dns.com

Update in your DNS provider if needed.
