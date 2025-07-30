import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mainMenuItems = [
    { name: 'List Your Property', href: '/list-property' },
    { name: 'Explore', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const hamburgerMenuItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Refer & Earn', href: '/refer' },
    { name: 'Tenancy Policies', href: '/tenancy-policy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy Policies', href: '/privacy-policy' },
    { name: 'FAQs', href: '/faqs' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-sky-500">RentEase</span>
          </Link>

          {/* Main Menu - Hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            {mainMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:text-sky-500 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Main menu items for mobile */}
            <div className="md:hidden mb-4">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Separator */}
            <hr className="my-4" />
            
            {/* Hamburger menu items */}
            {hamburgerMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Hamburger Menu Dropdown */}
      {isMenuOpen && (
        <div className="hidden md:block absolute top-16 right-4 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {hamburgerMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-sky-500 block px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;