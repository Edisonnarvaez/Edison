import { useTranslation } from 'react-i18next';
import Carousel from '../screens/Carousel';

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
     // Proyecto 1 - Red Medicron IPS (Backend)
  {
    title: t('slide4'),
    desc: t('slide4D'),
    link: 'URL_DEL_REPO_BACKEND', // <-- reemplazar con el link real
    image: '/images/projects/redmedicron-backend.jpg',
  },
  // Proyecto 1 - Red Medicron IPS (Frontend)
  {
    title: t('slide5'),
    desc: t('slide5D'),
    link: 'URL_DEL_REPO_FRONTEND', // <-- reemplazar con el link real
    image: '/images/projects/redmedicron-frontend.jpg',
  },
  // Proyecto 2 - Página institucional Red Medicron
  {
    title: t('slide6'),
    desc: t('slide6D'),
    link: 'URL_REPO', // <-- reemplazar con el link real
    image: '/images/projects/redmedicron-web.jpg',
  },
  // Proyecto 3 - Página institucional Clínica Norte Especialidades
  {
    title: t('slide7'),
    desc: t('slide7D'),
    link: 'URL_REPO', // <-- reemplazar con el link real
    image: '/images/projects/clinicanorte-web.jpg',
  },
  // Proyecto 4 - DataInd (Backend)
  {
    title: t('slide8'),
    desc: t('slide8D'),
    link: 'URL_BACKEND_REPO', // <-- reemplazar con el link real
    image: '/images/projects/dataind-backend.jpg',
  },
  // Proyecto 4 - DataInd (Frontend)
  {
    title: t('slide9'),
    desc: t('slide9D'),
    link: 'URL_FRONTEND_REPO', // <-- reemplazar con el link real
    image: '/images/projects/dataind-frontend.jpg',
  },
  // Proyecto 5 - Encryptor
  {
    title: t('slide10'),
    desc: t('slide10D'),
    link: 'URL_REPO', // <-- reemplazar con el link real
    image: '/images/projects/encryptor.jpg',
  },
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

