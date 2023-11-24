import { FaGithub } from 'react-icons/fa6';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Carousel: React.FC = () => {
  
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <section className="flex-1 h-[300px] w-[250px] justify-center p-2 grid items-center bg-gray-800">
        <img src="/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">{t('slide1')}</h2>
        <p className="flex item-center text-app-white">{t('slide1D')}</p>
        <section className="flex justify-center">
          <button className="flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700">
            <FaGithub className="mr-2" />
            <span className="text-black">Github</span>
          </button>
        </section>
      </section>

      <section className="flex-1 h-[300px] w-[250px]  justify-center p-2 bg-gray-800">
          <img src="/python.png" alt="Slide 2" className="w-full h-full object-cover" />
          <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">{t('slide2')}</h2>
          <p className="flex item-center text-app-white">{t('slide2D')}</p>
          <section className="flex justify-center">
            <button className="flex items-center text-gray-300 bg-gray-800 p-2 rounded border-electric-violet-700">
              <FaGithub className="mr-2" />
              <span className="text-black">Github</span>
            </button>
        </section>
      </section>

      <section className="flex-1 h-[300px] w-[250px]  justify-center p-2 bg-gray-800">
          <img src="/portafolio.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          <h2 className="text-4xl font-roboto flex justify-center text-electric-violet-700">{t('slide3')}</h2>
          <p className="flex item-center text-app-white">{t('slide3D')}</p>
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

export default Carousel;
