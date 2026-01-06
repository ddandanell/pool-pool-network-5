import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, AlertTriangle, CheckCircle2, TestTube, Filter, Waves, Camera, MessageCircle, Wrench, Settings, Leaf } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Pool Cleaning Bali Services | Pool Maintenance, Chemical Balancing & Algae Treatment',
  description: 'Complete pool cleaning Bali services: weekly pool maintenance Bali, pool chemical balancing, algae treatment, green pool rescue, Bali villa pool service, and emergency services. WhatsApp to book.',
  keywords: 'pool cleaning Bali, pool maintenance Bali, Bali villa pool service, pool chemical balancing, algae treatment, green pool rescue, pool services Bali, villa pool maintenance',
};

const faqs = [
  {
    question: 'What pool cleaning Bali services do you offer?',
    answer: 'We offer comprehensive pool cleaning Bali services including weekly pool maintenance Bali, pool chemical balancing, algae treatment, green pool rescue, filter and pump maintenance, pool repair, new pool installation, and emergency Bali villa pool service. Our services cover all types of pools including freshwater, saltwater, and infinity-edge systems.',
  },
  {
    question: 'How often should my pool be serviced in Bali\'s tropical climate?',
    answer: 'We recommend weekly pool maintenance Bali as the standard for tropical climate. During the rainy season (November to March), twice-weekly pool cleaning Bali helps prevent algae growth and maintains proper pool chemical balancing. Our team can assess your specific pool and usage to recommend the optimal service frequency.',
  },
  {
    question: 'Do you provide pool chemical balancing services?',
    answer: 'Yes! Pool chemical balancing is a core part of our pool maintenance Bali service. We test and balance pH, chlorine, alkalinity, and other chemicals specific to Bali\'s tropical conditions with high UV and rainfall. Proper pool chemical balancing is critical for preventing algae and protecting equipment.',
  },
  {
    question: 'Can you repair pool equipment?',
    answer: 'Absolutely. Our technicians are trained in pool equipment repair including pumps, filters, chlorinators, salt cells, and control systems. We carry common replacement parts and can source specialized equipment as needed for our Bali villa pool service.',
  },
  {
    question: 'Do you offer algae treatment and green pool rescue?',
    answer: 'Yes, we specialize in algae treatment and green pool rescue services with same-day response in Canggu and Seminyak. Our emergency team provides professional shock treatment, algae removal, and complete pool chemical balancing to restore your pool within 24-48 hours.',
  },
  {
    question: 'What chemicals do you use for pool maintenance?',
    answer: 'We use professional-grade pool chemicals safe for all pool types and swimmers. This includes stabilized chlorine, pH balancers, algaecides, and specialty treatments for tropical conditions. All chemicals for pool chemical balancing are included in our pool maintenance Bali pricing—no extra charges.',
  },
  {
    question: 'How quickly can you respond to pool emergencies?',
    answer: 'We offer same-day emergency response for algae treatment and green pool rescue in Canggu and Seminyak areas (if contacted before 10 AM). Other areas typically receive pool cleaning Bali service within 1-2 business days. Our 24-hour emergency WhatsApp line is available for urgent situations.',
  },
  {
    question: 'Do you provide service reports?',
    answer: 'Yes, every Bali villa pool service visit includes a detailed report with before/after photos, water chemistry readings from pool chemical balancing, work completed, and recommendations. Reports are sent via WhatsApp within hours of each pool maintenance Bali visit.',
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)' }}
          role="img"
          aria-label="Professional pool technician servicing a luxury villa pool in Bali"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Pool Cleaning Bali &amp; Maintenance Solutions for Villas &amp; Resorts
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            From weekly pool maintenance Bali to emergency algae treatment and green pool rescue—we offer comprehensive pool cleaning Bali services, pool chemical balancing, and Bali villa pool service tailored to tropical climate. Over 14 years of experience serving 500+ properties annually.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pool-darker text-center">
              Professional Pool Cleaning Bali Services Across Bali
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Bali Pool Pros, we understand that every pool is unique. Whether you own a luxury villa in Canggu, manage a resort in Nusa Dua, or have a residential property in Ubud, our experienced team provides customized pool cleaning, maintenance, chemical balancing, algae treatment, and villa pool service to meet your specific needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bali&rsquo;s tropical climate presents unique challenges for pool owners. High humidity accelerates algae growth, monsoon rains dilute pool chemicals, and the salt air in coastal areas can cause corrosion. Our team has spent over a decade developing specialized techniques and chemical balancing protocols specifically for these conditions, ensuring your pool stays crystal clear year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Core Pool Cleaning Bali &amp; Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Weekly Maintenance */}
            <div className="card border-2 border-pool">
              <div className="text-pool mb-4">
                <Droplets className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-pool-darker">Weekly Pool Maintenance Bali</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our signature weekly pool maintenance Bali service keeps your pool clean, balanced, and safe year-round. Includes comprehensive pool chemical balancing and Bali villa pool service ideal for villa owners who want set-and-forget reliability.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Consistent weekly or bi-weekly schedule',
                  'Complete water chemistry testing and balancing',
                  'Prevents problems before they start',
                  'Transparent, fixed pricing with no surprises',
                  'Detailed WhatsApp reporting after each visit',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-pool mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/weekly-maintenance" className="btn-primary">
                Learn About Weekly Maintenance
              </Link>
            </div>

            {/* Emergency Green Pool Rescue */}
            <div className="card border-2 border-red-500">
              <div className="text-red-500 mb-4">
                <AlertTriangle className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-pool-darker">Emergency Algae Treatment &amp; Green Pool Rescue</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Your pool turned green overnight? Don&rsquo;t panic. Our emergency algae treatment and green pool rescue team provides professional pool chemical balancing, shock treatment, and complete restoration within 24-48 hours.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Same-day emergency response in Canggu & Seminyak',
                  'Professional algae treatment and removal',
                  '24-48 hour pool recovery with pool chemical balancing',
                  'Complete water rebalancing included',
                  'Follow-up Bali villa pool service if needed (rare cases)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/green-pool-rescue" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
                Learn About Emergency Rescue
              </Link>
            </div>

            {/* Pool Repair */}
            <div className="card border-2 border-orange-500">
              <div className="text-orange-500 mb-4">
                <Wrench className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-pool-darker">Pool Repair Services</h3>
              <p className="text-gray-600 mb-6 text-lg">
                From pump failures to filter problems, our experienced technicians diagnose and repair pool equipment quickly. We carry common parts and can source specialized components for any pool system.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Pump motor repair and replacement',
                  'Filter system maintenance and repair',
                  'Salt cell cleaning and replacement',
                  'Leak detection and repair',
                  'Control system troubleshooting',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282237565997?text=I%20need%20pool%20repair%20service"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Repair Service
              </a>
            </div>

            {/* Pool Installation */}
            <div className="card border-2 border-green-500">
              <div className="text-green-500 mb-4">
                <Settings className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-pool-darker">Pool Installation</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Planning a new villa or renovating an existing property? Our installation team designs and builds pools that perform beautifully in Bali&rsquo;s tropical climate. We handle everything from permits to completion.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Complete pool design and construction',
                  'Saltwater and freshwater systems',
                  'Infinity edge and architectural pools',
                  'Energy-efficient equipment selection',
                  'Ongoing maintenance contracts available',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282237565997?text=I%20want%20to%20discuss%20pool%20installation"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What&rsquo;s Included in Our Pool Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TestTube className="h-10 w-10" />,
                title: 'Water Testing & Chemical Balancing',
                description: 'Complete water chemistry analysis and precise pH, chlorine, and alkalinity adjustment for optimal swimmer comfort and safety',
              },
              {
                icon: <Waves className="h-10 w-10" />,
                title: 'Skimming & Debris Removal',
                description: 'Surface cleaning, net debris removal, and tile line brushing for pristine, inviting pool water',
              },
              {
                icon: <Filter className="h-10 w-10" />,
                title: 'Filter Inspection & Cleaning',
                description: 'Weekly filter pressure checks, backwashing as needed, and pump motor inspection to ensure efficient operation',
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: 'Algae Prevention Treatment',
                description: 'Seasonal algae-prevention treatments specially formulated for Bali&rsquo;s tropical climate and conditions',
              },
              {
                icon: <Camera className="h-10 w-10" />,
                title: 'Before/After Photo Documentation',
                description: 'Visual documentation of every service visit sent directly to you for your records and peace of mind',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp Updates & Reports',
                description: 'Real-time communication and detailed photo reports sent after each visit via WhatsApp',
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: 'Written Service Checklists',
                description: 'Detailed service checklists documenting exactly what was done and any recommendations for your pool',
              },
              {
                icon: <Droplets className="h-10 w-10" />,
                title: 'Professional-Grade Chemicals',
                description: 'All pool chemicals are included in our service pricing—no extra charges or surprise fees',
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

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Pool Cleaning Bali &amp; Maintenance Services FAQ" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Professional Pool Service?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Choose the service that fits your needs. Our Bali pool experts are here to help with maintenance, cleaning, repair, or installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary bg-white text-pool hover:bg-gray-100">
              View Pricing
            </Link>
            <a
              href="https://wa.me/6282237565997?text=I%20need%20pool%20service"
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
