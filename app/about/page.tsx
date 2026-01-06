import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Clock, Users, Leaf, MessageCircle, Award, Wrench } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'About Bali Pool Pros | Expert Pool Service Team Since 2010',
  description: 'Bali Pool Pros: Bali\'s leading pool service company since 2010. Expert pool maintenance, cleaning, repair, and installation. Local Balinese and expatriate team serving over 500 projects annually.',
  keywords: 'about Bali Pool Pros, Bali pool experts, pool care team, local pool service Bali, swimming pool company Bali',
};

const teamMembers = [
  {
    name: 'I Made Putra',
    role: 'Founder & Lead Technician',
    bio: 'With over 15 years of experience in pool maintenance and repair, Made founded Bali Pool Pros in 2010. He specializes in Bali\'s unique water systems and has personally overseen more than 2,000 pool rescues. Made is certified in water chemistry management and leads our technical training programs.',
    expertise: ['Pool System Design', 'Water Chemistry', 'Emergency Rescue'],
  },
  {
    name: 'Wayan Surya',
    role: 'Senior Pool Technician',
    bio: 'Wayan brings 12 years of expertise in saltwater pool systems and infinity edge maintenance. Originally trained as a mechanical engineer, he joined our team in 2012 and now leads our Seminyak and Canggu operations. His technical background makes him invaluable for complex equipment repairs.',
    expertise: ['Saltwater Systems', 'Infinity Pools', 'Equipment Repair'],
  },
  {
    name: 'Ketut Adi Wijaya',
    role: 'Pool Installation Specialist',
    bio: 'Ketut specializes in new pool installations and major renovations. With 10 years in the industry, he has project-managed over 50 pool installations across Bali, from compact villa pools to large resort systems. He ensures every installation meets international standards.',
    expertise: ['Pool Installation', 'Renovation Projects', 'Quality Control'],
  },
  {
    name: 'Ni Luh Putu Dewi',
    role: 'Customer Relations Manager',
    bio: 'Dewi manages our client relationships and coordinates all service schedules. With a background in hospitality management, she ensures every customer receives exceptional service. She\'s fluent in English, Indonesian, and Japanese, making communication seamless for international clients.',
    expertise: ['Client Management', 'Scheduling', 'Quality Assurance'],
  },
  {
    name: 'Made Agus Santoso',
    role: 'Eco-Friendly Pool Specialist',
    bio: 'Agus leads our sustainable pool care initiatives. With training in environmental science, he develops eco-friendly maintenance protocols that reduce chemical usage without compromising water quality. He\'s passionate about protecting Bali\'s environment.',
    expertise: ['Sustainable Practices', 'Natural Filtration', 'Chemical Reduction'],
  },
  {
    name: 'Thomas Mueller',
    role: 'Technical Advisor (Expatriate)',
    bio: 'Thomas brings international pool industry standards to our team. With 20 years of experience managing luxury hotel pools in Europe and Asia, he advises on best practices and ensures our service meets global standards. He joined as a partner in 2015.',
    expertise: ['International Standards', 'Resort Pools', 'Technical Training'],
  },
];

