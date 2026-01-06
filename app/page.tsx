import Link from 'next/link';
import { CheckCircle2, MessageCircle, Clock, Shield, FileText, Droplets, Star, MapPin, Wrench, Leaf } from 'lucide-react';
import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'How often should I maintain my pool in Bali\'s tropical climate?',
    answer: 'In Bali\'s warm and humid climate, we recommend weekly pool maintenance at minimum. The combination of high temperatures, humidity, and abundant sunlight creates ideal conditions for algae growth. During the rainy season (November to March), twice-weekly maintenance is recommended to prevent algae blooms and maintain proper chemical balance.',
  },
  {
    question: 'What are the most common pool issues in tropical areas like Bali?',
    answer: 'The most common pool issues we encounter in Bali include rapid algae growth due to warm temperatures, chemical imbalances from heavy rainfall, debris accumulation from tropical vegetation, saltwater corrosion in coastal areas, and pump/filter problems caused by humidity. Our specialized approach addresses all these Bali-specific challenges.',
  },
  {
    question: 'Do you offer emergency green pool rescue services?',
    answer: 'Yes! Our emergency green pool rescue service offers same-day response in Canggu and Seminyak areas. We provide professional shock treatment, algae removal, and complete water rebalancing. Most green pools are restored to crystal-clear water within 24-48 hours.',
  },
  {
    question: 'What areas in Bali do you service?',
    answer: 'We serve all major villa and resort areas across Bali, including Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, and Kerobokan. Same-day emergency service is available in Canggu and Seminyak, with 1-2 day response times for other areas.',
  },
  {
    question: 'How much does pool maintenance cost in Bali?',
    answer: 'We offer personalized pricing based on your pool size, type, and specific needs. Contact us via WhatsApp for a free, no-obligation quote tailored to your situation. We offer packages for standard maintenance, rainy season enhanced service, and saltwater pool care.',
  },
  {
    question: 'Can you maintain saltwater pools?',
    answer: 'Absolutely! We have extensive experience with saltwater pool systems. Our Premium package is specifically designed for saltwater pools and includes salt cell cleaning, corrosion prevention, and specialized chemical management. Many Bali villas use saltwater systems, and we\'re experts in maintaining them.',
  },
  {
    question: 'What is included in your weekly maintenance service?',
    answer: 'Our comprehensive weekly service includes water chemistry testing and balancing, debris skimming and removal, filter inspection and cleaning, pump and motor inspection, tile line brushing, algae prevention treatment, and detailed photo reports sent via WhatsApp. All chemicals are included.',
  },
  {
    question: 'How do I book your pool service?',
    answer: 'The fastest way to book is via WhatsApp—just message us at +62 822-3756-5997 and we\'ll respond within 2 hours during business hours. You can also use our contact form or email us. We confirm your first visit quickly and can often schedule within 24-48 hours.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-24 md:py-40">
        {/* Hero background image placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=80)' }}
          role="img"
          aria-label="Stunning infinity pool overlooking Bali rice terraces at sunrise"
        />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Pool Service in Bali—Maintenance, Cleaning, Repair &amp; Installation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pool-light">
              Bali&rsquo;s trusted pool experts since 2010. Keep your villa pool crystal clear with our weekly maintenance, emergency rescue, and professional repair services. WhatsApp booking available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282237565997?text=POOL%20SERVICE"
                className="btn-primary text-center inline-flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>WhatsApp Us Now</span>
              </a>
              <Link href="/pricing" className="btn-secondary bg-white hover:bg-gray-100 text-pool text-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 50C240 100 480 100 720 50C960 0 1200 0 1440 50V100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction / About Summary */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pool-darker">
              Bali&rsquo;s Leading Pool Service Experts Since 2010
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Welcome to Bali Pool Pros, the island&rsquo;s most trusted pool service company. Founded in 2010 by a team of local Balinese experts and international pool specialists, we understand the unique challenges of maintaining pools in Bali&rsquo;s tropical climate. From the humidity of Ubud to the salt air of Seminyak, we tailor our services to ensure your pool stays crystal clear year-round.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We serve over 500 villas, resorts, and residential properties annually across Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, and beyond. Whether you need weekly pool maintenance, emergency green pool rescue, pool repair, or new pool installation, our experienced team delivers reliable, transparent, and professional service. Contact us today via WhatsApp for the fastest response.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Complete Pool Care Services for Bali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="h-12 w-12" />,
                title: 'Pool Maintenance Bali',
                description: 'Weekly and bi-weekly pool cleaning and maintenance tailored to Bali\'s tropical climate. Chemical balancing, debris removal, and filter care included.',
                link: '/weekly-maintenance',
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: 'Pool Cleaning Bali',
                description: 'Professional pool cleaning services for villas, resorts, and homes. Keep your pool sparkling with our thorough cleaning protocols.',
                link: '/services',
              },
              {
                icon: <Wrench className="h-12 w-12" />,
                title: 'Pool Repair Bali',
                description: 'Expert pool repair services including pump repairs, filter replacements, and equipment maintenance. Fast, reliable repairs when you need them.',
                link: '/services',
              },
              {
                icon: <Leaf className="h-12 w-12" />,
                title: 'Pool Installation Bali',
                description: 'Complete swimming pool installation services for new villas and renovations. Design, build, and maintain your dream pool in paradise.',
                link: '/services',
              },
            ].map((service, index) => (
              <Link key={index} href={service.link} className="card text-center group hover:border-pool hover:border-2 transition-all">
                <div className="text-pool mb-4 flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-3 text-pool-darker">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            How Pool Service Works in Bali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'WhatsApp Us', description: 'Message us on WhatsApp with your villa location and pool details. We respond within 2 hours.' },
              { step: '2', title: 'Quick Confirmation', description: 'We confirm your first pool service visit and discuss your needs and schedule.' },
              { step: '3', title: 'Expert Service', description: 'Our trained Bali pool technicians arrive on time and provide thorough maintenance.' },
              { step: '4', title: 'Detailed Reports', description: 'Receive written reports and photos via WhatsApp after every pool service visit.' },
              { step: '5', title: 'Ongoing Support', description: 'Flexible scheduling, seasonal adjustments, and 24/7 emergency support available.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-pool text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-pool-darker">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Why Choose Bali Pool Pros for Pool Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: 'Same-Day Emergency Response',
                description: 'Green pool emergency? We offer same-day pool rescue in Canggu and Seminyak. Your pool can be clear within 24-48 hours.',
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Transparent Pool Service Pricing',
                description: 'No surprises. Fixed weekly rates for pool maintenance. All chemicals included. No hidden charges for our Bali pool service.',
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: 'Local Bali Pool Experts',
                description: 'Based in Bali since 2010. We understand the tropical climate, monsoon challenges, and what it takes to maintain pools in paradise.',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp Pool Booking',
                description: 'Talk directly to our team. No automated systems. Easy pool service booking via WhatsApp with fast response times.',
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: 'Detailed Pool Reports',
                description: 'Photo and written checklist after every pool maintenance visit. Know exactly what was done and the condition of your pool.',
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: 'Expert Pool Care',
                description: 'Experienced with saltwater, freshwater, and infinity-edge pools. From villa pools to resort pools, we\'ve maintained them all.',
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <div className="text-pool mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-3 text-pool-darker">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pool-darker">
            Pool Service Areas in Bali
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide professional pool maintenance, cleaning, and repair services across all major areas of Bali. Same-day emergency service available in select locations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Canggu', badge: 'Same-Day' },
              { name: 'Seminyak', badge: 'Same-Day' },
              { name: 'Ubud', badge: null },
              { name: 'Uluwatu', badge: null },
              { name: 'Sanur', badge: null },
              { name: 'Nusa Dua', badge: null },
            ].map((area, index) => (
              <div key={index} className="card text-center py-4 relative">
                <MapPin className="h-6 w-6 text-pool mx-auto mb-2" aria-hidden="true" />
                <span className="font-semibold text-pool-darker">{area.name}</span>
                {area.badge && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {area.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/areas" className="text-pool hover:underline font-semibold">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What Our Clients Say About Our Pool Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'My villa pool was bright green after the rainy season. Bali Pool Pros rescued it in 24 hours. Best pool service in Canggu by far!',
                author: 'Villa Owner, Canggu',
                rating: 5,
              },
              {
                quote: 'They\'re punctual, professional, and actually explain what they do. The WhatsApp booking and updates are incredibly convenient.',
                author: 'Villa Manager, Seminyak',
                rating: 5,
              },
              {
                quote: 'Been using their pool maintenance service for 8 months. Never missed a schedule. Transparent pricing. Highly recommend!',
                author: 'Property Owner, Uluwatu',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="card bg-pool-light">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-pool-darker">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Pool Service in Bali - Frequently Asked Questions" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Book Professional Pool Service in Bali?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pool-light max-w-2xl mx-auto">
            Get started today with Bali&rsquo;s most trusted pool maintenance, cleaning, and repair experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282237565997?text=POOL%20SERVICE"
              className="btn-primary bg-white text-pool hover:bg-gray-100 text-center inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>WhatsApp: +62 822-3756-5997</span>
            </a>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10 text-center">
              Or Use Our Contact Form
            </Link>
          </div>
          <p className="mt-6 text-pool-light">Message &ldquo;POOL SERVICE&rdquo; to get started with Bali&rsquo;s pool experts</p>
        </div>
      </section>
    </div>
  );
}
