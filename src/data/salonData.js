export const SALON_INFO = {
  name: "LUMORA",
  fullName: "LUMORA BEAUTY STUDIO",
  tagline: "Bespoke Artistry & Luxury Wellness",
  city: "Cuttack, Odisha",
  address: "Plot No. 104, Cantonment Road, Near Ring Road, Cuttack, Odisha 753001",
  landmark: "Near Deer Park & High Court Annex, Cantonment Area",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "concierge@lumorabeautystudio.com",
  hours: {
    weekdays: "Tuesday – Saturday: 10:00 AM – 8:30 PM",
    sunday: "Sunday: 9:30 AM – 8:00 PM",
    monday: "Monday: Closed (Private Bridal Bookings Only)",
  },
  stats: [
    { label: "Bespoke Makeovers", value: "3,800+" },
    { label: "Odisha Brides Styled", value: "450+" },
    { label: "Master Artisans", value: "14" },
    { label: "Client Satisfaction", value: "4.9★" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com",
  }
};

export const SERVICES = [
  {
    id: "hair-styling",
    name: "Hair Styling & Couture Cuts",
    category: "hair",
    tag: "Trending",
    duration: "45 - 90 mins",
    startingPrice: 1200,
    priceFormatted: "₹1,200",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Precision cuts, bespoke blowouts, and runway-inspired dimensional styling tailored to your face silhouette.",
    highlights: [
      "Face-shape diagnostic consultation",
      "Kérastase sensory hair wash & conditioning",
      "Dyson Supersonic precision thermal styling",
      "Anti-humidity serum finish for Odisha weather"
    ],
    popular: true
  },
  {
    id: "hair-spa",
    name: "Hair Spa & Keratin Rituals",
    category: "hair",
    tag: "Restorative",
    duration: "60 - 120 mins",
    startingPrice: 2200,
    priceFormatted: "₹2,200",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Intensive restorative ceremonies using Olaplex and botanical micro-mists to repair, nourish, and deeply hydrate damaged locks.",
    highlights: [
      "Micro-scalp dermabrasion analysis",
      "Steam infusion with organic botanical elixirs",
      "Therapeutic neck, shoulder & scalp acupressure",
      "Frizz-free ultra-gloss seal lasting 4-6 weeks"
    ],
    popular: false
  },
  {
    id: "facial",
    name: "Signature Glow Facials",
    category: "skin",
    tag: "Award Winning",
    duration: "60 - 75 mins",
    startingPrice: 2800,
    priceFormatted: "₹2,800",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Medical-grade rejuvenation infusing 24K gold foil, hyaluronic acid, and jade rollers for glass-skin luminescence.",
    highlights: [
      "Gentle ultrasonic pore extraction",
      "Oxygen detox peel & vitamin C infusion",
      "Cooling lymphatic drainage massage",
      "Custom algae peel-off hydro-mask"
    ],
    popular: true
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup & Artistry",
    category: "bridal",
    tag: "Signature",
    duration: "180 - 240 mins",
    startingPrice: 16500,
    priceFormatted: "₹16,500",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Couture bridal transformations blending modern dewy glass finish with regal Odia and contemporary Indian traditions.",
    highlights: [
      "HD Airbrush or Micro-pigment finish",
      "Premium mink lash extensions & jewelry placement",
      "Sari / Lehenga drape styling with master artist",
      "Long-lasting 16hr sweat & water-resistant formula"
    ],
    popular: true
  },
  {
    id: "manicure",
    name: "Luxury Spa Manicure",
    category: "nails",
    tag: "Indulgence",
    duration: "50 mins",
    startingPrice: 1100,
    priceFormatted: "₹1,100",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Exquisite hand therapy including organic milk soaks, apricot scrubs, cuticle repair, and gel-lacquer precision.",
    highlights: [
      "Aromatherapy Himalayan pink salt soak",
      "Warm botanical paraffin wax wrap",
      "Intense peptide moisture infusion",
      "OPI Chip-resistant longwear or chrome polish"
    ],
    popular: false
  },
  {
    id: "pedicure",
    name: "Royal Herbal Pedicure",
    category: "nails",
    tag: "Relaxing",
    duration: "60 mins",
    startingPrice: 1400,
    priceFormatted: "₹1,400",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Full-sensory foot retreat featuring wild rose petals, Dead Sea salts, calloused heel buffing, and hot stone massage.",
    highlights: [
      "Rose water & fresh herb whirlpool immersion",
      "Deep diamond-file heel smoothening",
      "Calf tension relief with warm volcanic basalt stones",
      "Cooling mint & tea-tree foot veil"
    ],
    popular: false
  }
];

export const PRICING_PACKAGES = [
  {
    id: "pkg-1",
    name: "The Lumora Glow Ritual",
    badge: "Most Loved",
    price: 3499,
    originalPrice: 4800,
    duration: "2.5 Hours",
    description: "Our signature reset designed for weekend indulgence or pre-event radiance.",
    features: [
      "Radiance Clean-Up & Hydro-Mist Facial",
      "Moroccan Argan Oil Intensive Hair Spa",
      "Classic Milk & Honey Manicure",
      "Relaxing Neck & Head Acupressure",
      "Complimentary Artisan Green Tea / Espresso"
    ],
    recommendedFor: "Weekend self-care & party prep"
  },
  {
    id: "pkg-2",
    name: "The Royal Odia Bride",
    badge: "Couture Bridal",
    price: 24999,
    originalPrice: 32000,
    duration: "Full Day Lounge",
    description: "A private suite experience for the modern bride seeking impeccable elegance.",
    features: [
      "HD Airbrush Bridal Makeup by Creative Director",
      "Couture Hair Architecture with Floral Extension",
      "Pre-Bridal 24K Gold Alchemy Facial (Day Before)",
      "Luxury Bridal Gel Extension & Nail Art",
      "Lehenga & Chunni Draping with Jewellery Assist",
      "Touch-up Survival Kit & Bridal Suite Access"
    ],
    recommendedFor: "Weddings, Reception, Grand Sangeet"
  },
  {
    id: "pkg-3",
    name: "Couture Hair Transformation",
    badge: "Trending",
    price: 6999,
    originalPrice: 9000,
    duration: "3.5 Hours",
    description: "Complete restyling combining personalized color art, keratin gloss, and bespoke cut.",
    features: [
      "Balayage or Global Highlights (Ammonia-Free)",
      "Olaplex No. 1 & No. 2 Bond Multiplier Ritual",
      "Precision Runway Cut by Senior Stylist",
      "Glossing Glaze for High Reflectivity",
      "Home Care Diagnostic & Kérastase Travel Mini"
    ],
    recommendedFor: "Major makeover & color enthusiasts"
  }
];

export const A_LA_CARTE_MENU = {
  hair: [
    { name: "Couture Haircut & Blow-dry (Women)", price: "₹1,200", duration: "45 mins" },
    { name: "Senior Stylist Signature Cut (Men)", price: "₹650", duration: "35 mins" },
    { name: "Kérastase Chronologiste Caviar Ritual", price: "₹3,500", duration: "75 mins" },
    { name: "Olaplex Stand-Alone Rebonding Ritual", price: "₹2,800", duration: "60 mins" },
    { name: "Balayage / Dimensional Foil Art", price: "₹5,500+", duration: "180 mins" },
    { name: "Cysteine / Keratin Protein Smoothing", price: "₹6,000+", duration: "180 mins" }
  ],
  skin: [
    { name: "24K Gold Foil Cellular Facial", price: "₹3,800", duration: "75 mins" },
    { name: "Hydra-Infusion Glow Therapy", price: "₹3,200", duration: "60 mins" },
    { name: "Dermalogica Skin Brightening Clean-up", price: "₹1,800", duration: "45 mins" },
    { name: "Back De-Tan & Charcoal Exfoliation", price: "₹1,600", duration: "45 mins" },
    { name: "Under-Eye Collagen Ring Depuffing", price: "₹950", duration: "30 mins" }
  ],
  nails: [
    { name: "Gel Extension with Ombre / Chrome Art", price: "₹2,400", duration: "90 mins" },
    { name: "Luxury Rose & Herb Spa Pedicure", price: "₹1,400", duration: "60 mins" },
    { name: "Paraffin Silk Hands Manicure", price: "₹1,100", duration: "50 mins" },
    { name: "Nail Overlay & Gel Polish Refill", price: "₹1,200", duration: "45 mins" },
    { name: "Callus Smoothing Foot Therapy", price: "₹850", duration: "30 mins" }
  ]
};

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Editorial Bridal Glamour",
    category: "bridal",
    subtitle: "Dewy finish with handcrafted temple jewelry",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Private VIP Salon Lounge",
    category: "ambience",
    subtitle: "Italian marble styling pods with warm lighting",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Dimensional Honey Balayage",
    category: "hair",
    subtitle: "Seamless sun-kissed blending & soft waves",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Hydra Infusion Skin Ritual",
    category: "skin",
    subtitle: "Non-invasive plumping & glass glow finish",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Minimalist Nude & Gold Nails",
    category: "nails",
    subtitle: "Sculpted gel extensions with gold leaf accents",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Botanical Aromatherapy Suite",
    category: "ambience",
    subtitle: "Peaceful restorative zone for scalp and body treatments",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Olaplex Micro-Mist Hair Spa",
    category: "hair",
    subtitle: "Deep bond rejuvenation & cuticle sealing",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Curated Cosmetics & Elixirs",
    category: "ambience",
    subtitle: "Global formulations from Paris, Tokyo, and New York",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Shalini Pattnaik",
    title: "Consultant Dermatologist, Cuttack",
    rating: 5,
    treatment: "Signature 24K Glow Facial & Hair Spa",
    comment: "As a doctor, hygiene and ingredient quality are non-negotiable for me. Lumora completely blew me away. Their sterilization protocols match clinical standards, and the relaxing ambience on Cantonment Road is unmatched in Odisha.",
    date: "November 2024"
  },
  {
    id: 2,
    name: "Ananya Mohanty",
    title: "Bride from CDA Sector 9, Cuttack",
    rating: 5,
    treatment: "Royal Odia Bridal Package",
    comment: "Lumora's bridal team made my wedding day unforgettable! My makeup looked completely natural, radiant, and stayed flawless throughout the 10-hour ceremony in humid weather. The private suite gave me total privacy and peace.",
    date: "October 2024"
  },
  {
    id: 3,
    name: "Rituparna Sahoo",
    title: "Architect & Interior Designer",
    rating: 5,
    treatment: "Caramel Balayage & Olaplex Ritual",
    comment: "I used to travel all the way to Mumbai for hair color because salons here often overprocess. Lumora’s master colorist understood my brief to perfection. My hair feels softer than before. Truly a five-star aesthetic studio.",
    date: "December 2024"
  },
  {
    id: 4,
    name: "Siddharth Dash",
    title: "Corporate Director, Cuttack-Bhubaneswar",
    rating: 5,
    treatment: "Executive Hair Spa & Precision Cut",
    comment: "Top tier professionalism. No awkward waiting, warm hospitality, and the scalp massage was phenomenal after a hectic week. The online booking and WhatsApp coordination was instant and hassle-free.",
    date: "January 2025"
  }
];

