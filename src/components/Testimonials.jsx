import React from 'react';
import { 
  Sparkles, 
  Star, 
  Quote, 
  CheckCircle2, 
  Heart,
  MessageSquare
} from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream-100 text-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-200 border border-gold-300 text-gold-900 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-gold-700" />
            <span>Patron Reflections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Words of Grace & Gratitude
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            Discover how guests describe their bespoke pampering, bridal ceremonies, and haircare experiences with us.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-gold-300 shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-obsidian-900">
              4.9 / 5.0 Average Rating
            </span>
            <span className="text-stone-400 text-xs">•</span>
            <span className="text-xs text-stone-600">650+ Fictional Showcase Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gold-200/80 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-200/50 -rotate-12 pointer-events-none group-hover:text-gold-300/60 transition-colors" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-md bg-gold-50 border border-gold-200 text-gold-800 text-[11px] font-semibold tracking-wide uppercase mb-4">
                  Treatment: {t.treatment}
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-8 font-serif">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gold-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-obsidian-900 text-gold-300 border border-gold-400/50 flex items-center justify-center font-serif font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-obsidian-950 text-base flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="Verified Guest" />
                    </div>
                    <div className="text-stone-500 text-xs">
                      {t.title}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-stone-400 font-medium">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fictional Showcase Notice Note */}
        <div className="text-center text-xs text-stone-500 italic max-w-xl mx-auto">
          * Note: Names, job titles, and experiences in this section are fictional demo representations created for web portfolio demonstration purposes.
        </div>
      </div>
    </section>
  );
}
