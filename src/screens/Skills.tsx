import SkillsIcon from '../screens/SkillsIcon';
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Studies = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col justify-center w-full h-[800px] bg-bunker-950 mb-10 p-4'>
      <section>
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>{t('skills')}</h1>
      </section>
      <section className='flex justify-center bg-electric-violet-500 h-[400px]'>
        <SkillsIcon />
      </section>
    </section>
  );
};

export default Studies;