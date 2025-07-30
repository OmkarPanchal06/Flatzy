import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

const WorkWithUs = () => {
  const handleGoogleFormClick = () => {
    // Replace with actual Google Form URL
    window.open('https://forms.google.com/create', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = 'Hi! I am interested in working with RentEase. Can you provide more information about career opportunities?';
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our mission to revolutionize the rental experience. We're always looking for 
              passionate individuals to help us build the future of rentals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join RentEase?</h2>
            <p className="text-lg text-gray-600">
              Be part of a growing team that's making a real difference in people's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Join a fast-growing startup with endless opportunities for career development and skill enhancement.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Work on cutting-edge technology and innovative solutions that are reshaping the rental industry.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Team</h3>
              <p className="text-gray-600">
                Collaborate with passionate, talented individuals who are committed to excellence and mutual support.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meaningful Work</h3>
              <p className="text-gray-600">
                Help thousands of people find their perfect homes and make a real impact in their lives.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy work-life balance with flexible working arrangements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Mission</h3>
              <p className="text-gray-600">
                Work towards a clear, meaningful mission that drives everything we do at RentEase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Current opportunities to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Developer</h3>
              <p className="text-gray-600 mb-4">
                Join our tech team to build beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">React</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">TypeScript</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Consultant</h3>
              <p className="text-gray-600 mb-4">
                Help customers find their perfect rental properties and provide excellent customer service throughout their journey.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">Sales</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">Customer Service</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded">Real Estate</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Developer</h3>
              <p className="text-gray-600 mb-4">
                Build scalable backend systems and APIs to support our growing platform using Node.js and modern databases.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">Node.js</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">PostgreSQL</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded">APIs</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">
                Drive our marketing initiatives, create compelling content, and help grow our brand presence across digital channels.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">Digital Marketing</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded mr-2">Content</span>
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Apply through our form or reach out directly via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoogleFormClick}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Apply via Google Form</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Contact via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;