export const FAQS = [
  {
    question: "Do I need to book an appointment in advance?",
    answer: "We strongly recommend booking 24 to 48 hours in advance to guarantee your preferred time slot with our master stylists. Walk-ins are accommodated based on chair availability."
  },
  {
    question: "How do I confirm my booking via WhatsApp?",
    answer: "Simply click any 'Book on WhatsApp' button on this website. It will launch a direct chat with our concierge with your requested service, date, and time pre-filled for immediate confirmation."
  },
  {
    question: "Where exactly is Lumora located in Cuttack?",
    answer: "We are situated in the serene Cantonment Road precinct (near Deer Park and the High Court Annex), just minutes from the Mahanadi Ring Road. Dedicated valet parking is available for all guests."
  },
  {
    question: "Do you offer bridal trials before the wedding day?",
    answer: "Yes, our Royal Bridal Packages include an in-depth consultation and makeup/hair trial to perfect your shade matching, drape styling, and skin prep routine weeks before the main ceremony."
  },
  {
    question: "Which product brands do you use in your treatments?",
    answer: "We strictly curate 100% genuine luxury products: Kérastase Paris, Olaplex USA, L'Oréal Professionnel Serie Expert, Dermalogica, M.A.C, Bobbi Brown, and Huda Beauty."
  }
];
