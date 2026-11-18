import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing & Menu', href: '#pricing' },
    { name: 'Lookbook', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I would like to inquire about booking an appointment.")}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Announcement & Quick Info Bar */}
      <div className="bg-obsidian-950 text-gold-200 border-b border-gold-800/40 py-2 px-4 sm:px-6 text-xs font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center md:text-left">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Cantonment Road, Cuttack, Odisha</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Tue – Sun: 10:00 AM – 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-gold-300 hover:text-gold-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">{SALON_INFO.phoneDisplay}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              title="Chat with Lumora reception"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 border-b ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-luxury py-3 border-gold-300/40' 
            : 'bg-cream-100/80 backdrop-blur-sm py-4 border-gold-200/30'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Identity / Monogram Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-full border border-gold-400 bg-obsidian-900 text-gold-300 flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-widest text-obsidian-900">
                {SALON_INFO.name}
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-luxury uppercase text-gold-700 font-semibold">
                Beauty Studio • Cuttack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-800 hover:text-gold-700 font-medium text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 transition-colors"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-obsidian-900 text-gold-100 font-medium text-xs tracking-wider uppercase border border-gold-400/50 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-gold-glow flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full bg-obsidian-900 text-gold-200 text-xs font-medium border border-gold-400"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-obsidian-900 hover:bg-gold-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sliding Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 border-b border-gold-300 shadow-xl px-6 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-900 font-serif text-lg py-2 border-b border-gold-200/50 flex items-center justify-between hover:text-gold-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gold-500" />
              </a>
            ))}
            
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-obsidian-900 text-gold-200 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-gold-400"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98765 43210)</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-stone-500 text-center">
              Plot 104, Cantonment Road, Cuttack • Tue-Sun 10AM-8:30PM
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
