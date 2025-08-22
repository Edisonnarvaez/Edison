import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '/src/i18n.ts';

const About = () => {
  const { t } = useTranslation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="flex flex-col md:flex-row items-center w-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-8 p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
      <section 
        ref={imageRef}
        className={`flex-1 flex justify-center mb-6 md:mb-0 transition-all duration-700 ${
          imageVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative group">
          <img
            src="/perfil.jpg"
            alt="imagen de perfil"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-electric-violet-400 shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-electric-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </section>
      <section 
        ref={textRef}
        className={`flex-1 flex flex-col items-center md:items-start text-white px-2 sm:px-8 transition-all duration-700 ${
          textVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-4 text-center md:text-left bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 bg-clip-text text-transparent">
          {t('aboutTitle')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center md:text-left">
          {t('aboutDescription')}
        </p>
      </section>
    </section>
  );
};

export default About;
