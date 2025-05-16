'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Compass, Zap, Braces, LucideIcon } from 'lucide-react';

interface ProductFeature {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  fallbackImage: string;
}

const products: ProductFeature[] = [
  {
    id: 'half-wave-rectifier',
    title: 'Half Wave Rectifier',
    description: 'Interactive simulation to understand the principles of half wave rectification in power electronics.',
    features: [
      'Real-time oscilloscope visualization',
      'Adjustable frequency and amplitude controls',
      'Integrated circuit diagram with interactive components',
      'Performance calculations and measurements'
    ],
    icon: Zap,
    image: '',
    fallbackImage: 'https://i.ibb.co/9954W3vL/half-wave-rectifier.png'
  },
  {
    id: 'up-counter',
    title: 'UP Counter using Logic Gates',
    description: 'Build and simulate digital UP counters with configurable logic gates on a virtual breadboard.',
    features: [
      'Interactive breadboard interface',
      'Input switches and clock controls',
      'Visual LED output indicators',
      'Real-time counter state monitoring'
    ],
    icon: Braces,
    image: '',
    fallbackImage: 'https://i.ibb.co/s9z6Y4b8/up-counter.png'
  }
];

interface ProductCardProps {
  product: ProductFeature;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="card overflow-hidden flex flex-col h-full"
    >
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-dark border border-gray-800">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = product.fallbackImage;
          }}
        />
      </div>
      
      <div className="flex items-center mb-3">
        <product.icon className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-xl font-semibold">{product.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4">{product.description}</p>
      
      <h4 className="text-sm font-medium text-primary mb-2">Key Features:</h4>
      <ul className="text-gray-400 text-sm space-y-1 mb-6">
        {product.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <button className="btn-primary w-full">
          Try Simulator
        </button>
      </div>
    </motion.div>
  );
};

export default function ProductPage() {
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
            Interactive STEM Simulators
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Experience hands-on learning with our cutting-edge virtual labs and simulation tools
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-dark-lighter py-20 mt-10">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12"
          >
            Why Our Simulators?
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <Monitor className="h-7 w-7 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive & Visual</h3>
              <p className="text-gray-400">Engage with concepts through visual feedback and real-time interaction</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <Code className="h-7 w-7 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
              <p className="text-gray-400">Bridge theory and practice with virtual experiments that mimic real-world scenarios</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <Compass className="h-7 w-7 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Self-Guided Learning</h3>
              <p className="text-gray-400">Learn at your own pace with intuitive controls and comprehensive tutorials</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-space font-bold mb-6">Ready to start learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Access our full library of interactive simulators and revolutionize your STEM education experience.
          </p>
          <button className="btn-primary px-8 py-3">Explore All Simulators</button>
        </motion.div>
      </section>
    </div>
  );
} 