import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pool Cleaning Bali | Pool Maintenance Bali | Bali Villa Pool Service',
  description: 'Professional pool cleaning Bali and pool maintenance Bali services. Expert pool chemical balancing, algae treatment, green pool rescue, and Bali villa pool service. Serving Canggu, Seminyak, Ubud & more since 2010.',
  keywords: 'pool cleaning Bali, pool maintenance Bali, Bali villa pool service, algae treatment, green pool rescue, pool chemical balancing, pool service Bali, villa pool maintenance, tropical pool care',
  metadataBase: new URL('https://balipoolpros.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pool Cleaning Bali | Pool Maintenance Bali | Bali Villa Pool Service',
    description: 'Professional pool cleaning Bali and pool maintenance Bali services. Expert pool chemical balancing, algae treatment, and Bali villa pool service. Serving all major areas since 2010.',
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
    title: 'Pool Cleaning Bali | Pool Maintenance Bali | Bali Villa Pool Service',
    description: 'Professional pool cleaning Bali and pool maintenance Bali. Expert pool chemical balancing, algae treatment, and Bali villa pool service.',
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
  description: 'Professional pool cleaning Bali and pool maintenance Bali services offering weekly maintenance, pool chemical balancing, algae treatment, green pool rescue, and Bali villa pool service. Serving villas, resorts, and residential properties across Bali since 2010.',
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
    'Pool Cleaning Bali',
    'Pool Maintenance Bali',
    'Bali Villa Pool Service',
    'Pool Chemical Balancing',
    'Algae Treatment',
    'Green Pool Rescue',
    'Pool Repair',
    'Swimming Pool Installation',
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
