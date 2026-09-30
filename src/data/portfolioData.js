export const PERSONAL_INFO = {
  name: "Namira Shifwah Kumandani",
  nickname: "Namira",
  role: "Frontend Developer",
  tagline: "I build thoughtful digital experiences.",
  alternativePositioning:
    "Information Systems Graduate · Web Developer · UI/UX Enthusiast",
  location: "Purwokerto, Central Java, Indonesia",
  email: "namira.kumandani@gmail.com",
  phone: "082138772462",
  linkedin: "https://www.linkedin.com/in/namirashifwahk/",
  github: "https://github.com/namirashi",

  cvFile: "/cv/Namira-Shifwah-Kumandani-CV.pdf",

  profileImage: "/images/namira.jpg",

  profileSummary:
    "Information Systems graduate from Telkom University Purwokerto with a strong interest in frontend development, information systems, technology, and digital product development. Experienced in web development, system analysis, UI/UX design, testing, and collaborative project work.",

  aboutNarrative:
    "Information Systems graduate from Telkom University Purwokerto with a GPA of 3.92/4.00. Experienced in web development, system analysis, UI/UX, data management, and collaborative project activities. Interested in building useful digital products and continuously developing skills in technology and software development.",
};

export const EDUCATION = {
  degree: "S1 Information Systems",
  institution: "Telkom University Purwokerto",
  period: "December 2022 — February 2026",
  gpa: "3.92",
  gpaMax: "4.00",
  location: "Purwokerto, Central Java, Indonesia",
  focusAreas: [
    "Frontend Development",
    "Web Development",
    "UI/UX Design",
    "System Analysis",
  ],
};

