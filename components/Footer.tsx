import Link from 'next/link';
import { Droplet, MessageCircle, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pool-darker text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8" />
              <span className="text-xl font-bold">Bali Pool Pros</span>
            </div>
            <p className="text-pool-light mb-4">
              Professional pool maintenance, cleaning, repair, and installation services across Bali since 2010.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pool-light hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pool-light hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pool-light hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pool-light hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-pool-light hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-pool-light hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/weekly-maintenance" className="text-pool-light hover:text-white transition-colors">Weekly Maintenance</Link></li>
              <li><Link href="/green-pool-rescue" className="text-pool-light hover:text-white transition-colors">Green Pool Rescue</Link></li>
              <li><Link href="/pricing" className="text-pool-light hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-pool-light hover:text-white transition-colors">Blog</Link></li>
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

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-pool-light hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="text-pool-light hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/areas" className="text-pool-light hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link href="/contact" className="text-pool-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">Jl. Raya Ubud No. 45</p>
                  <p className="text-pool-light">Gianyar, Bali 80571</p>
                  <p className="text-pool-light">Indonesia</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">WhatsApp:</p>
                  <a href="https://wa.me/6282237565997" className="hover:text-white transition-colors">+62 822-3756-5997</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-pool-light">Email:</p>
                  <a href="mailto:hello@balipoolpros.com" className="hover:text-white transition-colors">hello@balipoolpros.com</a>
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
          <p>&copy; {currentYear} Bali Pool Pros. All rights reserved. | Professional Pool Service in Bali, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
