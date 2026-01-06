# Leomayn Website Deployment Guide

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier works)
- Domain access to leomayn.com
- API keys for integrations

## Environment Variables

Before deploying, you need to set up these environment variables in Vercel:

### Required for Contact Form
```
RESEND_API_KEY=re_your_actual_api_key
```
Get this from: https://resend.com/api-keys

### Optional: Attio CRM Integration
```
ATTIO_API_KEY=your_attio_api_key
ATTIO_WEBSITE_LEADS_LIST_ID=your_list_id
```
Get these from: https://attio.com/settings/api

### Optional: Analytics
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
Get this from: Google Analytics

### Optional: Calendly
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/leomayn/discovery
```

## Deployment Steps

### 1. Push to GitHub

Ensure all changes are committed and pushed:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Add environment variables (see above)
5. Click "Deploy"

### 3. Configure Domain

1. In Vercel dashboard, go to Project Settings > Domains
2. Add custom domain: `leomayn.com` and `www.leomayn.com`
3. Update DNS records with your domain provider:
   - A record: `@` → Vercel IP (provided by Vercel)
   - CNAME record: `www` → `cname.vercel-dns.com`
4. Wait for DNS propagation (usually 5-30 minutes)

### 4. Post-Deployment Verification

Test these items after deployment:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services pages display properly
- [ ] Contact form submits successfully
- [ ] Email notifications arrive (if Resend configured)
- [ ] CRM leads create (if Attio configured)
- [ ] 404 page displays for invalid routes
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (https://)
- [ ] Analytics tracking (if configured)

### 5. Test Contact Form in Production

```bash
curl -X POST https://leomayn.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

Expected response: `{"success":true}`

## Monitoring

### Vercel Analytics
- Automatically enabled for all deployments
- View at: https://vercel.com/[your-username]/leomayn-website/analytics

### Build Logs
- Available in Vercel dashboard under Deployments
- Check for any build warnings or errors

### Error Monitoring
- Check Vercel Functions logs for API route errors
- Monitor contact form submissions

## Updating the Site

### Making Changes
```bash
# Make your changes locally
npm run dev

# Test the build
npm run build

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically deploy when you push to the main branch.

### Rollback if Needed
1. Go to Vercel dashboard > Deployments
2. Find the previous working deployment
3. Click "..." menu > "Promote to Production"

## Performance Optimization

The site is already optimized with:
- Static page generation (SSG) for all content pages
- Optimized images with Next.js Image component ready
- Font optimization with next/font
- CSS bundling and minification
- Automatic code splitting

## Security

Security headers are configured in next.config.js:
- HSTS enabled
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18.17 or later)
- Verify all dependencies are installed
- Check build logs in Vercel dashboard

### Contact Form Not Working
- Verify RESEND_API_KEY is set in Vercel environment variables
- Check Vercel Functions logs for errors
- Verify email domain is verified in Resend

### CSS Not Loading
- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify build completed successfully

### 404 Errors
- Check that all pages are in the app/ directory
- Verify routing structure matches Next.js App Router conventions
- Check deployment logs for missing files

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/tomleomayn/leomayn-website/issues

## Notes

- First deployment may take 2-3 minutes
- Subsequent deployments are faster (usually 30-60 seconds)
- Vercel provides automatic HTTPS certificates
- Preview deployments are created for all branches
- Production deployment only happens on main branch
