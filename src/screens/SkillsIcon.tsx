import React, { useState } from 'react';
import { FaGithub, FaGit, FaFigma, FaReact, FaPython, FaHtml5, FaJava, FaGitlab, FaNodeJs, FaJs, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiPostgresql, SiMongodb } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillsData = [
  { icon: FaGithub, name: 'GitHub', color: 'hover:text-gray-800', level: 85 },
  { icon: FaGit, name: 'Git', color: 'hover:text-orange-500', level: 90 },
  { icon: FaFigma, name: 'Figma', color: 'hover:text-purple-500', level: 75 },
  { icon: FaBootstrap, name: 'Bootstrap', color: 'hover:text-blue-500', level: 80 },
  { icon: FaNodeJs, name: 'Node.js', color: 'hover:text-green-500', level: 85 },
  { icon: FaReact, name: 'React', color: 'hover:text-blue-400', level: 90 },
  { icon: FaPython, name: 'Python', color: 'hover:text-yellow-500', level: 85 },
  { icon: FaHtml5, name: 'HTML5', color: 'hover:text-orange-600', level: 95 },
  { icon: FaJava, name: 'Java', color: 'hover:text-red-600', level: 80 },
  { icon: FaJs, name: 'JavaScript', color: 'hover:text-yellow-400', level: 88 },
  { icon: FaGitlab, name: 'GitLab', color: 'hover:text-orange-500', level: 75 },
  { icon: SiFlutter, name: 'Flutter', color: 'hover:text-blue-400', level: 85 },
  { icon: FaDatabase, name: 'SQL', color: 'hover:text-blue-700', level: 80 },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'hover:text-blue-800', level: 75 },
  { icon: SiMongodb, name: 'MongoDB', color: 'hover:text-green-700', level: 70 },
];

const SkillsIcon: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className='flex items-center justify-center h-full w-full overflow-hidden'>
      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6 p-4 max-w-4xl mx-auto">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          const isLastRow = index >= skillsData.length - (skillsData.length % 6 || 6);
          
          return (
            <div
              key={skill.name}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative p-3 sm:p-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-white/20 aspect-square flex items-center justify-center">
                <IconComponent 
                  size={window.innerWidth < 640 ? 32 : 48} 
                  className={`transition-all duration-300 text-white ${skill.color} group-hover:scale-110`}
                />
                
                {/* Tooltip responsivo */}
                {hoveredSkill === skill.name && (
                  <div className={`absolute ${isLastRow ? '-top-16' : '-bottom-16'} left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap animate-fade-in-up z-20 shadow-xl border border-white/20`}>
                    <div className="text-center">
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-xs text-electric-violet-400">{skill.level}% proficiency</div>
                    </div>
                    <div className={`absolute ${isLastRow ? 'top-full' : 'bottom-full'} left-1/2 transform -translate-x-1/2 border-4 border-transparent ${isLastRow ? 'border-t-black/90' : 'border-b-black/90'}`}></div>
                  </div>
                )}

                {/* Progress ring */}
                <div className="absolute inset-0 rounded-xl">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level * 2.83} 283`}
                      strokeLinecap="round"
                      className="text-electric-violet-400 transition-all duration-1000 opacity-0 group-hover:opacity-100"
                      style={{ transformOrigin: '50% 50%', transform: 'rotate(-90deg)' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SkillsIcon;
