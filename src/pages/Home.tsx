import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive Learning',
    description: 'Experience STEM concepts through interactive, game-like simulations.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Personalized learning paths adapted to your understanding and pace.'
  },
  {
    icon: Globe,
    title: 'Universal Access',
    description: 'Breaking geographical barriers to quality STEM education.'
  }
];

export default function Home() {
  const { theme } = useTheme();
  const { closeMenu } = useNavigation();

  return (
    <div className="min-h-screen py-20" onClick={closeMenu}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 pointer-events-none ${
          theme === 'light' ? 'opacity-50' : 'opacity-100'
        }`} />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-space font-bold mb-6"
            >
              The Future of STEM is Coming...
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              We're building something immersive, intelligent, and scalable.
              Experience STEM education like never before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/vision"
                className="btn-primary inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <button className="px-6 py-2 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-200">
                Join Waitlist
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 