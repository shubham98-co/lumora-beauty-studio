import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Navigation,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';
import { SALON_INFO, SERVICES, FAQS } from '../data/salonData';

export default function Contact({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling & Couture Cuts',
    date: '',
    timeSlot: '11:00 AM - 12:30 PM',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const timeSlots = [
    '10:00 AM - 11:30 AM',
    '11:30 AM - 01:00 PM',
    '02:00 PM - 03:30 PM',
    '04:00 PM - 05:30 PM',
    '06:00 PM - 07:30 PM',
  ];

  const whatsappDirectUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Lumora Beauty Studio, I would like to book an appointment at your Cantonment Road salon in Cuttack.")}`;

  const whatsappFormUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Lumora Beauty Studio,\n\nBooking Request from Website:\n• Name: ${formData.name || 'Guest'}\n• Phone: ${formData.phone || 'Not provided'}\n• Service: ${formData.service}\n• Date: ${formData.date || 'Flexible'}\n• Time Slot: ${formData.timeSlot}\n• Note: ${formData.message || 'Standard appointment'}\n\nPlease confirm availability!`
  )}`;

  return (
    <section id="contact" className="py-24 bg-cream-50 text-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs tracking-luxury uppercase font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Connect & Reserve</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-950 mb-4">
            Visit Our Cuttack Studio
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            We welcome you to experience an afternoon of quiet luxury. Book your chair online, send a WhatsApp inquiry, or speak directly with our concierge.
          </p>
        </div>

        {/* 3 Prominent Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: WhatsApp Booking (Highlighted) */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-950 via-emerald-900 to-obsidian-900 text-white border border-emerald-500/40 shadow-luxury flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-luxury text-emerald-300 font-semibold mb-1">
                Fastest Response
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">WhatsApp Concierge</h3>
              <p className="text-stone-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Connect instantly with our salon reception for real-time slot checking, bridal trials, and shade consultations.
              </p>
              <div className="text-emerald-300 font-mono text-xs mb-6">
                Demo Number: {SALON_INFO.phoneDisplay}
              </div>
            </div>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Phone Reservation */}
          <div className="rounded-2xl p-6 bg-white border border-gold-200 shadow-luxury flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-luxury text-gold-800 font-semibold mb-1">
                Direct Line
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian-950 mb-2">Telephone Concierge</h3>
              <p className="text-stone-600 text-xs sm:text-sm mb-4 leading-relaxed">
                Our front desk team is delighted to assist with party bookings, corporate packages, and special requests.
              </p>
              <div className="text-gold-700 font-serif text-lg font-bold mb-6">
                {SALON_INFO.phoneDisplay}
              </div>
            </div>
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-3 px-4 rounded-xl bg-obsidian-900 hover:bg-gold-700 text-gold-200 hover:text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception</span>
            </a>
          </div>

          {/* Card 3: Cuttack Location */}
          <div className="rounded-2xl p-6 bg-white border border-gold-200 shadow-luxury flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-luxury text-gold-800 font-semibold mb-1">
                Studio Address
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian-950 mb-2">Cantonment Road</h3>
              <p className="text-stone-600 text-xs sm:text-sm mb-2 leading-relaxed">
                {SALON_INFO.address}
              </p>
              <div className="text-xs text-gold-800 italic mb-6">
                Landmark: {SALON_INFO.landmark} (Valet Parking Available)
              </div>
            </div>
            <a
              href="#map-section"
              className="w-full py-3 px-4 rounded-xl border border-gold-400 text-obsidian-950 hover:bg-gold-50 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
            >
              <Navigation className="w-4 h-4 text-gold-600" />
              <span>View Location & Hours</span>
            </a>
          </div>
        </div>

        {/* Interactive Booking Form & Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Interactive Fast Reservation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gold-200 shadow-luxury">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold-100">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-950">
                  Reserve Your Ritual
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mt-1">
                  Fill in your details below for prioritized slot confirmation.
                </p>
              </div>
              <Sparkles className="w-6 h-6 text-gold-500" />
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-obsidian-950 mb-2">
                  Reservation Request Received!
                </h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name || 'valued guest'}</strong>. We have logged your request for <strong>{formData.service}</strong>.
                </p>

                <div className="p-4 rounded-xl bg-gold-50 border border-gold-200 max-w-md mx-auto text-left text-xs text-stone-700 space-y-1 mb-8">
                  <div><strong>Service:</strong> {formData.service}</div>
                  <div><strong>Preferred Date:</strong> {formData.date || 'To be scheduled'}</div>
                  <div><strong>Preferred Slot:</strong> {formData.timeSlot}</div>
                  <div><strong>Contact Phone:</strong> {formData.phone || 'Provided via form'}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details to WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium text-xs tracking-wider uppercase"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyadarshini Mohanty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-all bg-white"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.priceFormatted})
                        </option>
                      ))}
                      <option value="The Lumora Glow Ritual Package">The Lumora Glow Ritual Package (₹3,499)</option>
                      <option value="The Royal Odia Bride Suite">The Royal Odia Bride Suite (₹24,999)</option>
                      <option value="Couture Hair Transformation">Couture Hair Transformation (₹6,999)</option>
                      <option value="Custom Consultation">General Styling / Skin Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-all bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                          formData.timeSlot === slot
                            ? 'bg-obsidian-900 text-gold-200 border-gold-400 font-semibold'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-gold-300'
                        }`}
                      >
                        {slot.split(' - ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Special Notes or Drape Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if you have any allergies, bridal function dates, or hair texture notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-obsidian-900 hover:bg-gold-700 text-gold-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>Submit Reservation Request</span>
                  </button>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-4 px-5 rounded-xl border border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-stone-400 text-center">
                  * Instant confirmation will be dispatched via WhatsApp or telephone during salon business hours.
                </p>
              </form>
            )}
          </div>

          {/* Right: Studio Hours & Map Graphic */}
          <div className="lg:col-span-5 space-y-6">
            {/* Operating Hours Card */}
            <div className="bg-obsidian-950 text-white rounded-3xl p-8 border border-gold-500/30 shadow-luxury">
              <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-luxury font-semibold mb-3">
                <Clock className="w-4 h-4" />
                <span>Operating Timings</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-6">Salon & Spa Hours</h4>
              <div className="space-y-4 text-sm divide-y divide-gold-800/40">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-stone-300">Tuesday – Saturday</span>
                  <span className="font-semibold text-gold-300">10:00 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-stone-300">Sunday</span>
                  <span className="font-semibold text-gold-300">09:30 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-stone-300">Monday</span>
                  <span className="text-amber-300/80 italic text-xs">Closed (VIP Bridal Only)</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gold-800/40 text-xs text-stone-400">
                Early morning bridal dressing slots (from 5:00 AM onwards) available upon advance reservation.
              </div>
            </div>

            {/* Stylized Cuttack Map / Landmark Card */}
            <div id="map-section" className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200 shadow-luxury">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gold-800 text-xs uppercase tracking-luxury font-semibold">
                  <MapPin className="w-4 h-4 text-gold-600" />
                  <span>Cuttack Studio Guide</span>
                </div>
                <span className="text-xs text-stone-500">Pincode 753001</span>
              </div>

              <h4 className="font-serif text-xl font-bold text-obsidian-950 mb-3">
                How to Reach Us
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed mb-4">
                Located conveniently along Cantonment Road, adjacent to Deer Park and within 5 minutes drive from Mahanadi Ring Road and Barabati Stadium.
              </p>

              {/* Graphic Mockup Map */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-200/80 bg-stone-100 h-44 mb-4 flex items-center justify-center p-4 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(#d7bb91_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-obsidian-950 text-gold-300 border-2 border-gold-400 mx-auto flex items-center justify-center mb-2 shadow-md">
                    <MapPin className="w-5 h-5 text-gold-400 animate-bounce" />
                  </div>
                  <div className="font-serif font-bold text-obsidian-950 text-sm">
                    LUMORA BEAUTY STUDIO
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Plot 104, Cantonment Rd, Cuttack
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
                <span>🚗 Valet Parking Available</span>
                <span>♿ Accessible Entrance</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-gold-200">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-950">
              Frequently Asked Inquiries
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Everything you need to know prior to your visit.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-gold-200/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-obsidian-950 hover:text-gold-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
