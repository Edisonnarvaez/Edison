import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

interface Project {
  title: string;
  desc: string;
  link: string;
  image: string;
}

const Carousel: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useTranslation();
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
    <div className="px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx} className="px-3">
            <section className="h-[400px] sm:h-[420px] p-4 sm:p-6 bg-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-xl mb-4 border-2 border-electric-violet-400 bg-white shadow-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-electric-violet-400 mb-2 text-center line-clamp-2">{project.title}</h2>
                <p className="text-white/80 mb-4 text-center text-xs sm:text-sm md:text-base line-clamp-3 flex-1">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-electric-violet-600 hover:bg-electric-violet-700 text-white rounded-lg font-semibold shadow transition-all duration-300 text-center text-xs sm:text-sm hover:scale-105"
              >
                {t('viewProject') || 'Ver proyecto'}
              </a>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