export const EXPERIENCES = [
  {
    id: "exp-1",
    role: "Web Developer",
    company: "PT Mega Giga Solusindo",
    type: "Kerja Praktik",
    period: "January 2020 — February 2021",
    responsibilities: [
      "Developed a user management system website using CodeIgniter based on system requirements.",
      "Conducted application testing and prepared test scenarios to ensure the website functioned according to requirements.",
      "Created application manuals for PadiPos and PadiPresence as system usage documentation.",
    ],
  },
  {
    id: "exp-2",
    role: "Data Access Management",
    company: "PT Telkom Witel Purwokerto",
    type: "Kerja Praktik",
    period: "January 2025 - February 2025",
    responsibilities: [
      "Managed recap, validation, and updating of new installation data using Microsoft Excel and Google Sheets.",
      "Analyzed issues in the DIMAS system and provided UI improvement recommendations.",
      "Coordinated with the operational team for work progress monitoring and reporting.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "BNSP — Web Developer",
    issuer: "Certificate of Competency",
    year: "2026",
    code: "BNSP-WD-2026",
    image: "/images/certificates/bnsp-web-developer.jpg",
  },

  {
    id: "cert-2",
    title: "English Proficiency Test — Telkom University",
    issuer: "EPrT",
    year: "2026",
    code: "EPrT-TELU",
    image: "/images/certificates/eprt-telkom.jpg",
  },

  {
    id: "cert-3",
    title: "BNSP — Software Engineering Competency",
    issuer: "Certificate of Competency",
    year: "2022",
    code: "BNSP-RPL-2022",
    image: "/images/certificates/bnsp-rpl.jpg",
  },
];

export const SKILLS = {
  toolsAndTechnical: [
    "Microsoft Office",
    "Google Workspace",
    "Canva",
    "Figma",
    "Visual Studio Code",
    "CapCut",
  ],
  personalSkills: [
    "Teamwork",
    "Adaptability",
    "Communication",
    "Time Management",
    "Problem Solving",
  ],
  developmentSkills: [
    "HTML5 & Semantic Markup",
    "CSS3 / Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive Web Design",
    "RESTful API Integration",
    "System Analysis & UML",
    "UI/UX Wireframing & Prototyping",
    "PHP",
    "GitHub",
  ],
};

export const ORGANIZATIONAL_EXPERIENCES = [
  {
    role: "Staff Entrepreneurship",
    organization: "Himpunan Mahasiswa Sistem Informasi",
    period: "2025–2026",
  },
  {
    role: "Staff Social Development",
    organization: "Himpunan Mahasiswa Sistem Informasi",
    period: "2023–2025",
  },
  {
    role: "Ketua Pelaksana",
    organization: "Bakti Sosial HMSI",
    period: "2024",
  },
  {
    role: "Pendamping Kelompok",
    organization: "Panitia PKKMB",
    period: "2023",
  },
  {
    role: "Sekretaris",
    organization: "Care for MABA Sistem Informasi",
    period: "2023",
  },
  {
    role: "Divisi Acara & MC",
    organization: "Seminar Kewirausahaan HMSI",
    period: "2025",
  },
  {
    role: "Divisi Acara",
    organization:
      "Dies Natalis Sistem Informasi, Universitas Telkom Purwokerto",
    period: "2023",
  },
];

export const PROJECTS = [
  {
    id: "wanda-beauty-salon",
    number: "01",
    isFeatured: true,
    featuredLabel: "FEATURED PROJECT",
    title: "Wanda Beauty Salon",
    subtitle: "Beauty Salon Management & Booking System",
    type: "Projek Undergraduate Thesis / Web Application",
    category: "Web Application",
    year: "NOVEMBER 2025 - JULY 2026",

    description:
      "Wanda Beauty Salon is a web-based salon management and booking system developed as an undergraduate thesis project. The system supports both customer-facing and administrative processes, allowing customers to explore recommended beauty services and make appointments, while staff and owners can manage services, reservations, schedules, testimonials, and salon data through an administrative dashboard.",

    role: [
      "User Requirements",
      "UI/UX Design",
      "System Analysis",
      "UML / System Design",
      "Web Development",
    ],

    techStack: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "Blade",
      "JavaScript",
      "CSS",
      "Figma",
    ],

    coverImage: "/images/projects/wanda-cover.png",

    screenshots: [
      "/images/projects/wanda-01.jpg",
      "/images/projects/wanda-02.jpg",
    ],

    features: [
      "Beauty Service Recommendation",
      "Online Appointment & Reservation",
      "Customer Reservation Management",
      "Service & Schedule Management",
      "Customer & Staff Dashboard",
      "Testimonial Management",
      "Report Export to PDF & Excel",
      "WhatsApp Integration",
    ],

    challenges:
      "The salon previously relied on WhatsApp for customer consultations and reservation coordination, while salon data and operational processes still required manual management. This created challenges in handling service information, appointment schedules, reservation data, and reporting efficiently.",

    solutions:
      "Developed an integrated web-based system with separate customer and administrative workflows. Customers can explore services, receive personalized recommendations, and make reservations online, while staff and owners can manage services, schedules, reservations, testimonials, and salon data through a centralized dashboard. The system also provides report export functionality in PDF and Excel formats to support administrative record keeping and reporting. The system flow and interface were refined through multiple UI/UX iterations based on user feedback.",

    outcome:
      "Successfully developed an end-to-end salon management and appointment system that connects customer booking activities with administrative operations, combining service recommendation, reservation management, scheduling, reporting, and centralized salon data management in a single web application.",

    deviceType: "browser",
    github: "https://github.com/namirashi/WandaBeautySalon",
    liveDemo: "", // EMPTY FOR NOW
    videoDemo:
      "https://drive.google.com/file/d/1-2M1z4ehALUCeFFeRoJHvMgXJGanzlPv/view?usp=drive_link",
  },
  {
    id: "medicaly",
    number: "02",
    isFeatured: false,
    title: "Medicaly",
    subtitle: "Healthcare Web Application",
    type: "Web Application for BNSP certification",
    category: "Web Application",
    year: "April 2026",
    description:
      "Medicaly is a healthcare e-commerce web application developed as part of a BNSP certification process. The application provides an online platform for browsing healthcare products, managing shopping carts, placing orders, and managing user and administrative activities.",
    role: [
      "Full-Stack Web Developer",
      "UI Implementation",
      "Backend Development",
      "Database Management",
    ],

    techStack: [
      "Laravel 12",
      "PHP 8.2+",
      "Blade",
      "Bootstrap 5",
      "Tailwind CSS",
      "Vite",
      "MySQL",
      "JavaScript",
    ],

    coverImage: "/images/projects/medicaly-cover.png",

    features: [
      "User authentication and registration",
      "Healthcare product catalog and product search",
      "Shopping cart management",
      "Order and order history management",
      "User notifications",
      "Admin dashboard and product management",
      "Role and permission management",
      "Responsive healthcare e-commerce interface",
    ],

    challenges:
      "The main challenge was developing an integrated healthcare e-commerce application with multiple user flows, including authentication, product management, shopping cart functionality, order processing, notifications, and role-based access control while maintaining a consistent and responsive interface.",

    solutions:
      "The application was developed using Laravel with Blade for the application views and structured routing, controllers, and models for backend functionality. Bootstrap and Tailwind CSS were used to build the interface, while Vite handled the frontend asset workflow. Role and permission management was implemented to separate administrative and regular user access.",

    outcome:
      "Successfully developed a functional healthcare web application as part of the BNSP web development competency assessment, demonstrating practical skills in Laravel development, database integration, frontend implementation, authentication, role management, and application structure.",
    github: "https://github.com/namirashi/WebsiteMedicaly",
    liveDemo: "", // EMPTY FOR NOW
    videoDemo:
      "https://drive.google.com/file/d/1cLbhHB50OND3mnGelXcklk9rFxRR8P-C/view?usp=drive_link",
  },
  {
    id: "thera-art",
    number: "03",
    isFeatured: false,
    title: "Thera Art",
    subtitle: "Art Supply Inventory Management System",
    type: "Dashboard / Web Application",
    category: "Dashboard Admin",
    year: "December 2025",
    description:
      "Thera Art is a web-based art supply inventory management system developed as a Capstone Design Project for Thera Art Space Purwokerto. The system was designed to replace manual spreadsheet-based inventory management with an integrated dashboard that enables administrators to manage inventory data, record incoming and outgoing stock transactions, monitor stock in real time, and generate automated reports.",
    role: ["System Developer", "UML & System Design"],

    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Tabler Template",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    coverImage: "/images/projects/thera-art-cover.png",
    features: [
      "Admin authentication and secure login",
      "Real-time inventory dashboard",
      "Master data management for items, categories, and units",
      "Incoming and outgoing stock transaction management",
      "Automatic stock updates after transactions",
      "Inventory search and data management",
      "Stock reports based on selected periods",
      "Export inventory and reports to PDF and Excel",
      "Light Mode and Dark Mode interface",
      "Automatic invoice number generation and stock validation",
      "Reserved and used item status management",
    ],
    challenges:
      "Thera Art Space previously managed art supply inventory manually using spreadsheets. This caused inconsistencies between inventory records and physical stock, delayed reporting, and made it difficult for management to monitor stock movements accurately. The main challenge was designing an integrated system that could centralize inventory data and automatically record stock movements.",
    solutions:
      "The project implemented a web-based inventory management dashboard using Laravel and MySQL. The system centralizes item, category, unit, incoming stock, outgoing stock, and reporting data in one database. Automatic stock updates, validation, transaction tracking, and PDF/Excel export features were implemented to reduce manual recording errors and accelerate reporting.",
    outcome:
      "Successfully developed an integrated web-based inventory management system for Thera Art Space. Black Box Testing achieved a 100% success rate across 31 test scenarios, while User Acceptance Testing achieved a 98% acceptance score. The system increased recording accuracy by 14% and reduced reporting time by up to 96%.",
    deviceType: "browser",
    github: "https://github.com/namirashi/DashboardInv-TheraArt",
    liveDemo: "", // EMPTY FOR NOW
    videoDemo:
      "https://drive.google.com/file/d/1RrheCNY8m_jJXmLsYTKjmgA3-NKbUSYM/view?usp=drive_link",
  },
  {
    id: "drivvy",
    number: "04",
    isFeatured: false,
    title: "Drivvy",
    subtitle: "Web Application",
    type: "Web Application",
    category: "Web Application",
    year: "November 2023",
    description:
      "Drivvy is a car rental web application developed as a major project for the Web Programming Design course. The application was built using Laravel to provide users with information about available rental cars, car details, rental services, location information, feedback, and user authentication.",
    role: ["Web Developer", "UI/UX Designer", "System Developer"],
    techStack: [
      "Laravel",
      "PHP",
      "Blade",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    coverImage: "/images/projects/drivvy-cover.png",
    features: [
      "Car rental information and car fleet database",
      "Car detail page with rental information",
      "User registration and login authentication",
      "Admin dashboard for managing car data",
      "Feedback and messaging between users and admin",
      "Location information for the Drivvy rental service",
    ],
    challenges:
      "The main challenge was developing an integrated car rental website that could provide clear vehicle information while supporting different user and admin activities. The system also needed to provide an easy-to-use interface for browsing cars, viewing details, and interacting with the rental service.",
    solutions:
      "The project was developed using the Laravel framework with an iterative Agile development approach. The team designed the system using UML, created interface mockups, implemented the required features, and tested the website to ensure that its functionality worked according to the planned requirements.",
    outcome:
      "Successfully demonstrated the implementation of a Laravel-based car rental web application with car fleet management, user authentication, car details, feedback, messaging, and admin management features as part of the Web Programming Design major project.",
    deviceType: "browser",
    github: "https://github.com/namirashi/WebDrivvy-Rental-Mobil",
    liveDemo: "", // EMPTY FOR NOW
    videoDemo:
      "https://drive.google.com/file/d/1tZDNq7hyUb1cNqe1ujWU9VZI6PYkwXzY/view?usp=drive_link",
  },
];

export const MARQUEE_ITEMS = [
  "FRONTEND DEVELOPMENT",
  "UI/UX DESIGN",
  "WEB DEVELOPMENT",
];
