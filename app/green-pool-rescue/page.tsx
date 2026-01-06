import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Droplets, Zap, PowerOff, CloudRain, Calendar, CheckCircle2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Green Pool Rescue Bali | 24-Hour Emergency Service',
  description: 'Emergency green pool cleanup in Bali. Same-day service. Full algae removal, shock treatment, re-balancing. WhatsApp to book.',
  keywords: 'green pool rescue Bali, algae removal, pool shock treatment, emergency pool service',
};

export default function GreenPoolRescue() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="flex items-center space-x-4 mb-6">
            <AlertTriangle className="h-16 w-16" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Your Pool Turned Green? We Fix It—Same Day
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl">
            Algae blooms happen. Heavy rain, power outages, neglected maintenance—your clear pool can turn green overnight. We&rsquo;ll fix it fast.
          </p>
        </div>
      </section>

      {/* What Causes Green Pools */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What Causes Green Pools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: 'Loss of Chlorine',
                description: 'Power outage, depleted chemicals, or pump failure stops chlorine circulation',
              },
              {
                icon: <CloudRain className="h-10 w-10" />,
                title: 'Heavy Rain',
                description: 'Dilutes chemicals and introduces organic matter that feeds algae',
              },
              {
                icon: <PowerOff className="h-10 w-10" />,
                title: 'Poor Circulation',
                description: 'Filter failure or clogged systems prevent proper water circulation',
              },
              {
                icon: <Calendar className="h-10 w-10" />,
                title: 'Extended Absence',
                description: 'Vacation or neglected maintenance allows algae to bloom',
              },
              {
                icon: <Droplets className="h-10 w-10" />,
                title: 'Saltwater Imbalance',
                description: 'Salt chlorine generators need proper maintenance and cell cleaning',
              },
              {
                icon: <AlertTriangle className="h-10 w-10" />,
                title: 'Chemical Imbalance',
                description: 'Low pH, high alkalinity, or incorrect chemical ratios create algae-friendly conditions',
              },
            ].map((cause, index) => (
              <div key={index} className="card">
                <div className="text-red-500 mb-4">{cause.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-pool-darker">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Rescue Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Rescue Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Immediate Assessment',
                  description: 'We test water, identify the cause, and determine severity of algae bloom',
                  details: 'Complete water chemistry analysis, filter inspection, and equipment check',
                },
                {
                  step: '2',
                  title: 'Shock Treatment',
                  description: 'High-dose chlorine to kill algae and break down organic matter',
                  details: 'Professional-grade shock treatment calibrated to your pool size and algae type',
                },
                {
                  step: '3',
                  title: 'Circulation & Filtration',
                  description: 'Run systems 24/7 initially to filter out dead algae and debris',
                  details: 'We may need to backwash multiple times as algae clears from the water',
                },
                {
                  step: '4',
                  title: 'Water Testing & Adjustment',
                  description: 'Balance pH, alkalinity, chlorine to restore safe swimming conditions',
                  details: 'Multiple rounds of testing to ensure perfect chemical balance',
                },
                {
                  step: '5',
                  title: 'Follow-Up Visit',
                  description: 'Confirm clarity, resume regular schedule, or schedule second treatment if needed',
                  details: 'Most pools clear within 24-48 hours. Severe cases may need a second visit.',
                },
              ].map((step, index) => (
                <div key={index} className="card border-l-4 border-red-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-pool-darker">{step.title}</h3>
                      <p className="text-gray-700 mb-2 font-medium">{step.description}</p>
                      <p className="text-gray-600 text-sm">{step.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-red-50 border-2 border-red-500 rounded-lg">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-pool-darker">Recovery Timeline</h4>
                  <p className="text-gray-700">
                    <strong>Most green pools clear within 24–48 hours.</strong> Severe cases may need a second visit. We&rsquo;ll keep you updated on WhatsApp throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevent Future Algae */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Prevent Future Algae
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Once we&rsquo;ve rescued your pool, the best way to prevent another green pool emergency is consistent weekly maintenance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Weekly water chemistry testing',
                'Regular chlorine and pH balancing',
                'Filter cleaning and backwashing',
                'Seasonal algae-prevention treatment',
                'Early detection of equipment issues',
                'Proactive adjustments during rainy season',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-pool-light rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-pool mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Prevention is cheaper than rescue.</strong> Weekly maintenance starts at 350k/week—less than half the cost of a single emergency rescue.
              </p>
              <Link href="/weekly-maintenance" className="btn-primary">
                Learn About Weekly Maintenance
              </Link>
            </div>
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
                q: 'How quickly can you respond to a green pool emergency?',
                a: 'Same-day response in Canggu & Seminyak (if requested before 10 AM). Other areas: 1–2 days. We also offer 24-hour emergency line for urgent calls.',
              },
              {
                q: 'What chemicals do you use, and are they safe?',
                a: 'We use standard pool-grade chlorine, pH buffers, and algaecides approved for residential pools. We do not use harsh industrial chemicals. All treatment is safe for families and pets (after proper circulation time).',
              },
              {
                q: 'How long does it take to clear a green pool?',
                a: 'Most green pools clear within 24-48 hours. Severe algae blooms or very large pools may require a second treatment. We monitor progress and keep you updated via WhatsApp.',
              },
              {
                q: 'Can I swim during the rescue process?',
                a: 'No. During shock treatment, chlorine levels are very high and unsafe for swimming. We\'ll let you know when it\'s safe to use your pool again—typically 24-48 hours after treatment.',
              },
              {
                q: 'What if my pool doesn\'t clear after the first treatment?',
                a: 'Severe cases may need a second visit. Follow-up visits cost 400,000 IDR. This is rare but can happen with extreme algae blooms or underlying equipment issues.',
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

      {/* Emergency CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-500 to-red-700 text-white">
        <div className="section-container text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Pool Rescue Now?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Same-day response available in Canggu & Seminyak. Message us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/62811XXXXXXX?text=EMERGENCY%20-%20Green%20pool%20rescue%20needed"
              className="btn-primary bg-white text-red-600 hover:bg-gray-100 text-center inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>Message Us for Same-Day Rescue</span>
            </a>
            <Link href="/pricing" className="btn-secondary border-white text-white hover:bg-white/10">
              Emergency Service Rates
            </Link>
          </div>
          <p className="mt-6 text-red-100">Response time: Under 2 hours during business hours</p>
        </div>
      </section>
    </div>
  );
}
