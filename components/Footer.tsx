import Link from 'next/link';
import { Droplet, MessageCircle, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pool-darker text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8" />
              <span className="text-xl font-bold">Bali Pool Care</span>
            </div>
            <p className="text-pool-light">
              Professional pool maintenance and emergency rescue services across Bali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-pool-light hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/weekly-maintenance" className="text-pool-light hover:text-white transition-colors">Weekly Maintenance</Link></li>
              <li><Link href="/green-pool-rescue" className="text-pool-light hover:text-white transition-colors">Green Pool Rescue</Link></li>
              <li><Link href="/pricing" className="text-pool-light hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-pool-light">
              <li>Canggu</li>
              <li>Seminyak</li>
              <li>Ubud</li>
              <li>Uluwatu</li>
              <li>Sanur</li>
              <li>Nusa Dua</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">WhatsApp:</p>
                  <a href="https://wa.me/62811XXXXXXX" className="hover:text-white transition-colors">+62 811 XXX XXXX</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">Email:</p>
                  <a href="mailto:hello@balipoolcare.com" className="hover:text-white transition-colors">hello@balipoolcare.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">Mon-Fri: 8 AM – 6 PM</p>
                  <p className="text-pool-light">Sat: 8 AM – 4 PM</p>
                  <p className="text-pool-light">Sun: Emergency only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pool-dark mt-8 pt-8 text-center text-pool-light">
          <p>&copy; {currentYear} Bali Pool Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
