import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next'; // <-- Usa react-i18next

const Beginning = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center justify-center w-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-black-950 via-oxford-blue-800 to-electric-violet-900 overflow-hidden">
      {/* Imagen de portada como fondo */}
      <img
        src="/portada.jpg"
        alt="Imagen de portada"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none blur-sm"
      />
      {/* Glassmorphism Card */}
      <section className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 animate-fade-in w-[95vw] max-w-xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight text-center">
          Edison Stiven
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-electric-violet-400 mb-6 text-center">
          Narvaez Paz
        </h2>
        <section className="flex gap-4 mb-4 flex-wrap justify-center">
          <a href="https://www.facebook.com/edisonstiven.narvaezpaz" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl sm:text-3xl text-white hover:text-electric-violet-400 transition" />
          </a>
          <a href="https://www.instagram.com/edisonnarvaez176/?hl=es" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl sm:text-3xl text-white hover:text-electric-violet-400 transition" />
          </a>
          <a href="enlace de tu Whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl sm:text-3xl text-white hover:text-electric-violet-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/edison-stiven-narvaez-a66abb26a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl sm:text-3xl text-white hover:text-electric-violet-400 transition" />
          </a>
        </section>
        <span className="text-white/80 text-base sm:text-lg mt-2 text-center">
          {t('beginningSubtitle')}
        </span>
      </section>
    </section>
  );
};

export default Beginning;

