import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Crown, 
  Tag, 
  Coffee
} from 'lucide-react';
import { PRICING_PACKAGES, A_LA_CARTE_MENU, SALON_INFO } from '../data/salonData';

export default function Pricing({ onSelectPackage }) {
  const [activeTab, setActiveTab] = useState('packages'); // 'packages' | 'alacarte'
  const [alacarteCategory, setAlacarteCategory] = useState('hair');

  return (
    <section id="pricing" className="py-24 bg-cream-100 text-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-200/80 border border-gold-300 text-gold-900 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Tag className="w-3.5 h-3.5 text-gold-700" />
            <span>Transparent Luxury Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Curated Packages & Investment
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            Honest pricing with no hidden surcharges. All rituals include consultation, sensorial wash, and complimentary artisan refreshments.
          </p>
        </div>

        {/* View Selector Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-cream-200 border border-gold-300/80 shadow-sm">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === 'packages'
                  ? 'bg-obsidian-900 text-gold-200 shadow-sm'
                  : 'text-stone-700 hover:text-obsidian-900'
              }`}
            >
              Curated Luxury Packages
            </button>
            <button
              onClick={() => setActiveTab('alacarte')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === 'alacarte'
                  ? 'bg-obsidian-900 text-gold-200 shadow-sm'
                  : 'text-stone-700 hover:text-obsidian-900'
              }`}
            >
              A La Carte Menu
            </button>
          </div>
        </div>

        {/* 1. Curated Packages View */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {PRICING_PACKAGES.map((pkg, idx) => {
              const isHighlight = idx === 1; // Middle royal bride card highlighted
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    isHighlight
                      ? 'bg-obsidian-950 text-white border-2 border-gold-400 shadow-luxury-lg scale-100 lg:-translate-y-2'
                      : 'bg-white text-obsidian-900 border border-gold-200 shadow-luxury hover:shadow-luxury-lg'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
                        isHighlight
                          ? 'bg-gold-500/20 text-gold-300 border border-gold-400/50'
                          : 'bg-gold-100 text-gold-800 border border-gold-300'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Title & Pricing */}
                  <div>
                    <h3 className={`font-serif text-2xl font-bold mb-2 ${isHighlight ? 'text-white' : 'text-obsidian-950'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs sm:text-sm mb-6 ${isHighlight ? 'text-stone-300' : 'text-stone-600'}`}>
                      {pkg.description}
                    </p>

                    <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gold-200/40">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-gold-500">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm line-through text-stone-400">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className={`text-xs uppercase tracking-luxury font-semibold mb-3 ${isHighlight ? 'text-gold-300' : 'text-gold-800'}`}>
                        Package Ceremonies:
                      </div>
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                          <span className={isHighlight ? 'text-stone-200' : 'text-stone-700'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div>
                    <div className={`text-[11px] mb-3 italic ${isHighlight ? 'text-gold-200/80' : 'text-stone-500'}`}>
                      Best for: {pkg.recommendedFor}
                    </div>
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full py-3.5 px-6 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                        isHighlight
                          ? 'bg-gold-gradient text-obsidian-950 font-bold hover:brightness-110 shadow-gold-glow'
                          : 'bg-obsidian-900 text-gold-100 hover:bg-gold-700 hover:text-white'
                      }`}
                    >
                      <span>Book This Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. A La Carte Menu View */}
        {activeTab === 'alacarte' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-200 shadow-luxury mb-16">
            {/* Category Switcher inside A La Carte */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-6 border-b border-gold-200/60">
              <button
                onClick={() => setAlacarteCategory('hair')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  alacarteCategory === 'hair'
                    ? 'bg-obsidian-900 text-gold-200'
                    : 'bg-cream-100 text-stone-600 hover:bg-gold-100'
                }`}
              >
                Hair Artistry & Spa
              </button>
              <button
                onClick={() => setAlacarteCategory('skin')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  alacarteCategory === 'skin'
                    ? 'bg-obsidian-900 text-gold-200'
                    : 'bg-cream-100 text-stone-600 hover:bg-gold-100'
                }`}
              >
                Dermatology & Facials
              </button>
              <button
                onClick={() => setAlacarteCategory('nails')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  alacarteCategory === 'nails'
                    ? 'bg-obsidian-900 text-gold-200'
                    : 'bg-cream-100 text-stone-600 hover:bg-gold-100'
                }`}
              >
                Nails & Reflexology
              </button>
            </div>

            {/* Menu Items Table / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {A_LA_CARTE_MENU[alacarteCategory].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-stone-100 hover:border-gold-300 transition-colors group"
                >
                  <div>
                    <div className="font-serif font-bold text-obsidian-900 text-base group-hover:text-gold-700 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-gold-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-lg text-gold-700">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold-200 text-center text-xs text-stone-500">
              * GST applicable as per government guidelines. Bespoke bridal packages can be customized during consultation.
            </div>
          </div>
        )}

        {/* Complimentary Hospitality Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
          <div className="p-4 rounded-xl bg-cream-50 border border-gold-200/60 flex items-center justify-center gap-3">
            <Coffee className="w-5 h-5 text-gold-600 shrink-0" />
            <span className="text-xs font-medium text-stone-700">Barista Coffee & Organic Kashmiri Kahwa</span>
          </div>
          <div className="p-4 rounded-xl bg-cream-50 border border-gold-200/60 flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
            <span className="text-xs font-medium text-stone-700">Single-Use Sealed Towels & Sterilized Kits</span>
          </div>
          <div className="p-4 rounded-xl bg-cream-50 border border-gold-200/60 flex items-center justify-center gap-3">
            <Crown className="w-5 h-5 text-gold-600 shrink-0" />
            <span className="text-xs font-medium text-stone-700">Private Changing & Valet Parking in Cuttack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
