import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const rcmServices = [
    {
      name: "Revenue Cycle Management",
      path: "/services/revenueCycleManagement",
    },
    {
      name: "Medical Coding & Billing",
      path: "/services/medicalCodingBilling",
    },
    {
      name: "Insurance Verification",
      path: "/services/insuranceVerification",
    },
    {
      name: "Prior Authorization",
      path: "/services/priorAuthorization",
    },
    {
      name: "A/R Management",
      path: "/services/arManagement",
    },
    {
      name: "Denial Management",
      path: "/services/denialManagement",
    },
    {
      name: "Payment Posting",
      path: "/services/paymentPosting",
    },
    {
      name: "Provider Credentialing",
      path: "/services/providerCredentialing",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Logo Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="Trinity RCM Solution Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-400 via-orange-300 to-red-500 bg-clip-text text-transparent whitespace-nowrap tracking-wide dm-serif-text-regular">
                Trinity RCM Solution
              </h2>
              <p className="text-gray-400 text-sm">
                Healthcare Revenue Cycle Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Trinity RCM</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trinity RCM is dedicated to empowering healthcare practices to
              optimize their workflows and achieve greater financial success
              through expert revenue cycle management.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm">+91 9068738713</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm">
                  HRQueries@trinityrcmsolution.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm">Info@trinityrcmsolution.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-sm">
                  Elite Coworking — 4th Floor, MFAR, Manyata Tech Park,
                  Nagawara, Bengaluru 560045
                </span>
              </div>
            </div>
          </div>

          {/* RCM Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">RCM Services</h4>
            <ul className="flex flex-col gap-3">
              {rcmServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary-400 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Optimize Your Revenue Cycle?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule your free RCM audit with our experts and discover how we
              can help maximize your practice's revenue potential.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Schedule Free RCM Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                ©{currentYear} Trinity RCM solution. All Rights Reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
