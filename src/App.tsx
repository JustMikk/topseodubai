/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Star, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Link as LinkIcon, 
  FileText, 
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  ExternalLink,
  Bot,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] animate-pulse delay-700" />
    <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-purple-50/50 rounded-full blur-[100px]" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <Search className="text-white w-5 h-5 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-display">topseodubai.ae</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#case-studies" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group">
            Case Study
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:scale-105 active:scale-95">
            Get Free Audit
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-6"
          >
            <a href="#about" className="text-lg font-semibold text-slate-900" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#services" className="text-lg font-semibold text-slate-900" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#case-studies" className="text-lg font-semibold text-slate-900" onClick={() => setIsOpen(false)}>Case Study</a>
            <a href="#faq" className="text-lg font-semibold text-slate-900" onClick={() => setIsOpen(false)}>FAQ</a>
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-bold">Get Free Audit</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 font-display">
              Achieve <span className="text-indigo-600">Top Search</span> Rankings With Our SEO Services
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Experience Increased Visibility, Higher Conversions, and Lasting Impact with Our Proven SEO Techniques
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 mb-16"
            >
              Get Started
            </motion.button>

            <div className="flex items-center gap-12">
              <div>
                <div className="text-4xl font-extrabold text-indigo-600 mb-1">27K+</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Expertise Team</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-indigo-600 mb-1">77M+</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Traffic Generated</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/seed/dubai-seo-expert/800/1000" 
                className="w-full max-w-md mx-auto rounded-[60px] shadow-2xl" 
                alt="SEO Professional" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 lg:-right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/professional-face-${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" alt="Team" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-900">120+ Expertise</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-10 lg:-left-20 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 w-48"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Position Tracking Visibility</div>
                <div className="text-xs font-bold text-indigo-600">7.87%</div>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[30, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-50 rounded-t-sm" />
                ))}
              </div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 flex flex-col items-center"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="text-indigo-600 w-5 h-5" />
              </div>
              <div className="text-lg font-extrabold text-slate-900">99%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = ["J.P.Morgan", "Deloitte.", "Walmart", "ebay", "LANCÔME"];
  return (
    <div className="py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest"
        >
          Trusted by 1200+ companies around the world
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <motion.span 
              key={logo} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1, filter: 'grayscale(0%)' }}
              className="text-2xl font-bold text-slate-900 cursor-default transition-all duration-300"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Increase Traffic",
      desc: "Our expertise will help you to improve visibility in search engine results significantly.",
      icon: <TrendingUp className="w-6 h-6" />,
      highlight: true
    },
    {
      title: "Improved Rankings",
      desc: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
      icon: <BarChart3 className="w-6 h-6" />,
      highlight: false
    },
    {
      title: "Sustainable Growth",
      desc: "Our SEO strategies focus on sustainable with search engine guidelines.",
      icon: <Globe className="w-6 h-6" />,
      highlight: false
    },
    {
      title: "Targeted Audience",
      desc: "We focus on targeting specific keywords to attract your ideal audience.",
      icon: <Target className="w-6 h-6" />,
      highlight: false
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight font-display">
              Drive Targeted Traffic and Boost Conversions
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Establish Your Brand as an Authority and Build Trust with Our Proven SEO Solutions that Boost Online Reputation and Position You as an Industry Leader.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 group"
            >
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-10 rounded-[40px] border border-slate-100 transition-all cursor-pointer ${item.highlight ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200' : 'bg-white text-slate-900 hover:shadow-2xl'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${item.highlight ? 'bg-white/20' : 'bg-indigo-50 text-indigo-600'}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "Off-Page Optimization",
      desc: "Building high-quality backlinks from reputable websites with influencer outreach and social bookmarking to enhance your rankings.",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: "On-Page Optimization",
      desc: "Optimizing individual web pages to rank higher and earn more relevant traffic in search engines.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Keyword Research",
      desc: "Finding and analyzing search terms that people enter into search engines with the goal of using that data for a specific purpose.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "SEO Audits and Reporting",
      desc: "Comprehensive analysis of your website's health and performance with detailed monthly reports.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight font-display">Customized Solutions to Your Business Goals</h2>
            
            <div className="space-y-4 mt-12">
              {services.map((service, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ x: 10 }}
                  className={`w-full text-left p-8 rounded-3xl transition-all flex items-center justify-between group ${activeTab === i ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200' : 'bg-white text-slate-900 border border-slate-100 hover:bg-slate-50'}`}
                >
                  <span className="font-bold text-xl font-display">{service.title}</span>
                  <div className={`transition-transform ${activeTab === i ? 'rotate-45' : 'group-hover:translate-x-1'}`}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="text-lg text-slate-500 mb-12 leading-relaxed">
              Unleashing the Power of Search Engine Optimization to Propel Your Business Forward and Achieve Sustainable, Long-Term Results in the Competitive Online Landscape.
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full scale-110 -z-10 blur-3xl opacity-50" />
              <motion.img 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={`https://picsum.photos/seed/seo-analytics-${activeTab}/800/800`} 
                className="w-full max-w-md mx-auto rounded-full shadow-2xl border-[15px] border-white" 
                alt="SEO Strategy" 
                referrerPolicy="no-referrer" 
              />
              
              {/* Floating Graph */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 w-48"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Web Traffic</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Visitors</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-16 flex items-end gap-0.5">
                    {[20, 40, 30, 60, 50, 80].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-100 rounded-t-sm" />
                    ))}
                  </div>
                  <div className="text-lg font-extrabold text-indigo-600">50.345</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { name: "Sarah Johnson", role: "Head of SEO", img: "https://picsum.photos/seed/business-woman-1/400/400" },
    { name: "Michael Chen", role: "Technical Lead", img: "https://picsum.photos/seed/business-man-1/400/400" },
    { name: "Amira Al-Farsi", role: "Content Strategist", img: "https://picsum.photos/seed/business-woman-2/400/400" },
    { name: "David Miller", role: "Link Building Expert", img: "https://picsum.photos/seed/business-man-2/400/400" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">Meet the Minds Behind the Results</h2>
            <p className="text-slate-600">Our team consists of industry veterans with decades of combined experience in the ever-evolving landscape of digital marketing and SEO.</p>
          </motion.div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
          >
            View All Team <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                <img src={member.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={member.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">{member.name}</h3>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Founder of FreshShop",
      text: "Since implementing their strategies, our website's organic traffic has grown exponentially, and we've experienced a substantial increase in lead generation.",
      rating: 5,
      highlight: false
    },
    {
      name: "Michael Davis",
      company: "Founder of OnlineMart",
      text: "Working with topseodubai.ae has been an absolute game-changer for our business. Their strategic SEO solutions make our website to the top of search engine rankings.",
      rating: 5,
      highlight: true
    },
    {
      name: "Olivia Wilson",
      company: "CEO of TechFlow",
      text: "Their expertise in the Dubai market is unmatched. We saw results within the first 3 months that we couldn't achieve in a year with other agencies.",
      rating: 5,
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-indigo-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.2]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 font-display"
          >
            Hear What Our Satisfied Clients Have to Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-1"
          >
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />)}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[48px] shadow-xl border border-slate-100 flex flex-col justify-between relative group"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare className="w-12 h-12 text-indigo-600" />
              </div>
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-lg italic mb-10 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/client-face-${i}/100/100`} className="w-14 h-14 rounded-full border-2 border-white shadow-md" alt={review.name} referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-extrabold text-slate-900 font-display">{review.name}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{review.company}</div>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${review.highlight ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Read story
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Bronze Plan", price: "125", features: ["Up to 75 keywords phrases", "Custom dashboard : 4", "Up to 10 assets", "8 hours of consulting", "Usability check", "In-depth site analysis"], highlight: false },
    { name: "Silver Plan", price: "250", features: ["Up to 100 keywords phrases", "Custom dashboard : 8", "Up to 15 assets", "18 hours of consulting", "Usability check", "In-depth site analysis"], highlight: true },
    { name: "Gold Plan", price: "300", features: ["Up to 250 keywords phrases", "Custom dashboard : 15", "Up to 20 assets", "25 hours of consulting", "Usability check", "In-depth site analysis"], highlight: false },
    { name: "Diamond Plan", price: "450", features: ["Up to 500 keywords phrases", "Custom dashboard : 30", "Up to 50 assets", "48 hours of consulting", "Usability check", "In-depth site analysis"], highlight: false }
  ];

  return (
    <section id="pricing" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 font-display"
          >
            Competitive Pricing for High-Quality SEO Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-10 rounded-[48px] border transition-all cursor-pointer ${plan.highlight ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xl shadow-indigo-200' : 'bg-white text-slate-900 border-slate-100 hover:shadow-2xl'}`}
            >
              <div className="flex items-center gap-2 mb-8">
                <h3 className="text-2xl font-extrabold font-display">{plan.name}</h3>
                <Star className={`w-5 h-5 fill-yellow-400 text-yellow-400`} />
              </div>
              
              <ul className="space-y-4 mb-12">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className={`w-5 h-5 ${plan.highlight ? 'text-indigo-200' : 'text-indigo-600'}`} />
                    <span className={plan.highlight ? 'text-indigo-50' : 'text-slate-500'}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-extrabold font-display">${plan.price}</span>
                <span className={`text-sm font-bold ${plan.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>/month</span>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-extrabold transition-all border ${plan.highlight ? 'bg-white text-indigo-600 border-white hover:bg-indigo-50' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'}`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSEOCompany = () => {
  const benefits = [
    { title: "15+ Years Experience", desc: "Decades of navigating the complex SEO landscape in Dubai and the Middle East." },
    { title: "Data-Driven Approach", desc: "We don't guess. We use advanced analytics to drive every single decision." },
    { title: "Guaranteed Results", desc: "Our track record speaks for itself with hundreds of #1 rankings achieved." },
    { title: "Local Expertise", desc: "Deep understanding of UAE search behavior and bilingual SEO requirements." }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/dubai-skyline-office/800/600" 
              className="rounded-[60px] shadow-2xl" 
              alt="Dubai SEO Office" 
              referrerPolicy="no-referrer" 
            />
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block"
            >
              <div className="text-5xl font-extrabold text-indigo-600 mb-2 font-display">#1</div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">SEO Agency in UAE</div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight font-display">
              Best SEO Company In Dubai & AE
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              We are not just another agency; we are your growth partners. Our mission is to dominate the search results for your business, ensuring you stay ahead of the competition in the vibrant Dubai market.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    { title: "Dubai Real Estate Portal", metric: "+320%", label: "Organic Leads", img: "https://picsum.photos/seed/dubai-architecture/600/400" },
    { title: "Luxury Car Rental UAE", metric: "Top 3", label: "Keyword Rankings", img: "https://picsum.photos/seed/luxury-car/600/400" },
    { title: "E-commerce Giant Dubai", metric: "4.5x", label: "ROI Growth", img: "https://picsum.photos/seed/online-shopping/600/400" }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display"
          >
            Case Studies - Businesses Ranked #1 In Dubai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Real results for real businesses. We don't just promise rankings; we deliver measurable business growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/3]">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/40 transition-colors" />
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl font-bold text-indigo-600 mb-1 font-display">{item.metric}</div>
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfessionalServices = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    { 
      title: "Link Building", 
      details: "Strategic outreach to high-authority domains. We focus on quality over quantity, securing placements on sites that actually move the needle for your rankings in Dubai.",
      features: ["Guest Posting", "Niche Edits", "Blogger Outreach", "Resource Page Links"],
      icon: <LinkIcon /> 
    },
    { 
      title: "Digital PR", 
      details: "Get featured in top Dubai and international publications. We craft compelling stories that earn media coverage and powerful backlinks.",
      features: ["Press Releases", "Media Relations", "Brand Storytelling", "Crisis Management"],
      icon: <Globe /> 
    },
    { 
      title: "Website Speed", 
      details: "Technical optimization for lightning-fast loading times. We optimize your Core Web Vitals to ensure a perfect user experience and better rankings.",
      features: ["Image Optimization", "Code Minification", "CDN Setup", "Server Tuning"],
      icon: <Zap /> 
    },
    { 
      title: "Content Creation", 
      details: "High-quality, SEO-optimized content that resonates with your audience. Our writers understand the nuances of the UAE market.",
      features: ["Blog Posts", "Landing Pages", "Whitepapers", "Copywriting"],
      icon: <FileText /> 
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-6 font-display">Professional Services</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">A deep dive into our specialized SEO arsenal designed for the Dubai market.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            {services.map((s, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(i)}
                className={`w-full text-left p-8 rounded-[32px] transition-all flex items-center gap-6 group ${activeService === i ? 'bg-indigo-600 shadow-2xl shadow-indigo-500/20' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeService === i ? 'bg-white text-indigo-600' : 'bg-white/10 text-white'}`}>
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display">{s.title}</h3>
                </div>
                <ChevronRight className={`w-6 h-6 transition-transform ${activeService === i ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[48px] h-full"
              >
                <h3 className="text-4xl font-extrabold mb-8 text-indigo-400 font-display">{services[activeService].title}</h3>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  {services[activeService].details}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {services[activeService].features.map((f, j) => (
                    <motion.div 
                      key={j} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      <span className="font-semibold text-slate-200">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all"
                >
                  Get a Quote for {services[activeService].title}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "How long does it take to see SEO results in Dubai?", a: "Typically, you'll start seeing significant movement in 3-6 months. However, for highly competitive Dubai keywords, it can take 6-12 months to reach the top spots." },
    { q: "Do you provide monthly SEO reports?", a: "Yes, we provide comprehensive monthly reports detailing keyword rankings, traffic growth, conversion metrics, and the work completed during the period." },
    { q: "What makes your agency different from others in the UAE?", a: "We focus on ROI, not just rankings. Our strategies are data-driven and tailored specifically to the unique search behaviors of the UAE market." },
    { q: "Is SEO a one-time service or ongoing?", a: "SEO is an ongoing process. Search algorithms change, and your competitors are always working to outrank you. Continuous optimization is key to maintaining and growing your positions." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4 font-display"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            Everything you need to know about our SEO services in Dubai.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 font-display">{faq.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-indigo-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-indigo-600 rounded-[60px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/3 relative z-10"
        >
          <img 
            src="https://picsum.photos/seed/business-success-team/600/600" 
            className="w-full h-auto rounded-[40px] shadow-2xl border-8 border-white/10" 
            alt="Start Journey" 
            referrerPolicy="no-referrer" 
          />
        </motion.div>

        <div className="lg:w-2/3 relative z-10 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight font-display"
          >
            Start Your SEO Journey with Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-indigo-100 text-xl mb-12 max-w-2xl leading-relaxed"
          >
            Let's Connect for Enhanced Search Rankings and Maximize Your Online Impact
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-12 py-5 rounded-full text-xl font-extrabold hover:shadow-2xl transition-all"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Search className="text-white w-5 h-5 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">topseodubai.ae</span>
            </motion.div>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm">
              We provide customized SEO solutions tailored to the unique needs and goals of our clients in Dubai and beyond.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social, i) => (
                <motion.div 
                  key={social} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: '#4f46e5', color: '#ffffff' }}
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                >
                  <Globe className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">Company</h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-indigo-600 transition-colors">Case Study</a></li>
              <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">Features</h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">SEO Audits</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Data Tracking</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Optimization</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">Help</h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Customer Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400">
          <p>© 2026 topseodubai.ae. All Right Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyYouTubeBot = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 w-72"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-50">
              <Youtube className="text-red-600 w-5 h-5" />
              <span className="font-bold text-slate-900">YouTube Growth Tools</span>
            </div>
            <div className="space-y-3">
              <a 
                href="https://ultrabot.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <Bot className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Buy YouTube Bot</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
              </a>
              
              <a 
                href="https://theytlab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition-colors group relative overflow-hidden"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Instant Services</span>
                    <span className="text-[10px] text-indigo-100 font-medium uppercase tracking-tighter">Recommended</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white relative z-10" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-3 px-6 py-4 rounded-full font-bold shadow-2xl transition-all ${expanded ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white hover:scale-105'}`}
      >
        {expanded ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
        <span>Get YouTube Bot</span>
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        
        {/* Section 2: The #1 SEO Agency In Dubai (Integrated into Hero and WhyChooseUs) */}
        
        <WhyChooseUs />
        <Solutions />
        <Team />
        <Reviews />
        <BestSEOCompany />
        <Pricing />
        <CaseStudies />
        <ProfessionalServices />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyYouTubeBot />
    </div>
  );
}
