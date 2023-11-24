
import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';


const About = () => {
  const { t } = useTranslation();

  return (
    <section className='flex w-full h-[600px] bg-bunker-950 mb-10'>
      <section className="flex-1 grid grid-flow-row items-center text-white p-40 w-[40%]">
        <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>{t('aboutTitle')}</h1>
        <p className="flex justify-center">{t('aboutDescription')}</p>
      </section>
      <section className="flex-1 grid items-center">
        <img src="/perfil.jpg" alt="imagen de perfil" className="w-[350px] h-[440px] object-cover rounded-xl " />
      </section>
    </section>
  );
};

export default About;
