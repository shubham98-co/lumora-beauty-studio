import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Scissors, 
  Heart, 
  Crown,
  Filter
} from 'lucide-react';
import { SERVICES, SALON_INFO } from '../data/salonData';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Styling & Spa' },
    { id: 'skin', label: 'Glow Facials' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'nails', label: 'Manicure & Pedicure' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  const getWhatsAppServiceUrl = (serviceName) => {
    const text = `Hello Lumora Beauty Studio, I'm interested in booking the "${serviceName}". Could you please share available slots?`;
    return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-24 bg-white text-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Lumora Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Curated Services of Exceptional Standard
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            Every ritual is conducted by specialized senior therapists using premium formulations tailored to your distinct hair, skin, and wellness desires.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-obsidian-900 text-gold-200 border border-gold-400 shadow-md'
                  : 'bg-cream-100 text-stone-700 hover:bg-gold-50 hover:text-obsidian-900 border border-gold-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-cream-50 rounded-2xl overflow-hidden border border-gold-200/80 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Card Photo Container */}
              <div className="relative h-64 overflow-hidden bg-obsidian-900">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-obsidian-900/80 backdrop-blur-md border border-gold-400/50 text-gold-200 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  {service.tag}
                </div>

                {/* Duration & Price Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs text-stone-200 bg-obsidian-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-serif font-bold text-lg text-gold-300 bg-obsidian-950/70 px-3 py-1 rounded-md backdrop-blur-sm border border-gold-500/30">
                    From {service.priceFormatted}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian-950 mb-2 group-hover:text-gold-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6 border-t border-gold-200/50 pt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-luxury text-gold-800 mb-2">
                      Ritual Includes:
                    </div>
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-gold-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gold-200/60 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-3 px-4 rounded-xl bg-obsidian-900 hover:bg-gold-700 text-gold-100 hover:text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppServiceUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 transition-colors"
                    title={`Inquire about ${service.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Banner */}
        <div className="rounded-2xl bg-obsidian-950 border border-gold-500/40 p-8 sm:p-10 text-white relative overflow-hidden shadow-luxury">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold-900/30 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-gold-300 text-xs font-semibold tracking-luxury uppercase mb-1">
                Need Bespoke Styling Advice?
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                Complimentary 15-Minute Hair & Skin Diagnostic
              </h3>
              <p className="text-stone-300 text-sm">
                Unsure which facial or hair therapy suits your current scalp and skin state? Drop in or message our senior artists on WhatsApp for personal guidance.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I would like to request a complimentary diagnostic consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Stylist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
