import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-black-950 via-oxford-blue-800 to-electric-violet-900 text-white p-6 sm:p-8 rounded-t-3xl shadow-2xl mt-8">
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        <section className="flex flex-col md:flex-row items-center justify-center mb-10">
          <section className="mb-4 md:mb-0">
            <img src="/imagen.jpg" alt="foto footer" className="w-32 h-32 rounded-full border-4 border-electric-violet-400 shadow-lg" />
          </section>
          <section className="flex flex-col items-center md:items-start md:ml-8">
            <h2 className="text-xl font-bold mb-1 text-electric-violet-400">{t('contact')}</h2>
            <section className="flex mt-4 mb-3 gap-2">
              <a href="https://www.facebook.com/edisonstiven.narvaezpaz" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-electric-violet-400 transition" />
              </a>
              <a href="https://www.instagram.com/edisonnarvaez176/?hl=es" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-electric-violet-400 transition" />
              </a>
              <a href="enlace de tu Whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl hover:text-electric-violet-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/edison-stiven-narvaez-a66abb26a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-electric-violet-400 transition" />
              </a>
            </section>
            <p className="text-white/80">{t('footerT')}:  +57 3174980971</p>
            <p className="text-white/80">{t('footerC')}:    Pasto - Colombia</p>
            <p className="text-white/80">{t('footerE')}: stiven.98020@gmail.com</p>
          </section>
        </section>
        <section className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4 text-electric-violet-400">{t('footerM')}</h2>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#beginning">{t('beginning')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#about">{t('about')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#interests">{t('interests')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#projects">{t('projects')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#skills">{t('skills')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#experience">{t('experience')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#studies">{t('studies')}</a>
            </li>
            <li>
              <a className="hover:text-electric-violet-400 transition" href="#contact">{t('contact')}</a>
            </li>
          </ul>
          <ul className="space-y-2 text-center md:text-left">
            <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">{t('interestsItem1')}</li>
            <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">{t('interestsItem2')}</li>
            <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">{t('interestsItem3')}</li>
          </ul>
        </section>
      </section>
      <span className="flex justify-center mt-6 text-white/60 text-sm">
        © 2023 Edison Stiven Narvaez Paz
      </span>
    </footer>
  );
};

export default Footer;

