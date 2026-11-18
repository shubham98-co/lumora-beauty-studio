import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedItem, setPreselectedItem] = useState(null);

  const handleOpenBooking = (item = null) => {
    setPreselectedItem(item);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedItem(null);
  };

  const whatsappFloatingUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I would like to book an appointment.")}`;

  return (
    <div className="min-h-screen bg-cream-100 text-obsidian-900 font-sans selection:bg-gold-300 selection:text-obsidian-950">
      {/* Fixed Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Us Section */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Pricing & Menu Section */}
        <Pricing onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 5. Image Lookbook / Gallery */}
        <Gallery />

        {/* 6. Customer Testimonials */}
        <Testimonials />

        {/* 7. Contact, Location & FAQs Section */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedItem={preselectedItem}
      />

      {/* Floating Action Button (WhatsApp & Quick Booking) */}
      <aside aria-label="Quick booking actions" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Book Appointment Pill */}
        <button
          onClick={() => handleOpenBooking()}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-obsidian-950 text-gold-200 border border-gold-400 text-xs font-semibold uppercase tracking-wider shadow-luxury hover:bg-obsidian-900 transition-all hover:scale-105"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Quick Book</span>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-white"
          aria-label="Chat with Lumora Beauty Studio on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 top-2.5 px-3 py-1.5 rounded-xl bg-obsidian-950 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-gold-500/30">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
