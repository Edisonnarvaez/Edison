import { useTranslation } from 'react-i18next';
import Carousel from '../screens/Carousel';

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t('slide1'),
      desc: t('slide1D'),
      link: 'https://github.com/edisonnarvaez/Patrones_Software',
      image: '/images/projects/slide1.jpg',
    },
    {
      title: t('slide2'),
      desc: t('slide2D'),
      link: 'https://github.com/edisonnarvaez/EjerciciosPython',
      image: '/images/projects/python.png',
    },
    {
      title: t('slide3'),
      desc: t('slide3D'),
      link: 'https://github.com/edisonnarvaez/Portafolio',
      image: '/images/projects/portafolio.jpg',
    },
    // ...más proyectos
  ];

  return (
    <section className="flex flex-col w-full min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-10 p-4 sm:p-8 rounded-3xl shadow-xl">
      <h1 className="text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center">{t('projects')}</h1>
      <Carousel projects={projects} />
    </section>
  );
};

export default Projects;

