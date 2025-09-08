import { useTranslation } from 'react-i18next';
import Carousel from '../screens/Carousel';

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
     // Proyecto 1 - Red Medicron IPS (Backend)
  {
    title: t('slide4'),
    desc: t('slide4D'),
    link: 'https://github.com/Edisonnarvaez/backend_gestion_portal_red_medicron_ips.git', 
    image: '/images/projects/redmedicron-backend.png',
  },
  // Proyecto 1 - Red Medicron IPS (Frontend)
  {
    title: t('slide5'),
    desc: t('slide5D'),
    link: 'https://github.com/RedMedicronIPS/central-red-medicron-ips', 
    image: '/images/projects/redmedicron-frontend.png',
  },
  // Proyecto 2 - Página institucional Red Medicron
  {
    title: t('slide6'),
    desc: t('slide6D'),
    link: 'https://github.com/Edisonnarvaez/pagina_red_medicron_ips.git', 
    image: '/images/projects/redmedicron-web.png',
  },
  // Proyecto 3 - Página institucional Clínica Norte Especialidades
  {
    title: t('slide7'),
    desc: t('slide7D'),
    link: 'https://github.com/Edisonnarvaez/paginaClinicaNorte.git', 
    image: '/images/projects/clinicanorte-web.png',
  },
  // Proyecto 4 - DataInd (Backend)
  {
    title: t('slide8'),
    desc: t('slide8D'),
    link: 'https://github.com/Edisonnarvaez/gestorIndicadores.git', // <-- reemplazar con el link real
    image: '/images/projects/dataind-backend.png',
  },
  // Proyecto 4 - DataInd (Frontend)
  {
    title: t('slide9'),
    desc: t('slide9D'),
    link: 'https://github.com/Edisonnarvaez/frontendgindicators.git', // <-- reemplazar con el link real
    image: '/images/projects/dataind-frontend.png',
  },
  // Proyecto 5 - Encryptor
  {
    title: t('slide10'),
    desc: t('slide10D'),
    link: 'https://github.com/Edisonnarvaez/cifrador_RSA.git', 
    image: '/images/projects/encryptor.png',
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

