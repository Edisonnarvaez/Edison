import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Interests = () => {
  const { t } = useTranslation();
  return (
    <section className='flex w-full h-[600px] bg-bunker-950 mb-10'>
    <section className="flex-1 grid justify-center items-center">
      <img src="./public/intereses.jpg" alt="imagen de perfil" className="w-[350px] h-[440px] object-cover rounded-xl " />
    </section>
    <section className="flex-1 grid grid-flow-row items-center text-white p-40 w-[40%]">
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>{t('interestsTitle')}</h1>
      <p className="flex justify-center">{t('interestsDescription')}</p>
    </section>
    
  </section>
);
};

export default Interests;
