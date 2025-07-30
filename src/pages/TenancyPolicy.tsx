import React from 'react';

const TenancyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tenancy Policy</h1>
          <p className="text-lg text-gray-600">
            Guidelines and policies for tenants using RentEase platform
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This Tenancy Policy outlines the guidelines, responsibilities, and procedures for tenants using the 
              RentEase platform. By using our services, you agree to comply with these policies to ensure a positive 
              rental experience for all parties involved.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tenant Responsibilities</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Property Care</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintain the property in good condition and report any damages immediately</li>
                <li>Use the property only for residential purposes unless otherwise agreed</li>
                <li>Keep the property clean and hygienic at all times</li>
                <li>Respect common areas and shared facilities</li>
                <li>Follow building rules and regulations</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Payment Obligations</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pay rent on time as specified in the rental agreement</li>
                <li>Clear all utility bills and maintenance charges promptly</li>
                <li>Provide security deposit as agreed upon</li>
                <li>Pay any additional charges for damages beyond normal wear and tear</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Behavioral Guidelines</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintain peaceful and respectful behavior towards neighbors</li>
                <li>Avoid noise disturbances, especially during nighttime hours</li>
                <li>Obtain landlord permission before making any alterations</li>
                <li>Follow guest policies and visitor restrictions</li>
                <li>Comply with smoking and pet policies as specified</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rental Agreement Terms</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Duration and Renewal</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Rental agreements typically range from 6 months to 2 years</li>
                <li>Renewal terms should be discussed at least 30 days before expiry</li>
                <li>Both parties must agree to any changes in terms or rent</li>
                <li>Early termination may incur penalties as specified in the agreement</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Security Deposit</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Security deposit typically ranges from 1-3 months' rent</li>
                <li>Will be refunded within 30 days of lease termination</li>
                <li>Deductions may be made for damages or unpaid dues</li>
                <li>Tenant has the right to inspect the property before final settlement</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance and Repairs</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tenant Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Report maintenance issues promptly to the landlord</li>
                <li>Handle minor repairs and routine maintenance</li>
                <li>Keep drainage systems clean and functional</li>
                <li>Replace consumables like light bulbs and batteries</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Landlord Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Major structural repairs and maintenance</li>
                <li>Plumbing and electrical system maintenance</li>
                <li>Appliance repairs (if provided by landlord)</li>
                <li>Common area maintenance and security</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination Procedures</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Notice Period</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Minimum 30 days written notice required for termination</li>
                <li>Notice should specify the exact date of vacating</li>
                <li>Both tenant and landlord must sign the termination agreement</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Move-Out Process</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Schedule a joint inspection with the landlord</li>
                <li>Clear all dues and return keys/access cards</li>
                <li>Provide forwarding address for security deposit refund</li>
                <li>Remove all personal belongings and clean the property</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In case of disputes between tenants and landlords:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>First attempt to resolve through direct communication</li>
              <li>Contact RentEase support team for mediation assistance</li>
              <li>Seek legal advice if necessary</li>
              <li>Follow local tenancy laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">RentEase Support</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RentEase provides the following support services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24/7 customer support helpline</li>
              <li>Mediation services for tenant-landlord disputes</li>
              <li>Legal document templates and guidance</li>
              <li>Maintenance request coordination</li>
              <li>Emergency assistance contacts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Violations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Violations of this tenancy policy may result in:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Warning notices and corrective action requests</li>
              <li>Termination of rental agreement</li>
              <li>Forfeiture of security deposit</li>
              <li>Legal action if necessary</li>
              <li>Suspension from RentEase platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For questions about this tenancy policy or to report issues:
            </p>
            <div className="text-gray-600">
              <p>Email: support@rentease.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>WhatsApp: +91 98765 43210</p>
              <p>Address: Bangalore, Karnataka, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TenancyPolicy;