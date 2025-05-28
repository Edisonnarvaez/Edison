import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';

const Beginning = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[600px] bg-black-950 overflow-hidden">
      {/* Imagen de portada como fondo */}
      <img
        src="/portada.jpg"
        alt="Imagen de portada"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Contenido principal */}
      <section className="relative z-10 flex flex-col items-center justify-center p-10 bg-black-950/70 rounded-xl shadow-lg">
        <h1 className="text-6xl font-bold text-electric-violet-600">Edison Stiven</h1>
        <h2 className="text-2xl font-bold text-electric-violet-600">Narvaez Paz</h2>
        <section className="flex mt-4 mb-3">
          <a href="https://www.facebook.com/edisonstiven.narvaezpaz" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl mx-2" />
          </a>
          <a href="https://www.instagram.com/edisonnarvaez176/?hl=es" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl mx-2" />
          </a>
          <a href="enlace de tu Whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl mx-2" />
          </a>
          <a href="https://www.linkedin.com/in/edison-stiven-narvaez-a66abb26a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl mx-2" />
          </a>
        </section>
      </section>
    </section>
  );
};

export default Beginning;

