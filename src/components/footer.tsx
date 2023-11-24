import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white p-8">

      <section className='flex flex-col-2 justify-center'>
        <section className="flex flex-col md:flex-row items-center justify-center mb-14">
          {/* Sección de la foto en la izquierda */}
          <section className="mb-4 md:mb-0">
            <img src="/imagen.jpg" alt="foto footer" className="w-40 h-40 rounded-full" />
          </section>

          {/* Sección de datos de contacto y redes sociales */}
          <section className="flex flex-col items-center md:items-start md:mr-16">
            <h2 className="text-2xl font-bold mb-1">{t('contact')}</h2>
            

            {/* Logos de redes sociales con enlaces */}
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

            <p>{t('footerT')}:  +57 3174980971</p>
            <p>{t('footerC')}:    Pasto - Colombia</p>
            <p>{t('footerE')}: stiven.98020@gmail.com</p>

          </section>
          
        </section>

        
        <section className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">{t('footerM')}</h2>
          <ul className="flex-col lg:flex-row md:flex-col lg:flex-wrap">
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#beginning">{t('beginning')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#about">{t('about')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Interests">{t('interests')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Projects">{t('projects')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Skills">{t('skills')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Experience">{t('experience')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Studies">{t('studies')}</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Contact">{t('contact')}</a>
            </li>
          </ul>
        </section>

      </section>
      <span className='flex justify-center'>
        © 2023 Edson Stiven Narvaez Paz
      </span>
    </footer>
  );
};

export default Footer;

