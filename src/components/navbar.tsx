import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import { FaDownload, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1krYKVoNXLn6uLul3tLLB-Eml7aqpT-Tx/view?usp=drive_link', '_blank');
  };

  const handleScroll = (id: string, navId: number) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      selectedItemNavbar(navId);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full relative z-30">
      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 h-1 bg-electric-violet-600 transition-all duration-150 ease-out rounded-full" 
           style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Desktop navbar */}
      <ul className="hidden md:flex flex-row items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-4 py-2">
        {dataNavbar().nav.map((item, index) => (
          <li key={item.id} className={`animate-fade-in-up animate-delay-${index * 100}`}>
            <button
              type="button"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 rounded-xl relative overflow-hidden group ${
                item.id === navbarItemActive
                  ? 'bg-electric-violet-700 text-white shadow-md scale-105'
                  : 'text-app-gray-200 hover:bg-electric-violet-900/30 hover:text-electric-violet-400 hover:scale-105'
              }`}
              onClick={() => handleScroll(item.title, item.id)}
            >
              <span className="relative z-10">{t(`${item.title.toLowerCase()}`)}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </li>
        ))}
        <li className="animate-fade-in-up animate-delay-800">
          <button
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 hover:from-electric-violet-700 hover:to-electric-violet-800 text-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            onClick={handleDownloadCV}
          >
            <FaDownload className="transition-transform group-hover:rotate-12" />
            <span>{t('downloadCV')}</span>
          </button>
        </li>
      </ul>

      {/* Mobile navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
        <span className="font-bold text-electric-violet-400 animate-fade-in-up">MENU</span>
        <button
          className="text-2xl text-electric-violet-400 transition-transform duration-300 hover:scale-110 animate-fade-in-up animate-delay-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes className="animate-spin" /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 mt-2 py-4 z-40 absolute left-1/2 transform -translate-x-1/2 w-[90vw] max-w-xs animate-scale-in">
          {dataNavbar().nav.map((item, index) => (
            <li key={item.id} className={`w-full animate-fade-in-up animate-delay-${index * 50}`}>
              <button
                type="button"
                className={`px-4 py-2 w-full text-base font-medium transition-all duration-300 rounded-xl hover:scale-105 ${
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
          <li className="w-full animate-fade-in-up animate-delay-400">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 hover:from-electric-violet-700 hover:to-electric-violet-800 text-white rounded-xl shadow transition-all duration-300 w-full justify-center hover:scale-105"
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
