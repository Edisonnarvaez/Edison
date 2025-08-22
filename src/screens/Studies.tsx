import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CarouselStudies from './CarouselStudies';

const Studies = () => {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="flex flex-col w-full min-h-[350px] md:min-h-[500px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-8 p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
      <h1 
        ref={titleRef}
        className={`text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center transition-all duration-700 bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 bg-clip-text text-transparent ${
          titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}
      >
        {t('studies')}
      </h1>
      
      <div className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0 translate-y-8'}`}>
        <CarouselStudies />
      </div>
    </section>
  );
};

export default Studies;