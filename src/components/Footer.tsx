import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-sky-400 mb-4">RentEase</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner in finding the perfect rental home. We make renting simple, secure, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-sky-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/tenancy-policy" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Tenancy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refer" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-sky-400" />
                <span className="text-gray-300">support@rentease.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sky-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-sky-400" />
                <span className="text-gray-300">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RentEase. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;