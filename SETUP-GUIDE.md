# Bali Pool Care - Setup Guide

## Quick Start

Follow these steps to get your website running:

### 1. Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages.

### 2. Update Contact Information

**IMPORTANT**: Before launching, update these placeholders:

#### WhatsApp Number
Find and replace `62811XXXXXXX` with your actual WhatsApp number (include country code):
- Search in all files: Use Find & Replace in your code editor
- Example: Replace with `6281234567890`

#### Email Address
Find and replace `hello@balipoolcare.com` with your actual email:
- Located in Footer.tsx and Contact page

#### Company Information
Update in `/app/about/page.tsx`:
- Add your founding year (search for `[YEAR]`)
- Add team member names and experience
- Update company story if needed

### 3. Customize Branding (Optional)

#### Update Colors
Edit `tailwind.config.js` to change the pool blue colors:

```javascript
colors: {
  pool: {
    light: '#E0F2FE',    // Light blue background
    DEFAULT: '#0EA5E9',  // Main pool blue
    dark: '#0369A1',     // Dark blue for hover
    darker: '#0C4A6E'    // Darkest blue for text
  }
}
```

#### Add Your Logo
- Create a logo and save as `favicon.ico` in the `app` directory
- Recommended size: 32x32 or 64x64 pixels

### 4. Add Images (Recommended)

1. Create pool photos or download stock images
2. Save them in the `public/images` directory
3. Update the pages to use real images instead of placeholders

See `public/images/README.md` for image guidelines.

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### 6. Test the Website

Check each page:
- ✅ Home page loads correctly
- ✅ All navigation links work
- ✅ WhatsApp buttons open correctly
- ✅ Contact form submits to WhatsApp
- ✅ Mobile responsive design works
- ✅ All areas pages display correctly

### 7. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## Deployment Options

### Option 1: Vercel (Easiest)

1. Create account at [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Deploy with one click
4. Free hosting with custom domain support

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `out` folder
3. Configure custom domain
4. Free hosting with SSL

### Option 3: Any Static Host

Upload the `out` folder to:
- GitHub Pages
- Cloudflare Pages
- AWS S3
- Your own hosting

## Custom Domain Setup

After deploying:

1. Purchase a domain (e.g., balipoolcare.com)
2. Point domain to your hosting provider
3. Configure DNS settings
4. Enable SSL certificate (usually automatic)

## SEO Checklist

Before going live:

- ✅ Update all meta titles and descriptions
- ✅ Add Google Analytics (optional)
- ✅ Submit sitemap to Google Search Console
- ✅ Add schema markup for local business
- ✅ Verify WhatsApp number works
- ✅ Test contact form
- ✅ Check mobile responsiveness
- ✅ Optimize images for web

## Maintenance

### Regular Updates

- Keep packages updated: `npm update`
- Test WhatsApp integration monthly
- Update pricing as needed
- Add new testimonials
- Update service areas if expanding

### Content Updates

Easy pages to update:
- **Pricing** (`/app/pricing/page.tsx`) - Update rates
- **About** (`/app/about/page.tsx`) - Add team members
- **Testimonials** (`/app/page.tsx`) - Add customer reviews
- **Areas** (`/app/areas/page.tsx`) - Add new locations

## Troubleshooting

### Build Errors

If you get errors during `npm run build`:

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Run `npm run build` again

### WhatsApp Not Opening

- Check that phone number format is correct: +62811...
- Test the WhatsApp link in a browser
- Make sure number is active on WhatsApp Business

### Styling Issues

- Clear browser cache
- Check Tailwind CSS classes
- Verify `globals.css` is imported

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/

## Going Live Checklist

Before launching:

- [ ] Update all placeholder contact info
- [ ] Add real images
- [ ] Test on mobile devices
- [ ] Test WhatsApp integration
- [ ] Test contact form
- [ ] Check all internal links
- [ ] Review pricing accuracy
- [ ] Spell check all content
- [ ] Add favicon
- [ ] Configure custom domain
- [ ] Enable SSL certificate
- [ ] Submit to search engines

## Next Steps

After launch:

1. **Marketing**
   - Share on social media
   - Add to Google My Business
   - Create Facebook page
   - Start collecting reviews

2. **Tracking**
   - Add Google Analytics
   - Monitor WhatsApp inquiries
   - Track conversion rate
   - Monitor page performance

3. **Optimization**
   - A/B test pricing display
   - Optimize for local SEO
   - Add more testimonials
   - Create blog content (optional)

## Questions?

This is a complete, production-ready website. All pages are built, responsive, and optimized for SEO. Just update the contact information and deploy!

Good luck with Bali Pool Care! 🏊‍♂️
