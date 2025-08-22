import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const socialLinks = [
  { 
    icon: FaFacebook, 
    url: 'https://www.facebook.com/edisonstiven.narvaezpaz',
    color: 'hover:text-blue-500',
    name: 'Facebook'
  },
  { 
    icon: FaInstagram, 
    url: 'https://www.instagram.com/edisonnarvaez176/?hl=es',
    color: 'hover:text-pink-500',
    name: 'Instagram'
  },
  { 
    icon: FaWhatsapp, 
    url: 'enlace de tu Whatsapp',
    color: 'hover:text-green-500',
    name: 'WhatsApp'
  },
  { 
    icon: FaLinkedin, 
    url: 'https://www.linkedin.com/in/edison-stiven-narvaez-a66abb26a/',
    color: 'hover:text-blue-400',
    name: 'LinkedIn'
  }
];

const Beginning = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <section className="relative flex items-center justify-center w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-br from-black-950 via-oxford-blue-800 to-electric-violet-900 overflow-hidden rounded-3xl">
      {/* Imagen de portada como fondo */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img
          src="/portada.jpg"
          alt="Imagen de portada"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-950/80 via-transparent to-black-950/40"></div>
      </div>
      
      {/* Elementos decorativos responsivos */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-electric-violet-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-electric-violet-500/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Glassmorphism Card */}
      <section 
        ref={ref}
        className={`relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 w-[90vw] max-w-2xl mx-4 transition-all duration-1000 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight text-center animate-fade-in-up">
          Edison Stiven
        </h1>
        
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-electric-violet-400 mb-6 text-center animate-fade-in-up animate-delay-200">
          Narvaez Paz
        </h2>
        
        <section className="flex gap-3 sm:gap-4 mb-4 flex-wrap justify-center animate-fade-in-up animate-delay-400">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div key={social.name} className="relative">
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block p-2 sm:p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color} animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <IconComponent className="text-xl sm:text-2xl md:text-3xl text-white transition-all duration-300" />
                </a>
                
                {/* Tooltip */}
                {hoveredSocial === social.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap animate-fade-in-up z-20 shadow-xl border border-white/20">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
        
        <span className="text-white/90 text-sm sm:text-base md:text-lg mt-2 text-center animate-fade-in-up animate-delay-600 px-4">
          {t('beginningSubtitle')}
        </span>
      </section>
    </section>
  );
};

export default Beginning;

