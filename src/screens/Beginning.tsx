
import {FaFacebook} from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

const Beginning = () => {
  return (
    <section className='flex items-center justify-center h-full w-full'>
      
    
      <section className='flex-1 relative'>
  <img
    src='./public/portada.jpg'
    alt='Imagen de portada'
    className='w-full h-full object-cover absolute top-0 left-0 z-0 rounded'
  />
  <section className='flex-1 relative z-10 p-10'>
    <h1 className='text-6xl font-bold text-electric-violet-600'>Edison Stiven </h1>
    <h1 className='text-2xl font-bold text-electric-violet-600'>Narvaez Paz</h1>
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
  </section>
</section>

  </section>
  );
};

export default Beginning;

