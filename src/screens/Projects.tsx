
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';
import Carousel from '../screens/Carousel';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col w-full h-[800px] bg-bunker-950 mb-10 p-4 justify-center' >
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>{t('projects')}</h1>
      <section>
        <Carousel />
      </section>
    </section>
  );
};

export default Projects;

