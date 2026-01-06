'use client';

import { useState } from 'react';
import { MessageCircle, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'What is the fastest way to contact Bali Pool Pros?',
    answer: 'WhatsApp is our fastest communication channel. Message us at +62 822-3756-5997 and we typically respond within 2 hours during business hours (Monday-Friday 8 AM - 6 PM, Saturday 8 AM - 4 PM). For emergencies, we have a 24-hour WhatsApp line.',
  },
  {
    question: 'How quickly can you start pool service?',
    answer: 'For regular maintenance, we can usually schedule your first visit within 24-48 hours of booking. For emergency green pool rescue in Canggu and Seminyak, we offer same-day response if contacted before 10 AM.',
  },
  {
    question: 'Do I need to be present for pool service visits?',
    answer: 'No, you don\'t need to be present. Many of our clients are property managers or absentee owners. We can coordinate access with your staff or key holders. After each visit, we send detailed reports with photos via WhatsApp.',
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'To provide an accurate quote, we need your pool location, pool type (freshwater or saltwater), approximate pool size, and the type of service you\'re interested in. You can share these details via WhatsApp or our contact form.',
  },
  {
    question: 'Do you offer free pool assessments?',
    answer: 'Yes, we offer free initial assessments for new clients in our core service areas. Our technician will visit your property, evaluate your pool condition, and provide recommendations and pricing based on your specific needs.',
  },
  {
    question: 'What are your office hours?',
    answer: 'Our office hours are Monday through Friday 8 AM to 6 PM, and Saturday 8 AM to 4 PM. Sunday service is available for emergencies only. Our WhatsApp line is monitored for urgent situations outside regular hours.',
  },
  {
    question: 'Can I get a quote via email?',
    answer: 'Yes, you can email us at hello@balipoolpros.com for quotes and detailed inquiries. However, WhatsApp is faster for booking and real-time communication. We respond to all emails within 24 business hours.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer (Indonesian banks), cash payment, and major credit cards for larger projects. For regular maintenance, we typically invoice monthly with payment via bank transfer.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    villaName: '',
    area: '',
    poolType: '',
    serviceType: '',
    preferredDate: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `New Pool Service Inquiry:
Villa/Property: ${formData.villaName}
Area: ${formData.area}
Pool Type: ${formData.poolType}
Service Type: ${formData.serviceType}
Preferred Start Date: ${formData.preferredDate}
Email: ${formData.email}
Additional Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/6282237565997?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&q=80)' }}
          role="img"
          aria-label="Contact our Bali pool service team for professional pool maintenance"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Bali Pool Pros – Book Pool Cleaning Bali Service
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Ready to experience reliable, transparent pool cleaning Bali and pool maintenance Bali? Contact us today for Bali villa pool service.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="card text-center">
              <MessageCircle className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3 text-pool-darker">WhatsApp (Fastest)</h3>
              <p className="text-gray-600 mb-4">Message us anytime</p>
              <a
                href="https://wa.me/6282237565997"
                className="text-pool font-semibold hover:underline text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 822-3756-5997
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Response time: Under 2 hours (business hours)
              </p>
            </div>

            {/* Email */}
            <div className="card text-center">
              <Mail className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3 text-pool-darker">Email</h3>
              <p className="text-gray-600 mb-4">For quotes & detailed inquiries</p>
              <a
                href="mailto:hello@balipoolcare.com"
                className="text-pool font-semibold hover:underline text-lg"
              >
                hello@balipoolcare.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                WhatsApp is faster for booking
              </p>
            </div>

            {/* Service Hours */}
            <div className="card text-center">
              <Clock className="h-12 w-12 text-pool mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3 text-pool-darker">Service Hours</h3>
              <ul className="text-gray-600 space-y-1">
                <li><strong>Mon-Fri:</strong> 8 AM – 6 PM</li>
                <li><strong>Saturday:</strong> 8 AM – 4 PM</li>
                <li><strong>Sunday:</strong> Emergency only</li>
              </ul>
              <p className="text-sm text-pool font-semibold mt-4">
                24-hour emergency line
              </p>
            </div>
          </div>

          {/* Quick Booking Form */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pool-darker">
              Quick Booking Form
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and we&rsquo;ll send your request via WhatsApp
            </p>

            {submitted ? (
              <div className="card bg-green-50 border-2 border-green-500 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-pool-darker">
                  Opening WhatsApp...
                </h3>
                <p className="text-gray-700 mb-4">
                  Your message has been prepared. Please send it on WhatsApp to complete your booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-pool hover:underline font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card">
                <div className="space-y-6">
                  {/* Villa/Property Name */}
                  <div>
                    <label htmlFor="villaName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Villa/Property Name *
                    </label>
                    <input
                      type="text"
                      id="villaName"
                      name="villaName"
                      required
                      value={formData.villaName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                      placeholder="e.g., Villa Bali Paradise"
                    />
                  </div>

                  {/* Pool Location */}
                  <div>
                    <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pool Location (Area in Bali) *
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                    >
                      <option value="">Select area...</option>
                      <option value="Canggu">Canggu</option>
                      <option value="Seminyak">Seminyak</option>
                      <option value="Ubud">Ubud</option>
                      <option value="Uluwatu">Uluwatu</option>
                      <option value="Sanur">Sanur</option>
                      <option value="Nusa Dua">Nusa Dua</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Pool Type */}
                  <div>
                    <label htmlFor="poolType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pool Type *
                    </label>
                    <select
                      id="poolType"
                      name="poolType"
                      required
                      value={formData.poolType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                    >
                      <option value="">Select pool type...</option>
                      <option value="Freshwater">Freshwater</option>
                      <option value="Saltwater">Saltwater</option>
                      <option value="Infinity Edge">Infinity Edge</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                    >
                      <option value="">Select service type...</option>
                      <option value="Weekly Maintenance">Weekly Maintenance</option>
                      <option value="Green Pool Rescue">Green Pool Rescue</option>
                      <option value="One-Time Cleaning">One-Time Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Start Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pool focus:border-pool outline-none"
                      placeholder="Any special requirements or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pool-darker">
            We Serve All Major Areas in Bali
          </h2>
          <div className="max-w-4xl mx-auto card">
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-pool flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 text-lg mb-4">
                  Our professional pool care services are available across Bali, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Canggu',
                    'Seminyak',
                    'Ubud',
                    'Uluwatu',
                    'Sanur',
                    'Nusa Dua',
                    'Kerobokan',
                    'Jimbaran',
                    'And more...',
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-pool flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Contact & Booking FAQs" />

      {/* Emergency Contact */}
      <section className="py-16 md:py-24 bg-red-50 border-y-2 border-red-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-pool-darker">
              Need Emergency Pool Service in Bali?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Green pool or urgent issue? Contact our 24-hour emergency WhatsApp line for same-day response
            </p>
            <a
              href="https://wa.me/6282237565997?text=EMERGENCY%20-%20Pool%20service%20needed"
              className="btn-primary bg-red-500 hover:bg-red-600 inline-flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>WhatsApp Emergency Line: +62 822-3756-5997</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
