import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeLang = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languageData().find(lang => lang.code === i18n.language);

  return (
    <header className='flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-4 py-3 mb-2 animate-fade-in-up relative z-50'>
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <div className="w-2 h-2 bg-electric-violet-400 rounded-full animate-pulse"></div>
        <p className="text-white font-semibold text-sm sm:text-base">{t('title')}</p>
      </div>
      
      {/* Custom Language Selector con z-index supremo */}
      <div className="relative z-[9999]" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg shadow-sm transition-all duration-300 text-white w-full sm:w-52 justify-between group min-w-[140px] relative z-[9999]"
        >
          <div className="flex items-center gap-2">
            <FaGlobe className="text-electric-violet-400 text-sm" />
            <span className="text-sm">{currentLang?.label}</span>
          </div>
          <FaChevronDown className={`transition-transform duration-200 text-xs ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Dropdown con z-index máximo */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl animate-scale-in"
            style={{ zIndex: 10000 }}
          >
            {languageData().map(({ code, label }) => (
              <button
                key={code}
                onClick={() => onChangeLang(code)}
                className={`w-full px-4 py-2 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg text-sm ${
                  code === i18n.language 
                    ? 'bg-electric-violet-600 text-white' 
                    : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
                style={{ position: 'relative', zIndex: 10001 }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
