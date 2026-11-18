import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  Camera, 
  ArrowRight
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All Showcase' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'hair', label: 'Hair Couture' },
    { id: 'skin', label: 'Skin Glow' },
    { id: 'ambience', label: 'Salon Ambience' },
    { id: 'nails', label: 'Nail Studio' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white text-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>The Lookbook</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Visual Harmony & Atelier Craft
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            A glimpse into our serene Bandra West salon sanctuary, bespoke bridal makeovers, and precision hair artistry in Mumbai.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-obsidian-900 text-gold-200 border border-gold-400 shadow-sm'
                  : 'bg-cream-100 text-stone-600 hover:bg-gold-50 hover:text-obsidian-950 border border-gold-200/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-luxury border border-gold-200/60 bg-obsidian-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-900/70 border border-gold-400/40 text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[10px] tracking-luxury uppercase text-gold-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-300 text-xs mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-obsidian-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-obsidian-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-obsidian-950/80 text-gold-300 hover:text-white border border-gold-400/40 hover:bg-obsidian-850 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 h-96 md:h-[520px] bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between text-white bg-obsidian-900 border-t md:border-t-0 md:border-l border-gold-500/20">
                  <div>
                    <span className="text-[11px] font-semibold tracking-luxury uppercase text-gold-400">
                      {selectedImage.category} Showcase
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-2 text-gold-100">
                      {selectedImage.title}
                    </h3>
                    <p className="text-stone-300 text-sm mt-3 leading-relaxed">
                      {selectedImage.subtitle}
                    </p>
                    <div className="mt-6 pt-6 border-t border-gold-500/20 text-xs text-stone-400 space-y-2">
                      <div><strong className="text-stone-200">Location:</strong> Lumora Studio, Bandra West, Mumbai</div>
                      <div><strong className="text-stone-200">Atelier:</strong> Senior Hair & Bridal Department</div>
                      <div><strong className="text-stone-200">Products:</strong> Kérastase & Global Formulas</div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-full py-3 rounded-full bg-gold-gradient text-obsidian-950 font-semibold text-xs tracking-wider uppercase"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
