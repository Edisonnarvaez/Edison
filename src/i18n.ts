import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',

        aboutTitle: "About Me",
        aboutDescription: "I am a software engineer passionate about tackling challenges with experience in the healthcare sector and the development of technological solutions that comply with the regulatory standards of healthcare providers.",

        beginning: "Beginning",
        about: "About",
        interests: "Interests",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        studies: "Studies",
        contact: "Contact",
        downloadCV: "Download CV",

        interestsTitle: "Interests",
        interestsDescription: "My interests revolve around the pursuit of learning more about technology and understanding and implementing all the benefits it can offer. I enjoy exploring new ways to enhance efficiency and relish the process.",

        slide1: "Software Patterns",
        slide1D: "In this repository, you will find several Java projects aimed at implementing software patterns.",
        slide2: "Python Development Exercises",
        slide2D: "This repository contains various programming logic exercises in Python.",
        slide3: "Portfolio",
        slide3D: "In this repository, you will find the code for the portfolio using Vite + Tailwind.",

        slide4: "Red Medicron IPS - Backend",
        slide4D: "Web application developed with Django and PostgreSQL to manage institutional processes, indicators, users, and roles, featuring JWT and OTP for two-factor authentication.",

        slide5: "Red Medicron IPS - Frontend",
        slide5D: "Web interface developed with React, Vite, Tailwind, and TypeScript to display institutional information, processes, indicators, and interactive dashboards.",

        slide6: "Red Medicron IPS Website",
        slide6D: "Institutional website developed with React, Vite, TypeScript, and Tailwind to present general information about the IPS and improve user communication.",

        slide7: "Clínica Norte Especialidades SAS Website",
        slide7D: "Institutional website developed with React, Vite, TypeScript, and Tailwind for Clínica Norte Especialidades SAS.",

        slide8: "DataInd - Backend",
        slide8D: "Backend application built with Django and PostgreSQL for health indicators management, two-step authentication (JWT + OTP), and results tracking for analysis.",

        slide9: "DataInd - Frontend",
        slide9D: "Frontend application built with React, Vite, Tailwind, and TypeScript to manage and visualize health indicators with dashboards and interactive charts.",

        slide10: "Encryptor",
        slide10D: "Desktop application in Python with Cryptography and Tkinterdnd2 that encrypts multiple documents using public keys, displays encryption progress, and generates ZIP files.",


        experience1t: "IT Professional",
        experience1d: "Nov 2024 - Present",
        experience1: "Currently working as an IT Professional at Red Medicron IPS, where I am responsible for implementing new technologies to strengthen infrastructure and optimize internal processes. I develop and maintain web applications using Python (Django) and React, automate processes with n8n, and manage relational and non-relational databases (PostgreSQL, SQL Server, MongoDB). I also prepare technical process documentation, manage projects in GitLab, and provide specialized support for adopting new digital tools.",

        experience2t: "Information Professional",
        experience2d: "Feb 2023 - Oct 2024",
        experience2: "At Red Medicron IPS, I worked as an Information Professional in the Quality Department. I managed and analyzed data for regulatory reports, administered databases (PostgreSQL and SQL Server), designed Power BI dashboards to support decision-making, and integrated data ensuring quality and compliance with institutional and regulatory requirements.",

        experience3t: "Payroll Professional",
        experience3d: "Dec 2022 - Feb 2023",
        experience3: "At Red Medicron IPS, I worked as a Payroll Professional in the Human Resources Department. I was responsible for recording employee updates (sick leaves, permissions, overtime, deductions), managing hiring and contract settlements, and preparing payroll and social benefits files, ensuring accuracy and compliance with regulations.",

        experience4t: "Information Technician",
        experience4d: "May 2019 - Dec 2022",
        experience4: "I worked as an Information Technician in the Quality Department of Red Medicron IPS. I generated regulatory reports for external entities, performed queries in PostgreSQL databases, and developed Power BI dashboards to support institutional management and present internal information.",

        experience0: "Experience",

        footerT: "Phone",
        footerC: "City",
        footerE: "Email",
        footerM: "Site Map",

        studies1: "Technical Automotive Technician",
        studies2: "Systems Technician",
        studies3: "Software Engineer",

        beginningSubtitle: "Software Engineer | Passionate about technology",

        interestsItem1: "Learning new technologies",
        interestsItem2: "Process optimization",
        interestsItem3: "Software development",

        // Nuevas traducciones para Contact con teléfono
        getInTouch: "Get in Touch!",
        contactDescription: "I'd love to hear about your project. Send me a message and I'll respond as soon as possible.",
        responseTime: "Response within 24 hours",
        name: "Name",
        email: "Email",
        phone: "Phone",  // ✅ Nueva traducción
        message: "Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+1 (555) 123-4567",  // ✅ Nueva traducción
        messagePlaceholder: "Tell me about your project...",
        sendMessage: "Send Message",
        sending: "Sending...",
        messageSent: "Message sent successfully!",
        messageError: "Error sending message. Please try again.",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email is not valid",
        phoneRequired: "Phone is required",  // ✅ Nueva traducción
        phoneInvalid: "Phone number is not valid",  // ✅ Nueva traducción
        messageRequired: "Message is required",
        messageMinLength: "Message must be at least 10 characters",
        viewProject: "View Project"
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',

        aboutTitle: "Sobre Mí",
        aboutDescription: "Soy un ingeniero de software apasionado por la resolución de desafíos con experiencia en el sector de la salud y en el desarrollo de soluciones tecnológicas que cumplen con los estándares normativos de las IPS.",

        beginning: "Inicio",
        about: "Sobre Mí",
        interests: "Intereses",
        projects: "Proyectos",
        skills: "Habilidades",
        experience: "Experiencia",
        studies: "Estudios",
        contact: "Contacto",
        downloadCV: "Descargar CV",

        interestsTitle: "Intereses",
        interestsDescription: "Mis intereses se centran en la búsqueda de aprender mas sobre la tecnología  y saber e implementar todas las bondades que puede ofrecer. Me gusta explorar nuevas formas de mejorar la eficiencia y disfrutar del proceso.",

        slide1: "Patrones De Software",
        slide1D: "En este repositorio se encuentran varios proyectos en Java cuyo propósito es la implementación de patrones de software.",
        slide2: "Ejercicios de desarrollo en Python",
        slide2D: "En este repositorio se encuentran varios ejercicios de lógica de programación en Python",
        slide3: "Portafolio",
        slide3D: "En este repositorio encontrara el codigo del portafolio utilizando Vite + Tailwind",

        slide4: "Red Medicron IPS - Backend",
        slide4D: "Aplicativo web desarrollado en Django y PostgreSQL que gestiona procesos institucionales, indicadores, usuarios y roles con autenticación JWT y OTP para doble factor de seguridad.",

        slide5: "Red Medicron IPS - Frontend",
        slide5D: "Interfaz web desarrollada en React, Vite, Tailwind y TypeScript que permite la visualización de información institucional, procesos, indicadores y dashboards interactivos.",

        slide6: "Página Web Red Medicron IPS",
        slide6D: "Sitio institucional desarrollado en React con Vite, TypeScript y Tailwind que muestra información general de la IPS y facilita la comunicación con los usuarios.",

        slide7: "Página Web Clínica Norte Especialidades SAS",
        slide7D: "Página institucional desarrollada en React con Vite, TypeScript y Tailwind para la IPS Clínica Norte Especialidades SAS.",

        slide8: "DataInd - Backend",
        slide8D: "Aplicación backend en Django con PostgreSQL para la gestión de indicadores de salud, autenticación en dos pasos (JWT + OTP) y carga de resultados para análisis.",

        slide9: "DataInd - Frontend",
        slide9D: "Aplicación frontend en React, Vite, Tailwind y TypeScript que permite gestionar y visualizar indicadores de salud con dashboards y gráficas interactivas.",

        slide10: "Encryptor",
        slide10D: "Aplicación de escritorio en Python con Cryptography y Tkinterdnd2 que permite encriptar múltiples documentos con claves públicas, mostrar progreso de encriptación y generar archivos ZIP.",


        experience1t: "Profesional TI",
        experience1d: "nov 2024 - presente",
        experience1: "Actualmente me desempeño como Profesional TI en Red Medicron IPS, donde soy responsable de implementar nuevas tecnologías para fortalecer la infraestructura y optimizar procesos internos. Desarrollo y mantengo aplicaciones web con Python (Django) y React, además de automatizar procesos con n8n. Administro bases de datos relacionales y no relacionales (PostgreSQL, SQL Server, MongoDB). Elaboro documentación de procesos tecnológicos, gestiono proyectos en GitLab y brindo soporte especializado en nuevas herramientas digitales.",

        experience2t: "Profesional de Información",
        experience2d: "feb 2023 - oct 2024",
        experience2: "En Red Medicron IPS me desempeñé como Profesional de Información en el área de calidad. Gestioné y analicé información para reportes normativos a entes externos, administré bases de datos (PostgreSQL y SQL Server), diseñé tableros de control en Power BI para la toma de decisiones e integré datos asegurando la calidad de la información según requerimientos institucionales y regulatorios.",

        experience3t: "Profesional de Nómina",
        experience3d: "dic 2022 - feb 2023",
        experience3: "En Red Medicron IPS trabajé como Profesional de Nómina en el área de gestión humana. Fui responsable del registro de novedades del personal (incapacidades, permisos, horas extras, descuentos), de la contratación y liquidación de contratos laborales, y de la elaboración de archivos para el pago de nómina y prestaciones sociales garantizando exactitud y cumplimiento normativo.",

        experience4t: "Técnico de Información",
        experience4d: "may 2019 - dic 2022",
        experience4: "Me desempeñé como Técnico de Información en el área de calidad de Red Medicron IPS. Generé reportes normativos para entes externos, realicé consultas en bases de datos PostgreSQL y desarrollé tableros de control en Power BI para la gestión institucional y la presentación de información interna.",

        experience0: "Experiencia",

        footerT: "Teléfono",
        footerC: "Ciudad",
        footerE: "Correo Electrónico",
        footerM: "Mapa del Sitio",

        studies1: "Bachiller técnico automotriz",
        studies2: "Técnico de sistemas",
        studies3: "Ingeniero de software",

        beginningSubtitle: "Ingeniero de Software | Apasionado por la tecnología",

        interestsItem1: "Aprender nuevas tecnologías",
        interestsItem2: "Optimización de procesos",
        interestsItem3: "Desarrollo de software",

        // Nuevas traducciones para Contact con teléfono
        getInTouch: "¡Ponte en contacto!",
        contactDescription: "Me encantaría conocer tu proyecto. Envíame un mensaje y te responderé lo antes posible.",
        responseTime: "Respuesta en 24 horas",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",  // ✅ Nueva traducción
        message: "Mensaje",
        namePlaceholder: "Tu nombre completo",
        emailPlaceholder: "tu@email.com",
        phonePlaceholder: "+57 3001234567",  // ✅ Nueva traducción
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        sendMessage: "Enviar Mensaje",
        sending: "Enviando...",
        messageSent: "¡Mensaje enviado exitosamente!",
        messageError: "Error al enviar el mensaje. Inténtalo de nuevo.",
        nameRequired: "El nombre es requerido",
        emailRequired: "El email es requerido",
        emailInvalid: "El email no es válido",
        phoneRequired: "El teléfono es requerido",  // ✅ Nueva traducción
        phoneInvalid: "El número de teléfono no es válido",  // ✅ Nueva traducción
        messageRequired: "El mensaje es requerido",
        messageMinLength: "El mensaje debe tener al menos 10 caracteres",
        viewProject: "Ver proyecto"
      },
    },
  },
},
)
export default i18n;
