import Link from 'next/link';
import { CheckCircle2, MessageCircle, Clock, Shield, FileText, Droplets } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Keep Your Bali Pool Crystal Clear—Weekly Maintenance & Emergency Rescue
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pool-light">
              Your villa pool is a centerpiece—not a headache. Bali Pool Care handles weekly maintenance and emergency algae rescue so you never swim in green water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/62811XXXXXXX?text=POOL%20CARE"
                className="btn-primary text-center inline-flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
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
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50C240 100 480 100 720 50C960 0 1200 0 1440 50V100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Message Us', description: 'Message us on WhatsApp with your villa location and pool details' },
              { step: '2', title: 'Quick Confirmation', description: 'We confirm your first visit within 2 hours' },
              { step: '3', title: 'Start Service', description: 'Weekly service starts on your preferred day' },
              { step: '4', title: 'Get Updates', description: 'Written report & photo updates sent after each visit' },
              { step: '5', title: 'Flexible', description: 'Adjust as needed (seasonal changes, special events)' },
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
            Why Choose Bali Pool Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: 'Same-Day Emergency Response',
                description: 'Green pool? We\'re there the same day.',
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Transparent Pricing',
                description: 'No surprises. Fixed weekly rates, no hidden charges.',
              },
              {
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: 'Local & Reliable',
                description: 'Based in Bali, serving all major villa areas with proven reliability.',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp Booking',
                description: 'Talk to us directly. No automated systems.',
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: 'Detailed Reporting',
                description: 'You get a photo + written checklist after every visit.',
              },
              {
                icon: <Droplets className="h-10 w-10" />,
                title: 'Expert Pool Care',
                description: 'Experienced with saltwater, freshwater, and infinity-edge pools.',
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Sample Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'My pool was bright green after the rainy season. Bali Pool Care rescued it in 24 hours. Best service in Canggu.',
                author: 'Villa Owner, Canggu',
              },
              {
                quote: 'They\'re punctual, professional, and actually explain what they do. WhatsApp booking is so convenient.',
                author: 'Villa Manager, Seminyak',
              },
              {
                quote: 'Have been using them for 8 months. Never missed a schedule. Transparent pricing. Highly recommend.',
                author: 'Property Owner, Uluwatu',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card bg-pool-light">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-pool" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-pool-darker">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Book Now on WhatsApp
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pool-light max-w-2xl mx-auto">
            Get started today with professional pool care you can trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/62811XXXXXXX?text=POOL%20CARE"
              className="btn-primary bg-white text-pool hover:bg-gray-100 text-center inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp: +62 811 XXX XXXX</span>
            </a>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10 text-center">
              Or Use Our Contact Form
            </Link>
          </div>
          <p className="mt-6 text-pool-light">Message &ldquo;POOL CARE&rdquo; to get started</p>
        </div>
      </section>
    </div>
  );
}
