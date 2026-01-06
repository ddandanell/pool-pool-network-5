import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Calendar, CloudRain, Sun, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Weekly Pool Maintenance Bali | Cleaning & Care',
  description: 'Weekly pool cleaning for Bali villas. Chemical balance, filter care, debris removal. Transparent pricing. WhatsApp booking.',
  keywords: 'weekly pool maintenance Bali, pool cleaning checklist, chemical balancing, filter maintenance',
};

export default function WeeklyMaintenance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pool to-pool-dark text-white py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Weekly Pool Maintenance That Actually Works
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Consistency prevents problems. Our weekly routine keeps your pool safe, clear, and ready to use.
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

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'How often should I get my pool cleaned?',
                a: 'Weekly is ideal for Bali\'s climate and high humidity. During rainy season (Nov–Mar), twice weekly is recommended to prevent algae. We can adjust based on your pool\'s condition and your usage.',
              },
              {
                q: 'What\'s the difference between weekly maintenance and a green pool rescue?',
                a: 'Weekly maintenance prevents problems. It\'s scheduled, consistent, and affordable. Green pool rescue is emergency treatment when algae blooms unexpectedly. Prevention is cheaper than rescue.',
              },
              {
                q: 'My pool is saltwater. Can you maintain it?',
                a: 'Yes. Saltwater systems require different chemical approaches and corrosion prevention. We adjust pricing for saltwater; rates start at 500k/week. Message us for a quote.',
              },
              {
                q: 'How does rainy season affect my pool?',
                a: 'Heavy rain dilutes chemicals, increases algae risk, and can clog filters with debris. We increase visit frequency during rainy season and recommend our Plus package (2x/week) from November to March.',
              },
              {
                q: 'Do you offer a discount for longer contracts?',
                a: 'Yes. 3-month contracts get 10% off. 6-month contracts get 15% off. Annual contracts are available—message us for pricing.',
              },
              {
                q: 'Can you provide a written report after each visit?',
                a: 'Yes. Every visit includes a photo + written checklist showing what was done, current water chemistry, and any recommendations. Reports sent via WhatsApp.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-lg mb-3 text-pool-darker">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pool text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Weekly Service Today
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Reliable, transparent, and convenient pool care for your Bali villa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary bg-white text-pool hover:bg-gray-100">
              View Maintenance Pricing
            </Link>
            <a
              href="https://wa.me/62811XXXXXXX?text=I%20want%20weekly%20pool%20maintenance"
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
