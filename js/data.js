// ==========================================================================
// Maple Homes and Enterprises — Verified Business Data Configuration
// All details verified from Google Business & Justdial listings
// ==========================================================================

export const businessData = {
  name: "Maple Homes and Enterprises",
  tagline: "Your Trusted Real Estate & Commercial Property Partner in Navi Mumbai",
  marathiTagline: "विश्वासू आणि पारदर्शक रिअल इस्टेट सल्लागार • नवीन पनवेल",
  established: 2014,
  experienceYears: "10+",
  rating: 4.8,
  reviewCount: 60,
  verifiedReviewsBadge: "4.8 ★ Rated on Justdial (60+ Customer Reviews)",
  
  contact: {
    primaryPhone: "+917021078851",
    primaryPhoneDisplay: "+91 70210 78851",
    secondaryPhone: "+919082401477",
    secondaryPhoneDisplay: "+91 90824 01477",
    whatsappPhone: "917021078851",
    email: "maplehomes.enterprises@gmail.com",
    address: {
      building: "Melody Tower, Plot No. 19, Sector 15A",
      landmark: "Near Union Bank of India",
      locality: "New Panvel East",
      city: "Navi Mumbai",
      state: "Maharashtra",
      pincode: "410206",
      country: "India",
      fullAddress: "Melody Tower, Plot No. 19, Sector 15A, Near Union Bank, New Panvel East, Navi Mumbai, Maharashtra 410206",
      geo: {
        latitude: 18.990874,
        longitude: 73.1244955
      }
    },
    timings: "Monday to Sunday: 09:00 AM – 09:00 PM (Open 7 Days)",
    workingDays: "All 7 Days Open",
    paymentModes: ["UPI / Google Pay / PhonePe", "Net Banking", "Cheque / Demand Draft", "Cash"],
    serviceAreas: [
      "New Panvel East & West",
      "Karanjade",
      "Ulwe",
      "Kamothe",
      "Kharghar",
      "Sukhapur",
      "NMIA Airport Influence Zone"
    ]
  },

  stats: [
    { value: "10+", label: "Years of Trust", desc: "Serving Panvel since 2014" },
    { value: "4.8★", label: "Client Satisfaction", desc: "Based on 60+ verified reviews" },
    { value: "500+", label: "Properties Closed", desc: "Flats, shops & offices leased/sold" },
    { value: "100%", label: "Verified Titles", desc: "Zero legal disputes or surprises" }
  ],

  services: [
    {
      id: "residential-sale",
      category: "residential",
      title: "Residential Property Sales & Resale",
      subtitle: "1, 2 & 3 BHK Apartments & Luxury Penthouses",
      description: "Handpicked verified apartments in prime locations across New Panvel, Karanjade, and Ulwe. Complete end-to-end assistance from site visits to registry.",
      icon: "home",
      features: ["RERA Registered Projects", "Negotiated Builder Pricing", "Clear Title Guarantee", "Full Loan Support"],
      badge: "Most Popular"
    },
    {
      id: "commercial-rental",
      category: "commercial",
      title: "Commercial Rental & Showroom Leasing",
      subtitle: "High Footfall Shops & Prime Corporate Offices",
      description: "Premium retail shops, office spaces, and commercial hubs near Panvel Station, highway corridors, and busy market complexes.",
      icon: "building-2",
      features: ["Main Road Frontage", "Pre-fitted Corporate Spaces", "Flexible Lease Terms", "Legal Agreement Setup"],
      badge: "High ROI"
    },
    {
      id: "residential-rental",
      category: "rental",
      title: "Residential Flats on Rent / Lease",
      subtitle: "Affordable & Premium Family & Bachelor Rentals",
      description: "Quick matching for tenants and owners. Thorough background verification, police intimation, and quick registered agreement execution.",
      icon: "key",
      features: ["Fast Move-in Turnaround", "Family-friendly Societies", "Furnished & Unfurnished", "Transparent Brokerage"],
      badge: "Quick Turnaround"
    },
    {
      id: "airport-investment",
      category: "investment",
      title: "Airport Corridor Strategic Investment",
      subtitle: "High-Growth Zones Near Upcoming NMIA & Atal Setu",
      description: "Expert advisory for land parcels, upcoming developments, and pre-launch commercial properties that maximize capital appreciation.",
      icon: "trending-up",
      features: ["High Capital Growth", "Infrastructure Proximity", "Entry-level to High Budget", "Exit Strategy Advisory"],
      badge: "Booming Zone"
    },
    {
      id: "home-loans",
      category: "financial",
      title: "Home Loan & Financial Advisory",
      subtitle: "Lowest Interest Rates with Leading Nationalized & Private Banks",
      description: "Hassle-free loan sanctions through our verified banking tie-ups including SBI, HDFC, ICICI, and Axis Bank with maximum eligibility support.",
      icon: "banknote",
      features: ["Minimal Documentation", "Fast Approval Window", "Doorstep Executive Service", "Balance Transfer Help"],
      badge: "Zero Consultation Fee"
    },
    {
      id: "legal-documentation",
      category: "legal",
      title: "Legal Verification & Registration Assistance",
      subtitle: "Complete Peace of Mind with Verified Property Titles",
      description: "Detailed title search, search report verification, CIDCO transfer documentation, and seamless Sub-Registrar Office execution.",
      icon: "shield-check",
      features: ["Title Search & Report", "CIDCO Transfer Clearance", "Stamp Duty & Registration", "Dispute-free Certification"],
      badge: "100% Secure"
    }
  ],

  featuredProperties: [
    {
      id: "prop-1",
      title: "Luxury 2 BHK Garden Facing Apartment",
      location: "Sector 15A, New Panvel East",
      type: "Residential Sale",
      category: "residential",
      price: "₹65 Lakh - ₹78 Lakh",
      priceSub: "All Inclusive / Negotiable",
      carpet: "680 - 740 sq.ft.",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      tags: ["Near Station", "Gated Society", "Lift & Parking", "CIDCO Transfer"],
      featured: true
    },
    {
      id: "prop-2",
      title: "Prime Ground Floor Commercial Shop",
      location: "Main Market Road, Near Melody Tower, Sector 15A",
      type: "Commercial Rent / Lease",
      category: "commercial",
      price: "₹35,000 / month",
      priceSub: "Deposit: 6 Months",
      carpet: "320 sq.ft. (14 ft Ceiling)",
      possession: "Immediate Available",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      tags: ["High Footfall", "Glass Frontage", "3-Phase Power", "Suits Clinic / Retail"],
      featured: true
    },
    {
      id: "prop-3",
      title: "Modern 1 BHK Airy Flat with Balcony",
      location: "Karanjade Sector 4, Near Panvel",
      type: "Residential Sale",
      category: "residential",
      price: "₹36 Lakh - ₹42 Lakh",
      priceSub: "Bank Loan 90% Available",
      carpet: "445 sq.ft.",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tags: ["Open View", "G+7 Tower", "Clear Title", "5 Min to Highway"],
      featured: true
    },
    {
      id: "prop-4",
      title: "Corporate Office Suite in Commercial Hub",
      location: "Panvel Railway Station Proximity",
      type: "Commercial Sale / Lease",
      category: "commercial",
      price: "₹55,000 / month",
      priceSub: "Or Buy @ ₹85 Lakh",
      carpet: "620 sq.ft. Fitted Out",
      possession: "Immediate",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      tags: ["Conference Room", "Power Backup", "Reserved Parking", "High Speed Lifts"],
      featured: false
    },
    {
      id: "prop-5",
      title: "Spacious 3 BHK Premium Family Home",
      location: "Sector 19 / 15A, New Panvel",
      type: "Residential Sale",
      category: "residential",
      price: "₹1.10 Cr - ₹1.28 Cr",
      priceSub: "Direct Seller Deal",
      carpet: "1,050 sq.ft.",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      tags: ["Master Bedroom Balcony", "Modular Kitchen", "Clubhouse", "2 Car Parking"],
      featured: true
    },
    {
      id: "prop-6",
      title: "High-Yield Investment Property Near Airport",
      location: "Ulwe / NMIA Corridor",
      type: "Investment Property",
      category: "investment",
      price: "₹48 Lakh Onwards",
      priceSub: "Projected 35%+ Appreciation",
      carpet: "Multiple Options",
      possession: "New Launch / Pre-RERA",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tags: ["Near Metro & Airport", "High Rental Yield", "Top Developer", "Flexible Slabs"],
      featured: false
    }
  ],

  testimonials: [
    {
      name: "Vin",
      rating: 5,
      date: "31st July, 2021",
      source: "Justdial Verified Review",
      review: "Highly recommended for people looking for Real Estate services. The people at Maple Homes are experienced, dedicated & cooperative. Good Job.",
      verified: true,
      serviceUsed: "Property Purchase & Legal Support"
    },
    {
      name: "Jitendra Bhati",
      rating: 5,
      date: "19th August, 2021",
      source: "Justdial Verified Review",
      review: "Maple Homes had variety of properties. They are very experienced and supportive throughout the process.",
      verified: true,
      serviceUsed: "Residential Flat in Panvel"
    },
    {
      name: "Niket",
      rating: 5,
      date: "11th August, 2021",
      source: "Justdial Verified Review",
      review: "Group of helpful persons and deals are also nice. Honest guidance without pushy sales tactics.",
      verified: true,
      serviceUsed: "Commercial Property Deal"
    },
    {
      name: "Ashok Yadav",
      rating: 5,
      date: "11th August, 2021",
      source: "Justdial Verified Review",
      review: "He is honest and provided very good service. Thanks. Everything was clearly explained before signing.",
      verified: true,
      serviceUsed: "Rental Agreement & Property"
    },
    {
      name: "Shon",
      rating: 5,
      date: "11th August, 2021",
      source: "Justdial Verified Review",
      review: "Worlds best services... Have a look at it everyone. They made our home search completely stress-free.",
      verified: true,
      serviceUsed: "Home Search & Loan"
    },
    {
      name: "Vivek",
      rating: 5,
      date: "22nd July, 2021",
      source: "Justdial Verified Review",
      review: "Your service is very good. Very polite staff and honest documentation assistance.",
      verified: true,
      serviceUsed: "Residential Consultation"
    },
    {
      name: "Manprit Singh",
      rating: 5,
      date: "20th January, 2022",
      source: "Justdial Verified Review",
      review: "Great service. Transparent dealings and quick execution of registration work in Panvel.",
      verified: true,
      serviceUsed: "Property Advisory"
    }
  ],

  whyChooseUs: [
    {
      icon: "award",
      title: "10+ Years Panvel Specialization",
      description: "Operating in Sector 15A since 2014. We know every building, developer reputation, water/power reliability, and realistic market rates."
    },
    {
      icon: "check-circle-2",
      title: "100% Clean Title Verification",
      description: "We never take on disputed properties. Every listed apartment, commercial shop, and land parcel undergoes rigorous legal scrutiny."
    },
    {
      icon: "coins",
      title: "Zero Hidden Charges & Fair Deals",
      description: "Transparent professional terms. No last-minute surprises, unexpected fees, or inflated rates. What we quote is what you pay."
    },
    {
      icon: "file-text",
      title: "Complete Paperwork & Loan Support",
      description: "From drafting registered rent agreements to bank loan approvals and Sub-Registrar registration, we handle everything under one roof."
    },
    {
      icon: "map-pin",
      title: "Prime Melody Tower Location",
      description: "Conveniently located near Panvel Railway Station and Union Bank in Sector 15A. Walk in anytime 7 days a week for in-person consultation."
    },
    {
      icon: "sparkles",
      title: "Personalized Customer Care",
      description: "Rated 4.8 Stars by 60+ real clients. We prioritize long-term client relationships over one-off transactions."
    }
  ],

  gallery: [
    {
      title: "Modern Residential Living",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      caption: "Spacious 2 & 3 BHK developments in New Panvel"
    },
    {
      title: "Prime Commercial Showrooms & Retail",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      caption: "High footfall retail spaces near Panvel Station"
    },
    {
      title: "Elegant Interior Concepts",
      category: "Interiors",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      caption: "Thoughtfully crafted living spaces with natural light"
    },
    {
      title: "Corporate Offices & Co-working",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
      caption: "Executive office suites in modern commercial towers"
    },
    {
      title: "Balcony & Scenic Greenery Views",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      caption: "Vastu-compliant layouts overlooking Panvel hills & greens"
    },
    {
      title: "Upcoming Airport Corridor Hubs",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      caption: "High capital growth investments along NMIA & Atal Setu corridors"
    }
  ]
};
