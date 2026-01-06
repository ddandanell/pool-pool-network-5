import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, CloudRain, Sun, FileText } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Weekly Pool Maintenance Bali | Professional Cleaning & Care | Bali Pool Pros',
  description: 'Professional weekly pool maintenance for Bali villas and resorts. Complete chemical balancing, filter care, debris removal, and detailed reporting. Transparent pricing. WhatsApp booking.',
  keywords: 'weekly pool maintenance Bali, pool cleaning checklist, chemical balancing, filter maintenance, pool care Bali, villa pool service',
};

const faqs = [
  {
    question: 'How often should I get my pool cleaned in Bali?',
    answer: 'Weekly is ideal for Bali\'s tropical climate with its high humidity and warm temperatures. During rainy season (November to March), twice weekly is strongly recommended to prevent algae growth and maintain proper chemical balance. We can assess your specific pool and usage to recommend the optimal frequency.',
  },
  {
    question: 'What\'s the difference between weekly maintenance and a green pool rescue?',
    answer: 'Weekly maintenance is preventive—it\'s scheduled, consistent, and affordable. It prevents problems before they start. Green pool rescue is emergency treatment when algae blooms unexpectedly despite (or due to lack of) regular maintenance. Prevention through weekly care is always more cost-effective than emergency rescue.',
  },
  {
    question: 'My pool is saltwater. Can you maintain it?',
    answer: 'Yes! Saltwater systems require different chemical approaches and specialized corrosion prevention. We offer a Premium package specifically for saltwater pools. Contact us for pricing—this includes salt cell cleaning, corrosion monitoring, and specialized chemical management.',
  },
  {
    question: 'How does rainy season affect my pool in Bali?',
    answer: 'Heavy rain dilutes pool chemicals, increases algae risk, and can clog filters with debris from storms. We proactively increase visit frequency during rainy season (November to March) and recommend our Plus package (twice weekly) to maintain optimal water quality.',
  },
  {
    question: 'Do you offer a discount for longer maintenance contracts?',
    answer: 'Yes! We offer significant discounts for 3-month and 6-month contracts. Annual contracts are available with custom pricing. Contact us via WhatsApp to discuss long-term service agreements and savings.',
  },
  {
    question: 'Can you provide a written report after each visit?',
    answer: 'Absolutely! Every visit includes a detailed photo and written checklist showing what was done, current water chemistry readings (pH, chlorine, alkalinity), and any recommendations. Reports are sent via WhatsApp within hours of each service visit.',
  },
  {
    question: 'What time will you service my pool?',
    answer: 'We schedule pool service during business hours (8 AM - 6 PM, Monday-Saturday). You can choose your preferred day and approximate time window. Our technicians are punctual—if we say 9 AM, we arrive at 9 AM.',
  },
  {
    question: 'Do I need to be home during pool maintenance?',
    answer: 'No, you don\'t need to be present. Many of our clients are property managers or absentee villa owners. We coordinate access with your staff or key holders and send detailed reports with photos after each visit so you always know your pool\'s status.',
  },
];

export default function WeeklyMaintenance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=80)' }}
          role="img"
          aria-label="Professional weekly pool maintenance service in Bali villa"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Weekly Pool Maintenance in Bali That Actually Works
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Consistency prevents problems. Our comprehensive weekly maintenance routine keeps your villa pool safe, crystal clear, and always ready to use. Trusted by 500+ properties across Bali.
          </p>
        </div>
      </section>

      {/* The Weekly Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-12 w-12 text-pool mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-pool-darker">
              The Weekly Checklist
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Water chemistry test (pH, chlorine, alkalinity)',
                'Debris skimming & net cleaning',
                'Filter pressure check & backwash if needed',
                'Pump & motor inspection',
                'Tile line & waterline brush',
                'Drain strainer baskets',
                'Chemical adjustment (as needed)',
                'Written report + photos',
                'WhatsApp summary sent to you',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-pool-light rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-pool mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Weekly Maintenance Matters */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Why Weekly Maintenance Matters
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-pool-darker">Prevent Expensive Repairs</h3>
              <p className="text-gray-700 text-lg">
                Small issues caught early prevent expensive repairs. A clogged filter or imbalanced pH can damage your pump, corrode surfaces, and create costly problems. Weekly inspections identify issues before they escalate.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-pool-darker">Keep Algae Away</h3>
              <p className="text-gray-700 text-lg">
                Consistent chlorine and pH levels keep algae away. In Bali&rsquo;s humid climate, skipping weeks invites green water and equipment damage. Weekly maintenance ensures your pool stays crystal clear.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-pool-darker">Safe Swimming Conditions</h3>
              <p className="text-gray-700 text-lg">
                Properly balanced water protects swimmers from skin and eye irritation. Our weekly testing ensures safe chlorine levels, balanced pH, and correct alkalinity for comfortable swimming.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-pool-darker">Peace of Mind</h3>
              <p className="text-gray-700 text-lg">
                Set-and-forget reliability means one less thing to worry about. Whether you&rsquo;re renting your villa or living there full-time, you know your pool is always guest-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Adjustments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Seasonal Adjustments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rainy Season */}
            <div className="card border-2 border-pool">
              <div className="flex items-center space-x-3 mb-4">
                <CloudRain className="h-10 w-10 text-pool" />
                <h3 className="text-2xl font-bold text-pool-darker">Rainy Season (Nov–Mar)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Heavy rain dilutes chemicals and increases algae risk. During rainy season, we proactively adjust your service:
              </p>
              <ul className="space-y-2">
                {[
                  'Increase visit frequency (2x/week recommended)',
                  'Enhanced algae-prevention treatment',
                  'More frequent chemical testing',
                  'Extra debris removal (leaves, branches)',
                  'Filter cleaning as needed',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dry Season */}
            <div className="card border-2 border-orange-400">
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="h-10 w-10 text-orange-400" />
                <h3 className="text-2xl font-bold text-pool-darker">Dry Season (Apr–Oct)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lower rainfall means more stable water chemistry. During dry season, standard weekly maintenance is sufficient:
              </p>
              <ul className="space-y-2">
                {[
                  'Standard weekly schedule',
                  'Regular chemical balancing',
                  'Normal debris removal',
                  'Consistent water testing',
                  'Monitor for evaporation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              <strong>We adjust your plan proactively.</strong> You don&rsquo;t need to ask—we monitor seasonal changes and recommend adjustments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Weekly Pool Maintenance FAQs" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Weekly Pool Maintenance Today
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Reliable, transparent, and professional pool care for your Bali villa or resort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary bg-white text-pool hover:bg-gray-100">
              View Maintenance Pricing
            </Link>
            <a
              href="https://wa.me/6282237565997?text=I%20want%20weekly%20pool%20maintenance"
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
