# Bali Pool Care - Site Structure

## 🌐 Complete Website Map

```
BALI POOL CARE WEBSITE
│
├── 🏠 HOME (/)
│   ├── Hero Section
│   │   ├── Main headline
│   │   ├── WhatsApp CTA
│   │   └── View Pricing link
│   ├── How It Works (5 steps)
│   ├── Why Choose Us (6 features)
│   ├── Testimonials (3 samples)
│   └── Book Now CTA
│
├── 🔧 SERVICES (/services)
│   ├── Weekly Maintenance overview
│   ├── Emergency Green Pool Rescue overview
│   ├── What's Included (8 items)
│   └── Links to: Weekly Maintenance, Green Pool Rescue, Pricing
│
├── 📅 WEEKLY MAINTENANCE (/weekly-maintenance)
│   ├── The Weekly Checklist (9 items)
│   ├── Why Weekly Maintenance Matters
│   ├── Seasonal Adjustments
│   │   ├── Rainy Season (Nov-Mar)
│   │   └── Dry Season (Apr-Oct)
│   ├── FAQs (6 questions)
│   └── Links to: Pricing
│
├── 🚨 GREEN POOL RESCUE (/green-pool-rescue)
│   ├── What Causes Green Pools (6 causes)
│   ├── Our Rescue Process (5 steps)
│   ├── Prevent Future Algae
│   ├── FAQs (5 questions)
│   └── Links to: Pricing, Contact, Weekly Maintenance
│
├── 📍 AREAS WE SERVE (/areas)
│   ├── Service Area Overview
│   ├── Canggu (detailed)
│   ├── Seminyak (detailed)
│   ├── Ubud (detailed)
│   ├── Uluwatu (detailed)
│   ├── Sanur (detailed)
│   ├── Nusa Dua (detailed)
│   ├── Complete Bali Coverage map
│   └── Links to: Pricing
│
├── 💰 PRICING (/pricing)
│   ├── Weekly Maintenance Packages
│   │   ├── Standard (350k/week)
│   │   ├── Plus (600k/week)
│   │   └── Premium (500k/week)
│   ├── Contract Discounts (10-15% off)
│   ├── Emergency Services
│   │   ├── Green Pool Rescue (800k-1.2M)
│   │   ├── Same-Day Surcharge (+200k)
│   │   └── Follow-Up Visit (400k)
│   ├── Why Fixed Pricing
│   └── What's Included (all packages)
│
├── ℹ️ ABOUT (/about)
│   ├── Our Story
│   ├── Our Commitment (4 points)
│   ├── Our Team (placeholder for names)
│   ├── Our Values (4 values)
│   ├── Why We're Different (4 points)
│   └── Links to: Contact
│
└── 📞 CONTACT (/contact)
    ├── Contact Options
    │   ├── WhatsApp (fastest)
    │   ├── Email
    │   └── Service Hours
    ├── Quick Booking Form
    │   ├── Villa/Property Name
    │   ├── Pool Location
    │   ├── Pool Type
    │   ├── Service Type
    │   ├── Preferred Start Date
    │   ├── Email
    │   └── Additional Message
    ├── Service Areas List
    └── Emergency Contact Section
```

## 🧭 Navigation Structure

### Header Navigation (Desktop & Mobile)
- Home
- Services
- Weekly Maintenance
- Green Pool Rescue
- Areas We Serve
- Pricing
- About
- Contact

### Footer Navigation
**Quick Links:**
- Services
- Weekly Maintenance
- Green Pool Rescue
- Pricing

**Service Areas:**
- Canggu
- Seminyak
- Ubud
- Uluwatu
- Sanur
- Nusa Dua

**Contact Info:**
- WhatsApp: +62 811 XXX XXXX
- Email: hello@balipoolcare.com
- Hours: Mon-Fri 8 AM – 6 PM

## 🔗 Internal Linking Map

```
Home
├──→ Services
├──→ Weekly Maintenance
└──→ Contact

Services
├──→ Weekly Maintenance
└──→ Green Pool Rescue

Weekly Maintenance
└──→ Pricing

Green Pool Rescue
├──→ Pricing
└──→ Contact

Areas We Serve
└──→ Pricing

About
└──→ Contact
```

## 📱 Page Components

### Every Page Has:
✅ Header with full navigation
✅ Hero section with page title
✅ Main content area
✅ Call-to-action section
✅ Footer with links and contact info

### Repeated CTAs:
- WhatsApp booking buttons
- View Pricing links
- Contact form links
- Emergency service links

## 🎯 Conversion Paths

### Path 1: Quick Booking
Home → WhatsApp → Book Service

### Path 2: Learn & Book
Home → Services → Pricing → Contact

### Path 3: Emergency
Home → Green Pool Rescue → WhatsApp

### Path 4: Area-Specific
Home → Areas We Serve → Pricing → WhatsApp

### Path 5: Research & Commit
Home → Services → Weekly Maintenance → Pricing → Contact

## 📊 Content Distribution

**Total Pages:** 8
**Total Words:** ~15,000+
**Total FAQs:** 11
**Service Features:** 50+
**WhatsApp CTAs:** 20+
**Internal Links:** 10 (as specified)

## 🎨 Visual Hierarchy

### Color Usage:
- **Primary Blue (#0EA5E9):** CTAs, headings, icons
- **Dark Blue (#0C4A6E):** Body text, navigation
- **Light Blue (#E0F2FE):** Backgrounds, cards
- **White:** Main background
- **Red (#EF4444):** Emergency services
- **Green (#10B981):** Success states

### Typography:
- **H1:** 4xl-5xl (page titles)
- **H2:** 3xl-4xl (section titles)
- **H3:** xl-2xl (subsections)
- **Body:** base-lg (content)

## 🔍 SEO Structure

### Primary Keywords by Page:
1. Home: "pool cleaning Bali"
2. Services: "pool services Bali"
3. Weekly Maintenance: "weekly pool maintenance Bali"
4. Green Pool Rescue: "green pool rescue Bali"
5. Areas: "pool service areas Bali"
6. Pricing: "pool cleaning price Bali"
7. About: "about Bali Pool Care"
8. Contact: "contact pool service Bali"

### Meta Tags:
✅ All pages have unique titles
✅ All pages have unique descriptions
✅ All pages have relevant keywords
✅ Proper Open Graph tags ready to add

## 📈 User Journey

```
New Visitor
    ↓
Landing (Home/Services)
    ↓
Research (Pricing/Areas)
    ↓
Trust Building (About/Testimonials)
    ↓
Action (Contact/WhatsApp)
    ↓
Booking Confirmed
```

## 🛠️ Technical Structure

```
pool web1/
├── app/                      (Next.js pages)
│   ├── layout.tsx           (Root layout)
│   ├── page.tsx             (Home)
│   ├── globals.css          (Global styles)
│   ├── services/
│   ├── weekly-maintenance/
│   ├── green-pool-rescue/
│   ├── areas/
│   ├── pricing/
│   ├── about/
│   └── contact/
├── components/              (Reusable components)
│   ├── Header.tsx
│   └── Footer.tsx
├── public/                  (Static files)
│   └── images/
└── [config files]
```

## ✅ Checklist for Launch

- [ ] All 8 pages complete ✓
- [ ] Header navigation working ✓
- [ ] Footer links working ✓
- [ ] WhatsApp integration ✓
- [ ] Contact form working ✓
- [ ] Mobile responsive ✓
- [ ] SEO meta tags ✓
- [ ] Internal linking ✓
- [ ] FAQs included ✓
- [ ] Pricing tables ✓

**Status: 100% Complete - Ready for deployment after contact info update!**
