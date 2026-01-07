# Bali Pool Pros Website

Official website for Bali Pool Pros - Professional pool maintenance and care services in Bali.

## Technical Stack

- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Responsive design optimized for all devices

## Development

### Setup

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build for production:
```bash
npm run build
npm start
```

Build static export:
```bash
npm run build
```

Static files will be in the `out` directory.

## Configuration

### Contact Information

Update contact details in:
- `app/contact/page.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (schema data)

### Brand Colors

Modify colors in `tailwind.config.js`:

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

### Images

Place images in `public/images/` and reference using Next.js Image component.

## Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── areas/           # Service areas
│   ├── contact/         # Contact form
│   ├── services/        # Services overview
│   ├── pricing/         # Pricing information
│   └── ...
├── components/          # Reusable components
├── public/             # Static assets
└── ...
```

## Deployment

Compatible with:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

Build and upload the `out` directory for static deployments.

## License

© 2024 Bali Pool Pros. All rights reserved.
