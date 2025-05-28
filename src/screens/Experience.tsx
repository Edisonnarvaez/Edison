import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col w-full min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-10 p-8 rounded-3xl shadow-xl">
      <h1 className="text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center">{t('experience0')}</h1>
      <section className="flex flex-col gap-8">
        {/* Experiencia 1 */}
        <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-electric-violet-400">
          <h2 className="text-xl font-bold text-white">RED Medicron IPS</h2>
          <h3 className="text-lg text-electric-violet-300">{t('experience1t')}</h3>
          <p className="text-white/80">{t('experience1')}</p>
          <span className="text-sm text-white/60">{t('experience1d')}</span>
        </section>
        {/* Experiencia 2 */}
        <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-electric-violet-400">
          <h2 className="text-xl font-bold text-white">RED Medicron IPS</h2>
          <h3 className="text-lg text-electric-violet-300">{t('experience2t')}</h3>
          <p className="text-white/80">{t('experience2')}</p>
          <span className="text-sm text-white/60">{t('experience2d')}</span>
        </section>
        {/* Experiencia 3 */}
        <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-electric-violet-400">
          <h2 className="text-xl font-bold text-white">RED Medicron IPS</h2>
          <h3 className="text-lg text-electric-violet-300">{t('experience3t')}</h3>
          <p className="text-white/80">{t('experience3')}</p>
          <span className="text-sm text-white/60">{t('experience3d')}</span>
        </section>
      </section>
    </section>
  );
};

export default Experience;
