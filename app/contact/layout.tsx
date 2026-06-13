import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Pool Cleaning Bali | Book Pool Maintenance Service | Bali Pool Pros',
  description: 'Contact Bali Pool Pros for professional pool cleaning Bali, pool maintenance Bali, and Bali villa pool service. Fast WhatsApp response, free quotes, and emergency algae treatment. Book your service today.',
  keywords: 'contact pool cleaning Bali, book pool maintenance, Bali villa pool service contact, pool service quote, WhatsApp pool booking Bali',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Pool Cleaning Bali | Book Pool Maintenance Service | Bali Pool Pros',
    description: 'Contact Bali Pool Pros for professional pool cleaning Bali, pool maintenance Bali, and Bali villa pool service. Fast WhatsApp response and free quotes.',
    url: 'https://balipoolmaintenance.online/contact',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://balipoolmaintenance.online/contact',
      name: 'Contact Bali Pool Pros',
      description: 'Contact Bali Pool Pros for professional pool cleaning Bali, pool maintenance Bali, and Bali villa pool service.',
      breadcrumb: { '@id': 'https://balipoolmaintenance.online/contact#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://balipoolmaintenance.online/contact#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://balipoolmaintenance.online' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://balipoolmaintenance.online/contact' },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
