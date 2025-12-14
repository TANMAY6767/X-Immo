export const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      howItWorks: 'How It Works',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        trustedBy: "Trusted by 500+ Property Owners",
        titleLine1: "Property Management",
        titleLine2: "Made Intelligent",
        description: "Everything landlords need to manage properties, tenants, and finances — all in one elegant dashboard. Reduce administrative work by 80% with AI automation.",
        cta: {
          startTrial: "Start Free Trial",
          scheduleDemo: "Schedule Demo"
        },
        trustIndicators: {
          uptime: "Uptime",
          support: "Support",
          freeTrial: "Free Trial"
        }
      },
      dashboard: {
        overview: "Dashboard Overview",
        properties: "Properties",
        tenants: "Tenants",
        rentDue: "Rent Due",
        openTickets: "Open Tickets",
        revenueTrend: "Revenue Trend",
        recentActivity: "Recent Activity",
        rentPaidUnit: (unit: string) => `Rent paid - Unit ${unit}`,
        maintenanceUnit: (unit: string) => `Maintenance - Unit ${unit}`,
        hoursAgo: (hours: number) => `${hours} hours ago`,
        daysAgo: (days: number) => `${days} day ago`,
        inProgress: "In Progress",
        systemOnline: "System Online",
        aiInsightsActive: "AI Insights Active",
        aiAutomation: "AI Automation",
        liveAnalytics: "Live Analytics",
        propertyManagement: "Property Management",
        tenantManagement: "Tenant Management",
        financialTracking: "Financial Tracking",
        propertyDescription: "Complete property portfolio control",
        tenantDescription: "Streamlined tenant operations",
        financialDescription: "Real-time financial insights"
      }
    },
   features: {
      header: {
        badge: "Complete Property",
        titleLine2: "Management Suite",
        description: "Everything landlords need in one unified platform. No compromises."
      },
      featuresList: {
        propertyManagement: {
          title: "Property Management",
          description: "Complete digital portfolio management with photos, documents, and analytics.",
          stats: "95% reduction in paperwork",
          details: [
            "Unlimited photos & videos",
            "Digital property profiles",
            "Maintenance history",
            "Automated valuation"
          ]
        },
        tenantManagement: {
          title: "Tenant Management",
          description: "Streamlined tenant operations from screening to move-out.",
          stats: "40% faster onboarding",
          details: [
            "AI tenant screening",
            "Digital leases",
            "Communication hub",
            "Automated reminders"
          ]
        },
        rentTracker: {
          title: "Rent Tracker",
          description: "Real-time financial oversight with automated collection.",
          stats: "99.8% on-time payments",
          details: [
            "Auto rent collection",
            "Late fee tracking",
            "Expense reports",
            "Tax preparation"
          ]
        },
        maintenance: {
          title: "Maintenance",
          description: "Smart workflows connecting tenants with vetted providers.",
          stats: "60% faster resolution",
          details: [
            "Priority tickets",
            "Photo attachments",
            "Vendor portal",
            "Cost tracking"
          ]
        },
        documents: {
          title: "Documents",
          description: "Secure, organized management with AI categorization.",
          stats: "Bank-level encryption",
          details: [
            "Unlimited storage",
            "AI categorization",
            "Digital signatures",
            "Expiration alerts"
          ]
        },
        smartDashboard: {
          title: "Smart Dashboard",
          description: "Executive insights with real-time analytics.",
          stats: "Real-time intelligence",
          details: [
            "Custom KPIs",
            "Cash flow analysis",
            "Portfolio metrics",
            "Mobile optimized"
          ]
        }
      },
      badges: {
        aiAutomation: "AI Automation",
        liveAnalytics: "Live Analytics",
        bankGradeSecurity: "Bank-Grade Security"
      },
      stats: {
        properties: "Properties",
        uptime: "Uptime",
        support: "Support"
      },
      detailCard: {
        exploreButton: (featureTitle: string) => `Explore ${featureTitle}`
      },
      cta: {
        title: "Ready to streamline your operations?",
        subtitle: "Start your free 30-day trial. No credit card required.",
        buttons: {
          startTrial: "Start Free Trial",
          scheduleDemo: "Schedule Demo"
        }
      }
    },
    howItWorks: {
      header: {
        badge: "Get Started in Minutes",
        title: "Simple Setup, Powerful Results",
        description: "Go from zero to managing properties in just three easy steps."
      },
      timeline: {
        totalTime: "Total time: Less than 3 minutes"
      },
      steps: {
        step1: {
          title: "Sign Up",
          description: "Create your account in seconds with just your email.",
          time: "30 seconds",
          benefits: [
            "No credit card required",
            "Free 30-day trial",
            "Instant access"
          ]
        },
        step2: {
          title: "Add Property",
          description: "Import or add your properties with photos and documents.",
          time: "2 minutes",
          benefits: [
            "Bulk property import",
            "AI document scanning",
            "Automated organization"
          ]
        },
        step3: {
          title: "Manage Everything",
          description: "Monitor portfolio, tenants, and finances from one dashboard.",
          time: "Immediate",
          benefits: [
            "Real-time analytics",
            "Automated workflows",
            "Mobile access"
          ]
        }
      },
      activeStep: {
        step: (step: number, total: number) => `Step ${step} of ${total}`,
        tryButton: (stepTitle: string) => `Try ${stepTitle}`
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Join thousands of property owners who've transformed their management with X'Immo.",
        buttons: {
          startTrial: "Start Free Trial",
          watchDemo: "Watch Full Demo"
        },
        trustIndicators: {
          noCard: "No credit card required",
          freeTrial: "Free 30-day trial",
          setupMinutes: "Setup in minutes"
        }
      }
    },
    
    contact: {
      title: "Contact Us",
      subtitle: "Have questions? We'd love to hear from you.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
      successMessage: "Thank you! We'll get back to you soon.",
      successNote: "We'll get back within 24 hours.",
      stats: {
        happyClients: "Happy Clients",
        uptime: "Uptime %",
        hourResponse: "Hour Response",
        properties: "K+ Properties"
      },
      info: {
        email: {
          title: "Email",
          lines: ["contact@ximmo.com", "support@ximmo.com"]
        },
        phone: {
          title: "Phone",
          lines: ["+1 (555) 123-4567", "Mon–Fri, 9am–6pm"]
        },
        office: {
          title: "Office",
          lines: ["123 Property Street", "New York, USA"]
        }
      }
    },
    about: {
      hero: {
        badge: "X'Immo Platform",
        titleLine1: "Property Management",
        titleLine2: "Simplified",
        description: "Intuitive tools that help landlords manage properties efficiently.",
        buttons: {
          startTrial: "Start Free Trial",
          watchDemo: "Watch Demo"
        }
      },
      stats: {
        properties: "Properties",
        uptime: "Uptime",
        timeSaved: "Time Saved",
        landlords: "Landlords"
      },
      sections: {
        mission: {
          title: "Our Mission",
          description: "Simplifying property management for modern landlords.",
          content: "We build intuitive tools that transform how landlords manage their properties.",
          details: [
            "Unified platform for all properties",
            "AI-powered automation",
            "Mobile-first experience"
          ]
        },
        problem: {
          title: "What We Solve",
          description: "Ending the chaos of scattered tools and manual work.",
          content: "We consolidate everything into one seamless platform.",
          details: [
            "No more spreadsheet chaos",
            "Real-time financial tracking",
            "Organized tenant communication"
          ]
        },
        vision: {
          title: "Our Vision",
          description: "The future of property management is here.",
          content: "Making property management accessible and profitable for everyone.",
          details: [
            "Global standard platform",
            "Data-driven insights",
            "Community-focused tools"
          ]
        }
      },
      features: {
        propertyDashboard: {
          title: "Property Dashboard",
          description: "Centralized view of your entire portfolio"
        },
        financialTracking: {
          title: "Financial Tracking",
          description: "Real-time rent and expense monitoring"
        },
        tenantPortal: {
          title: "Tenant Portal",
          description: "Seamless communication and document sharing"
        },
        automation: {
          title: "Automation",
          description: "Smart reminders and workflow automation"
        }
      },
      benefits: {
        title: "Why Choose X'Immo",
        saveTime: {
          title: "Save Time",
          description: "Reduce administrative work with automated workflows."
        },
        growPortfolio: {
          title: "Grow Your Portfolio",
          description: "Make data-driven decisions with real-time insights."
        },
        enterpriseSecurity: {
          title: "Enterprise Security",
          description: "Bank-level encryption and 99.9% uptime guarantee."
        },
        trustedPlatform: {
          title: "Trusted Platform",
          description: "Join hundreds of property owners using X'Immo.",
          benefits: [
            "Free 30-day trial",
            "No credit card required",
            "24/7 support"
          ]
        }
      },
      cta: {
        title: "Ready to get started?",
        description: "Join forward-thinking landlords saving time with X'Immo.",
        buttons: {
          startTrial: "Start Free Trial",
          scheduleDemo: "Schedule Demo"
        }
      }
    },
  
   footer: {
      brand: {
        name: "X'Immo",
        description: "Smart, simple property management built for modern landlords."
      },
      sections: {
        platform: "Platform",
        company: "Company",
        contact: "Contact"
      },
      links: {
        home: "Home",
        features: "Features", 
        howItWorks: "How It Works",
        about: "About",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        terms: "Terms",
        privacy: "Privacy",
        cookies: "Cookies"
      },
      contactInfo: {
        address: "123 Business Park, Tech City, India",
        email: "support@ximmo.com",
        phone: "+1 (555) 123-4567"
      },
      legal: {
        copyright: (year: number) => `© ${year} X'Immo. All rights reserved.`
      },
      social: {
        twitter: "Twitter",
        linkedin: "LinkedIn", 
        facebook: "Facebook",
        instagram: "Instagram"
      }
    },
    
    chatbot: {
      title: 'Talk with our Chatbot',
      placeholder: 'Type your message...',
      send: 'Send',
      initialMessage: 'Hello! How can I help you today?',
      autoReply: 'Thank you for your message! Our team will get back to you soon.'
    },
  },
