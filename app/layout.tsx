import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pool Cleaning Bali | Weekly Maintenance & Rescue',
  description: 'Professional weekly pool cleaning in Bali. Emergency green pool rescue. WhatsApp booking. Serving Canggu, Seminyak, Ubud, Uluwatu & more.',
  keywords: 'pool cleaning Bali, pool maintenance Bali, green pool rescue, villa pool service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
