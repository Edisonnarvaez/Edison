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

        experience1: "At Medicron IPS, I currently work as an information professional, performing functions related to information management for external entities, normative reporting, querying relational databases in PostgreSQL, and integrating BI dashboards for internal reporting within the institution. This involves implementing Power BI for the presentation of reports.",
        experience1t: "Information Professional",
        experience1d: "Feb 2023 - Present",
        experience2: "At Medicron IPS, I worked as a payroll professional in the human resources management area, responsible for various functions such as recording personnel-related updates within the institution, including disabilities, permissions, overtime, deductions, among others. Additionally, I handled the hiring and termination processes, including the necessary documentation for payroll and other social benefits payments.",
        experience2t: "Payroll Professional",
        experience2d: "Dec 2022 - Feb 2023<",
        experience3: "At Medicron IPS, as an information technician, I performed functions related to information management for external entities, normative reporting, querying relational databases in PostgreSQL, and integrating BI dashboards for internal reporting within the institution. This involved implementing Power BI for the presentation of reports.",
        experience3t: "Information Technician",
        experience13: "May 2019 - Dec 2022",
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

        experience1: "En red medicron IPS me desempeño actualmente como profesional de informacion y desempeños funciones relacionadas al manejo de informacion a entes externos reportes normativos con sultas a bases de datos relacionales en postgresql e integracion de tableros BI para la presentacion de reportes a nivel interno de la institucion esto implementando power BI.",
        experience1t: "Profesional de informacion",
        experience1d: "Feb 2023 - Presente",
        experience2: "En red medicron IPS me desempeñe como profesional de nomina en el area de gestion humana encargado de realizar diferentes funciones tales como el registro de novedades del personal de la institucion tales como incapacidades, permisos , horas extras, descuentos entre otros, ademas de realizar la contratacion como liqudacion de contratos al personal y estar a cargo de realizar los archivos necesarios para el pago de nomina y de mas prestaciones sociales.",
        experience2t: "Profesional de nomina",
        experience2d: "Dic 2022 - Feb 2023<",
        experience3: "En red medicron IPS  como tecnico de informacion desempeñe funciones relacionadas al manejo de informacion a entes externos reportes normativos con sultas a bases de datos relacionales en postgresql e integracion de tableros BI para la presentacion de reportes a nivel interno de la institucion esto implementando power BI.",
        experience3t: "Tecnico de informacion",
        experience3d: "May 2019 - Dic 2022",
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
