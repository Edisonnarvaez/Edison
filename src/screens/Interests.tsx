import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaLightbulb, FaCogs, FaCode } from 'react-icons/fa';
import '/src/i18n.ts';

const interestsData = [
  { 
    key: 'interestsItem1', 
    icon: FaLightbulb, 
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20'
  },
  { 
    key: 'interestsItem2', 
    icon: FaCogs, 
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20'
  },
  { 
    key: 'interestsItem3', 
    icon: FaCode, 
    color: 'text-green-400',
    bgColor: 'bg-green-400/20'
  }
];

const Interests = () => {
  const { t } = useTranslation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[350px] md:min-h-[500px] bg-gradient-to-r from-bunker-950 to-oxford-blue-800 mb-8 rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-8 overflow-hidden">
      <section 
        ref={imageRef}
        className={`flex-1 flex justify-center items-center mb-6 md:mb-0 transition-all duration-700 ${
          imageVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative group">
          <img
            src="/intereses.jpg"
            alt="imagen de intereses"
            className="w-40 h-56 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-electric-violet-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </section>
      
      <section 
        ref={textRef}
        className={`flex-1 flex flex-col justify-center items-center md:items-start text-white px-2 sm:px-8 transition-all duration-700 ${
          textVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-4 text-center md:text-left bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 bg-clip-text text-transparent">
          {t('interestsTitle')}
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 text-center md:text-left leading-relaxed">
          {t('interestsDescription')}
        </p>
        
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {interestsData.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={interest.key}
                className={`flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className={`p-3 rounded-lg ${interest.bgColor} mr-4`}>
                  <IconComponent className={`text-xl ${interest.color}`} />
                </div>
                <span className="text-white/90 font-medium">
                  {t(interest.key)}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Interests;
