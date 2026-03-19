/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Megaphone, 
  Search, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Quote,
  Plus,
  Minus
} from 'lucide-react';

const Logo = ({ variant = "light", size = "md" }: { variant?: "light" | "dark", size?: "sm" | "md" | "lg" }) => {
  const isDark = variant === "dark";
  const sizes = {
    sm: { box: "w-8 h-8", text: "text-base", sub: "text-[6px]", gap: "gap-2", padding: "p-0.5 pr-3" },
    md: { box: "w-10 h-10", text: "text-lg", sub: "text-[8px]", gap: "gap-2", padding: "p-1 pr-4" },
    lg: { box: "w-16 h-16", text: "text-3xl", sub: "text-[12px]", gap: "gap-3", padding: "p-1.5 pr-6" }
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.padding} ${isDark ? 'bg-bg text-fg' : 'bg-fg text-bg'} ${s.gap} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
      <div className={`${s.box} ${isDark ? 'bg-fg text-bg' : 'bg-bg text-fg'} flex items-center justify-center`}>
        <span className={`font-display font-bold ${s.text} tracking-tighter`}>AY</span>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className={`${s.text} font-display font-bold tracking-tight uppercase`}>Digital</span>
        <span className={`${s.sub} font-sans font-bold tracking-[0.4em] uppercase opacity-60`}>Centre</span>
      </div>
    </div>
  );
};

const services = [
  {
    id: "ai-agents",
    title: "AI Agent Development",
    description: "Custom AI agents tailored to automate your business workflows and enhance customer interactions.",
    icon: <Bot className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-600",
    details: {
      benefits: [
        "24/7 Automated Customer Support",
        "Significant reduction in operational costs",
        "Seamless integration with existing CRM systems",
        "Scalable architecture for growing businesses"
      ],
      caseStudy: "Automated 85% of customer inquiries for a global e-commerce brand, leading to a 40% increase in customer satisfaction scores.",
      techStack: ["Python", "TensorFlow", "OpenAI API", "LangChain"]
    }
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance, responsive websites built with the latest technologies to drive your online presence.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-emerald-500/10 text-emerald-600",
    details: {
      benefits: [
        "Lightning-fast page load speeds",
        "SEO-optimized architecture",
        "Mobile-first responsive design",
        "Robust security and data protection"
      ],
      caseStudy: "Redesigned a fintech platform resulting in a 120% increase in user engagement and 50% faster transaction processing.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Node.js"]
    }
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-600",
    details: {
      benefits: [
        "High-performance native experience",
        "Intuitive UX/UI design",
        "Offline capabilities and push notifications",
        "App Store & Play Store optimization"
      ],
      caseStudy: "Developed a health-tracking app that reached top 10 in the App Store within 3 months of launch.",
      techStack: ["React Native", "Flutter", "Swift", "Kotlin"]
    }
  },
  {
    id: "amazon",
    title: "Amazon Listing",
    description: "Expert Amazon product listing optimization to boost visibility and maximize your sales potential.",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-600",
    details: {
      benefits: [
        "Keyword-rich product titles and descriptions",
        "High-conversion A+ content design",
        "Strategic PPC campaign management",
        "Competitor analysis and pricing strategy"
      ],
      caseStudy: "Boosted organic sales by 200% for a home decor brand through comprehensive listing optimization.",
      techStack: ["Helium 10", "Jungle Scout", "Amazon Advertising"]
    }
  },
  {
    id: "ads",
    title: "Ads Promotion",
    description: "Strategic digital advertising campaigns across Google, Meta, and LinkedIn to reach your target audience.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-600",
    details: {
      benefits: [
        "Highly targeted audience segmentation",
        "Continuous A/B testing for maximum ROI",
        "Transparent reporting and analytics",
        "Creative ad copy and visual design"
      ],
      caseStudy: "Generated $1M in revenue for a SaaS startup with a $50k ad spend across Meta and Google Ads.",
      techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads"]
    }
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic to your site.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-600",
    details: {
      benefits: [
        "Improved organic search visibility",
        "Higher quality lead generation",
        "Long-term sustainable growth",
        "Technical SEO and site health audits"
      ],
      caseStudy: "Increased organic traffic by 450% for a B2B service provider over a 12-month period.",
      techStack: ["Ahrefs", "SEMrush", "Google Search Console"]
    }
  },
  {
    id: "whatsapp",
    title: "WhatsApp API",
    description: "Seamless WhatsApp Business API integration for automated messaging and customer support.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-600",
    details: {
      benefits: [
        "Automated customer notifications",
        "Real-time support via chatbots",
        "High open and engagement rates",
        "Secure and verified business profile"
      ],
      caseStudy: "Implemented WhatsApp automation for a logistics company, reducing call center volume by 60%.",
      techStack: ["Twilio", "Meta Business Suite", "Node.js"]
    }
  }
];

