import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Shield, AlertTriangle, Calendar, MessageCircle } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Pool Cleaning Bali Pricing | Pool Maintenance Bali Quotes | Free Quote',
  description: 'Bali Pool Pros pricing: Get a personalized quote for weekly pool maintenance Bali, pool cleaning Bali, pool chemical balancing, emergency algae treatment and green pool rescue. Transparent Bali villa pool service pricing. No hidden fees.',
  keywords: 'pool cleaning Bali price, pool maintenance Bali cost, Bali villa pool service pricing, green pool rescue cost, pool chemical balancing rates, pool service quote Bali',
};

const faqs = [
  {
    question: 'What is included in the weekly maintenance service?',
    answer: 'Our weekly maintenance packages include complete water chemistry testing and balancing, debris skimming and removal, filter inspection and cleaning, pump inspection, tile line brushing, and professional-grade chemicals. All service visits include before/after photos and detailed reports sent via WhatsApp. There are no hidden fees or surprise charges.',
  },
  {
    question: 'Why should I contact you for pricing?',
    answer: 'Every pool is unique, and we believe in providing personalized quotes based on your specific needs. Factors like pool size, type (freshwater/saltwater), location, and condition all affect the final price. By contacting us, you get an accurate quote tailored to your situation, not a one-size-fits-all price.',
  },
  {
    question: 'Do you offer discounts for longer contracts?',
    answer: 'Yes! We offer significant discounts for longer-term contracts. Contact us via WhatsApp to discuss 3-month, 6-month, and annual service agreements and learn about the savings available.',
  },
  {
    question: 'How do you determine the price for green pool rescue?',
    answer: 'Green pool rescue pricing depends on pool size and algae severity. Larger pools require more chemicals, and severe algae blooms need more intensive treatment. We assess your pool via photos or in-person visit and provide a fixed quote before starting work.',
  },
  {
    question: 'Are chemicals included in the service price?',
    answer: 'Yes, all professional-grade chemicals are included in our service pricing. This includes chlorine, pH balancers, algaecides, and specialty treatments. You never pay extra for chemicals—it is all part of our transparent, fixed pricing.',
  },
  {
    question: 'What is the minimum contract length?',
    answer: 'Our Standard and Premium weekly maintenance packages typically require a 3-month minimum commitment. This allows us to properly establish and maintain your pool optimal condition. Contact us to discuss flexible options.',
  },
  {
    question: 'Is there a charge for same-day emergency service?',
    answer: 'Same-day emergency response is available in Canggu and Seminyak (if contacted before 10 AM). Contact us to learn about emergency service availability and any applicable fees for your area.',
  },
  {
    question: 'How do I get a custom quote for my pool?',
    answer: 'Contact us via WhatsApp with your pool location, type (freshwater/saltwater), and approximate size. We offer free initial assessments for new clients to evaluate your pool and provide accurate, personalized pricing.',
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80)' }}
          role="img"
          aria-label="Crystal clear pool with transparent pool service pricing in Bali"
        />
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pool Cleaning Bali &amp; Pool Maintenance Pricing
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl mx-auto mb-8">
            Transparent, fair pricing for professional pool cleaning Bali, pool maintenance Bali, pool chemical balancing, and Bali villa pool service. No hidden fees. No surprises.
          </p>
          <a
            href="https://wa.me/6282237565997?text=I%20would%20like%20a%20price%20quote%20for%20pool%20service"
            className="btn-primary bg-white text-pool hover:bg-gray-100 inline-flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Contact Us to Get a Price</span>
          </a>
        </div>
      </section>

      {/* Weekly Maintenance Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Weekly Pool Maintenance Bali Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Package */}
            <div className="card border-2 border-pool">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-pool-darker">Standard</h3>
                <p className="text-gray-600 mb-4">1x/week maintenance</p>
                <div className="text-xl font-semibold text-pool mb-2">Contact us to get a price</div>
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
                    <CheckCircle2 className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282237565997?text=I%20want%20a%20quote%20for%20Standard%20weekly%20maintenance"
                className="btn-primary w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
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
                <div className="text-xl font-semibold text-blue-500 mb-2">Contact us to get a price</div>
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
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282237565997?text=I%20want%20a%20quote%20for%20Plus%20weekly%20maintenance"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </div>

            {/* Premium Package */}
            <div className="card border-2 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-pool-darker">Premium</h3>
                <p className="text-gray-600 mb-4">Saltwater & complex systems</p>
                <div className="text-xl font-semibold text-purple-500 mb-2">Contact us to get a price</div>
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
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282237565997?text=I%20want%20a%20quote%20for%20Premium%20weekly%20maintenance"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Contract Discounts */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card bg-green-50 border-2 border-green-500">
              <div className="flex items-start space-x-4">
                <Calendar className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-pool-darker">Contract Discounts Available</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700"><strong>3-month contract:</strong> Special discount available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700"><strong>6-month contract:</strong> Greater savings</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700"><strong>Annual contract:</strong> Best value - contact us for details</span>
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
                <AlertTriangle className="h-12 w-12 text-red-500 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-pool-darker">Green Pool Rescue</h3>
                  <p className="text-xl font-semibold text-red-500 mb-4">Contact us to get a price</p>
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
                        <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6282237565997?text=EMERGENCY%20-%20Green%20pool%20rescue%20quote%20needed"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Emergency Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Emergency Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-orange-50 border border-orange-300">
                <h4 className="font-bold text-lg mb-2 text-pool-darker">Same-Day Response</h4>
                <p className="text-xl font-semibold text-orange-600 mb-2">Contact us for availability</p>
                <p className="text-gray-700">Available in Canggu/Seminyak if contacted before 10 AM</p>
              </div>
              <div className="card bg-orange-50 border border-orange-300">
                <h4 className="font-bold text-lg mb-2 text-pool-darker">Follow-Up Treatment</h4>
                <p className="text-xl font-semibold text-orange-600 mb-2">Contact us to get a price</p>
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
              <Shield className="h-12 w-12 text-pool flex-shrink-0" aria-hidden="true" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-pool-darker">Why Get a Personalized Quote?</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Every pool is unique. Your pool&apos;s size, type, condition, and location all affect the service required. Rather than offering generic prices that may not fit your situation, we provide personalized quotes that ensure you get exactly what you need—nothing more, nothing less.
                </p>
                <p className="text-gray-700 text-lg">
                  This approach means fair pricing for you and quality service from us. Contact us today for a free, no-obligation quote tailored to your pool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What&apos;s Included in All Packages
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Water testing',
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
                  <CheckCircle2 className="h-5 w-5 text-pool flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Pricing FAQs" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Personalized Quote?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote for your pool service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282237565997?text=I%20would%20like%20a%20price%20quote%20for%20pool%20service"
              className="btn-primary bg-white text-pool hover:bg-gray-100 inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>WhatsApp for Quote</span>
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
