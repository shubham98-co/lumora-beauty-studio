import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  ArrowUp,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Our Atelier', href: '#about' },
    { name: 'Services & Rituals', href: '#services' },
    { name: 'Investment & Packages', href: '#pricing' },
    { name: 'Lookbook Gallery', href: '#gallery' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const servicesList = [
    'Hair Styling & Couture Blowouts',
    'Kérastase & Olaplex Spa Rituals',
    'Signature 24K Gold Glass Facials',
    'Bridal Artistry & Lehenga Draping',
    'Luxury Spa Manicure & Nail Art',
    'Herbal Rose Pedicure & Reflexology',
  ];

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I'm reaching out through your website.")}`;

  return (
    <footer className="bg-obsidian-950 text-stone-300 pt-20 pb-12 border-t border-gold-800/40 relative overflow-hidden">
      {/* Decorative Top Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold-900/60">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 bg-obsidian-900 text-gold-300 flex items-center justify-center font-serif text-lg font-bold">
                L
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-widest text-white">
                  {SALON_INFO.name}
                </span>
                <span className="block text-[10px] tracking-luxury uppercase text-gold-400 font-semibold">
                  Beauty Studio • Cuttack
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Cuttack's premier luxury salon atelier. Dedicated to precision hair architecture, clinical skincare rituals, and bespoke bridal artistry along Cantonment Road.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={SALON_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-600/40 text-gold-300 hover:text-white hover:border-gold-300 flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon />
              </a>
              <a 
                href={SALON_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-600/40 text-gold-300 hover:text-white hover:border-gold-300 flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <FacebookIcon />
              </a>
              <a 
                href={SALON_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-600/40 text-gold-300 hover:text-white hover:border-gold-300 flex items-center justify-center transition-colors"
                aria-label="YouTube channel"
              >
                <YoutubeIcon />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-gold-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Key Rituals
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesList.map((service, idx) => (
                <li key={idx} className="text-stone-400 hover:text-gold-300 transition-colors cursor-pointer" onClick={() => onOpenBooking()}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Cuttack Concierge
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-stone-400">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-400">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-300 transition-colors">
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-400">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{SALON_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-400">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Tue - Sun: 10:00 AM – 8:30 PM (Mon Closed)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-sm"
              >
                Reserve a Chair
              </button>
            </div>
          </div>
        </div>

        {/* Fictional Showcase Demo Notice Banner */}
        <div className="my-8 p-4 rounded-2xl bg-obsidian-900 border border-gold-500/20 text-center">
          <div className="inline-flex items-center gap-1.5 text-gold-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Fictional Concept Demonstration</span>
          </div>
          <p className="text-stone-400 text-xs max-w-2xl mx-auto leading-relaxed">
            Lumora Beauty Studio is a fictional demo website crafted to showcase high-converting, modern, and responsive web development services for luxury salons and spas. All names, reviews, and addresses are presented solely for presentation purposes.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Lumora Beauty Studio. Designed with pride for luxury businesses.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-200 transition-colors py-1 px-3 rounded-lg hover:bg-obsidian-900 border border-transparent hover:border-gold-800"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
