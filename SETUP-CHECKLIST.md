# Leomayn Website - Complete Setup Checklist

## ✅ COMPLETED

### Core Development
- [x] Next.js 16.1.1 project initialized with TypeScript
- [x] Tailwind CSS v4 configured with custom design system
- [x] 13 pages built (homepage, services, about, contact, etc.)
- [x] Responsive navigation with dropdown
- [x] Footer with site links
- [x] Custom 404 page

### Functionality
- [x] Contact form with client-side validation
- [x] Contact API route (/api/contact)
- [x] Resend email integration configured
- [x] Form state management (success/error states)
- [x] Environment variables structure (.env.example)

### SEO & Performance
- [x] Metadata configured on all pages
- [x] sitemap.xml created (11 pages)
- [x] robots.txt configured
- [x] Static site generation (SSG) enabled
- [x] Security headers configured
- [x] Font optimization with next/font

### Deployment
- [x] GitHub repository set up
- [x] Code committed and pushed
- [x] Vercel project created
- [x] Production deployment successful
- [x] Vercel CLI installed and linked
- [x] Custom domain added (leomayn.com, www.leomayn.com)
- [x] DNS records updated (A and CNAME)
- [x] RESEND_API_KEY environment variable set

### Documentation
- [x] README.md with full project details
- [x] DEPLOYMENT.md guide
- [x] QUICK-REFERENCE.md for common tasks
- [x] .env.example for environment variables

---

## ⏳ IN PROGRESS

### DNS Propagation
- [ ] **Wait for DNS to propagate** (Current status: Still showing old Squarespace)
  - Check: `dig leomayn.com A +short` should show `76.76.21.21`
  - Current: Shows `216.198.79.1`
  - ETA: 15-30 minutes from DNS update (can take up to 48 hours)
  - **Action:** Check every 10-15 minutes or visit https://leomayn.com

---

## 🔴 IMMEDIATE NEXT STEPS (Do Now)

### 1. Test Live Site After DNS Propagates
Once https://leomayn.com loads your new site:

- [ ] **Browse all pages:**
  - [ ] Homepage (/)
  - [ ] Services (/services)
  - [ ] Each service page (diagnose, define, deliver, support)
  - [ ] Approach (/approach)
  - [ ] How We Think (/how-we-think)
  - [ ] About (/about)
  - [ ] Contact (/contact)
  - [ ] Privacy (/privacy)
  - [ ] Test 404 page (visit /nonexistent)

- [ ] **Test contact form:**
  - [ ] Fill out form with real info
  - [ ] Submit successfully
  - [ ] Check your email (hello@leomayn.com) for notification
  - [ ] Verify email formatting looks good
  - [ ] Test error states (try submitting empty form)

- [ ] **Test on multiple devices:**
  - [ ] Desktop browser (Chrome, Safari, Firefox)
  - [ ] Mobile phone (iOS/Android)
  - [ ] Tablet
  - [ ] Check responsive design works

- [ ] **Test navigation:**
  - [ ] All nav links work
  - [ ] Services dropdown functions
  - [ ] Footer links work
  - [ ] Mobile menu toggles correctly

### 2. Verify Resend Integration
- [ ] **Check Resend dashboard:** https://resend.com/emails
  - [ ] Verify test email arrived
  - [ ] Check delivery status
  - [ ] Verify sender domain (hello@leomayn.com) is working
  - [ ] Review email content/formatting

### 3. Update Calendly Link
Currently hardcoded in contact page - verify or update:
- [ ] Check if `https://calendly.com/leomayn/discovery` is correct
- [ ] If different, update in: `app/contact/page.tsx` line 100
- [ ] Test Calendly link works when clicked

---

## 🟡 IMPORTANT (Do Soon)

### Content & Images

#### Add Logo/Branding
- [ ] **Create or add logo image**
  - Location: `public/images/logo.png` (or .svg)
  - Update NavBar to use logo instead of text
  - Recommended size: 150x50px (2x for retina)

#### Add Open Graph Images (Social Sharing)
When someone shares your site on social media, these images appear:

- [ ] **Create OG image** (1200x630px recommended)
  - Save to: `public/og-image.png`
  - Add to `app/layout.tsx`:
    ```typescript
    openGraph: {
      images: ['/og-image.png'],
      // ... existing config
    }
    twitter: {
      images: ['/og-image.png'],
      // ... existing config
    }
    ```

#### Add Favicon
- [ ] **Create favicon** (32x32px icon)
  - Save to: `public/favicon.ico`
  - Or use `app/icon.png` (Next.js auto-converts)
  - Recommended: Create full set (16x16, 32x32, 180x180 for Apple)

