import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function About({ onOpenBooking }) {
  const brandPartners = [
    { name: "Kérastase Paris", category: "Hair Rituals" },
    { name: "Olaplex USA", category: "Bond Building" },
    { name: "Dermalogica", category: "Clinical Skin" },
    { name: "Dyson Pro", category: "Supersonic Care" },
    { name: "M.A.C Cosmetics", category: "Bridal Art" },
    { name: "Bobbi Brown", category: "Glow Base" },
  ];

  return (
    <section id="about" className="py-24 bg-cream-100 text-obsidian-900 relative overflow-hidden">
      {/* Subtle background radial pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300/60 text-gold-800 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Crafting Timeless Elegance in the Heart of Cuttack
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Founded with a singular vision: to bring world-class salon luxury, Parisian hair ceremonies, and dermatologist-backed aesthetic care to Odisha’s historic Silver City.
          </p>
        </div>

        {/* Story & Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Visual Collages */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden border-2 border-gold-200 shadow-luxury group">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumora Beauty Studio Interior"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Secondary Image Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 rounded-xl overflow-hidden border-4 border-cream-100 shadow-luxury-lg hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                  alt="Master hair stylist at work"
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 bg-obsidian-900 text-gold-200 text-xs font-serif text-center">
                  Couture Styling & Bespoke Haircraft
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-cream-50 border border-gold-400/60 p-4 rounded-xl shadow-luxury max-w-[180px]">
                <div className="text-gold-700 font-serif text-3xl font-bold">100%</div>
                <div className="text-stone-700 text-xs font-medium mt-1">Authentic Global Formulations & Single-use Towels</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-gold-700 font-serif text-lg italic tracking-wide">
              "We believe true beauty is not manufactured; it is thoughtfully unveiled."
            </div>

            <p className="text-stone-700 text-base leading-relaxed">
              Nestled along the verdant and historic Cantonment Road near Deer Park, Lumora Beauty Studio was conceived as a peaceful retreat from the bustle of the city. We have curated a tranquil aesthetic environment adorned with warm beige hues, soft lighting, and private booths designed for unhurried pampering.
            </p>

            <p className="text-stone-700 text-base leading-relaxed">
              Every appointment begins with an individualized diagnostic consultation. Whether you are preparing for a fairytale wedding at Barabati or refreshing your locks with an Olaplex bond repair therapy, our master artisans tailor every formula precisely to your skin tone, hair texture, and lifestyle.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cream-200/60 border border-gold-200/80">
                <div className="flex items-center gap-2 text-obsidian-900 font-serif font-bold text-base mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Clinical Sterilization</span>
                </div>
                <p className="text-stone-600 text-xs leading-normal">
                  Hospital-grade autoclave tool sterilization, sealed single-use biodegradable kits, and purified water basins.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-200/60 border border-gold-200/80">
                <div className="flex items-center gap-2 text-obsidian-900 font-serif font-bold text-base mb-1">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span>Certified Master Artists</span>
                </div>
                <p className="text-stone-600 text-xs leading-normal">
                  Stylists and bridal artists trained at premier academies in Mumbai, Paris, and London with 10+ years expertise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-200/60 border border-gold-200/80">
                <div className="flex items-center gap-2 text-obsidian-900 font-serif font-bold text-base mb-1">
                  <HeartHandshake className="w-4 h-4 text-gold-600" />
                  <span>Private Bridal Suites</span>
                </div>
                <p className="text-stone-600 text-xs leading-normal">
                  Exclusive sound-insulated dressing sanctuaries with daylight vanity mirrors for the bride and her entourage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-200/60 border border-gold-200/80">
                <div className="flex items-center gap-2 text-obsidian-900 font-serif font-bold text-base mb-1">
                  <Flame className="w-4 h-4 text-gold-600" />
                  <span>Sensory Wellness</span>
                </div>
                <p className="text-stone-600 text-xs leading-normal">
                  Organic herbal teas, gentle aromatherapy mists, and soothing acoustic harmonies throughout your stay.
                </p>
              </div>
            </div>

            {/* Founder Note & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gold-200/70">
              <div>
                <div className="font-serif font-bold text-obsidian-950 text-base">The Lumora Atelier Team</div>
                <div className="text-stone-500 text-xs">Cantonment Road, Cuttack • Odisha</div>
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-2.5 rounded-full bg-obsidian-900 hover:bg-obsidian-850 text-gold-200 text-xs font-semibold tracking-wider uppercase border border-gold-400 flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Product Partnerships Strip */}
        <div className="pt-10 border-t border-gold-200">
          <div className="text-center text-xs uppercase tracking-luxury text-stone-500 font-semibold mb-6">
            Strictly Authenticated International Formulations
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandPartners.map((brand) => (
              <div 
                key={brand.name} 
                className="p-4 rounded-xl bg-white/70 border border-gold-200 text-center hover:border-gold-400 hover:shadow-sm transition-all"
              >
                <div className="font-serif font-bold text-obsidian-900 text-sm">{brand.name}</div>
                <div className="text-[11px] text-gold-700 tracking-wider uppercase mt-1">{brand.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
