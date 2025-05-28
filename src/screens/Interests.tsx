import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Interests = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[350px] md:min-h-[500px] bg-gradient-to-r from-bunker-950 to-oxford-blue-800 mb-8 rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-8">
      <section className="flex-1 flex justify-center items-center mb-6 md:mb-0">
        <img
          src="/intereses.jpg"
          alt="imagen de intereses"
          className="w-40 h-56 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </section>
      <section className="flex-1 flex flex-col justify-center items-center md:items-start text-white px-2 sm:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-4 text-center md:text-left">{t('interestsTitle')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 text-center md:text-left">{t('interestsDescription')}</p>
        <ul className="space-y-2 text-center md:text-left">
          <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">Aprender nuevas tecnologías</li>
          <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">Optimización de procesos</li>
          <li className="before:content-['•'] before:text-electric-violet-400 before:mr-2">Desarrollo de software</li>
        </ul>
      </section>
    </section>
  );
};

export default Interests;
