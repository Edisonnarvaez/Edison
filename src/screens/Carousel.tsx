

import {FaGithub} from 'react-icons/fa6';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        
        <img src="./public/slide1.jpg" alt="Slide 1" />
        <section className="flex-1 grid grid-flow-row-[25px_40_px] items-center text-white p-4">
          <h2 className='text-4xl font-roboto flex justify-center text-electric-violet-700'>Patrones De Software</h2>
          <p className="flex justify-center">En este repositorio se encuentran varios proyectos en java cuyo propósito es la implementación de patrones de software.</p>
          <li>
            <button className='flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700'><FaGithub className='mr-2' /><span className='text-black'>Github</span></button>
          </li>
        </section>
      </div>
      <div>
        
        <img src="./public/slide2.jpg" alt="Slide 2" />
        <section className="flex-1 grid grid-flow-row-[25px_40_px] items-center text-white p-4">
          <h2 className='text-4xl font-roboto flex justify-center text-electric-violet-700'>Desarrollo web</h2>
          <p className="flex justify-center">En este repositorio se encuentran varios ejercicios de lógica de programación en Python</p>
          <li>
            <button className='flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700'><FaGithub className='mr-2' /><span className='text-black'>Github</span></button>
          </li>
        </section>
      </div>
      <div>
        
        <img src="./public/slide3.jpg" alt="Slide 3" />
        <section className="flex-1 grid grid-flow-row-[25px_40_px] items-center text-white p-4">
          <h2 className='text-4xl font-roboto flex justify-center text-electric-violet-700'>Portafolio</h2>
          <p className="flex justify-center">En este repositorio encontrara el codigo del portafolio utilizando Vite + Tailwind</p>
          <li>
            <button className='flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700'><FaGithub className='mr-2' /><span className='text-black'>Github</span></button>
          </li>
        </section>
      </div>
      
    </Slider>
  );
};

export default Carousel;
