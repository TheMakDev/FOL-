import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo / Title */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">FOL Converts</h2>
          <p className="text-sm text-indigo-200">
            Empowering your spiritual journey. Explore messages, find churches, and connect with guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-indigo-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About FOL</li>
            <li className="hover:text-white cursor-pointer">Resources</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <p className="text-sm text-indigo-200 mb-4">
            Email: contact@folconverts.com
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-indigo-300 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-300 cursor-pointer" />
            <FaInstagram className="hover:text-indigo-300 cursor-pointer" />
            <FaYoutube className="hover:text-indigo-300 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-indigo-300">
        &copy; {new Date().getFullYear()} FOL Converts. All rights reserved.
      </div>
    </footer>
  );
}
