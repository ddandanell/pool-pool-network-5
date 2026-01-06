import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Pool Cleaning Bali | Book Pool Maintenance Service | Bali Pool Pros',
  description: 'Contact Bali Pool Pros for professional pool cleaning Bali, pool maintenance Bali, and Bali villa pool service. Fast WhatsApp response, free quotes, and emergency algae treatment. Book your service today.',
  keywords: 'contact pool cleaning Bali, book pool maintenance, Bali villa pool service contact, pool service quote, WhatsApp pool booking Bali',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
