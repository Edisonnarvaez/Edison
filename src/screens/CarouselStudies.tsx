import { FaGithub } from 'react-icons/fa6';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselStudies: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <section className="flex-1 h-[375px] justify-center p-2">
        <img src="./public/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">Patrones De Software</h2>
          <p className="flex item-center text-app-white">En este repositorio se encuentran varios proyectos en Java cuyo propósito es la implementación de patrones de software.</p>
          <section className="flex justify-center">
            <button className="flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700">
              <FaGithub className="mr-2" />
              <span className="text-black">Github</span>
            </button>
        </section>
      </section>

      <section className="flex-1 h-[375px] justify-center p-2">
        <img src="./public/slide1.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">Patrones De Software</h2>
          <p className="flex item-center text-app-white">En este repositorio se encuentran varios proyectos en Java cuyo propósito es la implementación de patrones de software.</p>
          <section className="flex justify-center">
            <button className="flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700">
              <FaGithub className="mr-2" />
              <span className="text-black">Github</span>
            </button>
        </section>
      </section>

      <section className="flex-1 h-[375px] justify-center p-2">
        <img src="./public/slide1.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">Patrones De Software</h2>
          <p className="flex item-center text-app-white">En este repositorio se encuentran varios proyectos en Java cuyo propósito es la implementación de patrones de software.</p>
          <section className="flex justify-center">
            <button className="flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700">
              <FaGithub className="mr-2" />
              <span className="text-black">Github</span>
            </button>
        </section>
      </section>
    </Slider>
  );
};

export default CarouselStudies;
