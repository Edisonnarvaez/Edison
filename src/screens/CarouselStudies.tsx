import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { useScrollAnimationDiv } from '../hooks/useScrollAnimation';
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
];

const CarouselStudies: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimationDiv(); // ✅ Usar el hook específico
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        } 
      }
    ]
  };

  return (
    <div 
      ref={ref}
      className={`px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <Slider {...settings}>
        {studies.map((study, idx) => (
          <div key={idx} className="px-3">
            <section 
              className="h-[350px] sm:h-[375px] p-4 sm:p-6 bg-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 backdrop-blur-sm group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.institution}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-xl mb-4 border-2 border-electric-violet-400 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-electric-violet-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-electric-violet-400 mb-2 text-center line-clamp-2 group-hover:text-electric-violet-300 transition-colors">
                {t(study.titleKey)}
              </h2>
              
              <p className="text-white/80 mb-2 text-center text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                {study.institution}
              </p>
              
              <span className="text-white/60 text-xs sm:text-sm text-center bg-electric-violet-400/20 px-3 py-1 rounded-full group-hover:bg-electric-violet-400/30 transition-colors">
                {study.years}
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselStudies;
