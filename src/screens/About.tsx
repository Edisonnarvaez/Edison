import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center w-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-8 p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl">
      <section className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src="/perfil.jpg"
          alt="imagen de perfil"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-electric-violet-400 shadow-lg"
        />
      </section>
      <section className="flex-1 flex flex-col items-center md:items-start text-white px-2 sm:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-4 text-center md:text-left">{t('aboutTitle')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center md:text-left">{t('aboutDescription')}</p>
      </section>
    </section>
  );
};

export default About;