de: {
    nav: {
      home: 'Startseite',
      features: 'Funktionen',
      howItWorks: 'So funktioniert\'s',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    home: {
      hero: {
        trustedBy: "Vertrauen von über 500 Immobilienbesitzern",
        titleLine1: "Immobilienverwaltung",
        titleLine2: "Intelligent gemacht",
        description: "Alles, was Vermieter zur Verwaltung von Immobilien, Mietern und Finanzen benötigen — in einem eleganten Dashboard. Reduzieren Sie den Verwaltungsaufwand um 80 % durch KI-Automatisierung.",
        cta: {
          startTrial: "Kostenlose Testversion starten",
          scheduleDemo: "Demo vereinbaren"
        },
        trustIndicators: {
          uptime: "Betriebszeit",
          support: "Support",
          freeTrial: "Kostenlose Testversion"
        }
      },
      dashboard: {
        overview: "Dashboard-Übersicht",
        properties: "Immobilien",
        tenants: "Mieter",
        rentDue: "Fällige Miete",
        openTickets: "Offene Tickets",
        revenueTrend: "Umsatztrend",
        recentActivity: "Letzte Aktivität",
        rentPaidUnit: (unit: string) => `Miete bezahlt - Einheit ${unit}`,
        maintenanceUnit: (unit: string) => `Wartung - Einheit ${unit}`,
        hoursAgo: (hours: number) => `vor ${hours} Stunden`,
        daysAgo: (days: number) => `vor ${days} Tag`,
        inProgress: "In Bearbeitung",
        systemOnline: "System Online",
        aiInsightsActive: "KI-Einblicke aktiv",
        aiAutomation: "KI-Automatisierung",
        liveAnalytics: "Live-Analyse",
        propertyManagement: "Immobilienverwaltung",
        tenantManagement: "Mieterverwaltung",
        financialTracking: "Finanzverfolgung",
        propertyDescription: "Komplette Kontrolle über Ihr Immobilienportfolio",
        tenantDescription: "Optimierte Mieterverwaltung",
        financialDescription: "Echtzeit-Finanzdaten"
      }
    },
    // THESE WERE OUTSIDE THE de OBJECT - MOVED THEM INSIDE:
   features: {
      header: {
        badge: "Komplettes Immobilien",
        titleLine2: "Verwaltungssuite",
        description: "Alles, was Vermieter benötigen, in einer vereinheitlichten Plattform. Keine Kompromisse."
      },
      featuresList: {
        propertyManagement: {
          title: "Immobilienverwaltung",
          description: "Komplettes digitales Portfolio-Management mit Fotos, Dokumenten und Analysen.",
          stats: "95 % weniger Papierarbeit",
          details: [
            "Unbegrenzte Fotos & Videos",
            "Digitale Immobilienprofile",
            "Wartungshistorie",
            "Automatisierte Bewertung"
          ]
        },
        tenantManagement: {
          title: "Mieterverwaltung",
          description: "Optimierte Mieterprozesse von der Überprüfung bis zum Auszug.",
          stats: "40 % schnellere Einarbeitung",
          details: [
            "KI-Mieterüberprüfung",
            "Digitale Mietverträge",
            "Kommunikations-Hub",
            "Automatisierte Erinnerungen"
          ]
        },
        rentTracker: {
          title: "Mietnachverfolgung",
          description: "Echtzeit-Finanzüberwachung mit automatischem Einzug.",
          stats: "99,8 % pünktliche Zahlungen",
          details: [
            "Automatischer Mieteinzug",
            "Verspätungsgebühren-Tracking",
            "Ausgabenberichte",
            "Steuervorbereitung"
          ]
        },
        maintenance: {
          title: "Wartung",
          description: "Intelligente Workflows, die Mieter mit geprüften Anbietern verbinden.",
          stats: "60 % schnellere Lösung",
          details: [
            "Prioritäts-Tickets",
            "Foto-Anhänge",
            "Anbieter-Portal",
            "Kostenverfolgung"
          ]
        },
        documents: {
          title: "Dokumente",
          description: "Sichere, organisierte Verwaltung mit KI-Kategorisierung.",
          stats: "Banken-Level-Verschlüsselung",
          details: [
            "Unbegrenzter Speicher",
            "KI-Kategorisierung",
            "Digitale Signaturen",
            "Ablaufalarme"
          ]
        },
        smartDashboard: {
          title: "Smart Dashboard",
          description: "Management-Einblicke mit Echtzeit-Analysen.",
          stats: "Echtzeit-Intelligenz",
          details: [
            "Benutzerdefinierte KPIs",
            "Cashflow-Analyse",
            "Portfolio-Metriken",
            "Mobil optimiert"
          ]
        }
      },
      badges: {
        aiAutomation: "KI-Automatisierung",
        liveAnalytics: "Live-Analyse",
        bankGradeSecurity: "Banken-Sicherheit"
      },
      stats: {
        properties: "Immobilien",
        uptime: "Betriebszeit",
        support: "Support"
      },
      detailCard: {
        exploreButton: (featureTitle: string) => `${featureTitle} erkunden`
      },
      cta: {
        title: "Bereit, Ihre Abläufe zu optimieren?",
        subtitle: "Starten Sie Ihre kostenlose 30-Tage-Testversion. Keine Kreditkarte erforderlich.",
        buttons: {
          startTrial: "Kostenlose Testversion starten",
          scheduleDemo: "Demo vereinbaren"
        }
      }
    },
    howItWorks: {
      header: {
        badge: "In Minuten starten",
        title: "Einfache Einrichtung, mächtige Ergebnisse",
        description: "Gehen Sie von Null auf vollständige Immobilienverwaltung in nur drei einfachen Schritten."
      },
      timeline: {
        totalTime: "Gesamtzeit: Weniger als 3 Minuten"
      },
      steps: {
        step1: {
          title: "Anmelden",
          description: "Erstellen Sie Ihr Konto in Sekunden mit nur Ihrer E-Mail.",
          time: "30 Sekunden",
          benefits: [
            "Keine Kreditkarte erforderlich",
            "Kostenlose 30-Tage-Testversion",
            "Sofortiger Zugang"
          ]
        },
        step2: {
          title: "Immobilie hinzufügen",
          description: "Importieren oder fügen Sie Ihre Immobilien mit Fotos und Dokumenten hinzu.",
          time: "2 Minuten",
          benefits: [
            "Massenimport von Immobilien",
            "KI-Dokumenten-Scanning",
            "Automatisierte Organisation"
          ]
        },
        step3: {
          title: "Alles verwalten",
          description: "Überwachen Sie Portfolio, Mieter und Finanzen von einem Dashboard aus.",
          time: "Sofort",
          benefits: [
            "Echtzeit-Analysen",
            "Automatisierte Workflows",
            "Mobiler Zugriff"
          ]
        }
      },
      activeStep: {
        step: (step: number, total: number) => `Schritt ${step} von ${total}`,
        tryButton: (stepTitle: string) => `${stepTitle} ausprobieren`
      },
      cta: {
        title: "Bereit zu starten?",
        description: "Treten Sie Tausenden von Immobilienbesitzern bei, die ihre Verwaltung mit X'Immo transformiert haben.",
        buttons: {
          startTrial: "Kostenlose Testversion starten",
          watchDemo: "Komplette Demo ansehen"
        },
        trustIndicators: {
          noCard: "Keine Kreditkarte erforderlich",
          freeTrial: "Kostenlose 30-Tage-Testversion",
          setupMinutes: "Einrichtung in Minuten"
        }
      }
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Haben Sie Fragen? Wir würden uns freuen, von Ihnen zu hören.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      submitButton: "Nachricht senden",
      successMessage: "Vielen Dank! Wir werden uns bald bei Ihnen melden.",
      successNote: "Wir melden uns innerhalb von 24 Stunden.",
      stats: {
        happyClients: "Zufriedene Kunden",
        uptime: "Betriebszeit %",
        hourResponse: "Stunden Antwortzeit",
        properties: "Tausend+ Immobilien"
      },
      info: {
        email: {
          title: "E-Mail",
          lines: ["kontakt@ximmo.com", "support@ximmo.com"]
        },
        phone: {
          title: "Telefon",
          lines: ["+49 (0) 30 1234567", "Mo–Fr, 9–18 Uhr"]
        },
        office: {
          title: "Büro",
          lines: ["Immobilienstraße 123", "Berlin, Deutschland"]
        }
      }
    },
   about: {
      hero: {
        badge: "X'Immo Plattform",
        titleLine1: "Immobilienverwaltung",
        titleLine2: "Vereinfacht",
        description: "Intuitive Tools, die Vermietern helfen, Immobilien effizient zu verwalten.",
        buttons: {
          startTrial: "Kostenlose Testversion starten",
          watchDemo: "Demo ansehen"
        }
      },
      stats: {
        properties: "Immobilien",
        uptime: "Betriebszeit",
        timeSaved: "Zeitersparnis",
        landlords: "Vermieter"
      },
      sections: {
        mission: {
          title: "Unsere Mission",
          description: "Immobilienverwaltung für moderne Vermieter vereinfachen.",
          content: "Wir entwickeln intuitive Tools, die die Art und Weise verändern, wie Vermieter ihre Immobilien verwalten.",
          details: [
            "Vereinheitlichte Plattform für alle Immobilien",
            "KI-gestützte Automatisierung",
            "Mobile-first-Erlebnis"
          ]
        },
        problem: {
          title: "Was wir lösen",
          description: "Beendet das Chaos verstreuter Tools und manueller Arbeit.",
          content: "Wir konsolidieren alles in eine nahtlose Plattform.",
          details: [
            "Kein Tabellenkalkulations-Chaos mehr",
            "Echtzeit-Finanzverfolgung",
            "Organisierte Mieterkommunikation"
          ]
        },
        vision: {
          title: "Unsere Vision",
          description: "Die Zukunft der Immobilienverwaltung ist hier.",
          content: "Immobilienverwaltung für jeden zugänglich und profitabel machen.",
          details: [
            "Globale Standardplattform",
            "Datengetriebene Einblicke",
            "Community-fokussierte Tools"
          ]
        }
      },
      features: {
        propertyDashboard: {
          title: "Immobilien-Dashboard",
          description: "Zentralisierte Ansicht Ihres gesamten Portfolios"
        },
        financialTracking: {
          title: "Finanzverfolgung",
          description: "Echtzeit-Miete und Ausgabenüberwachung"
        },
        tenantPortal: {
          title: "Mieter-Portal",
          description: "Nahtlose Kommunikation und Dokumentenaustausch"
        },
        automation: {
          title: "Automatisierung",
          description: "Intelligente Erinnerungen und Workflow-Automatisierung"
        }
      },
      benefits: {
        title: "Warum X'Immo wählen",
        saveTime: {
          title: "Zeit sparen",
          description: "Reduzieren Sie Verwaltungsarbeit mit automatisierten Workflows."
        },
        growPortfolio: {
          title: "Portfolio erweitern",
          description: "Treffen Sie datengesteuerte Entscheidungen mit Echtzeit-Einblicken."
        },
        enterpriseSecurity: {
          title: "Unternehmenssicherheit",
          description: "Banken-Level-Verschlüsselung und 99,9 % Betriebszeitgarantie."
        },
        trustedPlatform: {
          title: "Vertrauenswürdige Plattform",
          description: "Schließen Sie sich Hunderten von Immobilienbesitzern an, die X'Immo nutzen.",
          benefits: [
            "Kostenlose 30-Tage-Testversion",
            "Keine Kreditkarte erforderlich",
            "24/7 Support"
          ]
        }
      },
      cta: {
        title: "Bereit zu starten?",
        description: "Schließen Sie sich vorausdenkenden Vermietern an, die mit X'Immo Zeit sparen.",
        buttons: {
          startTrial: "Kostenlose Testversion starten",
          scheduleDemo: "Demo vereinbaren"
        }
      }
    },
   footer: {
      brand: {
        name: "X'Immo",
        description: "Intelligentes, einfaches Immobilienmanagement für moderne Vermieter."
      },
      sections: {
        platform: "Plattform",
        company: "Unternehmen",
        contact: "Kontakt"
      },
      links: {
        home: "Startseite",
        features: "Funktionen", 
        howItWorks: "So funktioniert's",
        about: "Über uns",
        contact: "Kontakt",
        privacyPolicy: "Datenschutzrichtlinie",
        terms: "AGB",
        privacy: "Datenschutz",
        cookies: "Cookies"
      },
      contactInfo: {
        address: "123 Business Park, Tech City, Indien",
        email: "support@ximmo.com",
        phone: "+49 (0) 30 1234567"
      },
      legal: {
        copyright: (year: number) => `© ${year} X'Immo. Alle Rechte vorbehalten.`
      },
      social: {
        twitter: "Twitter",
        linkedin: "LinkedIn", 
        facebook: "Facebook",
        instagram: "Instagram"
      }
    },
    
    chatbot: {
      title: 'Sprechen Sie mit unserem Chatbot',
      placeholder: 'Geben Sie Ihre Nachricht ein...',
      send: 'Senden',
      initialMessage: 'Hallo! Wie kann ich Ihnen heute helfen?',
      autoReply: 'Vielen Dank für Ihre Nachricht! Unser Team wird sich bald bei Ihnen melden.'
    },
  },
};

export type Language = 'en' | 'de';