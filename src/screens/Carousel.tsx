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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      {projects.map((project, idx) => (
        <section
          key={idx}
          className="h-[420px] p-6 sm:p-8 bg-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center mx-8 transition-transform hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-28 h-28 object-contain object-center rounded-xl mb-4 border-2 border-electric-violet-400 bg-white shadow"
          />
          <h2 className="text-lg sm:text-xl font-bold text-electric-violet-400 mb-2 text-center">{project.title}</h2>
          <p className="text-white/80 mb-4 text-center text-sm sm:text-base">{project.desc}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-electric-violet-600 hover:bg-electric-violet-700 text-white rounded-lg font-semibold shadow transition text-center"
          >
            {t('viewProject') || 'Ver proyecto'}
          </a>
        </section>
      ))}
    </Slider>
  );
};

export default Carousel;