const testimonials = [
  {
    quote: "AY Digital transformed our outdated platform into a high-performance machine. Their AI integration saved us 40+ hours of manual work weekly.",
    author: "Sarah Chen",
    role: "CTO, NexaCorp",
    image: "https://picsum.photos/seed/sarah/200/200"
  },
  {
    quote: "The team's attention to detail in web development is unmatched. They don't just build sites; they build digital experiences that convert.",
    author: "Marcus Thorne",
    role: "Founder, Bloom & Co",
    image: "https://picsum.photos/seed/marcus/200/200"
  },
  {
    quote: "Our Amazon sales tripled within three months of partnering with AY Digital. Their listing optimization and ad strategies are pure gold.",
    author: "Elena Rodriguez",
    role: "E-commerce Director, VitaPure",
    image: "https://picsum.photos/seed/elena/200/200"
  },
  {
    quote: "The SEO results were beyond our expectations. We're now ranking #1 for all our target keywords in less than six months.",
    author: "David Miller",
    role: "Marketing Head, TechFlow",
    image: "https://picsum.photos/seed/david/200/200"
  },
  {
    quote: "Their AI agents have revolutionized our customer support. 24/7 assistance with a human touch that our customers actually love.",
    author: "Sophia Laurent",
    role: "COO, Global Retail",
    image: "https://picsum.photos/seed/sophia/200/200"
  },
  {
    quote: "AY Digital is more than an agency; they are a strategic partner. Their insights into digital trends have been invaluable to our growth.",
    author: "James Wilson",
    role: "CEO, Innovate Hub",
    image: "https://picsum.photos/seed/james/200/200"
  }
];

const faqs = [
  {
    question: "What services does AY Digital Centre offer?",
    answer: "We offer a comprehensive suite of digital solutions including AI Agent Development, Web & App Development, Amazon Listing & Optimization, SEO, and WhatsApp API Integration."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard website might take 4-6 weeks, while complex AI integrations or custom app development can take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. This includes security updates, performance monitoring, and feature enhancements."
  },
  {
    question: "How do I get started with a new project?",
    answer: "Getting started is easy! Simply click the 'Start Project' button or use our contact form to tell us about your goals. We'll schedule a discovery call to discuss your requirements and provide a tailored proposal."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based pricing for specific deliverables and retainer-based models for ongoing services like SEO and AI maintenance. Our pricing is transparent and based on the value and expertise we bring to your project."
  }
];

