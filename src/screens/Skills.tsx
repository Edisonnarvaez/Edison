import SkillsIcon from '../screens/SkillsIcon';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center w-full min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-10 p-8 rounded-3xl shadow-xl">
      <h1 className="text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center">{t('skills')}</h1>
      <section className="flex justify-center">
        <SkillsIcon />
      </section>
    </section>
  );
};

export default Skills;