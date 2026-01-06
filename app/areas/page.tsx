import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Palmtree, Waves, Mountain, Building } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Pool Cleaning Bali Service Areas | Canggu, Seminyak, Ubud, Uluwatu & More',
  description: 'Professional pool cleaning Bali and pool maintenance Bali services across all areas: Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua. Same-day emergency algae treatment available. Bali villa pool service. WhatsApp to book.',
  keywords: 'pool cleaning Bali areas, Canggu pool maintenance, Seminyak pool cleaning, Ubud pool service, Bali villa pool service, pool chemical balancing Bali',
};

const faqs = [
  {
    question: 'What areas of Bali do you provide pool service?',
    answer: 'We provide pool maintenance, cleaning, and repair services across all major areas of Bali including Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Kerobokan, Gianyar, Bedugul, Candidasa, and Padang Bai. If your area isn\'t listed, contact us—we may still be able to serve you.',
  },
  {
    question: 'Which areas have same-day emergency service?',
    answer: 'Same-day emergency green pool rescue is available in Canggu and Seminyak (if contacted before 10 AM). Other areas typically receive emergency service within 1-2 business days. We prioritize urgent situations across all service areas.',
  },
  {
    question: 'Do prices vary by location?',
    answer: 'Our base pricing is the same across all service areas. However, very remote locations may incur a small travel surcharge. We\'ll always inform you of any additional costs upfront before starting service.',
  },
  {
    question: 'How do you handle pools in jungle areas like Ubud?',
    answer: 'Ubud and other jungle locations require specialized care due to heavy leaf fall and mineral-rich water. We adjust our service approach with extra debris removal, more frequent filter cleaning, and treatments suited to the local water conditions.',
  },
  {
    question: 'Can you service resort and hotel pools?',
    answer: 'Yes, we work with resorts and hotels across Bali, particularly in Nusa Dua and Jimbaran. We coordinate with property management teams, offer flexible scheduling, and provide professional-grade service to meet resort standards.',
  },
  {
    question: 'Do you service saltwater pools in coastal areas?',
    answer: 'Absolutely! Many pools in Seminyak, Canggu, and other coastal areas are saltwater systems. Our Premium package is specifically designed for saltwater pools and includes corrosion prevention, salt cell maintenance, and specialized chemical management.',
  },
  {
    question: 'What\'s the response time for non-emergency service?',
    answer: 'For regular maintenance inquiries, we respond within 2 hours during business hours. First visits for new clients are typically scheduled within 24-48 hours. We work with your schedule to find the most convenient service times.',
  },
  {
    question: 'Can I get pool service if I\'m not in the listed areas?',
    answer: 'Possibly! Contact us via WhatsApp with your location, and we\'ll let you know if we can serve your area. We\'re expanding our coverage and may be able to accommodate locations not currently listed.',
  },
];

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
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80)' }}
          role="img"
          aria-label="Beautiful Bali landscape with pool service areas across the island"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pool Cleaning Bali Service Areas Across Bali
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl mb-8">
            We serve all major villa communities in Bali with professional <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">pool cleaning Bali, pool maintenance Bali</a>, <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">pool chemical balancing</a>, and Bali villa pool service. Same-day emergency algae treatment in Canggu &amp; Seminyak.
          </p>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
            <Clock className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
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
                      <MapPin className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" aria-hidden="true" />
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
            Complete Pool Cleaning Bali Coverage
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
                  Don&rsquo;t see your area? <a href="https://wa.me/6282237565997?text=Pool%20service%20inquiry" className="text-pool hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a> and we&rsquo;ll let you know if we can serve you.
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

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Pool Service Areas FAQs" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Pool Service in Your Area?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Tell us your location and we&rsquo;ll confirm your first pool maintenance visit within 2 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282237565997?text=Pool%20service%20in%20[YOUR%20AREA]"
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
