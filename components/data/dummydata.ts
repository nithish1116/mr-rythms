import { Music3, ArrowRight, Clock, Guitar, GraduationCap, BookOpenText, Award, ShieldCheck, Clock3, HeartHandshake, Trophy, Drum, Piano, Mic2, Mail, MapPin, Phone, Facebook, Instagram, Youtube, CalendarCheck, Video, PenTool, TrendingUp} from "lucide-react";


export const navbarData = {
  logo: {
    title: "Mr Rythms",
    subtitle: "MUSIC TUTOR",
    icon: Music3,
    href: "#home",
  },

  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Instruments", href: "#instruments" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  cta: {
    label: "Book a Free Trial",
    href: "#contact",
  },
};

export const heroData = {
  sectionId: "home",

  backgroundImage: "/assets/hero-bg-image.png",

  badge: "LEARN. PRACTICE. PERFORM.",

  title: {
    line1: "Learn Music",
    line2: "From",
    highlight: "Home",
  },

  description:
    "Personalized one-on-one music tuition for all ages. Learn your favorite instrument, at your own pace, from the comfort of your home.",

  buttons: {
    primary: {
      label: "Book a Free Trial",
      href: "#contact",
      icon: ArrowRight,
    },
    secondary: {
      label: "Explore Courses",
      href: "#courses",
    },
  },

  students: {
    total: "500+",
    title: "Happy Students",
    subtitle: "Trusted by music lovers of all ages",
    avatars: ["#D9A441", "#9C7226", "#F0C866"],
  },

  card: {
    title: "Why Learn With Us?",
    highlights: [
      "1-on-1 Live Classes",
      "Flexible Timings",
      "Expert Guidance",
      "Personalized Plans",
      "Progress Tracking",
    ],
  },
};

export const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book a Free Trial",
    desc: "Choose your interested instrument & book your free trial",
  },
  {
    icon: Video,
    title: "Attend Live Class",
    desc: "Join a live one-on-one class with our expert tutor",
  },
  {
    icon: PenTool,
    title: "Practice & Learn",
    desc: "Practice with guidance & learn at your own pace",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Get feedback & track your improvement",
  },
];

export const tutorData = {
  sectionId: "about",

  badge: "About Me",

  title: {
    line1: `Hi, ${navbarData.logo.title}`,
    line2: "Your Music Tutor",
  },

  description:
    "With over 4+ years of teaching experience, I've helped hundreds of students discover the joy of music. My lessons are designed to be practical, fun, and life-changing.",

  image: {
    src:"/assets/mr-rythms-img.jpg",
    name: "Shalom",
    designation: "Founder & Lead Tutor",
  },

  stats: [
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: "Students Taught",
    },
    {
      icon: BookOpenText,
      value: "10+",
      label: "Instruments",
    },
    {
      icon: Award,
      value: "90%",
      label: "Success Rate",
    },
  ],

  button: {
    label: "Know More About Me",
    href: "#contact",
  },
};

export const benefitsData = {
  sectionId: "benefits",

  badge: "WHY STUDENTS STAY",

  title: "More than lessons — a real path to loving music",

  description:
    "Every student gets a plan built around their goals, schedule, and skill level — reviewed and adjusted as they grow.",

  items: [
    {
      icon: ShieldCheck,
      title: "Verified & Experienced",
      description:
        "10+ years of hands-on teaching across genres and age groups.",
    },
    {
      icon: Clock3,
      title: "Learn at Your Pace",
      description:
        "No rigid curriculum — lessons adapt to how fast you want to grow.",
    },
    {
      icon: HeartHandshake,
      title: "Supportive Environment",
      description:
        "Patient, encouraging feedback that builds confidence, not pressure.",
    },
    {
      icon: Trophy,
      title: "Real Performance Goals",
      description:
        "Work toward recitals, covers, or exams — whatever motivates you.",
    },
  ],
};

