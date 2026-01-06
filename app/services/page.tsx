import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, AlertTriangle, CheckCircle2, TestTube, Filter, Waves, Camera, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pool Services Bali | Maintenance & Green Pool Rescue',
  description: 'Weekly cleaning, chemical balancing, filter care, and emergency green pool rescue for Bali villas. WhatsApp to book.',
  keywords: 'pool services Bali, pool maintenance, algae removal, chemical balancing',
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pool to-pool-dark text-white py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Pool Care Solutions for Bali Villas
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            We offer two core services: consistent weekly maintenance and emergency rescue when things go wrong.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Weekly Maintenance */}
            <div className="card border-2 border-pool">
              <div className="text-pool mb-4">
                <Droplets className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-pool-darker">Weekly Maintenance</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Keeps your pool clean, balanced, and safe year-round. Ideal for villa owners who want set-and-forget reliability.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Consistent weekly schedule',
                  'Prevents problems before they start',
                  'Transparent, fixed pricing',
                  'Detailed reporting after each visit',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/weekly-maintenance" className="btn-primary">
                Learn More About Weekly Maintenance
              </Link>
            </div>

            {/* Emergency Green Pool Rescue */}
            <div className="card border-2 border-red-500">
              <div className="text-red-500 mb-4">
                <AlertTriangle className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-pool-darker">Emergency Green Pool Rescue</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Your pool turned green overnight? We&rsquo;ll diagnose the cause, shock-treat, backwash, and re-balance in one visit. Same-day response available.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Same-day emergency response',
                  'Professional algae treatment',
                  '24-48 hour pool recovery',
                  'Follow-up visit if needed',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/green-pool-rescue" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
                Learn About Emergency Rescue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What&rsquo;s Included in Our Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TestTube className="h-10 w-10" />,
                title: 'Water Testing & Chemical Balancing',
                description: 'Complete water chemistry analysis and precise pH, chlorine, and alkalinity adjustment',
              },
              {
                icon: <Waves className="h-10 w-10" />,
                title: 'Skimming & Debris Removal',
                description: 'Surface cleaning, debris removal, and tile line brushing for pristine water',
              },
              {
                icon: <Filter className="h-10 w-10" />,
                title: 'Filter Inspection & Cleaning',
                description: 'Weekly filter pressure checks, backwashing, and pump motor inspection',
              },
              {
                icon: <Droplets className="h-10 w-10" />,
                title: 'Algae Prevention Treatment',
                description: 'Seasonal algae-prevention treatments tailored to Bali&rsquo;s climate',
              },
              {
                icon: <Camera className="h-10 w-10" />,
                title: 'Before/After Photos',
                description: 'Visual documentation of every service visit for your records',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp Updates',
                description: 'Real-time communication and photo updates after each visit',
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: 'Written Reports',
                description: 'Detailed checklists and service reports for every visit',
              },
              {
                icon: <TestTube className="h-10 w-10" />,
                title: 'Chemical Adjustment',
                description: 'Professional-grade chemicals included in service (no extra charges)',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div className="text-pool mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-pool-darker">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pool text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Choose the service that fits your needs. We&rsquo;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary bg-white text-pool hover:bg-gray-100">
              View Pricing
            </Link>
            <a
              href="https://wa.me/62811XXXXXXX?text=I%20need%20pool%20service"
              className="btn-secondary border-white text-white hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
