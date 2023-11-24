import { useTranslation } from 'react-i18next';
import '/src/i18n.ts';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col justify-center w-full h-[800px] bg-bunker-950 mb-10 p-4'>
      <section>
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>{t('experience0')}</h1>
      </section>
      <section className='flex flex-col justify-center bg-oxford-blue-800 text-white h-[600px] p-5'>

        <section className="flex flex-col-3-[20px_1fr_20Px] p-8">
          <h1>RED Medicron IPS</h1>
          <section>
          <h1>{t('experience1t')}</h1>
          <p>{t('experience1')}</p>
          </section>
          <h2>{t('experience1d')}</h2>
        </section>
        <section className="flex flex-col-3 p-8">
          <h1>RED Medicron IPS</h1>
          <section>
          <h1>{t('experience2t')}</h1>
          <p>{t('experience2')}</p>
          </section>
          <h2>{t('experience2d')}</h2>
        </section>
        <section className="flex flex-col-3 p-8">
          <h1>RED Medicron IPS</h1>
          <section>
          <h1>{t('experience3t')}</h1>
          <p>{t('experience3')}</p>
          </section>
          <h2>{t('experience3d')}</h2>
        </section>
        
      </section>
    </section>
  );
};
export default Experience;
