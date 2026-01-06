import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Shield, AlertTriangle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pool Cleaning Pricing Bali | Transparent Rates',
  description: 'Bali Pool Care pricing: from 350k/week for weekly maintenance, 800k+ for green rescue. No hidden fees.',
  keywords: 'pool cleaning price Bali, weekly pool service cost, pool rescue cost',
};

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pool to-pool-dark text-white py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl mx-auto">
            No surprise charges. No time-based billing. You know exactly what you&rsquo;ll pay.
          </p>
        </div>
      </section>

      {/* Weekly Maintenance Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Weekly Maintenance Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Package */}
            <div className="card border-2 border-pool">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-pool-darker">Standard</h3>
                <p className="text-gray-600 mb-4">1x/week maintenance</p>
                <div className="text-4xl font-bold text-pool mb-2">350,000 IDR</div>
                <p className="text-gray-600">per week</p>
                <p className="text-sm text-gray-500 mt-2">3-month minimum</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Weekly water chemistry test',
                  'Chemical balancing (included)',
                  'Debris skimming & removal',
                  'Filter inspection & cleaning',
                  'Pump & motor check',
                  'Written report + photos',
                  'WhatsApp updates',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/62811XXXXXXX?text=I%20want%20Standard%20weekly%20maintenance"
                className="btn-primary w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Standard
              </a>
            </div>

            {/* Plus Package */}
            <div className="card border-2 border-blue-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Rainy Season
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-pool-darker">Plus</h3>
                <p className="text-gray-600 mb-4">2x/week maintenance</p>
                <div className="text-4xl font-bold text-blue-500 mb-2">600,000 IDR</div>
                <p className="text-gray-600">per week</p>
                <p className="text-sm text-gray-500 mt-2">Seasonal (Nov-Mar)</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Twice-weekly service',
                  'Enhanced algae prevention',
                  'All Standard features',
                  'Extra debris removal',
                  'More frequent testing',
                  'Ideal for rainy season',
                  'Priority scheduling',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/62811XXXXXXX?text=I%20want%20Plus%20weekly%20maintenance"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Plus
              </a>
            </div>

            {/* Premium Package */}
            <div className="card border-2 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-pool-darker">Premium</h3>
                <p className="text-gray-600 mb-4">Saltwater & complex systems</p>
                <div className="text-4xl font-bold text-purple-500 mb-2">500,000 IDR</div>
                <p className="text-gray-600">per week</p>
                <p className="text-sm text-gray-500 mt-2">3-month minimum</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Saltwater pool expertise',
                  'Corrosion prevention',
                  'Salt cell cleaning',
                  'Complex system maintenance',
                  'All Standard features',
                  'Infinity edge care',
                  'Premium reporting',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/62811XXXXXXX?text=I%20want%20Premium%20weekly%20maintenance"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Premium
              </a>
            </div>
          </div>

          {/* Contract Discounts */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card bg-green-50 border-2 border-green-500">
              <div className="flex items-start space-x-4">
                <Calendar className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-pool-darker">Contract Discounts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700"><strong>3-month contract:</strong> 10% off total price</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700"><strong>6-month contract:</strong> 15% off total price</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Annual contract:</strong> Contact us for custom pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Emergency Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Green Pool Rescue */}
            <div className="card border-2 border-red-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-12 w-12 text-red-500 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-pool-darker">Green Pool Rescue</h3>
                  <p className="text-3xl font-bold text-red-500 mb-4">800,000 – 1,200,000 IDR</p>
                  <p className="text-gray-700 mb-4">
                    Full algae treatment, shock, backwash, and re-balancing. Price depends on pool size and algae severity.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Complete water assessment',
                      'Professional shock treatment',
                      '24-48 hour recovery',
                      'Before/after photos',
                      'Written report',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/62811XXXXXXX?text=EMERGENCY%20-%20Green%20pool%20rescue"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Emergency Rescue
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Emergency Fees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-orange-50 border border-orange-300">
                <h4 className="font-bold text-lg mb-2 text-pool-darker">Same-Day Surcharge</h4>
                <p className="text-2xl font-bold text-orange-600 mb-2">+200,000 IDR</p>
                <p className="text-gray-700">If requested before 10 AM in Canggu/Seminyak</p>
              </div>
              <div className="card bg-orange-50 border border-orange-300">
                <h4 className="font-bold text-lg mb-2 text-pool-darker">Follow-Up Visit</h4>
                <p className="text-2xl font-bold text-orange-600 mb-2">400,000 IDR</p>
                <p className="text-gray-700">If second treatment needed (rare, for severe cases)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fixed Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 mb-8">
              <Shield className="h-12 w-12 text-pool flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pool-darker">
                  Why Fixed Pricing?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  We learned that hourly rates stress villa owners. A fixed weekly rate lets you budget confidently. Transparent pricing builds trust.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'No Hidden Fees',
                  description: 'Chemicals, equipment, and labor all included in the quoted price',
                },
                {
                  title: 'Budget Confidence',
                  description: 'Know exactly what you\'ll pay each week, month, and year',
                },
                {
                  title: 'No Surprise Charges',
                  description: 'We don\'t add "extra services" or charge for small adjustments',
                },
                {
                  title: 'Transparent Communication',
                  description: 'If something major is needed, we discuss it with you first',
                },
              ].map((item, index) => (
                <div key={index} className="card bg-pool-light">
                  <h3 className="font-semibold text-lg mb-2 text-pool-darker">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Note */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto card">
            <h3 className="text-2xl font-bold mb-4 text-pool-darker text-center">
              All Packages Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Water testing & analysis',
                'Chemical balancing',
                'Debris removal',
                'Filter care',
                'Pump inspection',
                'Tile brushing',
                'Written reports',
                'Photo updates',
                'WhatsApp communication',
                'Professional-grade chemicals',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-pool flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
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
            Choose your package and book your first visit today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/62811XXXXXXX?text=I%20want%20to%20book%20pool%20service"
              className="btn-primary bg-white text-pool hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp to Book
            </a>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Or Use Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
