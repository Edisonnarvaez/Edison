
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
    alt='Descripción de la imagen'
    className='w-full h-full object-cover absolute top-0 left-0 z-0'
  />
  <section className='flex-1 relative z-10 p-10'>
    <h1 className='text-6xl font-bold text-electric-violet-600'>Edison Stiven </h1>
    <h1 className='text-2xl font-bold text-electric-violet-600'>Narvaez Paz</h1>
    <ul className='flex p-2'>
      <li className='flex items-center text-black-950 bg-white p-2 rounded'>
        <FaFacebook className='mr-2' />
        <span className='text-black'></span>
      </li>
      <li className='flex items-center text-black-950 bg-white p-2 rounded'>
        <FaInstagram className='mr-2' />
        <span className='text-black'></span>
      </li>
      <li className='flex items-center text-black-950 bg-white p-2 rounded'>
        <FaWhatsapp className='mr-2' />
        <span className='text-black'></span>
      </li>
      <li className='flex items-center text-black-950 bg-white p-2 rounded'>
        <FaLinkedin className='mr-2' />
        <span className='text-black'></span>
      </li>
    </ul>
  </section>
</section>

    </section>
  );
};

export default Beginning;

