import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import { FaDownload } from 'react-icons/fa6';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const { t } = useTranslation(); 
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1krYKVoNXLn6uLul3tLLB-Eml7aqpT-Tx/view?usp=drive_link', '_blank');
  };

  const handleScroll = (id: string, navId: number) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      selectedItemNavbar(navId);
    }
  };

  return (
    <nav className='flex flex-col items-center  min-w-[250px] bg-black-950 '>
      <ul className='flex flex-row gap-x-6 pt-5 pl-8 pb-5'>
        {dataNavbar().nav.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`ml-3 text-base font-medium ${
                item.id === navbarItemActive
                  ? 'text-app-gray-50 p-3 rounded bg-black-800'
                  : 'text-app-gray-700'
              }`}
              onClick={() => handleScroll(item.title, item.id)}
            >
              {t(`${item.title.toLowerCase()}`)} {/* Traduce el título del menú */}
            </button>
          </li>
        ))}
        <li>
          <button className='flex items-center text-app-gray-700 bg-white p-2 rounded' onClick={handleDownloadCV}>
            <FaDownload className='mr-2' />
            <span className='text-black'>{t('downloadCV')}</span> {/* Traduce el botón de descarga */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
