import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Droplets, Zap, PowerOff, CloudRain, Calendar, CheckCircle2, Clock } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Algae Treatment & Green Pool Rescue Bali | 24-Hour Emergency Pool Service',
  description: 'Emergency algae treatment and green pool rescue Bali. Same-day service in Canggu & Seminyak. Professional pool chemical balancing, shock treatment, and complete water re-balancing. 24-48 hour pool recovery. WhatsApp to book.',
  keywords: 'algae treatment Bali, green pool rescue Bali, emergency pool service Bali, pool chemical balancing, algae removal, green pool fix, pool cleaning Bali',
};

const faqs = [
  {
    question: 'How quickly can you respond to a green pool emergency in Bali?',
    answer: 'Same-day response is available in Canggu and Seminyak if requested before 10 AM. Other areas typically receive service within 1-2 business days. We have a 24-hour emergency WhatsApp line for urgent situations that monitors messages around the clock.',
  },
  {
    question: 'What chemicals do you use for green pool treatment, and are they safe?',
    answer: 'We use professional pool-grade chlorine, pH buffers, and algaecides approved for residential pools. We do not use harsh industrial chemicals. All treatments are safe for families, pets, and pool equipment after proper circulation time (typically 24-48 hours after treatment).',
  },
  {
    question: 'How long does it take to clear a green pool in Bali?',
    answer: 'Most green pools clear within 24-48 hours with professional treatment. Severe algae blooms or very large pools may require a second treatment visit. We monitor progress continuously and keep you updated via WhatsApp throughout the recovery process.',
  },
  {
    question: 'Can I swim during the green pool rescue process?',
    answer: 'No, swimming is not safe during shock treatment. Chlorine levels are elevated significantly higher than normal to kill algae effectively. We\'ll test the water and let you know when it\'s safe to swim again—typically 24-48 hours after treatment is complete.',
  },
  {
    question: 'What if my pool doesn\'t clear after the first treatment?',
    answer: 'Severe cases may need a second visit. This is rare (less than 10% of cases) but can happen with extreme algae blooms, underlying equipment issues, or very large pools. We\'ll assess and inform you if additional treatment is needed, and provide a quote for any follow-up work.',
  },
  {
    question: 'What causes pools to turn green so quickly in Bali?',
    answer: 'Bali\'s combination of high temperatures, humidity, and abundant sunlight creates ideal conditions for rapid algae growth. Common triggers include power outages stopping circulation, heavy monsoon rains diluting chemicals, pump/filter failures, and irregular maintenance.',
  },
  {
    question: 'Is green pool rescue more expensive than regular maintenance?',
    answer: 'Emergency rescue is priced based on pool size and severity, and is typically more than regular weekly maintenance. Prevention through consistent maintenance is always more cost-effective than emergency rescue. Contact us for a personalized quote, and after rescue, we recommend starting weekly maintenance to prevent recurrence.',
  },
  {
    question: 'Will you clean the pool completely or just treat the water?',
    answer: 'Our green pool rescue includes complete treatment: water chemistry assessment, professional shock treatment, algae removal, filter backwashing, debris removal, and complete water rebalancing. We treat both the water and clean the physical pool to restore it to crystal-clear condition.',
  },
];

export default function GreenPoolRescue() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-700 text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80)' }}
          role="img"
          aria-label="Emergency green pool rescue service in Bali"
        />
        <div className="section-container relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <AlertTriangle className="h-16 w-16" aria-hidden="true" />
            <h1 className="text-4xl md:text-6xl font-bold">
              Algae Treatment &amp; Green Pool Rescue—Same Day Service
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl">
            Algae blooms happen fast in Bali&rsquo;s tropical climate. Heavy rain, power outages, or neglected pool maintenance Bali can turn your crystal-clear pool green overnight. Our emergency algae treatment and green pool rescue team restores your pool with expert pool chemical balancing within 24-48 hours.
          </p>
        </div>
      </section>

      {/* What Causes Green Pools */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            What Causes Green Pools in Bali
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
            Our Algae Treatment &amp; Green Pool Rescue Process
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
                  title: 'Pool Chemical Balancing & Adjustment',
                  description: 'Balance pH, alkalinity, chlorine to restore safe swimming conditions',
                  details: 'Multiple rounds of pool chemical balancing testing to ensure perfect water chemistry',
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
            Prevent Future Algae with Pool Maintenance Bali
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Once we&rsquo;ve rescued your pool with algae treatment and pool chemical balancing, the best way to prevent another green pool emergency is consistent weekly pool maintenance Bali.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Weekly water chemistry testing',
                'Regular pool chemical balancing (chlorine and pH)',
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
                <strong>Prevention is more cost-effective than algae treatment.</strong> Contact us for weekly pool maintenance Bali pricing—it&apos;s significantly less than emergency green pool rescue costs.
              </p>
              <Link href="/weekly-maintenance" className="btn-primary">
                Learn About Weekly Maintenance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Algae Treatment &amp; Green Pool Rescue FAQs" />

      {/* Emergency CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-500 to-red-700 text-white">
        <div className="section-container text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Algae Treatment &amp; Green Pool Rescue Now?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Same-day algae treatment response available in Canggu &amp; Seminyak. Message us now for immediate professional pool cleaning Bali assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282237565997?text=EMERGENCY%20-%20Green%20pool%20rescue%20needed"
              className="btn-primary bg-white text-red-600 hover:bg-gray-100 text-center inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
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
