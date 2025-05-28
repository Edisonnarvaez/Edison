import CarouselStudies from '../screens/CarouselStudies';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Studies = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col w-full min-h-[350px] md:min-h-[500px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-8 p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center">{t('studies')}</h1>
      <section>
        <CarouselStudies />
      </section>
    </section>
  );
};

export default Studies;