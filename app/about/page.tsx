import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Clock, Users, Leaf, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Bali Pool Care | Our Team & Values',
  description: 'Bali Pool Care: experienced pool technicians serving Bali villas since [YEAR]. Local, reliable, WhatsApp-first service.',
  keywords: 'about Bali Pool Care, pool care team, local pool service',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pool to-pool-dark text-white py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bali Pool Care
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Local pool care experts dedicated to keeping Bali&rsquo;s villa pools crystal clear
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pool-darker text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg mb-6">
                We&rsquo;re a small, local team of pool technicians based in Bali. We started because we noticed villa owners and managers couldn&rsquo;t find reliable, straightforward pool care. Most services were expensive, slow, or unclear about pricing.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We saw villa owners frustrated with:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Technicians who showed up late or not at all',
                  'Hidden charges and surprise fees',
                  'Poor communication and no service updates',
                  'Generic treatments that didn\'t work for Bali\'s climate',
                  'No emergency response when pools turned green',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-pool text-xl">•</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-lg">
                So we built Bali Pool Care differently. Fixed pricing. WhatsApp communication. Same-day emergency response. Written reports after every visit. We treat your pool like it&rsquo;s our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: 'Punctuality',
                description: 'If we say Tuesday 9 AM, we\'re there at 9 AM. Reliability you can count on.',
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Transparency',
                description: 'All prices are fixed. No upsells, no hidden fees. What you see is what you pay.',
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: 'Local Knowledge',
                description: 'We understand Bali\'s climate, water, and villa cultures. We\'re part of this community.',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp-First',
                description: 'You reach a human, not a chatbot. Direct communication, fast responses.',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-pool mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3 text-pool-darker">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Team
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-start space-x-4 mb-6">
                <Users className="h-12 w-12 text-pool flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pool-darker">
                    Experienced Pool Technicians
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Our team consists of certified pool technicians with years of experience maintaining pools across Bali. We specialize in:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Saltwater and freshwater pool systems',
                      'Infinity edge and architectural pools',
                      'Chemical balancing for tropical climates',
                      'Emergency algae treatment and recovery',
                      'Pump, filter, and equipment maintenance',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-pool text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-pool-light p-6 rounded-lg mt-6">
                <p className="text-gray-700 text-center">
                  <strong>PLACEHOLDER:</strong> Add names and experience of key staff members here (e.g., &ldquo;Lead Technician: Made, 8 years experience&rdquo;)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Values
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Fully Insured',
                description: 'We carry full liability insurance for your peace of mind. Your property is protected.',
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: 'Environmental Best Practices',
                description: 'Proper chemical disposal, sustainable practices, and eco-friendly pool care methods.',
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: 'Community Focus',
                description: 'We\'re part of the Bali community. We support local businesses and employ local technicians.',
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: 'Customer Education',
                description: 'We explain what we do and why. You understand your pool\'s health, not just pay for service.',
              },
            ].map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-pool flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-pool-darker">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Why We&rsquo;re Different
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'We Actually Show Up',
                description: 'Reliability is rare in Bali. We built our entire business on being punctual and consistent. If we commit to a schedule, we keep it.',
              },
              {
                title: 'We Communicate Clearly',
                description: 'No jargon. No confusing technical terms. We explain what\'s happening with your pool in plain language, with photos and written reports.',
              },
              {
                title: 'We Understand Bali',
                description: 'Rainy season algae blooms. Saltwater corrosion. Jungle debris. Mineral-rich water. We adjust our approach to Bali\'s unique conditions.',
              },
              {
                title: 'We Price Fairly',
                description: 'Fixed pricing means you budget confidently. We don\'t nickel-and-dime with surprise charges. Transparent pricing builds long-term relationships.',
              },
            ].map((item, index) => (
              <div key={index} className="card bg-pool-light">
                <h3 className="font-semibold text-xl mb-3 text-pool-darker">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-pool text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Join hundreds of villa owners who trust Bali Pool Care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-pool hover:bg-gray-100">
              Contact Our Team
            </Link>
            <a
              href="https://wa.me/62811XXXXXXX?text=I%20want%20to%20learn%20more%20about%20your%20service"
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
