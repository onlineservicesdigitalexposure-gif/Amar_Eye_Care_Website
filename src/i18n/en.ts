/**
 * AMR Eye Center — English Translation File
 * All user-visible hardcoded text, organized by section namespace.
 * Do NOT modify component files yet — these are preparation files only.
 */

const en = {

  // ─────────────────────────────────────────────
  // NAVBAR
  // ─────────────────────────────────────────────
  nav: {
    logo: {
      name: "AMR",
      tagline: "Eye Center",
      aria: "Home - AMR Eye Center",
    },
    links: {
      home: "Home",
      doctor: "Doctor",
      services: "Services",
      branches: "Branches",
      gallery: "Gallery",
      contact: "Contact",
    },
    dropdown: {
      heading: "Clinical Focus",
      cataract: "Cataract Surgery",
      glaucoma: "Glaucoma",
      vision: "Vision Correction",
      pediatric: "Pediatric Eye Care",
      diabetic: "Diabetic Retinopathy",
      diagnostics: "Diagnostics",
      viewAll: "View All Services →",
    },
    lang: {
      enShort: "EN",
      bnShort: "BN",
      enFull: "English",
      bnFull: "Bengali",
      label: "Language",
    },
    cta: {
      bookAppointment: "Book Appointment",
      callToBook: "Call to Book Appointment",
    },
    toggle: {
      aria: "Toggle menu",
    },
    breadcrumbs: {
      aria: "Breadcrumb",
    },
  },

  // ─────────────────────────────────────────────
  // HERO SECTION
  // ─────────────────────────────────────────────
  hero: {
    badge: "NABH ACCREDITED STANDARDS",
    heading: {
      line1: "Precision",
      highlight: "Vision Care",
      line2: "for Every Eye.",
    },
    subtitle: {
      prefix: "Complete clinical excellence in ophthalmology led by senior consultant",
      doctorName: "Dr. Abdul Mohit",
      suffix: "Restoring sight through compassionate care and cutting-edge technology.",
    },
    cta: {
      primary: "Book Your Visit",
      secondary: "View Services",
    },
    trust: {
      patients: {
        value: "15,000+",
        label: "Happy Patients",
      },
    },
    floatingCards: {
      nabh: {
        title: "NABH Standards",
        label: "Certified Excellence",
      },
      painless: {
        title: "Precision Diagnostics",
        label: "Zero Stitches Tech",
      },
    },
    img: {
      alt: "Eye care medical professional at AMR Eye Center",
    },
  },

  // ─────────────────────────────────────────────
  // CLINICAL STATS
  // ─────────────────────────────────────────────
  stats: {
    procedures: {
      value: "10k+",
      label: "Successful Procedures",
    },
    years: {
      value: "36+",
      label: "Years of Excellence",
    },
    consultants: {
      value: "10+",
      label: "Expert Consultants",
    },
    awards: {
      value: "11+",
      label: "Quality Awards",
    },
  },

  // ─────────────────────────────────────────────
  // WHY CHOOSE US
  // ─────────────────────────────────────────────
  why: {
    section: {
      title: "The AMR Distinction",
      subtitle:
        "Discover why thousands of patients trust us with their most precious sense—their vision.",
    },
    benefits: {
      tech: {
        title: "Advanced Painless Tech",
        description:
          "Our micro-incision Phacoemulsification technology ensures completely painless surgical experiences with no stitches.",
      },
      expertise: {
        title: "Senior Surgeon Expertise",
        description:
          "Operated under the direct clinical leadership of Dr. Abdul Mohit with over two decades of surgical excellence.",
      },
      care: {
        title: "Patient-First Care",
        description:
          "Every treatment plan is bespoke, focusing on personalized recovery pathways and empathetic communication.",
      },
      hygiene: {
        title: "Hygiene & Aesthetics",
        description:
          "State-of-the-art sterile operating theaters combined with premium, comfortable recovery lounges for patients.",
      },
    },
  },

  // ─────────────────────────────────────────────
  // DOCTOR (Home page version — components/DoctorProfile.tsx)
  // ─────────────────────────────────────────────
  doctor: {
    overline: "Clinical Leadership",
    name: "Dr. Abdul Mohit",
    quote:
      "Restoring vision is a spiritual journey. Every incision is guided by the pursuit of perfection and the preservation of our patients' most precious sense.",
    floatBadge: {
      value: "25+",
      label: "Years of Surgical Excellence",
    },
    qualifications: {
      specialization: {
        title: "Specialization",
        text: "Senior Consultant Ophthalmologist",
      },
      expertise: {
        title: "Expertise",
        text: "Advanced Micro-Incision Phaco Surgery",
      },
      experience: {
        title: "Experience",
        text: "Over 36 Years of Clinical Excellence",
      },
      nabh: {
        title: "NABH Standards",
        text: "Certified Quality Patient Care",
      },
    },
    cta: "Inquire for Consultation",
    img: {
      alt: "Dr. Abdul Mohit - Senior Eye Specialist at AMR Eye Center",
    },
  },

  // ─────────────────────────────────────────────
  // DOCTOR PAGE (Dedicated /doctor route — components/home/DoctorProfile.tsx)
  // ─────────────────────────────────────────────
  doctorPage: {
    sectionHeading: "Meet Your Doctor",
    name: "Dr. Abdul Mohit",
    title: "Senior Consultant Ophthalmologist",
    degrees: {
      mbbs: "MBBS (Hons.)",
      ms: "M.S. (Ophth)",
      do: "D.O. (Alig)",
      frcs: "F.R.C.S. (Glasgow, UK)",
    },
    hospital: {
      heading: "Global Hospital Background",
      description:
        "Former Eye Surgeon at Al Noor Specialist Hospital & Hera General Hospital (Holy Makkah, KSA). Bringing over three decades of international and domestic clinical excellence.",
      alNoor: "Al Noor Specialist Hospital",
      hera: "Hera General Hospital",
    },
    specializations: {
      heading: "Key Specializations",
      phaco: "Phaco Surgery (Cataract)",
      glaucoma: "Glaucoma Management",
      squint: "Squint Correction",
      diabetic: "Diabetic Eye Care",
      complex: "Complex Ocular Surgeries",
    },
    floatBadge: {
      years: {
        value: "31+",
        label: "Years Exp.",
      },
      registration: {
        value: "Regn. No 43361",
        label: "(WBMC) Registered Consultant",
      },
    },
    img: {
      alt: "Dr. Abdul Mohit, Senior Consultant Ophthalmologist",
    },
  },

  // ─────────────────────────────────────────────
  // SERVICES (Home grid — components/home/ServicesGrid.tsx)
  // ─────────────────────────────────────────────
  services: {
    section: {
      title: "Clinical Services",
      subtitle:
        "Delivering world-class ophthalmic care using the most advanced diagnostic and surgical technologies available.",
    },
    cataract: {
      title: "Painless Cataract Surgery",
      description:
        "Advanced micro-incision cataract surgery using state-of-the-art technology for rapid visual recovery.",
    },
    glaucoma: {
      title: "Glaucoma Management",
      description:
        "Comprehensive management and surgical interventions to reduce intraocular pressure and prevent optic nerve damage.",
    },
    vision: {
      title: "Vision Correction",
      description:
        "Customized refractive solutions to restore perfect visual acuity and reduce dependency on glasses.",
    },
    pediatric: {
      title: "Pediatric Eye Care",
      description:
        "Specialized screenings, amblyopia management, and squint correction for healthy child visual development.",
    },
    diabetic: {
      title: "Diabetic Retinopathy",
      description:
        "Meticulous screening and advanced laser treatments to preserve long-term retinal health in diabetic patients.",
    },
    diagnostics: {
      title: "Advanced Diagnostics",
      description:
        "State-of-the-art ocular imaging, OCT, and precise biometric analysis for accurate treatment planning.",
    },
  },

  // ─────────────────────────────────────────────
  // SERVICES PAGE (pages/Services.tsx + data/services.ts)
  // ─────────────────────────────────────────────
  servicesPage: {
    section: {
      title: "Clinical Specialities",
      subtitle:
        "Explore our comprehensive range of specialized ophthalmic treatments and diagnostic services.",
    },
    filter: {
      label: "Filter",
      all: "All",
      surgical: "Surgical",
      laser: "Laser Care",
      diagnostic: "Diagnostic",
    },
    search: {
      placeholder: "Search procedures or symptoms...",
    },
    empty: {
      title: "No treatments found",
      message: "We couldn't find any services matching your search. Try a different term or clear your filters.",
      clear: "Clear all filters",
    },
    data: {
      cataract: {
        title: "Painless Cataract (Phaco) Surgery",
        category: "Surgical",
        description:
          "Advanced micro-incision cataract surgery using state-of-the-art ultrasonic technology for rapid visual recovery.",
      },
      glaucoma: {
        title: "Glaucoma Management",
        category: "Surgical",
        description:
          "Comprehensive management and surgical interventions to reduce intraocular pressure and prevent optic nerve damage.",
      },
      vision: {
        title: "Vision Correction & Spectacle Removal",
        category: "Laser Care",
        description:
          "Customized refractive solutions to restore perfect visual acuity and reduce dependency on glasses.",
      },
      pediatric: {
        title: "Pediatric & Squint Eye Care",
        category: "Surgical",
        description:
          "Specialized screenings, amblyopia management, and squint correction for healthy child visual development.",
      },
      diabetic: {
        title: "Diabetic Retinopathy Screening",
        category: "Laser Care",
        description:
          "Meticulous screening and advanced laser treatments to preserve long-term retinal health in diabetic patients.",
      },
      diagnostics: {
        title: "Advanced Eye Diagnostics",
        category: "Diagnostic",
        description:
          "State-of-the-art ocular imaging, OCT, and precise biometric analysis for accurate treatment planning.",
      },
    },
  },

  // ─────────────────────────────────────────────
  // TESTIMONIALS
  // ─────────────────────────────────────────────
  testimonials: {
    section: {
      title: "Patient Stories",
      subtitle:
        "Real feedback from individuals who have trusted us to restore and preserve their vision.",
    },
    reviews: {
      prabir: {
        name: "Prabir Chatterjee",
        role: "Phaco Surgery Patient",
        content:
          "Complete painless experience. I was able to see clearly within 24 hours. Dr. Mohit and the staff were incredibly professional.",
      },
      sumi: {
        name: "Sumi Khatun",
        role: "Glaucoma Patient",
        content:
          "My eye pressure was very high, but with consistent treatment here, it's now stable. The diagnostic machines are top-notch.",
      },
      animesh: {
        name: "Animesh Das",
        role: "Vision Correction",
        content:
          "Excellent diagnostic approach. They don't just recommend surgery, they analyze if you really need it. Highly recommended center.",
      },
    },
  },

  // ─────────────────────────────────────────────
  // FAQ
  // ─────────────────────────────────────────────
  faq: {
    section: {
      title: "Common Questions",
      subtitle: "Brief answers to the most frequent inquiries from our patients.",
    },
    items: {
      painless: {
        question: "Is cataract surgery painful?",
        answer:
          "No. We use advanced topical anesthesia and micro-incision techniques, ensuring the procedure is completely painless with a very rapid recovery period.",
      },
      recovery: {
        question: "How long does recovery take after surgery?",
        answer:
          "Most patients return to their routine within 24–48 hours. Full visual stabilization typically occurs within two weeks, depending on the procedure and individual health.",
      },
      insurance: {
        question: "Do you accept health insurance?",
        answer:
          "Yes, we work with most major insurance providers and TPAs. Please contact our administrative desk with your policy details for a complimentary benefit check.",
      },
      technology: {
        question: "Which technology is used for blade-less surgery?",
        answer:
          "For cataract, we use Phacoemulsification technology. For other treatments, we use the most modern laser and diagnostic platforms available in Eastern India.",
      },
    },
  },

  // ─────────────────────────────────────────────
  // BRANCHES (Home version — components/BranchLocations.tsx)
  // ─────────────────────────────────────────────
  branches: {
    section: {
      title: "Our Diagnostic Footprint",
      subtitle:
        "Precision eye care made accessible across two strategic locations in Kolkata and Murshidabad.",
    },
    kolkata: {
      name: "Kolkata Branch",
      label: "Main Branch",
      address:
        "1st Floor, Kidwai Apartment, 40/1 Rafi Ahmed Kidwai Road, Kolkata 700016 (BATA MORE)",
      phone1: "+91 91477 41140",
      phone2: "+91 82740 71117",
      hours: "Mon – Sat: 11:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    },
    murshidabad: {
      name: "Murshidabad Branch",
      label: "Amtala / Surangapur",
      address:
        "2, Amtala - Bhabanipur Rd, beside S.B Medicine Supply, Amtala, Surangapur, West Bengal 742121",
      phone1: "+91 74077 59050",
      phone2: "+91 86429 23439",
      hours: "Every Alternate Sunday (Bi-Weekly)",
    },
    btn: {
      directions: "Get Directions",
    },
  },

  // ─────────────────────────────────────────────
  // BRANCHES PAGE (Dedicated /branches — components/home/BranchLocations.tsx)
  // ─────────────────────────────────────────────
  branchesPage: {
    section: {
      title: "Our Clinic Locations",
      subtitle:
        "Visit us at our primary consulting center in Kolkata or our specialized branch in Amtala for world-class eye care.",
    },
    main: {
      name: "Main Branch (Kolkata)",
      badge: "Primary Location",
      address: {
        line1: "1st Floor, Kidwai Apartment",
        line2: "40/1 Rafi Ahmed Kidwai Road",
        line3: "Kolkata - 700016",
      },
      landmark: "Near Bata More, Opposite to Trikon Park",
      hours: "11 AM - 2 PM & 5 PM - 8 PM (Mon - Sat)",
      phone1: "+91 91477 41140",
      phone2: "+91 82740 71117",
    },
    amtala: {
      name: "Amtala Branch",
      address: {
        line1: "AMR Eye Centre",
        line2: "Romana Clinic",
        line3: "Opposite To Amtala Haat",
      },
      hours: "Two weeks intervally on Sunday",
      phone1: "+91 74077 59050",
      phone2: "+91 86429 23439",
    },
    fields: {
      address: "Clinic Address",
      hours: "Consultation Hours",
      phones: "Contact Numbers",
    },
    btn: {
      call: "Call Location",
      directions: "Get Directions",
    },
  },

  // ─────────────────────────────────────────────
  // CONTACT / APPOINTMENT FORM
  // ─────────────────────────────────────────────
  contact: {
    section: {
      title: "Book an Appointment",
      subtitle:
        "Take the first step towards clearer vision. Schedule a consultation or find directions to our clinic.",
    },
    form: {
      title: "Patient Details",
      name: {
        label: "Full Name",
        placeholder: "Suman Bar",
      },
      phone: {
        label: "Phone Number",
        placeholder: "+91 6296774399",
      },
      age: {
        label: "Age",
        placeholder: "Patient age",
      },
      gender: {
        label: "Gender",
        placeholder: "Select gender",
        male: "Male",
        female: "Female",
        other: "Other",
      },
      branch: {
        label: "Preferred Clinic Location",
        placeholder: "Select a branch",
        mainBranch: "Kolkata – Kidwai Road (BATA MORE)",
        amtalaBranch: "Murshidabad – Amtala, Surangapur",
      },
      service: {
        label: "Service Required",
        placeholder: "Select a service",
        options: {
          cataract: "Painless Cataract Surgery",
          glaucoma: "Glaucoma Management",
          vision: "Vision Correction / Spectacle Removal",
          pediatric: "Pediatric & Squint Eye Care",
          diabetic: "Diabetic Retinopathy Screening",
          diagnostics: "Advanced Eye Diagnostics",
          checkup: "Routine Eye Check-Up",
          other: "Other",
        },
      },
      date: {
        label: "Preferred Date",
      },
      time: {
        label: "Preferred Time",
        placeholder: "Any available slot",
      },
      problem: {
        label: "Describe Your Eye Condition",
        placeholder: "E.g., Vision blurring, need cataract consultation...",
      },
      message: {
        label: "Additional Notes",
        placeholder: "Describe any specific symptoms, concerns, or previous medical history...",
        optional: "(Optional)",
      },
      errors: {
        nameRequired: "Name is required",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number",
        problemRequired: "Please briefly describe your problem",
      },
      submit: {
        default: "Confirm Booking Request",
        whatsapp: "Confirm Appointment via WhatsApp",
        loading: "Requesting...",
        redirecting: "Redirecting to WhatsApp...",
        success: "Request Sent",
        disclaimer: "By submitting, you'll be redirected to WhatsApp with your appointment details pre-filled. We respond within 10 minutes.",
      },
      postSubmit: {
        message: "Your appointment details are being sent. If the window didn't open,",
        link: "click here",
        another: "Book another appointment",
      },
      whatsapp: {
        header: "🏥 *AMR Eye Center – Appointment Request*",
        patientName: "👤 *Patient Name:*",
        phone: "📞 *Phone:*",
        age: "🎂 *Age:*",
        gender: "🧑 *Gender:*",
        branch: "🏪 *Branch:*",
        service: "🩺 *Service Required:*",
        date: "📅 *Preferred Date:*",
        time: "⏰ *Preferred Time:*",
        notes: "📝 *Additional Notes:*",
        footer: "_Submitted via AMR Eye Center website_",
      },
    },
    info: {
      kolkata: {
        title: "Kolkata Branch",
        address: "Kidwai Apartment, 40/1 Rafi Ahmed Kidwai Road, Kolkata 700016",
        hours: "Mon–Sat: 11AM–2PM & 5PM–8PM",
      },
      amtala: {
        title: "Murshidabad Branch",
        address: "Amtala - Bhabanipur Rd, Surangapur, West Bengal 742121",
        hours: "Every Alternate Sunday",
      },
      contact: {
        title: "WhatsApp / Call",
        subtitle: "+91 82740 71117\n+91 74077 59050",
      },
      cta: "Chat Directly on WhatsApp",
    },
    quickContact: {
      call: {
        title: "Call Clinic Now",
        subtitle: "Immediate assistance",
      },
      whatsapp: {
        title: "WhatsApp Us",
        subtitle: "Quick chat booking",
      },
    },
    map: {
      overlay: "Main Clinic: Kidwai Apartment",
      title: "AMR Eye Center exact location map",
    },
    slots: {
      k1: "11:00 AM – 12:00 PM",
      k2: "12:00 PM – 1:00 PM",
      k3: "1:00 PM – 2:00 PM",
      k4: "5:00 PM – 6:00 PM",
      k5: "6:00 PM – 7:00 PM",
      k6: "7:00 PM – 8:00 PM",
    },
  },

  // ─────────────────────────────────────────────
  // GALLERY
  // ─────────────────────────────────────────────
  gallery: {
    section: {
      title: "The AMR Facility",
      subtitle:
        "Explore our NABH-standard infrastructure, state-of-the-art diagnostic platforms, and sterile surgical environments.",
    },
    surgerySection: {
      title: "Surgical Outcomes",
      subtitle: "Experience the remarkable transformations and visual clarity restored through our precision surgical procedures.",
      before: "Before Surgery",
      after: "After Surgery",
    },
    filter: {
      label: "Perspective",
      all: "All",
      interior: "Clinic Interior",
      equipment: "Equipment",
      care: "Patient Care",
      surgery: "Surgery Room",
    },
    empty: {
      title: "No images found",
      message: "Try adjusting your filters.",
    },
    lightbox: {
      closeAria: "Close lightbox",
      imgAlt: "Expanded medical facility view",
    },
    images: {
      reception: "Modern Reception Area",
      oct: "Advanced OCT Machine",
      theater: "Sterile Operating Theater",
      consultation: "Doctor consulting a patient",
      phaco: "Phacoemulsification Console",
      lounge: "Comfortable Waiting Lounge",
      laser: "Laser Vision Correction Suite",
      visionTest: "Vision Testing",
      slitLamp: "Slit Lamp Examination",
    },
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    brand: {
      name: "AMR",
      tagline: "Eye Center",
      about:
        "Delivering world-class ophthalmic care and advanced surgical treatments under the expert guidance of Dr. Abdul Mohit.",
    },
    links: {
      heading: "Quick Links",
      home: "Home",
      doctor: "Meet Dr. Mohit",
      book: "Book Appointment",
      contact: "Contact Us",
    },
    services: {
      heading: "Our Services",
      phaco: "Phaco Surgery",
      glaucoma: "Glaucoma Treatment",
      squint: "Squint Surgery",
      diabetic: "Diabetic Eye Care",
      checkup: "Routine Checkups",
    },
    contact: {
      heading: "Contact Us",
      phone1: "+91 91477 41140",
      phone2: "+91 82740 71117",
      phone3: "+91 74077 59050",
      phone4: "+91 86429 23439",
      email: "info@amreyecenter.in",
      mainLabel: "Main Branch",
      mainAddress:
        "1st Floor, Kidwai Apartment, 40/1 Rafi Ahmed Kidwai Road, Kolkata 700016",
      amtalaLabel: "Amtala Branch",
      amtalaAddress: "AMR Eye Centre, Romana Clinic, Opposite To Amtala Haat",
    },
    bottom: {
      copyright: "© {year} AMR Eye Center. All rights reserved.",
      credit: "Design & developed with ♥ by",
      creditLink: "DEOS",
    },
  },

  // ─────────────────────────────────────────────
  // FLOATING CONTACT WIDGET
  // ─────────────────────────────────────────────
  floating: {
    whatsapp: "WhatsApp",
    call: "Call Now",
    scrollTopAria: "Scroll to top",
  },

  // ─────────────────────────────────────────────
  // SEO (index.html + dynamic per-page)
  // ─────────────────────────────────────────────
  seo: {
    site: {
      title: "Amar Eye Center | Advanced Ophthalmic Care by Dr. Abdul Mohit",
      description:
        "Experience world-class eye care at Amar Eye Center in Kolkata. Led by Dr. Abdul Mohit (Senior Consultant, MS, FRCS - UK), specializing in Phaco, Glaucoma, and advanced surgeries.",
      keywords:
        "Eye Center Kolkata, Dr Abdul Mohit, Ophthalmologist, Cataract Surgery, Glaucoma Treatment, Squint Surgery, Phaco Surgery, Eye Specialist",
    },
    home: {
      title: "AMR Eye Center | Advanced Eye Care & Surgery in Kolkata",
      description:
        "Experience world-class eye care under Dr. Abdul Mohit. Specializing in Painless Cataract Surgery, Glaucoma Management, and Advanced Diagnostics across Kolkata and Amtala branches.",
    },
    doctor: {
      title: "Meet Dr. Abdul Mohit | Senior Consultant Ophthalmologist",
      description: "Learn about Dr. Abdul Mohit's 31+ years of experience in advanced eye surgery, including his tenure at Al Noor Specialist Hospital, KSA.",
    },
    services: {
      title: "Eye Care Services & Procedures | AMR Eye Center",
      description: "Explore our range of clinical services: Painless Cataract (Phaco) Surgery, Glaucoma Management, Pediatric Eye Care, and more.",
    },
    gallery: {
      title: "Our Facility & Equipment Gallery | AMR Eye Center",
      description: "Take a virtual tour of our NABH-standard clinical infrastructure and advanced diagnostic installations.",
    },
    branches: {
      title: "Our Clinic Locations | Kolkata & Murshidabad",
      description: "Find directions and contact details for our main branch in Kolkata and our specialized clinic in Amtala, Murshidabad.",
    },
    contact: {
      title: "Book an Appointment | Contact AMR Eye Center",
      description: "Schedule your consultation with Dr. Abdul Mohit. Reach us via WhatsApp or visit our Kolkata/Amtala clinics.",
    },
    og: {
      title: "Amar Eye Center | Advanced Ophthalmic Care",
      description:
        "World-class eye care led by Dr. Abdul Mohit with 31+ years of clinical excellence.",
    },
  },

} as const;

export default en;

/**
 * Deep utility type to extract the structure of the translation object
 * but allow any string as the value.
 */
export type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;