const faqs = [
  {
    question: 'How long has Bali Pool Pros been in business?',
    answer: 'Bali Pool Pros was founded in 2010 by I Made Putra and a team of local Balinese experts and expatriate engineers. We\'ve been serving Bali\'s villas, resorts, and residential properties for over 14 years, making us one of the most experienced pool service companies on the island.',
  },
  {
    question: 'Are your technicians certified and trained?',
    answer: 'Yes, all our pool technicians undergo comprehensive training in water chemistry, equipment maintenance, and safety protocols. Our senior technicians hold certifications in pool maintenance and water quality management. We also provide ongoing training to stay current with the latest pool care techniques.',
  },
  {
    question: 'What areas of Bali do you serve?',
    answer: 'We serve all major villa and resort areas across Bali, including Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, and Kerobokan. We offer same-day emergency response in Canggu and Seminyak, with 1-2 day response times for other areas.',
  },
  {
    question: 'Do you offer eco-friendly pool maintenance options?',
    answer: 'Absolutely! Our eco-friendly pool specialist, Made Agus Santoso, has developed sustainable maintenance protocols that minimize chemical usage while maintaining crystal-clear water. We use proper chemical disposal methods and offer natural filtration options for environmentally conscious clients.',
  },
  {
    question: 'Can you work with property management companies?',
    answer: 'Yes, we work extensively with property management companies across Bali. We offer flexible scheduling, detailed reporting for absentee owners, and can coordinate with on-site staff. Many of our clients are villa management companies overseeing multiple properties.',
  },
  {
    question: 'What makes Bali Pool Pros different from other pool services?',
    answer: 'Our combination of local expertise and international standards sets us apart. Founded by Balinese technicians with deep knowledge of local conditions, we also incorporate best practices from our expatriate advisors. We offer transparent pricing, WhatsApp-first communication, same-day emergency response, and detailed reporting after every visit.',
  },
  {
    question: 'Do you offer pool repair and installation services?',
    answer: 'Yes, in addition to maintenance and cleaning, we offer comprehensive pool repair and new pool installation services. Our installation specialist, Ketut Adi Wijaya, has managed over 50 pool installations across Bali. We handle everything from pump replacements to complete pool renovations.',
  },
  {
    question: 'How can I contact Bali Pool Pros?',
    answer: 'The fastest way to reach us is via WhatsApp at +62 822-3756-5997. You can also email us at hello@balipoolpros.com or use the contact form on our website. We respond to all inquiries within 2 hours during business hours.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80)' }}
          role="img"
          aria-label="Professional pool maintenance team at work in Bali"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Bali Pool Pros
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Bali&rsquo;s trusted pool service experts since 2010. Local knowledge, international standards, and a passion for crystal-clear pools.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pool-darker text-center">
              Our Story: From Small Team to Bali&rsquo;s Leading Pool Experts
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Founded in 2010</strong> by a group of local Balinese experts and expatriate engineers, Bali Pool Pros started as a small maintenance team serving Ubud villas. What began as a three-person operation has grown into Bali&rsquo;s leading pool service provider, handling over 500 projects annually with a focus on sustainable practices and exceptional customer service.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our founder, I Made Putra, spent years working with international hotel chains before realizing that villa owners in Bali desperately needed reliable, professional pool care. Too often, he saw beautiful pools neglected or damaged by inexperienced maintenance teams who didn&rsquo;t understand Bali&rsquo;s unique tropical challenges.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Together with Thomas Mueller, a German pool specialist who fell in love with Bali and its hospitality industry, Made established Bali Pool Pros with a simple mission: provide world-class pool care with local expertise. We combined Made&rsquo;s deep understanding of Bali&rsquo;s water systems and climate with Thomas&rsquo;s international hotel standards.
              </p>
              
              {/* Timeline */}
              <div className="my-12 space-y-6">
                <h3 className="text-2xl font-bold text-pool-darker">Our Journey</h3>
                <div className="space-y-4">
                  {[
                    { year: '2010', event: 'Founded in Ubud with 3 technicians, serving 15 local villas' },
                    { year: '2012', event: 'Expanded to Canggu and Seminyak, team grew to 8 members' },
                    { year: '2014', event: 'Introduced emergency green pool rescue service with same-day response' },
                    { year: '2015', event: 'Partnered with Thomas Mueller to bring international standards' },
                    { year: '2017', event: 'Launched pool installation and major renovation services' },
                    { year: '2019', event: 'Reached 500+ annual projects milestone, team of 15 technicians' },
                    { year: '2021', event: 'Introduced eco-friendly pool care program and sustainable practices' },
                    { year: '2024', event: 'Serving all major areas of Bali with 20+ team members' },
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="bg-pool text-white font-bold px-3 py-1 rounded-full text-sm flex-shrink-0">
                        {milestone.year}
                      </span>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Bali Pool Pros is trusted by hundreds of villa owners, property managers, and resorts across the island. We&rsquo;ve maintained our founding principles: transparent pricing, reliable service, WhatsApp-first communication, and treating every pool as if it were our own. Our team has grown, but our commitment to excellence remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-pool-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="card bg-white">
              <Award className="h-12 w-12 text-pool mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-pool-darker">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide Bali&rsquo;s villa owners, resorts, and residential properties with reliable, professional, and transparent pool care services. We combine deep local knowledge of Bali&rsquo;s unique climate and water conditions with international best practices to deliver crystal-clear pools and peace of mind.
              </p>
            </div>
            <div className="card bg-white">
              <Leaf className="h-12 w-12 text-pool mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-pool-darker">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the most trusted pool service company in Bali, known for our reliability, expertise, and commitment to sustainability. We envision a future where every pool in Bali is properly maintained using eco-friendly practices, protecting both swimmers and the beautiful environment we call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: 'Punctuality',
                description: 'If we say Tuesday 9 AM, we\'re there at 9 AM. We\'ve built our reputation on being the most reliable pool service in Bali.',
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Transparency',
                description: 'All prices are fixed upfront. No surprise fees, no hidden charges. You know exactly what you\'ll pay before we start.',
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: 'Local Expertise',
                description: 'We understand Bali\'s monsoons, mineral-rich water, and tropical conditions. Our techniques are tailored to local challenges.',
              },
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: 'WhatsApp-First',
                description: 'Direct communication with humans, not chatbots. Fast responses, easy booking, and real-time updates on your pool.',
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
      <section id="team" className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pool-darker">
            Meet Our Expert Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team combines local Balinese expertise with international pool industry standards. Each team member brings unique skills and years of experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-white">
                {/* Placeholder for team member photo */}
                <div 
                  className="w-24 h-24 bg-gradient-to-br from-pool-light to-pool rounded-full mx-auto mb-4 flex items-center justify-center"
                  role="img"
                  aria-label={`Photo of ${member.name}`}
                >
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-1 text-pool-darker">{member.name}</h3>
                <p className="text-pool text-center font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-pool-light text-pool-dark text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Our Core Values
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10" />,
                title: 'Fully Insured & Licensed',
                description: 'We carry comprehensive liability insurance for your complete peace of mind. Your property and investment are fully protected when you work with us.',
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: 'Environmental Responsibility',
                description: 'We practice proper chemical disposal, use sustainable products when possible, and minimize our environmental footprint. Protecting Bali\'s beautiful environment is part of our mission.',
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: 'Community First',
                description: 'We\'re proud members of the Bali community. We employ local technicians, support local businesses, and contribute to community initiatives across the island.',
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: 'Customer Education',
                description: 'We don\'t just service your pool—we educate you about it. Our detailed reports explain what we did, why, and how to recognize potential issues between visits.',
              },
              {
                icon: <Wrench className="h-10 w-10" />,
                title: 'Continuous Improvement',
                description: 'We invest in ongoing training and stay current with the latest pool care technologies. Our team regularly attends workshops and certifications to bring you the best service.',
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: 'Quality Without Compromise',
                description: 'We never cut corners. From the chemicals we use to the equipment we maintain, we insist on the highest quality to deliver results that exceed expectations.',
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Why Bali Pool Pros is Different
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'We Actually Show Up—Every Time',
                description: 'Reliability is rare in Bali\'s service industry. We built our entire business on being punctual and consistent. When we commit to a schedule, we keep it. Our clients depend on us, and we never let them down.',
              },
              {
                title: 'Crystal-Clear Communication',
                description: 'No jargon. No confusing technical terms. We explain everything about your pool in plain language, with photos and written reports. You\'ll always know exactly what\'s happening with your pool and why.',
              },
              {
                title: 'Deep Understanding of Bali\'s Challenges',
                description: 'Rainy season algae blooms. Saltwater corrosion from coastal air. Jungle debris in Ubud. Mineral-rich water in highland areas. We\'ve seen it all and know exactly how to adapt our approach to Bali\'s unique conditions.',
              },
              {
                title: 'Fair, Transparent Pricing',
                description: 'Fixed pricing means you budget confidently. No nickel-and-diming with surprise charges. We quote a price, and that\'s what you pay. Transparent pricing builds the long-term relationships we value.',
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

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Frequently Asked Questions About Bali Pool Pros" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Bali Pool Pros Difference?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Join hundreds of villa owners who trust our team for reliable, professional pool care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-pool hover:bg-gray-100">
              Contact Our Team Today
            </Link>
            <a
              href="https://wa.me/6282237565997?text=I%20want%20to%20learn%20more%20about%20your%20service"
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
