import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pool Service Bali | Expert Pool Maintenance, Cleaning & Repair',
  description: 'Professional pool service in Bali. Weekly pool cleaning, maintenance, repair, and installation. Emergency green pool rescue. WhatsApp booking. Serving Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua & more. Bali pool experts since 2010.',
  keywords: 'pool service Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool experts, villa pool service, pool care Bali',
  metadataBase: new URL('https://balipoolpros.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pool Service Bali | Expert Pool Maintenance, Cleaning & Repair',
    description: 'Professional pool service in Bali. Weekly pool cleaning, maintenance, repair, and installation. Serving all major areas since 2010.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Bali Pool Pros',
    url: 'https://balipoolpros.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bali Pool Pros - Professional Pool Service in Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Service Bali | Expert Pool Maintenance, Cleaning & Repair',
    description: 'Professional pool service in Bali. Weekly pool cleaning, maintenance, repair, and installation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

// JSON-LD Schema for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://balipoolpros.com',
  name: 'Bali Pool Pros',
  description: 'Professional pool service in Bali offering weekly maintenance, cleaning, repair, installation, and emergency green pool rescue. Serving villas, resorts, and residential properties across Bali since 2010.',
  image: 'https://balipoolpros.com/og-image.jpg',
  url: 'https://balipoolpros.com',
  telephone: '+62-822-3756-5997',
  email: 'hello@balipoolpros.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Ubud No. 45',
    addressLocality: 'Gianyar',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.5069,
    longitude: 115.2625,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Canggu' },
    { '@type': 'City', name: 'Seminyak' },
    { '@type': 'City', name: 'Ubud' },
    { '@type': 'City', name: 'Uluwatu' },
    { '@type': 'City', name: 'Sanur' },
    { '@type': 'City', name: 'Nusa Dua' },
    { '@type': 'City', name: 'Jimbaran' },
    { '@type': 'City', name: 'Kerobokan' },
  ],
  priceRange: 'Contact us for pricing',
  serviceType: [
    'Pool Maintenance',
    'Pool Cleaning',
    'Pool Repair',
    'Swimming Pool Installation',
    'Green Pool Rescue',
    'Chemical Balancing',
  ],
  foundingDate: '2010',
  founder: {
    '@type': 'Person',
    name: 'I Made Putra',
  },
  sameAs: [
    'https://www.facebook.com/balipoolpros',
    'https://www.instagram.com/balipoolpros',
    'https://www.linkedin.com/company/balipoolpros',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
