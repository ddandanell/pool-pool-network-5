import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Palmtree, Waves, Mountain, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pool Service Bali | Canggu, Seminyak, Ubud & More',
  description: 'Pool cleaning & maintenance across Bali: Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua. WhatsApp to book.',
  keywords: 'pool service areas Bali, Canggu pool cleaning, Seminyak pool maintenance',
};

export default function Areas() {
  const areas = [
    {
      name: 'Canggu',
      icon: <Palmtree className="h-12 w-12" />,
      description: 'The expat & digital nomad hub. High-turnover villas, frequent guest changes. We understand the pace.',
      features: [
        'Weekly maintenance keeps pools guest-ready',
        'Emergency service available 7 days',
        'Same-day response for urgent requests',
        'Experience with modern villa systems',
      ],
      color: 'border-pool',
    },
    {
      name: 'Seminyak',
      icon: <Waves className="h-12 w-12" />,
      description: 'Beach-close villas with saltwater and freshwater pools. Our team is experienced with salt-chlorine systems and corrosion prevention.',
      features: [
        'Saltwater pool expertise',
        'Corrosion prevention for beach environments',
        'Popular villa clusters: Oberoi area, Jalan Laksmana',
        'Same-day emergency response',
      ],
      color: 'border-blue-500',
    },
    {
      name: 'Ubud',
      icon: <Mountain className="h-12 w-12" />,
      description: 'Jungle-setting pools need special care—heavy leaf fall, mineral-rich water. We adjust treatment for Ubud\'s unique environment.',
      features: [
        'Extra debris removal (leaves, branches)',
        'Treatment for mineral-rich water',
        'Service 1-2x weekly recommended during rainy season',
        '1-2 day standard response time',
      ],
      color: 'border-green-500',
    },
    {
      name: 'Uluwatu',
      icon: <MapPin className="h-12 w-12" />,
      description: 'Clifftop infinity pools and architectural showpieces. We handle complex systems and sensitive equipment.',
      features: [
        'Infinity edge pool expertise',
        'Premium service with detailed reporting',
        'Complex system maintenance',
        'Professional handling of high-end equipment',
      ],
      color: 'border-purple-500',
    },
    {
      name: 'Sanur',
      icon: <Palmtree className="h-12 w-12" />,
      description: 'East coast villas, many with saltwater or mineral pools. Less tourism pressure, longer-term owner communities.',
      features: [
        'Reliable weekly schedules',
        'Experience with mineral pools',
        'Long-term contract discounts available',
        'Consistent service for owner-occupied villas',
      ],
      color: 'border-orange-500',
    },
    {
      name: 'Nusa Dua',
      icon: <Building className="h-12 w-12" />,
      description: 'Resort-style villas and high-end properties. We work with property managers and on-site maintenance teams.',
      features: [
        'Coordination with property management',
        'Flexible scheduling for complex properties',
        'Resort-grade service standards',
        'Professional reporting for owners',
      ],
      color: 'border-red-500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pool to-pool-dark text-white py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Pool Care Across Bali
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl mb-8">
            We serve all major villa communities in Bali. Same-day response in Canggu & Seminyak. Standard response time 1–2 days for more remote areas.
          </p>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
            <Clock className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">Response Times:</p>
              <p className="text-pool-light">Same-day: Canggu & Seminyak | 1-2 days: Other areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div key={index} className={`card border-2 ${area.color}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-pool">{area.icon}</div>
                  <h2 className="text-3xl font-bold text-pool-darker">{area.name}</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{area.description}</p>
                <ul className="space-y-3">
                  {area.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Alternative - Text-based Coverage */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Complete Bali Coverage
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-pool-darker">South Bali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Canggu</li>
                    <li>Seminyak</li>
                    <li>Kerobokan</li>
                    <li>Uluwatu</li>
                    <li>Jimbaran</li>
                    <li>Nusa Dua</li>
                    <li>Sanur</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-pool-darker">Central Bali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Ubud</li>
                    <li>Gianyar</li>
                    <li>Bedugul</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-pool-darker">East Bali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Sanur</li>
                    <li>Candidasa</li>
                    <li>Padang Bai</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-700">
                  Don&rsquo;t see your area? <a href="https://wa.me/62811XXXXXXX?text=Pool%20service%20inquiry" className="text-pool hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a> and we&rsquo;ll let you know if we can serve you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Quality Guarantee */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Same Quality Service, Every Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Local Team',
                description: 'Our technicians live in Bali and know each area\'s unique challenges',
              },
              {
                title: 'Consistent Standards',
                description: 'Every pool gets the same detailed checklist and professional care',
              },
              {
                title: 'Area Expertise',
                description: 'We adjust our approach based on local conditions (saltwater, jungle, clifftop)',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <h3 className="font-semibold text-xl mb-3 text-pool-darker">{item.title}</h3>
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
            Ready to Book Service in Your Area?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Tell us your location and we&rsquo;ll confirm your first visit within 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/62811XXXXXXX?text=Pool%20service%20in%20[YOUR%20AREA]"
              className="btn-primary bg-white text-pool hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Your Location
            </a>
            <Link href="/pricing" className="btn-secondary border-white text-white hover:bg-white/10">
              Check Pricing for Your Area
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
