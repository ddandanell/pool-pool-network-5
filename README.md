# Bali Pool Care Website

Professional pool maintenance and emergency rescue services website for Bali villas.

## Features

- **8 Complete Pages**: Home, Services, Weekly Maintenance, Green Pool Rescue, Areas We Serve, Pricing, About, Contact
- **Responsive Design**: Mobile-first design that works on all devices
- **WhatsApp Integration**: Direct booking and contact via WhatsApp
- **SEO Optimized**: All pages have proper meta tags, titles, and descriptions
- **Modern UI**: Clean, professional design with pool-themed colors

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Export Static Site

This project is configured to export as a static site:

```bash
npm run build
```

The static files will be in the `out` directory.

## Customization

### Update Contact Information

Replace the following placeholders throughout the site:

- **WhatsApp Number**: Search for `62811XXXXXXX` and replace with your actual WhatsApp number
- **Email**: Search for `hello@balipoolcare.com` and replace with your actual email
- **Year Founded**: Search for `[YEAR]` in the About page
- **Team Information**: Update the team section in `/app/about/page.tsx`

### Update Colors

The pool theme colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  pool: {
    light: '#E0F2FE',
    DEFAULT: '#0EA5E9',
    dark: '#0369A1',
    darker: '#0C4A6E'
  }
}
```

### Add Images

To add pool images:

1. Create a `public/images` directory
2. Add your images there
3. Reference them in the pages using Next.js Image component

Example:
```jsx
import Image from 'next/image';

<Image
  src="/images/pool-hero.jpg"
  alt="Pool cleaning"
  width={1200}
  height={600}
/>
```

## Project Structure

```
pool web1/
├── app/
│   ├── about/page.tsx           # About page
│   ├── areas/page.tsx           # Areas we serve
│   ├── contact/page.tsx         # Contact page with form
│   ├── green-pool-rescue/page.tsx # Emergency service
│   ├── pricing/page.tsx         # Pricing tables
│   ├── services/page.tsx        # Services overview
│   ├── weekly-maintenance/page.tsx # Weekly maintenance
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Navigation header
│   └── Footer.tsx               # Site footer
├── public/                      # Static files
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json
```

## Pages Overview

1. **Home** (`/`) - Hero section, how it works, testimonials, why choose us
2. **Services** (`/services`) - Overview of weekly maintenance and emergency rescue
3. **Weekly Maintenance** (`/weekly-maintenance`) - Detailed weekly service information
4. **Green Pool Rescue** (`/green-pool-rescue`) - Emergency algae treatment service
5. **Areas We Serve** (`/areas`) - Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua
6. **Pricing** (`/pricing`) - Transparent pricing tables with all packages
7. **About** (`/about`) - Company story, team, values, commitment
8. **Contact** (`/contact`) - Contact form, WhatsApp, email, service hours

## SEO

All pages include:
- Meta titles
- Meta descriptions
- Keywords
- Proper heading hierarchy (H1, H2, H3)
- Internal linking structure

## Internal Linking

The site includes strategic internal links as specified:
- Home → Services, Weekly Maintenance, Contact
- Services → Weekly Maintenance, Green Pool Rescue
- Weekly Maintenance → Pricing
- Green Pool Rescue → Pricing, Contact
- Areas We Serve → Pricing
- About → Contact

## WhatsApp Integration

The contact form sends inquiries via WhatsApp. When a user submits the form:
1. Form data is compiled into a message
2. WhatsApp web/app opens with the pre-filled message
3. User clicks send to complete the booking

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Static Export** - No server required

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

### Deploy to Netlify

1. Build the static site: `npm run build`
2. Upload the `out` directory to Netlify
3. Configure redirects if needed

### Deploy to Any Static Host

The site can be deployed to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- AWS S3
- Azure Static Web Apps

Simply build and upload the `out` directory.

## Support

For issues or questions about the website:
- Check the Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

© 2024 Bali Pool Care. All rights reserved.
