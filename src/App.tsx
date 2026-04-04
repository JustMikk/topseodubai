/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Star,
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
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type AuditModalProps = {
  open: boolean;
  onClose: () => void;
};

type NavProps = {
  onOpenAudit: () => void;
};

type ClickActionProps = {
  onOpenAudit: () => void;
};

const AuditModal = ({ open, onClose }: AuditModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          className="w-full max-w-lg bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 font-display">
                Get Your Free SEO Audit
              </h3>
              <p className="text-slate-500 mt-2">
                Share your website and business email. We send a practical
                Dubai-focused audit within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close audit form"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 mb-2 inline-block">
                Business Email
              </span>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 mb-2 inline-block">
                Website URL
              </span>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  required
                  placeholder="https://example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
            >
              Request My Audit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] animate-pulse delay-700" />
    <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-purple-50/50 rounded-full blur-[100px]" />
  </div>
);

const Navbar = ({ onOpenAudit }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12">
            <Search className="text-white w-5 h-5 -rotate-12" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
            topseodubai.ae
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#about"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
          >
            Why Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#team"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
          >
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#case-studies"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
          >
            Case Studies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenAudit}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:scale-105 active:scale-95"
          >
            Get Free Audit
          </button>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
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
            <a
              href="#about"
              className="text-lg font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#services"
              className="text-lg font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#team"
              className="text-lg font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a
              href="#case-studies"
              className="text-lg font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#faq"
              className="text-lg font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
              <button
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-bold"
                onClick={() => {
                  setIsOpen(false);
                  onOpenAudit();
                }}
              >
                Get Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenAudit }: ClickActionProps) => {
  const floaters = [
    "Doing SEO Since 2015",
    "Premium Quality. Affordable Rates",
    "+50% Traffic Growth (Avg. After 6 Months)",
  ];

  return (
    <section
      id="top"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-white"
    >
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 md:mb-8 font-display">
              Dubai SEO That Converts{" "}
              <span className="text-indigo-600">Searches</span> Into Revenue
            </h1>
            <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 max-w-lg leading-relaxed">
              We build bilingual, market-aware SEO campaigns for Dubai
              businesses that need qualified traffic, stronger lead pipelines,
              and measurable growth month after month.
            </p>

            <motion.button
              onClick={onOpenAudit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl text-base md:text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 mb-10 md:mb-16"
            >
              Get Free Audit
            </motion.button>

            <div className="flex items-center gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-1">
                  10+
                </div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Team
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-1">
                  100M+
                </div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Traffic
                </div>
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                className="w-full max-w-md mx-auto rounded-[60px] shadow-2xl"
                alt="SEO Professional"
                referrerPolicy="no-referrer"
              />
            </div>

            {floaters.map((text, idx) => (
              <motion.div
                key={text}
                animate={{ y: [0, idx % 2 === 0 ? -12 : 12, 0] }}
                transition={{
                  duration: 3.5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`hidden sm:block absolute z-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 ${idx === 0 ? "top-8 -right-4 lg:-right-12" : ""} ${idx === 1 ? "bottom-28 -left-10 lg:-left-20" : ""} ${idx === 2 ? "top-1/2 -right-10" : ""}`}
              >
                <p className="text-xs font-bold text-slate-900 max-w-[190px]">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = [
    "Cafu",
    "Washmen",
    "Snoonu",
    "YallaMotor",
    "Mumzworld",
    "Invygo",
  ];

  return (
    <div className="py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest"
        >
          Trusted by 500+ growth-stage companies across Dubai and the GCC
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
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
      title: "Revenue-First SEO",
      desc: "We align keyword plans with products, margins, and actual buying intent instead of chasing vanity metrics.",
      icon: <TrendingUp className="w-6 h-6" />,
      highlight: true,
    },
    {
      title: "Technical Precision",
      desc: "From crawl budget and schema to Core Web Vitals, we remove technical friction that blocks growth.",
      icon: <BarChart3 className="w-6 h-6" />,
      highlight: false,
    },
    {
      title: "Durable Rankings",
      desc: "Our methodology is built for algorithm updates, so your rankings hold after competitor spikes.",
      icon: <Globe className="w-6 h-6" />,
      highlight: false,
    },
    {
      title: "Local Intent Capture",
      desc: "We map Dubai district-level intent and Arabic-English query behavior to attract qualified buyers.",
      icon: <Target className="w-6 h-6" />,
      highlight: false,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight font-display">
              Built For Dubai Search Reality, Not Generic SEO Playbooks
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Search behavior in Dubai is multilingual, fast-moving, and
              mobile-heavy. We build campaigns around commercial outcomes, not
              broad assumptions. Every roadmap includes technical fixes, content
              production, and authority growth so gains compound over time.
            </p>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 items-center gap-2 group"
            >
              Explore Our Process{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
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
                className={`p-10 rounded-[40px] border border-slate-100 transition-all cursor-pointer ${item.highlight ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200" : "bg-white text-slate-900 hover:shadow-2xl"}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${item.highlight ? "bg-white/20" : "bg-indigo-50 text-indigo-600"}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${item.highlight ? "text-indigo-100" : "text-slate-500"}`}
                >
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
      title: "Off-Page SEO",
      desc: "We build editorial links from relevant publications and niche websites to improve authority for high-value terms.",
      extra:
        "Campaigns include outreach prospecting, anchor mapping, quality checks, and disavow monitoring to keep link velocity natural.",
      icon: <LinkIcon className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "On-Page SEO",
      desc: "Page-level optimization for titles, headings, internal links, and semantic relevance that improves both rankings and CTR.",
      extra:
        "We optimize templates and landing page clusters so your team can publish new pages with SEO baked in by default.",
      icon: <FileText className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Keyword Research",
      desc: "Intent-based keyword maps across Arabic and English queries help us target terms with clear commercial outcomes.",
      extra:
        "We prioritize keyword groups by opportunity score, competition, expected conversion potential, and content effort.",
      icon: <Search className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "SEO Audit",
      desc: "Deep technical and content audits uncover crawl waste, indexation gaps, and priority fixes with business impact.",
      extra:
        "Audit delivery includes a sprint plan with quick wins, dependencies, ownership, and projected impact by channel.",
      icon: <BarChart3 className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1551281044-8b2c5f62a5f4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Online Reviews",
      desc: "We improve local trust signals and review velocity across profile listings to lift map pack visibility.",
      extra:
        "Our review workflow supports response templates, negative-feedback handling, and branch/location-level governance.",
      icon: <MessageSquare className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Content Strategy",
      desc: "Topic clusters and conversion-focused briefs turn search demand into pages that actually generate qualified leads.",
      extra:
        "We coordinate informational and transactional funnels so content supports rankings, brand trust, and revenue growth.",
      icon: <FileText className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight font-display">
              Growth Services That Match Your Sales Funnel
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Each service below opens a focused execution plan with practical
              scope, realistic outcomes, and how it fits into your broader SEO
              roadmap.
            </p>

            <div className="space-y-4 mt-12">
              {services.map((service, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ x: 10 }}
                  className={`w-full text-left p-5 md:p-8 rounded-3xl transition-all flex items-center justify-between group ${activeTab === i ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200" : "bg-white text-slate-900 border border-slate-100 hover:bg-slate-50"}`}
                >
                  <span className="font-bold text-base md:text-xl font-display">
                    {service.title}
                  </span>
                  <div
                    className={`transition-transform ${activeTab === i ? "rotate-45" : "group-hover:translate-x-1"}`}
                  >
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
            <div className="text-base md:text-lg text-slate-500 mb-6 leading-relaxed">
              {services[activeTab].desc}
            </div>
            <p className="text-slate-500 mb-12 leading-relaxed">
              {services[activeTab].extra}
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full scale-110 -z-10 blur-3xl opacity-50" />
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={services[activeTab].image}
                onError={(event) => {
                  event.currentTarget.src =
                    "https://picsum.photos/seed/seo-fallback/900/900";
                }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-full shadow-2xl border-[8px] md:border-[15px] border-white"
                alt="SEO Strategy"
                referrerPolicy="no-referrer"
              />

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 sm:bottom-10 left-0 bg-white p-4 md:p-5 rounded-3xl shadow-2xl border border-slate-50 w-40 md:w-48"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Web Traffic
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Visitors
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-16 flex items-end gap-0.5">
                    {[20, 40, 30, 60, 50, 80].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-indigo-100 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="text-lg font-extrabold text-indigo-600">
                    50.345
                  </div>
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
    {
      name: "James Carter",
      role: "SEO Director",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Emma Reed",
      role: "Technical SEO Lead",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Omar Al Mansoori",
      role: "Local Search Strategist",
      img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Laila Al Nuaimi",
      role: "Content & Outreach Lead",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
              Operators Who Execute, Not Just Advise
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our Dubai team combines technical SEO, local search strategy, and
              editorial authority building. Every campaign is managed by
              specialists who own execution from audit to reporting.
            </p>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
          >
            Meet the Team on a Call <ArrowRight className="w-5 h-5" />
          </motion.a>
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
                <img
                  src={member.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={member.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                {member.name}
              </h3>
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
      name: "Sarah J.",
      company: "Marketing Lead, Washmen",
      text: "Our non-brand traffic jumped by 61% in six months, and quote requests from organic pages now outperform paid social leads.",
      rating: 5,
    },
    {
      name: "Rami K.",
      company: "GM, Invygo",
      text: "The team fixed indexation issues and rebuilt our location pages. We now rank for high-intent rental terms we never touched before.",
      rating: 5,
    },
    {
      name: "Olivia W.",
      company: "Ecommerce Manager, Mumzworld",
      text: "Their content clustering strategy brought category pages back to page one and improved conversion rate from organic by 24%.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-indigo-50/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.2]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display"
          >
            Proof From Teams That Had Real Revenue Targets
          </motion.h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            These testimonials come from growth-focused teams that needed
            measurable improvement, not just prettier ranking reports.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-1"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
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
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-lg italic mb-10 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://picsum.photos/seed/client-face-${i}/100/100`}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                    alt={review.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-extrabold text-slate-900 font-display">
                      {review.name}
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                      {review.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onOpenAudit }: ClickActionProps) => {
  const plans = [
    {
      name: "Bronze Plan",
      price: "95",
      features: [
        "Up to 75 keyword phrases",
        "Powerful backlinks campaign",
        "Up to 10 assets",
        "8 hours of consulting",
        "In-depth site analysis",
      ],
      highlight: false,
    },
    {
      name: "Silver Plan",
      price: "175",
      features: [
        "Up to 100 keyword phrases",
        "Powerful backlinks campaign",
        "Up to 15 assets",
        "18 hours of consulting",
        "In-depth site analysis",
      ],
      highlight: true,
    },
    {
      name: "Gold Plan",
      price: "210",
      features: [
        "Up to 250 keyword phrases",
        "Powerful backlinks campaign",
        "Up to 20 assets",
        "25 hours of consulting",
        "In-depth site analysis",
      ],
      highlight: false,
    },
    {
      name: "Diamond Plan",
      price: "315",
      features: [
        "Up to 500 keyword phrases",
        "Powerful backlinks campaign",
        "Up to 50 assets",
        "48 hours of consulting",
        "In-depth site analysis",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display"
          >
            Transparent Pricing Without Inflated Agency Retainers
          </motion.h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Updated rates are 30% lower while keeping execution quality high.
            Pick a plan and request a free audit before onboarding.
          </p>
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
              className={`p-10 rounded-[48px] border transition-all cursor-pointer ${plan.highlight ? "bg-indigo-600 text-white border-indigo-600 shadow-2xl shadow-indigo-200" : "bg-white text-slate-900 border-slate-100 hover:shadow-2xl"}`}
            >
              <div className="flex items-center gap-2 mb-8">
                <h3 className="text-2xl font-extrabold font-display">
                  {plan.name}
                </h3>
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 ${plan.highlight ? "text-indigo-200" : "text-indigo-600"}`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-indigo-50" : "text-slate-500"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-extrabold font-display">
                  ${plan.price}
                </span>
                <span
                  className={`text-sm font-bold ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}
                >
                  /month
                </span>
              </div>

              <motion.button
                onClick={onOpenAudit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-extrabold transition-all border ${plan.highlight ? "bg-white text-indigo-600 border-white hover:bg-indigo-50" : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"}`}
              >
                Get Free Audit
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
    {
      title: "10+ Years Experience",
      desc: "A decade of operating in competitive UAE verticals gives us practical pattern recognition others miss.",
    },
    {
      title: "Data-Led Decisions",
      desc: "Every sprint is prioritized using crawl data, ranking volatility, and conversion impact.",
    },
    {
      title: "Hands-On Specialists",
      desc: "Senior specialists execute core work directly instead of outsourcing critical campaign tasks.",
    },
    {
      title: "Local Market Context",
      desc: "We optimize for mixed Arabic-English behavior, district intent, and map-based discovery.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
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
              <div className="text-5xl font-extrabold text-indigo-600 mb-2 font-display">
                #1
              </div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                SEO Agency in UAE
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight font-display">
              The SEO Partner Teams Call When Growth Stalls
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              We work with ambitious teams that need technical depth and clear
              communication. Instead of generic monthly decks, we provide
              decision-ready reporting with what changed, what shipped, and what
              drives the next sprint.
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
                    <h3 className="font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {benefit.desc}
                    </p>
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
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const cases = [
    {
      title: "Property Marketplace in Dubai",
      metric: "+320%",
      label: "Organic Leads",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
      story:
        "After fixing crawl traps and launching district-level landing pages, lead form submissions rose from 1,100 to 4,620 per month within two quarters.",
    },
    {
      title: "Premium Rental Service",
      metric: "Top 3",
      label: "Keyword Rankings",
      img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=80",
      story:
        "We rebuilt category architecture, resolved cannibalization, and deployed intent-aligned content. 28 priority keywords reached Top 3 in 5 months.",
    },
    {
      title: "Regional Online Store",
      metric: "4.5x",
      label: "ROI Growth",
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1000&q=80",
      story:
        "By improving technical health and strengthening product cluster pages, organic revenue grew 4.5x year over year while paid dependency dropped.",
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display"
          >
            Real Campaign Narratives From Competitive Niches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Click any case to view what was fixed, what was launched, and what
            outcomes were achieved without exposing client brand identity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer text-left"
              onClick={() => setSelectedCase(i)}
            >
              <div className="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/40 transition-colors" />
                <motion.div
                  whileHover={{ y: -5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl font-bold text-indigo-600 mb-1 font-display">
                    {item.metric}
                  </div>
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                {item.title}
              </h3>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedCase !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[85] bg-slate-900/70 backdrop-blur-sm p-4 flex items-center justify-center"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(event) => event.stopPropagation()}
                className="bg-white w-full max-w-2xl rounded-[32px] p-8 border border-slate-100 shadow-2xl"
              >
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 font-display">
                      {cases[selectedCase].title}
                    </h3>
                    <p className="text-slate-500 mt-2">
                      Client name intentionally withheld under NDA. Metrics are
                      from audited campaign reporting.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    aria-label="Close case study details"
                    className="p-2 rounded-full hover:bg-slate-100"
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Primary Outcome
                    </div>
                    <div className="text-3xl font-extrabold text-indigo-600 mt-1">
                      {cases[selectedCase].metric}
                    </div>
                    <div className="text-sm font-semibold text-slate-700">
                      {cases[selectedCase].label}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Execution Window
                    </div>
                    <div className="text-xl font-bold text-slate-900 mt-1">
                      6 to 9 Months
                    </div>
                    <div className="text-sm text-slate-600">
                      Technical + content + link acquisition
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {cases[selectedCase].story}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProfessionalServices = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    {
      title: "Link Building",
      details:
        "Strategic outreach to high-authority domains. We focus on quality over quantity, securing placements on sites that actually move the needle for your rankings in Dubai.",
      features: [
        "Guest Posting",
        "Niche Edits",
        "Blogger Outreach",
        "Resource Page Links",
      ],
      icon: <LinkIcon />,
    },
    {
      title: "Keyword Research",
      details:
        "We map high-intent keyword clusters for Dubai buyers so your content and landing pages target searches that are more likely to convert.",
      features: [
        "Intent Mapping",
        "Keyword Clustering",
        "Content Gap Analysis",
        "SERP Opportunity Plan",
      ],
      icon: <Search />,
    },
    {
      title: "SEO Audit",
      details:
        "Comprehensive technical and on-page diagnostics to identify indexing, crawl, UX, and performance issues that suppress rankings.",
      features: [
        "Crawl Diagnostics",
        "On-Page Checks",
        "Schema Validation",
        "Priority Fix Roadmap",
      ],
      icon: <BarChart3 />,
    },
    {
      title: "Online Reviews",
      details:
        "We optimize your local reputation signals through review generation and response systems that improve trust and local visibility.",
      features: [
        "Review Growth Plan",
        "Response Templates",
        "Sentiment Monitoring",
        "Local Trust Signals",
      ],
      icon: <MessageSquare />,
    },
    {
      title: "Digital PR",
      details:
        "Get featured in top Dubai and international publications. We craft compelling stories that earn media coverage and powerful backlinks.",
      features: [
        "Press Releases",
        "Media Relations",
        "Brand Storytelling",
        "Crisis Management",
      ],
      icon: <Globe />,
    },
    {
      title: "Website Speed",
      details:
        "Technical optimization for lightning-fast loading times. We optimize your Core Web Vitals to ensure a perfect user experience and better rankings.",
      features: [
        "Image Optimization",
        "Code Minification",
        "CDN Setup",
        "Server Tuning",
      ],
      icon: <Zap />,
    },
    {
      title: "Content Creation",
      details:
        "High-quality, SEO-optimized content that resonates with your audience. Our writers understand the nuances of the UAE market.",
      features: ["Blog Posts", "Landing Pages", "Whitepapers", "Copywriting"],
      icon: <FileText />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Execution Stack Beyond Basic SEO
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            A deeper layer of capabilities used when your growth goals require
            advanced authority and technical execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            {services.map((service, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(i)}
                className={`w-full text-left p-8 rounded-[32px] transition-all flex items-center gap-6 group ${activeService === i ? "bg-indigo-600 shadow-2xl shadow-indigo-500/20" : "bg-white/5 border border-white/10 hover:bg-white/10"}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeService === i ? "bg-white text-indigo-600" : "bg-white/10 text-white"}`}
                >
                  {React.cloneElement(service.icon as React.ReactElement, {
                    className: "w-6 h-6",
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display">
                    {service.title}
                  </h3>
                </div>
                <ChevronRight
                  className={`w-6 h-6 transition-transform ${activeService === i ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
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
                <h3 className="text-4xl font-extrabold mb-8 text-indigo-400 font-display">
                  {services[activeService].title}
                </h3>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  {services[activeService].details}
                </p>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Every service includes KPI tracking, implementation notes for
                  your dev and content teams, and weekly checkpoints so momentum
                  stays consistent.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {services[activeService].features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      <span className="font-semibold text-slate-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex mt-12 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all"
                >
                  Discuss {services[activeService].title}
                </a>
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
    {
      q: "How long does it take to see SEO results in Dubai?",
      a: "Most sites see measurable movement in 8 to 12 weeks, then stronger lead impact between month 4 and month 6 as technical and content fixes compound.",
    },
    {
      q: "Do you provide monthly SEO reports?",
      a: "Yes. You receive ranking movement, organic traffic quality, lead attribution, completed tasks, and next-sprint priorities in one report.",
    },
    {
      q: "What makes your agency different from others in the UAE?",
      a: "We combine technical SEO, content strategy, and authority building in one execution team with clear ownership and deadlines.",
    },
    {
      q: "Is SEO a one-time service or ongoing?",
      a: "SEO is ongoing. Competitors publish constantly, algorithms shift, and new opportunities appear every month.",
    },
    {
      q: "Can you work with in-house dev and content teams?",
      a: "Absolutely. We provide implementation tickets and editorial briefs your team can execute quickly.",
    },
    {
      q: "Do you support Arabic and English SEO together?",
      a: "Yes. We build multilingual keyword maps and optimize copy structure for both language audiences.",
    },
    {
      q: "What industries do you usually work with?",
      a: "Common verticals include real estate, healthcare, ecommerce, automotive, and B2B services in the UAE.",
    },
    {
      q: "Is there a minimum contract period?",
      a: "We recommend 6 months for meaningful outcomes, but we start with an audit and phased plan before long commitments.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display"
          >
            Questions Smart Teams Ask Before Choosing an SEO Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            Clear answers on timelines, scope, delivery model, and how we
            execute campaigns in Dubai.
          </motion.p>
        </div>

        <div className="space-y-4 bg-white/80 backdrop-blur p-3 rounded-3xl border border-slate-100 shadow-xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 font-display">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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

const CTA = ({ onOpenAudit }: ClickActionProps) => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-indigo-600 rounded-[32px] md:rounded-[60px] p-8 md:p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 md:gap-16"
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 md:mb-8 leading-tight font-display"
          >
            Ready To Outrank Stronger Competitors in Dubai?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-indigo-100 text-xl mb-12 max-w-2xl leading-relaxed"
          >
            Share your website and goals. We will send a practical action plan
            with priorities, quick wins, and projected impact.
          </motion.p>
          <motion.button
            onClick={onOpenAudit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-12 py-5 rounded-full text-xl font-extrabold hover:shadow-2xl transition-all"
          >
            Get Free Audit
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <motion.a
              href="#top"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8 group"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Search className="text-white w-5 h-5 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                topseodubai.ae
              </span>
            </motion.a>
            <h4 className="text-3xl font-extrabold text-slate-900 mb-4 font-display">
              #1 Dubai SEO Agency
            </h4>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm">
              We build SEO systems for Dubai businesses that need sustainable
              traffic, qualified leads, and better revenue efficiency.
            </p>
            <p className="text-slate-500 text-sm font-semibold">Email: hello@topseodubai.ae</p>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">
              Company
            </h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-indigo-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">
              Features
            </h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-600 transition-colors"
                >
                  SEO Audit
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Keyword Research
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Online Reviews
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Optimization
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg mb-8">Help</h4>
            <ul className="space-y-6 text-slate-500 font-semibold">
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-indigo-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@topseodubai.ae"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition-colors">
                  Request a Free Audit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400">
          <p>(c) 2026 topseodubai.ae. All Right Reserved.</p>
          <div className="flex gap-12">
            <a href="/privacy-policy.html" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions.html" className="hover:text-slate-600 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Top SEO Dubai | #1 Dubai SEO Agency";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "Top SEO Dubai helps UAE businesses increase qualified organic traffic with technical SEO, content strategy, and authority growth campaigns.",
    );
    ensureMeta(
      "robots",
      "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    );
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onOpenAudit={() => setAuditModalOpen(true)} />
      <main>
        <Hero onOpenAudit={() => setAuditModalOpen(true)} />
        <TrustedBy />
        <WhyChooseUs />
        <Solutions />
        <Team />
        <Reviews />
        <BestSEOCompany />
        <Pricing onOpenAudit={() => setAuditModalOpen(true)} />
        <CaseStudies />
        <ProfessionalServices />
        <FAQ />
        <CTA onOpenAudit={() => setAuditModalOpen(true)} />
      </main>
      <Footer />
      <AuditModal
        open={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