export const coursesData = {
  sectionId: "courses",

  badge: "COURSES & PRICING",

  title: "Find Your Perfect Course",

  description:
    "Structured plans designed for every age and skill level",

  buttonText: "Choose Plan",

  courses: [
    {
      icon: Drum,
      name: "Drumming Basics",
      level: "Beginner · Age 6+",
      price: "₹4,999",
      period: "/ month",
      features: [
        "4 offline or online classes / month",
        "Rhythms, beats & songs",
        "Practice sheets included",
      ],
      featured: false,
    },
    {
      icon: Piano,
      name: "Pads Training",
      level: "All Levels · Age 5+",
      price: "₹7,999",
      period: "/ month",
      features: [
        "4 offline or online classes / month",
        "Electronic pad techniques",
        "Finger drumming & rhythm control",
        "Live performance preparation",
      ],
      featured: false,
    },
    {
      icon: Mic2,
      name: "Vocal Training",
      level: "Beginner to Advanced",
      price: "₹4,699",
      period: "/ month",
      features: [
        "4 offline or online classes / month",
        "Breathing & pitch control",
        "Performance coaching",
      ],
      featured: false,
    },
  ],
};

export const TESTIMONIALS = [
  {
    quote:
      "Arjun Sir's way of teaching is simple, effective and full of patience. I never thought learning guitar could be this enjoyable!",
    name: "Rohan Mehta",
  },
  {
    quote:
      "The best music teacher I've ever had! He makes every class engaging and helps you grow step by step.",
    name: "Ananya R.",
  },
  {
    quote:
      "I love how Arjun Sir encourages creativity. His lessons boost confidence along with skills.",
    name: "Priya S.",
  },
];

export const FAQS = [
  {
    q: "What age groups do you teach?",
    a: "Lessons are available for kids as young as 5, teens, and adults of any age — plans are tailored to each student's pace and goals.",
  },
  {
    q: "Do I need my own instrument?",
    a: "Yes, you'll need access to the instrument you're learning. If you're unsure what to buy, I'm happy to recommend beginner-friendly options.",
  },
  {
    q: "How do online classes work?",
    a: "Classes happen live over video call, one-on-one, with real-time feedback — just like an in-person lesson, from your own home.",
  },
  {
    q: "Is the free trial really free?",
    a: "Yes — the first class is a completely free, no-obligation trial so you can see if it's the right fit before committing.",
  },
  {
    q: "Can I change my class timing later?",
    a: "Absolutely. Schedules are flexible and can be adjusted with a little advance notice to fit your routine.",
  },
];

export const ctaData = {
  sectionId: "cta",

  title: "Ready to Start Your Musical Journey?",

  description:
    "Book your free trial lesson today and take the first step towards your music goals.",

  button: {
    label: "Book Your Free Trial",
    href: "#contact",
    icon: ArrowRight,
  },
};

export const footerData = {
  sectionId: "contact",

  logo: {
    icon: Music3,
    title: `${navbarData.logo.title}`,
    subtitle: `${navbarData.logo.subtitle}`,
  },

  description:
    "Helping you discover the musician within you with expert guidance and personalized music tuition.",

  socialLinks: [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ],

  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Instruments", href: "#instruments" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],

  instruments: [
    { label: "drums", href: "#drum" },
    { label: "pads", href: "#pads" },
    { label: "piano", href: "#piano" },
    
  ],

  contact: [
    {
      icon: Phone,
      value: "+91 9550996199",
    },
    {
      icon: Mail,
      value: "dummymusicmail.com",
    },
    {
      icon: MapPin,
      value: "Hyderabad, India",
    },
    {
      icon: Clock,
      value: "Mon – Sat: 9:00 AM – 8:00 PM",
    },
  ],

  newsletter: {
    title: "Newsletter",
    placeholder: "Enter your email",
    button: "Go",
  },

  copyright: "Mr Rythms Music Tutor. All rights reserved.",

  policies: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
  ],
};

export const whatsappConfig = {
  phone: "919550996199",
  defaultMessage: "Hi! I'd like to book a music trial at Mr Rythms.",
};

export const bookingModalData = {
  title: "Book Your Free Trial",
  description:
    "Fill in your details and we'll connect with you on WhatsApp to schedule your session.",
  submitLabel: "Continue on WhatsApp",
  validationMessage: "Please fill in all required fields.",
  fields: {
    name: "Full Name",
    phone: "Phone Number",
    instrument: "Preferred Instrument",
    plan: "Selected Plan",
  },
  placeholders: {
    name: "Enter your name",
    phone: "Enter your phone number",
    instrument: "Select an instrument",
  },
  instruments: [
    "Drums",
    "Pads",
    "Piano",
    "Vocal",
  ],
  // plans: [
  //   "Free Trial",
  //   "Drumming Basics",
  //   "Pads Training",
  //   "Vocal Training",
  // ],
};