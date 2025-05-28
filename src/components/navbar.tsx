import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import { FaDownload, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1krYKVoNXLn6uLul3tLLB-Eml7aqpT-Tx/view?usp=drive_link', '_blank');
  };

  const handleScroll = (id: string, navId: number) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      selectedItemNavbar(navId);
      setMenuOpen(false); // Cierra el menú en móvil al hacer click
    }
  };

  return (
    <nav className="w-full">
      {/* Desktop navbar */}
      <ul className="hidden md:flex flex-row items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-4 py-2">
        {dataNavbar().nav.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`px-3 py-2 text-base font-medium transition rounded-xl ${
                item.id === navbarItemActive
                  ? 'bg-electric-violet-700 text-white shadow-md'
                  : 'text-app-gray-200 hover:bg-electric-violet-900/30 hover:text-electric-violet-400'
              }`}
              onClick={() => handleScroll(item.title, item.id)}
            >
              {t(`${item.title.toLowerCase()}`)}
            </button>
          </li>
        ))}
        <li>
          <button
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold bg-electric-violet-600 hover:bg-electric-violet-700 text-white rounded-xl shadow transition"
            onClick={handleDownloadCV}
          >
            <FaDownload />
            <span>{t('downloadCV')}</span>
          </button>
        </li>
      </ul>

      {/* Mobile navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
        <span className="font-bold text-electric-violet-400">MENU</span>
        <button
          className="text-2xl text-electric-violet-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 mt-2 py-4 z-50 absolute left-1/2 transform -translate-x-1/2 w-[90vw] max-w-xs">
          {dataNavbar().nav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`px-4 py-2 w-full text-base font-medium transition rounded-xl ${
                  item.id === navbarItemActive
                    ? 'bg-electric-violet-700 text-white shadow-md'
                    : 'text-app-gray-800 hover:bg-electric-violet-900/30 hover:text-electric-violet-400'
                }`}
                onClick={() => handleScroll(item.title, item.id)}
              >
                {t(`${item.title.toLowerCase()}`)}
              </button>
            </li>
          ))}
          <li>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-electric-violet-600 hover:bg-electric-violet-700 text-white rounded-xl shadow transition w-full justify-center"
              onClick={handleDownloadCV}
            >
              <FaDownload />
              <span>{t('downloadCV')}</span>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
