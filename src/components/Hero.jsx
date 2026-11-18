import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Crown,
  Heart
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function Hero({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I'm interested in booking a consultation / appointment.")}`;

  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Background Salon Image with Editorial Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Lumora Beauty Studio Luxury Salon Interior"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered radial and linear dark-to-gold luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-obsidian-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12">
        {/* Subtle Luxury Pre-header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-obsidian-900/80 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-200 text-xs sm:text-sm font-medium tracking-luxury uppercase">
            Cuttack's Premier Luxury Sanctuary
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          <span className="text-stone-300 text-xs tracking-wider">Cantonment Road</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Discover Your <span className="text-gold-gradient italic font-normal">Beauty</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-300 font-sans font-light leading-relaxed mb-10">
          An intimate escape where master hair rituals, bespoke bridal artistry, and clinical skin rejuvenation converge in the heart of Cuttack, Odisha.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 max-w-lg mx-auto">
          {/* Main Book Appointment Button */}
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-obsidian-950 font-semibold text-sm sm:text-base tracking-wider uppercase shadow-gold-glow hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Explore Services */}
          <a
            href="#services"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-gold-400/50 bg-obsidian-900/60 backdrop-blur-sm text-gold-200 hover:text-white hover:border-gold-300 hover:bg-obsidian-850 font-medium text-sm sm:text-base tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-emerald-500/60 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50 font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Floating Luxury Highlight Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-gold-800/40">
          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-sm text-left flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-serif font-semibold text-base sm:text-lg">Private VIP Suites</div>
              <div className="text-stone-400 text-xs mt-0.5">Discreet bridal & salon rooms</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-sm text-left flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
              <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
            </div>
            <div>
              <div className="text-white font-serif font-semibold text-base sm:text-lg">4.9★ Client Rating</div>
              <div className="text-stone-400 text-xs mt-0.5">Over 650+ verified reviews</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-sm text-left flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-serif font-semibold text-base sm:text-lg">100% Genuine Care</div>
              <div className="text-stone-400 text-xs mt-0.5">Kérastase, Olaplex & Dermalogica</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-sm text-left flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
              <Heart className="w-5 h-5 text-rose-300" />
            </div>
            <div>
              <div className="text-white font-serif font-semibold text-base sm:text-lg">450+ Odia Brides</div>
              <div className="text-stone-400 text-xs mt-0.5">Trusted across Cuttack & BBSR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
