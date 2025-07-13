import React, { useState, useEffect } from ‘react’;
import { ChevronRight, Code, Brain, Shield, Zap, CheckCircle, Star, ArrowRight, Menu, X } from ‘lucide-react’;

const EchocraftLanding = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [activeService, setActiveService] = useState(0);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};
window.addEventListener(‘scroll’, handleScroll);
return () => window.removeEventListener(‘scroll’, handleScroll);
}, []);

const services = [
{
icon: Code,
title: “Technical Solutions Architecture”,
description: “Holistic system design and roadmaps to align your tech stack with your business goals.”,
features: [“System Design”, “Technical Roadmaps”, “Stack Optimization”, “Performance Audits”]
},
{
icon: Brain,
title: “AI & Data Automation”,
description: “Predictive pipelines, real-time dashboards, and reproducible ML workflows.”,
features: [“ML Pipelines”, “Real-time Analytics”, “Predictive Models”, “Data Visualization”]
},
{
icon: Shield,
title: “Blockchain & Smart Contracts”,
description: “Secure, gas-optimized contract development, audits, and full integration.”,
features: [“Smart Contracts”, “Security Audits”, “Gas Optimization”, “DeFi Integration”]
},
{
icon: Zap,
title: “DevOps & Continuous Deployment”,
description: “CI/CD pipelines, infrastructure as code, and 24/7 monitoring for zero-downtime releases.”,
features: [“CI/CD Pipelines”, “Infrastructure as Code”, “24/7 Monitoring”, “Auto-scaling”]
}
];

const steps = [
{
number: “01”,
title: “Discovery Call”,
description: “We map out your vision, pain points, and success metrics.”
},
{
number: “02”,
title: “Technical Audit & Proposal”,
description: “Actionable blueprint with timelines, milestones, and transparent pricing.”
},
{
number: “03”,
title: “Build & Automate”,
description: “Rapid iteration, rigorous testing, and hands-on collaboration.”
},
{
number: “04”,
title: “Launch & Scale”,
description: “Handoff detailed documentation, training, and optional retainer support.”
}
];

return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
{/* Animated Background Elements */}
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
</div>

```
  {/* Navigation */}
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Echocraft
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">Process</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full text-white font-medium hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
          <a href="#process" className="block px-3 py-2 text-gray-300 hover:text-white">Process</a>
          <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium mt-2">
            Get Started
          </button>
        </div>
      </div>
    )}
  </nav>

  {/* Hero Section */}
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent leading-tight">
          Crafting Intelligent Systems
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          That <span className="text-cyan-400 font-semibold">Echo Your Vision</span>
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
          From AI-driven analytics to blockchain-powered workflows, we architect and automate your entire stack—so you can focus on growth, not glue code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center gap-2">
            Get Your Free Technical Audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Why Echocraft Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Why Echocraft?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "End-to-End Ownership",
            description: "We don't just write code—we design, deploy, and maintain systems that run themselves.",
            icon: "🎯"
          },
          {
            title: "Cross-Discipline Expertise",
            description: "Full-stack development, Machine Learning, Smart Contracts, DevOps & Automation—all under one roof.",
            icon: "🚀"
          },
          {
            title: "Business-First Mindset",
            description: "Every line of code is driven by ROI metrics—speed, reliability, and scalability.",
            icon: "📈"
          }
        ].map((item, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Our Signature Services
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? 'border-cyan-400 bg-slate-700/50' 
                  : 'border-slate-700 hover:border-cyan-400/50'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl mr-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Process Section */}
  <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          How It Works
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">{step.number}</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonial Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={24} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-2xl md:text-3xl font-light text-gray-100 mb-8 leading-relaxed">
        "Echocraft turned our chaotic scrapers and dashboards into a single automated pipeline—cut our reporting time by 80% and supercharged our betting accuracy."
      </blockquote>
      <cite className="text-cyan-400 font-medium text-lg">
        — Lead Engineer, Sports Analytics Startup
      </cite>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Ready to Amplify Your Tech?
      </h2>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Build resilient systems, ship faster releases, and automate the hustle—so you can lead your market.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
          Schedule Your Free Audit
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
          View Case Studies
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto text-center">
      <div className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Echocraft Automations
      </div>
      <p className="text-gray-400 mb-8">
        Crafting Intelligent Systems that Echo Your Vision
      </p>
      <div className="flex justify-center space-x-8 text-gray-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </div>
  </footer>
</div>
```

);
};

export default EchocraftLanding;
