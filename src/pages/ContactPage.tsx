'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import type { ContactFormInput } from '../types';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@vrixaalabs.com',
    href: 'mailto:contact@vrixaalabs.com'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Tezpur University, Napaam, Tezpur, Assam, India',
    href: 'https://goo.gl/maps/your-location'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXX XXX XXXX',
    href: 'tel:+91XXXXXXXXXX'
  }
];

export default function Contact() {
  const [state, handleSubmit] = useForm('your-formspree-form-id');
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    message: '',
    type: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container-custom text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="investor">Investor Relations</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {state.submitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              {state.succeeded && (
                <p className="text-green-500 text-center">
                  Thanks for reaching out! We'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card">
              <h2 className="text-2xl font-space font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start space-x-4 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <info.icon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-space font-bold mb-6">Office Hours</h2>
              <p className="text-gray-300">
                Monday - Friday<br />
                9:00 AM - 6:00 PM IST
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 