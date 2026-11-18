import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { SERVICES, PRICING_PACKAGES, SALON_INFO } from '../data/salonData';

export default function BookingModal({ isOpen, onClose, preselectedItem }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling & Couture Cuts',
    stylist: 'Any Available Master Artist',
    date: '',
    timeSlot: '11:30 AM',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedItem) {
      setFormData(prev => ({
        ...prev,
        service: preselectedItem.name || preselectedItem.title || prev.service,
      }));
    }
  }, [preselectedItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const stylists = [
    'Any Available Master Artist',
    'Creative Bridal Director (Priyanka)',
    'Senior Colorist & Hair Architect (Sameer)',
    'Lead Aesthetician & Skin Specialist (Kavita)',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  const whatsappConfirmationUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Lumora Beauty Studio Cuttack,\n\nI have submitted an online appointment request:\n• Ref ID: ${bookingRef}\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Artist: ${formData.stylist}\n• Date: ${formData.date || 'Earliest available'}\n• Time: ${formData.timeSlot}\n• Note: ${formData.notes || 'None'}\n\nPlease confirm my slot!`
  )}`;

  const resetAndClose = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-gold-400/40 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Gold Bar */}
        <div className="h-1.5 w-full bg-gold-gradient" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-cream-50 border-b border-gold-200/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-gold-800 text-xs font-semibold uppercase tracking-luxury mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Bespoke Reservation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-950">
              Book Your Lumora Experience
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Cantonment Road, Cuttack • Instant reservation coordination
            </p>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-stone-500 hover:text-obsidian-950 hover:bg-gold-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {bookingConfirmed ? (
            <div className="text-center py-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-luxury text-gold-700">
                Reservation Priority Pass
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian-950 mt-1 mb-2">
                We're Delighted to Welcome You!
              </h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                Your reservation request has been allocated with reference number:
              </p>

              {/* Reference Voucher Card */}
              <div className="bg-cream-100 border-2 border-gold-300 rounded-2xl p-6 max-w-md mx-auto text-left shadow-sm mb-6">
                <div className="flex justify-between items-center border-b border-gold-200 pb-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Reference ID</span>
                  <span className="font-mono font-bold text-obsidian-950 text-base">{bookingRef}</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guest Name:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Service:</span>
                    <span className="font-semibold text-gold-800">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Stylist:</span>
                    <span>{formData.stylist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Date & Slot:</span>
                    <span className="font-semibold">{formData.date || 'Today / Next Slot'} @ {formData.timeSlot}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappConfirmationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp Now</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Pattnaik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm"
                    />
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm"
                    />
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Desired Treatment / Package *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm bg-white"
                >
                  <optgroup label="Core Salon Services">
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.priceFormatted})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Signature Packages">
                    {PRICING_PACKAGES.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} (₹{p.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Other">
                    <option value="Bridal Consultation & Trial">Bridal Consultation & Trial</option>
                    <option value="Custom Hair Color / Balayage Consultation">Custom Hair Color / Balayage Consultation</option>
                  </optgroup>
                </select>
              </div>

              {/* Stylist Preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Stylist or Therapist Preference
                </label>
                <select
                  value={formData.stylist}
                  onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm bg-white"
                >
                  {stylists.map((st, i) => (
                    <option key={i} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm bg-white"
                    />
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Preferred Slot
                  </label>
                  <div className="relative">
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm bg-white"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>
                          {ts}
                        </option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Special Notes / Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Hair texture, occasion details, or preferred tea..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-obsidian-900 hover:bg-gold-700 text-gold-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  No pre-payment required
                </span>
                <span>•</span>
                <span>Free cancellation up to 4 hours</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
