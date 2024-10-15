import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-600 py-12 border-t border-gray-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Info Section */}
          <div>
            <Logo width="120px" />
            <p className="text-gray-100 mt-4">
              &copy; Developed by Shivesh Gupta .
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-100 hover:text-gray-900" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-gray-100 hover:text-gray-900" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-gray-100 hover:text-gray-900" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-gray-100 hover:text-gray-900" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-200 hover:text-gray-900" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