#### Add Other Images (Optional)
- [ ] Hero background images
- [ ] Service page illustrations
- [ ] Team photos for About page
- [ ] Case study images (if adding testimonials)

### Optional Integrations

#### Attio CRM (Optional)
If you want contact form submissions to create CRM leads:

- [ ] **Get Attio API credentials**
  - Sign up at https://attio.com if needed
  - Go to Settings > API
  - Create API key
  - Create or find your "Website Leads" list ID

- [ ] **Add to Vercel environment variables:**
  ```
  ATTIO_API_KEY=your_key_here
  ATTIO_WEBSITE_LEADS_LIST_ID=your_list_id
  ```

- [ ] **Test:** Submit contact form and check Attio for new lead

#### Google Analytics (Optional)
Track visitor data:

- [ ] **Set up GA4 property:** https://analytics.google.com
- [ ] **Get Measurement ID** (starts with G-XXXXXXXXXX)
- [ ] **Add to environment variables:** `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- [ ] **Add Google Analytics script to layout:**
  - Update `app/layout.tsx` to include GA script
  - Or use `@next/third-parties/google` package

#### Email Verification in Resend
- [ ] **Verify sending domain:** https://resend.com/domains
  - Add leomayn.com as custom domain
  - Add DNS records for SPF/DKIM
  - Improves email deliverability
  - Without this, emails come from "via resend.com"

### Security & Monitoring

#### Set up Error Monitoring (Recommended)
- [ ] **Option 1: Use Vercel Error Tracking** (built-in)
  - Already active, check: Project > Logs

- [ ] **Option 2: Add Sentry** (more detailed)
  - Sign up at https://sentry.io
  - Install: `npm install @sentry/nextjs`
  - Configure error tracking

#### Set up Uptime Monitoring (Recommended)
Free options:
- [ ] **UptimeRobot** (https://uptimerobot.com)
- [ ] **Pingdom** (https://pingdom.com)
- [ ] **Better Uptime** (https://betteruptime.com)
- Monitor: leomayn.com every 5 minutes
- Get alerts if site goes down

#### Review Environment Variables
- [ ] **Audit all environment variables** in Vercel
- [ ] Ensure no sensitive data in code
- [ ] Verify all keys are production-ready (not test keys)

---

## 🟢 ENHANCEMENTS (Do Later)

### Content Improvements

#### Add More Content
- [ ] **Blog section** (if planned)
  - Create `app/blog/` directory
  - Add blog post pages
  - Update sitemap

- [ ] **Case studies/Portfolio** (if planned)
  - Add to services pages
  - Create dedicated case study pages

- [ ] **Testimonials** (when available)
  - Add to homepage
  - Add to services pages
  - Include client logos

- [ ] **Team page** (if expanding beyond Tom)
  - Create `app/team/page.tsx`
  - Add team member profiles

#### Content Polish
- [ ] **Proofread all copy** for typos
- [ ] **Check all links** work (internal and external)
- [ ] **Review tone consistency** across pages
- [ ] **Add more calls-to-action** if needed

### SEO Enhancements

#### Advanced SEO
- [ ] **Add JSON-LD structured data**
  - Organization schema
  - Service schema
  - Local business schema (if applicable)

- [ ] **Create dynamic sitemap** (auto-updates)
  - Replace static XML with Next.js API route
  - Auto-includes new pages

- [ ] **Add meta keywords** (minor SEO benefit)

- [ ] **Optimize images for SEO**
  - Add alt text to all images
  - Use descriptive filenames
  - Compress images

- [ ] **Add breadcrumbs** to service pages

- [ ] **Submit sitemap to Google Search Console**
  - https://search.google.com/search-console
  - Add and verify leomayn.com
  - Submit sitemap.xml
  - Monitor indexing and errors

- [ ] **Submit to Bing Webmaster Tools**
  - https://www.bing.com/webmasters

#### Performance Optimization
- [ ] **Add next/image for images** (when you add them)
- [ ] **Enable compression** (already done via Vercel)
- [ ] **Test with Lighthouse** in Chrome DevTools
  - Aim for 90+ scores
  - Fix any issues flagged

- [ ] **Test page speed:** https://pagespeed.web.dev
  - Test desktop and mobile
  - Implement suggestions

### User Experience

#### Add Interactive Features
- [ ] **Newsletter signup** (if planned)
  - Add form component
  - Integrate with email service (Resend, Mailchimp, etc.)

- [ ] **Live chat** (optional)
  - Intercom, Crisp, or similar
  - Only if you'll monitor it

- [ ] **Cookie consent banner** (if using analytics/cookies)
  - Required by GDPR/CCPA
  - Use package like `react-cookie-consent`

- [ ] **Loading states** on form submission
  - Add spinner/loading indicator
  - Improve user feedback

#### Accessibility Improvements
- [ ] **Run accessibility audit**
  - Use Lighthouse accessibility score
  - Use WAVE tool: https://wave.webaim.org

- [ ] **Add skip-to-content link**
- [ ] **Improve keyboard navigation**
- [ ] **Ensure sufficient color contrast**
- [ ] **Add ARIA labels where needed**

### Advanced Features

#### Add Analytics Events
Track specific user actions:
- [ ] Button clicks (CTA buttons)
- [ ] Form submissions
- [ ] Calendly link clicks
- [ ] Download clicks (if adding PDFs)

#### Progressive Web App (PWA)
- [ ] Add web app manifest
- [ ] Add service worker
- [ ] Enable offline mode
- [ ] Add "Add to Home Screen" prompt

#### Internationalization (i18n)
If you plan to support multiple languages:
- [ ] Set up Next.js i18n
- [ ] Translate all content
- [ ] Add language switcher

---

## 🔧 MAINTENANCE & UPDATES

### Regular Tasks

#### Weekly
- [ ] Check Vercel logs for errors
- [ ] Test contact form is working
- [ ] Monitor email deliverability

#### Monthly
- [ ] Review analytics (when set up)
- [ ] Check for broken links
- [ ] Update dependencies: `npm outdated`
- [ ] Review and respond to contact form submissions

#### Quarterly
- [ ] Review and update content
- [ ] Check SEO rankings
- [ ] Update copyright year in footer
- [ ] Security audit

#### As Needed
- [ ] Update Node.js version if Vercel alerts
- [ ] Update Next.js when new stable version releases
- [ ] Add new pages/content
- [ ] Respond to user feedback

---

## 📊 CURRENT STATUS SUMMARY

### What's Working Right Now
✅ Site deployed and live at: https://leomayn-website.vercel.app
✅ All 13 pages rendering correctly
✅ Contact form API working
✅ Email notifications configured (Resend)
✅ Security headers active
✅ SEO metadata in place
✅ Vercel CLI configured

### What's Pending
⏳ DNS propagation for leomayn.com (10-30 mins)
⏳ First real contact form test
⏳ Multi-device testing

### What's Missing (Priority Order)
🔴 High Priority:
1. Favicon
2. OG images for social sharing
3. Real testing after DNS propagates
4. Resend domain verification (for better email deliverability)

🟡 Medium Priority:
5. Logo/branding images
6. Google Analytics (if tracking desired)
7. Uptime monitoring
8. Error monitoring setup

🟢 Low Priority:
9. Additional content (blog, case studies, testimonials)
10. Advanced SEO (structured data, Search Console)
11. Accessibility audit and improvements
12. Performance optimization (when adding images)

---

## 🎯 RECOMMENDED IMMEDIATE ACTION PLAN

### Today (In Order):
1. ⏳ **Wait for DNS** to propagate (check every 15 mins)
2. ✅ **Test leomayn.com** thoroughly when live
3. ✅ **Submit real contact form** to test Resend
4. ✅ **Test on mobile** device
5. 🎨 **Create and add favicon** (quick win)
6. 🎨 **Create OG image** for social sharing

### This Week:
1. 📧 **Verify domain in Resend** (improve deliverability)
2. 📊 **Set up Google Analytics** (optional but recommended)
3. 🔔 **Set up uptime monitoring** (free, 5 mins)
4. 🎨 **Add logo/branding** if available
5. ✅ **Test on all major browsers**

### Next Week:
1. 📈 **Submit sitemap to Search Console**
2. 🔍 **Run Lighthouse audit** and fix issues
3. 📝 **Review all content** for typos/clarity
4. 🎨 **Add any missing images**
5. ⚡ **Consider Attio integration** if wanted

---

## 📞 SUPPORT & RESOURCES

**Documentation:**
- Project README: `README.md`
- Deployment Guide: `DEPLOYMENT.md`
- Quick Reference: `QUICK-REFERENCE.md`
- This Checklist: `SETUP-CHECKLIST.md`

**Dashboards:**
- Vercel: https://vercel.com/leomayn-projects/leomayn-website
- Resend: https://resend.com
- GitHub: https://github.com/tomleomayn/leomayn-website

**Key Commands:**
```bash
# Deploy
git push origin main        # Auto-deploy via GitHub
vercel --prod              # Manual deploy via CLI

# Test locally
npm run dev

# Check for issues
npm run build
npx tsc --noEmit
```

**Questions?**
Review the documentation files or check Vercel/Next.js docs.

---

**Last Updated:** January 7, 2026
**Site Status:** ✅ Deployed, ⏳ DNS Propagating
**Next Milestone:** DNS live + full testing complete
