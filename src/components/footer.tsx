import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">

      <section className='flex flex-col-2 justify-center'>
        <section className="flex flex-col md:flex-row items-center justify-center mb-14">
          {/* Sección de la foto en la izquierda */}
          <section className="mb-4 md:mb-0">
            <img src="./public/imagen.jpg" alt="foto footer" className="w-40 h-40 rounded-full" />
          </section>

          {/* Sección de datos de contacto y redes sociales */}
          <section className="flex flex-col items-center md:items-start md:mr-16">
            <h2 className="text-2xl font-bold mb-1">Contacto</h2>
            

            {/* Logos de redes sociales con enlaces */}
            <section className="flex mt-4 mb-3">
              <a href="enlace de tu Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl mx-2" />
              </a>
              <a href="enlace de tu Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl mx-2" />
              </a>
              <a href="enlace de tu Whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl mx-2" />
              </a>
              <a href="enlace de tu Linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl mx-2" />
              </a>
            </section>

            <p>Teléfono:  +57 3174980971</p>
            <p>Ciudad:    Pasto - Colombia</p>
            <p>Correo Electrónico: stiven.98020@gmail.com</p>

          </section>
          
        </section>

        
        <section className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Mapa del Sitio</h2>
          <ul className="flex-col lg:flex-row md:flex-col lg:flex-wrap">
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#beginning">Beginning</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#about">About</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Interests">Interests</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Projects">Projects</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Skills">Skills</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Experience">Experience</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Studies">Studies</a>
            </li>
            <li className="lg:w-1/4 md:w-full mx-2 mb-2">
              <a href="#Contact">Contact</a>
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