const ServiceDetail = ({ service, onClose }: { service: typeof services[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-0 sm:p-6 lg:p-8 bg-bg/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        className="relative w-full h-full sm:h-auto sm:max-w-5xl bg-bg border-0 sm:border border-border overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-full sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-64 sm:h-80 lg:h-auto lg:w-2/5 relative">
          <img 
            src={`https://picsum.photos/seed/${service.title}/800/1200`} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-accent/10"></div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
            <div className="w-12 h-12 sm:w-14 h-14 bg-accent text-bg flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              {service.icon}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-bg tracking-tight uppercase leading-none">{service.title}</h2>
          </div>
        </div>

        <div className="flex-1 p-6 sm:p-10 lg:p-16 overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 h-12 border border-border flex items-center justify-center text-fg hover:bg-fg hover:text-bg transition-all z-10 bg-bg/50 backdrop-blur-sm"
          >
            <X className="w-5 h-5 sm:w-6 h-6" />
          </button>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent mb-4 sm:mb-6">Overview</h3>
              <p className="text-base sm:text-lg text-fg/70 leading-relaxed font-sans">
                {service.description}
              </p>
            </section>

            <section>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent mb-4 sm:mb-6">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {service.details.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 sm:p-6 border border-border bg-surface/50 hover:border-accent/30 transition-colors">
                    <div className="w-1.5 h-1.5 bg-accent"></div>
                    <span className="text-fg font-sans text-xs sm:text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent mb-4 sm:mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.details.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 sm:px-4 py-2 bg-surface text-[9px] sm:text-[10px] font-sans font-bold text-fg uppercase tracking-widest border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="pt-8 sm:pt-10 border-t border-border">
              <motion.button 
                onClick={() => {
                  onClose();
                  window.location.href = '#contact';
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 20px rgba(16, 185, 129, 0.3)", "0px 0px 0px rgba(16, 185, 129, 0)"]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full py-5 sm:py-6 bg-accent text-bg font-sans font-bold text-xs hover:opacity-90 transition-all uppercase tracking-[0.4em] shadow-xl"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-40 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-accent mb-8">FAQ</h2>
            <h3 className="text-6xl lg:text-[100px] font-display font-bold tracking-[-0.05em] text-fg uppercase leading-[0.85] mb-12">
              Common <br />
              <span className="text-muted">Questions.</span>
            </h3>
            <p className="text-xl text-muted font-sans font-medium leading-relaxed max-w-md">
              Everything you need to know about our process, services, and how we help your business grow.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border border-border transition-all duration-500 overflow-hidden ${activeIndex === i ? 'bg-surface border-accent/30' : 'bg-bg hover:border-accent/20'}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left group"
                >
                  <span className={`text-xl font-display font-bold uppercase tracking-tight transition-colors ${activeIndex === i ? 'text-accent' : 'text-fg group-hover:text-accent'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'bg-accent text-bg rotate-180' : 'bg-surface text-fg'}`}>
                    {activeIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="px-8 pb-8 text-muted font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo size="md" />
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-[10px] font-sans font-bold text-muted hover:text-fg transition-colors uppercase tracking-[0.3em]">Services</a>
          <a href="#about" className="text-[10px] font-sans font-bold text-muted hover:text-fg transition-colors uppercase tracking-[0.3em]">About</a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-fg text-bg text-[10px] font-sans font-bold hover:opacity-90 transition-all uppercase tracking-[0.3em]"
          >
            Start Project
          </a>
        </div>

        <button className="md:hidden p-2 text-fg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-border px-8 py-12 flex flex-col gap-8 shadow-2xl"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold text-fg uppercase tracking-tight">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold text-fg uppercase tracking-tight">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-5 bg-fg text-bg text-center font-sans font-bold uppercase tracking-widest text-sm">Start Project</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { GoogleGenAI } from "@google/genai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hello. How can AY Digital help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the AY Digital Assistant. 
          Your goal is to provide customer service and qualify leads.
          AY Digital Centre provides: AI Agent development, Web development, App development, Amazon listing, Ads promotion, SEO, and WhatsApp API integration.
          Be concise, direct, and professional. Use a modern, minimalist tone.
          If a user is interested in a service, encourage them to use the contact form or email hello@aydigital.com.`,
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      const botResponse = response.text || "I'm sorry, I couldn't process that. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-24 right-0 w-[350px] sm:w-[400px] h-[550px] bg-bg border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-fg text-bg flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bg/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-bg" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg uppercase tracking-tight">Assistant</p>
                  <p className="text-[10px] text-bg/40 uppercase tracking-[0.3em] font-sans font-bold">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-bg/10 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-surface/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 text-sm leading-relaxed font-sans ${
                    msg.role === 'user' 
                      ? 'bg-fg text-bg' 
                      : 'bg-bg border border-border text-fg shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-bg border border-border p-6 shadow-sm">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-fg rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-fg rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-fg rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 bg-bg border-t border-border flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-6 py-4 bg-surface border border-border text-sm font-sans focus:outline-none focus:border-fg transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-14 h-14 bg-fg text-bg flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-bg text-fg rotate-90 border border-border' : 'bg-fg text-bg hover:scale-105'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 150);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    clearInterval(interval);
    setProgress(100);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 300);

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-bg p-8 sm:p-12 lg:p-16 border border-border shadow-2xl relative overflow-hidden">
      {isSubmitting && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left z-20"
        />
      )}
      
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-fg text-bg flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Message Sent</h3>
            <p className="text-muted font-sans">We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-8 py-5 bg-surface border border-border text-fg font-sans focus:outline-none focus:border-fg transition-all"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-8 py-5 bg-surface border border-border text-fg font-sans focus:outline-none focus:border-fg transition-all"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted">Project Details</label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project goals..."
                className="w-full px-8 py-5 bg-surface border border-border text-fg font-sans focus:outline-none focus:border-fg transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 sm:py-8 bg-fg text-bg font-sans font-bold text-xs hover:bg-accent hover:text-bg transition-all flex items-center justify-center gap-4 disabled:opacity-70 uppercase tracking-[0.4em]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                  <span>Processing {progress}%</span>
                </div>
              ) : (
                <>Send Message <ArrowRight className="w-6 h-6" /></>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-fg selection:text-bg relative overflow-hidden font-sans">
      {/* Noise Overlay */}
      <div className="fixed inset-0 noise z-[100] pointer-events-none opacity-[0.01]"></div>
      
      <Nav />

      <AnimatePresence>
        {selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 border border-border text-muted text-[10px] font-sans font-bold uppercase tracking-[0.4em] mb-12">
                EST. 2024 — DIGITAL EXCELLENCE
              </div>
              <h1 className="text-7xl lg:text-[160px] font-display font-bold tracking-[-0.05em] leading-[0.82] mb-12 uppercase">
                The Art of <br />
                <span className="text-muted">Digital Craft.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted mb-16 leading-relaxed max-w-3xl mx-auto font-sans font-medium">
                We design and build bespoke digital products that define the next generation of business, blending precision with modern innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#contact"
                  className="px-16 py-6 bg-fg text-bg font-sans font-bold text-xs uppercase tracking-[0.4em] hover:opacity-90 transition-all"
                >
                  Start Project
                </a>
                <a 
                  href="#services"
                  className="px-16 py-6 border border-border text-fg font-sans font-bold text-xs uppercase tracking-[0.4em] hover:bg-surface transition-all"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-16 bg-fg overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="text-4xl lg:text-7xl font-display font-bold text-bg/10 uppercase">AI Agents</span>
              <span className="text-4xl lg:text-7xl font-display font-bold text-bg uppercase">Web Development</span>
              <span className="text-4xl lg:text-7xl font-display font-bold text-bg/10 uppercase">App Design</span>
              <span className="text-4xl lg:text-7xl font-display font-bold text-bg uppercase">Amazon Growth</span>
              <span className="text-4xl lg:text-7xl font-display font-bold text-bg/10 uppercase">SEO Strategy</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-40 bg-bg relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-32">
            <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-muted mb-8">Expertise</h2>
            <p className="text-6xl lg:text-[120px] font-display font-bold tracking-[-0.05em] uppercase leading-[0.85]">
              Solutions for <br />
              <span className="text-muted">Modern Brands.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer border-t border-border pt-12"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-sans font-bold text-muted tracking-widest uppercase">0{index + 1}</span>
                  <div className="w-12 h-12 bg-surface flex items-center justify-center group-hover:bg-fg group-hover:text-bg transition-all">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-lg text-muted leading-relaxed mb-10 font-sans font-medium">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-fg group-hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-bg p-4 border border-border">
                <img 
                  src="https://picsum.photos/seed/minimal-office/1000/1250" 
                  alt="Our Agency" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-fg flex items-center justify-center text-bg font-display font-bold text-center p-8 shadow-2xl">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] mb-2 font-sans">Est.</span>
                  <span className="text-4xl tracking-tighter">2024</span>
                </div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-muted mb-10">About</h2>
              <h3 className="text-6xl lg:text-[120px] font-display font-bold tracking-[-0.05em] mb-12 uppercase leading-[0.85]">
                Building <br />
                <span className="text-muted">The Future.</span>
              </h3>
              <p className="text-2xl text-muted mb-16 leading-relaxed font-sans font-medium max-w-xl">
                AY Digital Centre was born from a simple idea: that technology should be a catalyst for growth, not a barrier. We combine creative thinking with technical excellence to deliver results that define industries.
              </p>
              <div className="grid grid-cols-2 gap-16 border-t border-border pt-12">
                <div className="space-y-4">
                  <p className="text-6xl font-display font-bold text-fg tracking-tighter">98%</p>
                  <p className="text-[10px] font-sans font-bold text-muted uppercase tracking-[0.4em]">Satisfaction</p>
                </div>
                <div className="space-y-4">
                  <p className="text-6xl font-display font-bold text-fg tracking-tighter">24/7</p>
                  <p className="text-[10px] font-sans font-bold text-muted uppercase tracking-[0.4em]">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <div className="py-24 bg-bg border-b border-border overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-40 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-40 items-center">
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">NexaCorp</span>
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">Bloom & Co</span>
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">VitaPure</span>
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">TechFlow</span>
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">Global Retail</span>
              <span className="text-2xl font-display font-bold text-fg/20 tracking-widest uppercase">Innovate Hub</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <section className="py-40 bg-fg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-bg/40 mb-8">Testimonials</h2>
              <h3 className="text-6xl lg:text-[120px] font-display font-bold tracking-[-0.05em] text-bg uppercase leading-[0.85]">
                Voices of <br />
                <span className="text-accent">Success.</span>
              </h3>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-16 h-16 border border-bg/20 flex items-center justify-center text-bg hover:bg-bg hover:text-fg transition-all"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-16 h-16 border border-bg/20 flex items-center justify-center text-bg hover:bg-bg hover:text-fg transition-all"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative h-[450px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
                  <div className="relative">
                    <Quote className="w-20 h-20 text-accent mb-10 opacity-20 absolute -top-10 -left-10" />
                    <p className="text-2xl md:text-4xl text-bg font-display font-bold leading-tight uppercase tracking-tight">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-bg/10 p-1 shrink-0">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].author} 
                        className="w-full h-full object-cover grayscale" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-bg uppercase tracking-tight">{testimonials[currentTestimonial].author}</p>
                      <p className="text-xs font-sans font-bold text-accent uppercase tracking-[0.3em]">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-20 flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-1 transition-all duration-500 ${currentTestimonial === i ? 'w-12 bg-accent' : 'w-4 bg-bg/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-bg relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div>
              <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-muted mb-10">Contact</h2>
              <h3 className="text-6xl lg:text-[120px] font-display font-bold tracking-[-0.05em] text-fg mb-12 uppercase leading-[0.85]">
                Let's Start <br />
                <span className="text-muted">Something.</span>
              </h3>
              <p className="text-2xl text-muted mb-16 leading-relaxed font-sans font-medium max-w-md">
                Have a project in mind? We'd love to hear from you. Our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-surface flex items-center justify-center text-fg group-hover:bg-fg group-hover:text-bg transition-all">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-bold text-muted uppercase tracking-[0.4em] mb-1">Email</p>
                    <p className="text-xl font-display font-bold text-fg uppercase tracking-tight">hello@aydigital.centre</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-surface flex items-center justify-center text-fg group-hover:bg-fg group-hover:text-bg transition-all">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-bold text-muted uppercase tracking-[0.4em] mb-1">Live Support</p>
                    <p className="text-xl font-display font-bold text-fg uppercase tracking-tight">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 bg-fg text-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-2">
              <div className="mb-12">
                <Logo size="lg" variant="dark" />
              </div>
              <p className="text-3xl text-bg/60 max-w-md leading-tight font-display font-bold uppercase tracking-tight">
                Designing the future of digital interaction.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-bg/40 mb-12">Navigation</h4>
              <ul className="space-y-6 text-xl font-display font-bold uppercase tracking-tight">
                <li><a href="#services" className="hover:text-bg/60 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-bg/60 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-bg/60 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-bg/40 mb-12">Social</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com" },
                  { icon: <Github className="w-6 h-6" />, href: "https://github.com" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-bg/5 border border-bg/10 flex items-center justify-center hover:bg-bg hover:text-fg transition-all group">
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-bg/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-sans font-bold text-bg/30 uppercase tracking-[0.5em]">
              © 2026 AY Digital Centre. All Rights Reserved.
            </p>
            <div className="flex gap-12 text-[10px] font-sans font-bold text-bg/30 uppercase tracking-[0.5em]">
              <a href="#" className="hover:text-bg transition-colors">Privacy</a>
              <a href="#" className="hover:text-bg transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}
