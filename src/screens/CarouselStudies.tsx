import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const studies = [
  {
    titleKey: 'studies1',
    institution: 'ITSIM',
    years: '2012 - 2015',
    image: '/itsim.png',
  },
  {
    titleKey: 'studies2',
    institution: 'CETEM',
    years: '2018 - 2019',
    image: '/cetem.png',
  },
  {
    titleKey: 'studies3',
    institution: 'UCC',
    years: '2021 - 2025',
    image: '/ucc.png',
  },
  // Puedes agregar más estudios aquí
];

const CarouselStudies: React.FC = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      {studies.map((study, idx) => (
        <section
          key={idx}
          className="h-[375px] p-6 sm:p-8 bg-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center mx-8 transition-transform hover:scale-105"
        >
          <img
            src={study.image}
            alt={study.institution}
            className="w-24 h-24 object-contain object-center rounded-xl mb-4 border-2 border-electric-violet-400 bg-white shadow"
          />
          <h2 className="text-lg sm:text-xl font-bold text-electric-violet-400 mb-2 text-center">{t(study.titleKey)}</h2>
          <p className="text-white/80 mb-1 text-center">{study.institution}</p>
          <span className="text-white/60 text-sm text-center">{study.years}</span>
        </section>
      ))}
    </Slider>
  );
};

export default CarouselStudies;
