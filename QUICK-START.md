# 🚀 Quick Start Guide

Get your Bali Pool Care website running in 3 steps!

## Step 1: Install Dependencies

Open Terminal in this folder and run:

```bash
npm install
```

⏱️ This takes 2-3 minutes.

## Step 2: Update Contact Info

**IMPORTANT - Do this before going live!**

### WhatsApp Number
Find and replace everywhere: `62811XXXXXXX`

Replace with your actual number, example: `6281234567890`

**Files to update:**
- All pages (use Find & Replace in your editor)
- Search for: `62811XXXXXXX`
- Replace with: Your WhatsApp number with country code

### Email Address
Find and replace: `hello@balipoolcare.com`

Replace with your actual email.

**Files to update:**
- `components/Footer.tsx`
- `app/contact/page.tsx`

### About Page
Update in `app/about/page.tsx`:
- Add your founding year
- Add team member names

## Step 3: Run the Website

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

🎉 Your website is now running!

---

## What's Next?

### Test Everything
- ✅ Click all navigation links
- ✅ Test WhatsApp buttons
- ✅ Try the contact form
- ✅ Check on mobile (resize browser)

### Deploy (When Ready)

**Option A - Vercel (Easiest)**
1. Sign up at vercel.com
2. Import this project
3. Deploy (automatic)
4. Free hosting!

**Option B - Build Static Files**
```bash
npm run build
```
Upload the `out` folder to any host.

---

## 📁 What You Have

✅ 8 complete pages (Home, Services, 2 service detail pages, Areas, Pricing, About, Contact)
✅ Fully responsive (works on phone, tablet, desktop)
✅ WhatsApp integration
✅ SEO optimized
✅ Professional design
✅ No photos needed (clean design works without)
✅ Contact form that sends to WhatsApp

---

## 🆘 Need Help?

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**WhatsApp not working?**
- Check phone number format: +6281234567890
- Number must be active on WhatsApp

**Questions about Next.js?**
- See README.md
- See SETUP-GUIDE.md
- Check Next.js docs: nextjs.org/docs

---

## 🎯 Before Going Live Checklist

- [ ] Update WhatsApp number (all pages)
- [ ] Update email address
- [ ] Add team info to About page
- [ ] Test all WhatsApp buttons
- [ ] Test contact form
- [ ] Check all pages on mobile
- [ ] Verify pricing is correct
- [ ] Spell check all content

---

## That's It!

Your professional pool service website is ready. Just update the contact info and deploy!

**See WEBSITE-SUMMARY.md for complete feature list.**

Good luck! 🏊‍♂️
