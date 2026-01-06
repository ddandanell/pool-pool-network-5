import Link from 'next/link';
import { CheckCircle2, MessageCircle, Clock, Shield, FileText, Droplets, Star, MapPin, Wrench, Leaf } from 'lucide-react';
import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'Why does my pool turn green so quickly in Bali?',
    answer: 'Bali\'s warm temperatures and high humidity cause rapid algae growth within 48 hours if untreated. The tropical climate, combined with high UV exposure and frequent rainfall, creates perfect conditions for algae blooms. Regular professional pool cleaning and proper chemical balancing are essential to prevent green pools.',
  },
  {
    question: 'How often should my pool be cleaned and treated?',
    answer: 'At least weekly pool maintenance Bali is recommended as a minimum. During Bali\'s monsoon season (November to March), 2-3 visits per week are ideal to maintain proper chemical balance and prevent algae growth. Our Bali villa pool service packages can be customized to your needs.',
  },
  {
    question: 'What effect does Bali\'s monsoon season have on pool water quality?',
    answer: 'Heavy monsoon rains dilute pool chemicals, introduce debris like frangipani flowers and palm fronds, and throw off pH balance significantly. This makes regular pool cleaning Bali and pool chemical balancing critical during the rainy season to maintain safe, clear water.',
  },
  {
    question: 'Why is regular chemical balancing important in Bali?',
    answer: 'Bali\'s high UV levels break down chlorine rapidly, while humidity impacts pH and alkalinity levels. Pool chemical balancing ensures safe swimming conditions and prevents equipment corrosion. Without proper chemical management, pools can turn green within days.',
  },
  {
    question: 'How do I prevent equipment failures and costly repairs?',
    answer: 'Humidity and salt air in Bali corrode pumps and filters quickly. Regular pool maintenance Bali services include equipment inspection and servicing to catch issues early. Our Bali villa pool service includes comprehensive equipment checks to prevent costly failures.',
  },
  {
    question: 'What type of debris is common in Bali pools?',
    answer: 'Tropical debris like frangipani flowers, palm fronds, and various tropical leaves are common in Bali pools, requiring daily skimming. Our pool cleaning Bali service handles all debris removal as part of regular maintenance visits.',
  },
  {
    question: 'How much does pool maintenance cost in Bali?',
    answer: 'Weekly pool maintenance Bali plans start around IDR 800,000/month, varying by pool size and location. Contact us via WhatsApp for personalized pricing for our Bali villa pool service packages.',
  },
  {
    question: 'Should I use saltwater systems or traditional chlorine?',
    answer: 'Saltwater systems are popular for being gentler on skin, but require regular chlorinator cell cleaning and pool chemical balancing. Our pool maintenance Bali service handles both saltwater and traditional chlorine systems with specialized care.',
  },
  {
    question: 'What are the health and safety concerns for rental properties?',
    answer: 'Clean pools protect guests from waterborne illnesses, prevent bad reviews, and ensure hospitality compliance. Our Bali villa pool service provides detailed reports and consistent pool cleaning Bali to keep rental properties guest-ready at all times.',
  },
  {
    question: 'Can I maintain my pool myself, or should I hire professionals?',
    answer: 'Bali\'s challenging tropical conditions—rapid algae growth, monsoon impacts, and equipment corrosion—make professional pool cleaning Bali services preferable for most owners. Our expertise in pool chemical balancing and algae treatment saves time and prevents costly mistakes.',
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
              Pool Cleaning Bali—Expert Pool Maintenance &amp; Bali Villa Pool Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pool-light">
              Professional pool cleaning Bali and pool maintenance Bali services since 2010. Specializing in pool chemical balancing, algae treatment, and Bali villa pool service. Keep your pool crystal clear year-round with our expert care.
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
              Bali&rsquo;s Leading Pool Cleaning &amp; Maintenance Experts Since 2010
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Welcome to Bali Pool Pros, the island&rsquo;s most trusted pool cleaning and maintenance company. Founded in 2010 by local Balinese experts and international pool specialists, we understand the unique challenges of maintaining pools in Bali&rsquo;s tropical climate. Our specialized villa pool service includes <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-pool hover:underline font-medium">chemical balancing</a>, <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-pool hover:underline font-medium">algae treatment</a>, and green pool rescue—tailored for the humidity of Ubud to the salt air of Seminyak.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We serve over 500 villas, resorts, and residential properties annually across Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, and beyond. Whether you need <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-pool hover:underline font-medium">weekly maintenance</a>, emergency <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-pool hover:underline font-medium">algae treatment and green pool rescue</a>, pool repair, or new pool installation, our experienced team delivers reliable, transparent, and professional service. Contact us today via WhatsApp for the fastest response.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Complete Pool Cleaning Bali &amp; Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="h-12 w-12" />,
                title: 'Pool Maintenance Bali',
                description: 'Weekly and bi-weekly pool maintenance Bali services tailored to tropical climate. Comprehensive pool chemical balancing, debris removal, and filter care included.',
                link: '/weekly-maintenance',
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: 'Pool Cleaning Bali',
                description: 'Professional pool cleaning Bali services for villas, resorts, and homes. Expert Bali villa pool service keeps your pool sparkling with thorough cleaning protocols.',
                link: '/services',
              },
              {
                icon: <Wrench className="h-12 w-12" />,
                title: 'Algae Treatment & Green Pool Rescue',
                description: 'Emergency algae treatment and green pool rescue services. Fast, reliable repairs and shock treatments when you need them most.',
                link: '/green-pool-rescue',
              },
              {
                icon: <Leaf className="h-12 w-12" />,
                title: 'Pool Chemical Balancing',
                description: 'Expert pool chemical balancing for Bali\'s tropical conditions. Proper pH, chlorine, and alkalinity management for safe, clear water.',
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
            How Pool Cleaning Bali Services Work
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
            Why Choose Bali Pool Pros for Pool Cleaning Bali &amp; Villa Pool Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: 'Same-Day Algae Treatment & Green Pool Rescue',
                description: 'Green pool emergency? We offer same-day algae treatment and green pool rescue in Canggu and Seminyak. Your pool can be clear within 24-48 hours.',
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Transparent Bali Villa Pool Service Pricing',
                description: 'No surprises. Fixed weekly rates for pool maintenance Bali and pool cleaning Bali. All chemicals included. No hidden charges.',
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: 'Local Pool Cleaning Bali Experts',
                description: 'Based in Bali since 2010. We understand tropical climate, monsoon challenges, pool chemical balancing needs, and what it takes to maintain pools in paradise.',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp Pool Maintenance Booking',
                description: 'Talk directly to our Bali villa pool service team. No automated systems. Easy pool cleaning Bali booking via WhatsApp with fast response times.',
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: 'Detailed Pool Maintenance Reports',
                description: 'Photo and written checklist after every pool maintenance Bali visit. Know exactly what was done and your pool chemical balancing status.',
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: 'Expert Pool Chemical Balancing',
                description: 'Experienced with saltwater, freshwater, and infinity-edge pools. From villa pools to resort pools, we provide expert pool chemical balancing for all.',
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
            Pool Cleaning Bali Service Areas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide professional pool maintenance Bali, pool cleaning Bali, and Bali villa pool service across all major areas. Same-day emergency algae treatment available in select locations.
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
            What Our Clients Say About Our Pool Cleaning Bali Service
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
      <FAQ faqs={faqs} title="Pool Cleaning Bali &amp; Pool Maintenance - Frequently Asked Questions" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Book Professional Pool Cleaning Bali Service?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pool-light max-w-2xl mx-auto">
            Get started today with Bali&rsquo;s most trusted pool maintenance Bali, pool cleaning Bali, and Bali villa pool service experts
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
