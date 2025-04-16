'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/vrixaalabs', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/vrixaalabs', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@vrixaalabs.com', label: 'Email' },
];

const footerLinks = [
  { label: 'Vision', href: '/vision' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="block">
              <span className="text-2xl font-space font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
                VrixaaLabs
              </span>
            </a>
            <p className="text-gray-400">
              Revolutionizing STEM education through immersive simulations and intelligent learning platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              Tezpur University<br />
              Napaam, Tezpur<br />
              Assam, India<br />
              <a href="mailto:contact@vrixaalabs.com" className="hover:text-white transition-colors duration-200">
                contact@vrixaalabs.com
              </a>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} VrixaaLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 