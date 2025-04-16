'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users } from 'lucide-react';

const visionPoints = [
  {
    icon: Lightbulb,
    title: 'Interactive Learning',
    description: 'Transform abstract concepts into tangible experiences through immersive simulations.'
  },
  {
    icon: Target,
    title: 'Intelligent Adaptation',
    description: "AI-driven personalization that evolves with each student's learning journey."
  },
  {
    icon: Users,
    title: 'Universal Education',
    description: 'Making quality STEM education accessible to students everywhere.'
  }
];

export default function Vision() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6">
            Revolutionizing STEM Education
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            We envision a world where every student has access to engaging, interactive, and intelligent STEM education.
          </p>
        </motion.div>
      </section>

      {/* Vision Points */}
      <section className="bg-dark-lighter py-20 mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <point.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-space font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300">
            To democratize STEM education by creating immersive, intelligent, and accessible learning experiences that inspire the next generation of innovators.
          </p>
        </motion.div>
      </section>
    </div>
  );
} 