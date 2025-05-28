import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';

const Header = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className='flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-4 py-2'>
      <p className="mb-2 sm:mb-0">{t('title')}</p>
      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2 text-white bg-mirage-950 border border-gray-300 rounded-md shadow-sm w-40 sm:w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
      >
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
