
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
      <section className="flex-1 h-[375px] p-12 bg-gray-800 flex flex-col items-center justify-center mx-auto">

        <p className="flex justify-center text-app-white">Bachiller técnico automotriz.</p>
        <h2 className="text-6xl font-roboto flex justify-center text-white">ITSIM</h2>
        <p className="flex justify-center text-app-white">2012 - 2015</p>
        <section className="flex justify-center items-center">
          <img src="/itsim.png" alt="itsim" className="object-cover max-w-full max-h-full" />
        </section>
      </section>

      <section className="flex-1 h-[375px] p-12 bg-gray-800 flex flex-col items-center justify-center mx-auto">

        <p className="flex justify-center text-app-white">Técnico de sistemas</p>
        <h2 className="text-6xl font-roboto flex justify-center text-white">CETEM</h2>
        <p className="flex justify-center text-app-white">2018 - 2019</p>
        <section className="flex justify-center items-center">
          <img src="/cetem.png" alt="cetem" className="object-cover max-w-full max-h-full" />
        </section>
      </section>

      <section className="flex-1 h-[375px] p-12 bg-gray-800 flex flex-col items-center justify-center mx-auto">

        <p className="flex justify-center text-app-white">Ingeniero de software</p>
        <h2 className="text-6xl font-roboto flex justify-center text-white">UCC</h2>
        <p className="flex justify-center text-app-white">2021 - 2025</p>
        <section className="flex justify-center items-center">
          <img src="/ucc.png" alt="ucc" className="object-cover max-w-full max-h-full" />
        </section>
      </section>
    </Slider>
  );
};

export default CarouselStudies;
