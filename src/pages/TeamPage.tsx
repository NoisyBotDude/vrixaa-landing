'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Ashish Sarmah',
    role: 'Founder & CEO',
    bio: 'Passionate about revolutionizing STEM education through technology.',
    image: '/images/team/ashish.jpg'
  },
  // Add more team members as needed
];

const advisors: TeamMember[] = [
  {
    name: 'Dr. John Doe',
    role: 'Technical Advisor',
    bio: 'Former Professor at IIT Kharagpur with expertise in Virtual Reality and Education Technology.',
  },
  // Add more advisors as needed
];

export default function Team() {
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
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300">
            Passionate innovators working to transform STEM education
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="container-custom mb-20">
        <h2 className="text-3xl font-space font-bold mb-12 text-center">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-dark-lighter py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-space font-bold mb-12 text-center">Our Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{advisor.name}</h3>
                <p className="text-primary mb-4">{advisor.role}</p>
                <p className="text-gray-400">{advisor.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 