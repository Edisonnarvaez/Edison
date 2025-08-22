import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCode, FaHeart, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '/src/i18n.ts';

const socialLinks = [
  { icon: FaFacebook, url: 'https://www.facebook.com/edisonstiven.narvaezpaz', color: 'hover:text-blue-500', name: 'Facebook' },
  { icon: FaInstagram, url: 'https://www.instagram.com/edisonnarvaez176/?hl=es', color: 'hover:text-pink-500', name: 'Instagram' },
  { icon: FaWhatsapp, url: 'https://wa.me/573174980971', color: 'hover:text-green-500', name: 'WhatsApp' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/edison-stiven-narvaez-a66abb26a/', color: 'hover:text-blue-400', name: 'LinkedIn' }
];

const contactInfo = [
  { icon: FaPhone, text: '+57 317 498 0971', key: 'footerT' },
  { icon: FaMapMarkerAlt, text: 'Pasto, Nariño - Colombia', key: 'footerC' },
  { icon: FaEnvelope, text: 'stiven.98020@gmail.com', key: 'footerE' }
];

const quickLinks = [
  'beginning', 'about', 'interests', 'projects'
];

const moreLinks = [
  'skills', 'experience', 'studies', 'contact'
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={ref}
      className={`relative bg-gradient-to-br from-black-950 via-oxford-blue-800 to-electric-violet-900 text-white mt-8 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-electric-violet-400 to-transparent"></div>
      
      <div className="p-6 sm:p-8 lg:p-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Profile Section - Mejorada */}
          <section className="lg:col-span-1 flex flex-col items-center text-center animate-fade-in-up animate-delay-200">
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src="/imagen.jpg" 
                alt="Edison Stiven Narvaez" 
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-electric-violet-400 shadow-xl transition-all duration-300 group-hover:scale-110 object-cover" 
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 bg-clip-text text-transparent">
              Edison Stiven
            </h3>
            <p className="text-white/70 text-sm mb-4">Software Engineer</p>
            
            {/* Social Links - Mejorado */}
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    title={social.name}
                  >
                    <IconComponent className="text-lg" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
          
          {/* Contact Info */}
          <section className="animate-fade-in-up animate-delay-300">
            <h3 className="text-lg font-bold mb-4 text-electric-violet-400 flex items-center gap-2">
              <FaPhone className="text-sm" />
              {t('contact')}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.key} className="flex items-center gap-3 text-white/80 hover:text-electric-violet-400 transition-colors group">
                    <div className="p-2 bg-electric-violet-400/20 rounded-lg group-hover:bg-electric-violet-400/30 transition-colors">
                      <IconComponent className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">{t(info.key)}</p>
                      <p className="text-sm font-medium">{info.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          
          {/* Quick Links */}
          <section className="animate-fade-in-up animate-delay-400">
            <h3 className="text-lg font-bold mb-4 text-electric-violet-400 flex items-center gap-2">
              <FaCode className="text-sm" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={item} className={`animate-fade-in-up animate-delay-${(index + 8) * 50}`}>
                  <a 
                    className="text-white/70 hover:text-electric-violet-400 transition-all duration-300 relative group text-sm flex items-center gap-2" 
                    href={`#${item}`}
                  >
                    <span className="w-1 h-1 bg-electric-violet-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    {t(item)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-violet-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* More Links */}
          <section className="animate-fade-in-up animate-delay-500">
            <h3 className="text-lg font-bold mb-4 text-electric-violet-400 flex items-center gap-2">
              <FaHeart className="text-sm" />
              Más Información
            </h3>
            <ul className="space-y-2">
              {moreLinks.map((item, index) => (
                <li key={item} className={`animate-fade-in-up animate-delay-${(index + 12) * 50}`}>
                  <a 
                    className="text-white/70 hover:text-electric-violet-400 transition-all duration-300 relative group text-sm flex items-center gap-2" 
                    href={`#${item}`}
                  >
                    <span className="w-1 h-1 bg-electric-violet-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    {t(item)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-violet-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-electric-violet-600 hover:bg-electric-violet-700 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium group"
            >
              <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
              Volver arriba
            </button>
          </section>
        </section>
        
        {/* Stats Section */}
        <div className="border-t border-white/10 mt-8 pt-6 animate-fade-in-up animate-delay-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-electric-violet-400">5+</div>
              <div className="text-xs text-white/60">Años de Experiencia</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-electric-violet-400">10+</div>
              <div className="text-xs text-white/60">Tecnologías</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-electric-violet-400">3+</div>
              <div className="text-xs text-white/60">Proyectos</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-electric-violet-400">100%</div>
              <div className="text-xs text-white/60">Dedicación</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center animate-fade-in-up animate-delay-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/60 text-sm">
              © {new Date().getFullYear()} Edison Stiven Narvaez Paz. Todos los derechos reservados.
            </span>
            <span className="text-white/60 text-sm flex items-center gap-1">
              Hecho con <FaHeart className="text-red-500 animate-pulse" /> usando React + Vite + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

