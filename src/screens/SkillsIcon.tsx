import React from 'react';
import { FaGithub, FaGit, FaFigma, FaReact, FaPython, FaHtml5, FaJava, FaGitlab, FaNodeJs, FaJs, FaBootstrap } from 'react-icons/fa';

const SkillsIcon: React.FC = () => {
  const handleIconClick = (technology: string) => {
    alert(`He trabajado con ${technology}. ¿Qué te gustaría saber sobre mi experiencia con ${technology}?`);
  };

  const iconSize = 100; // Tamaño de los iconos en píxeles

  return (
    <section className='flex items-center justify-center h-full'>
      <section className="grid grid-cols-6 gap-4 p-2">
        <FaGithub size={iconSize} onClick={() => handleIconClick('GitHub')} className="cursor-pointer" />
        <FaGit size={iconSize} onClick={() => handleIconClick('Git')} className="cursor-pointer" />
        <FaFigma size={iconSize} onClick={() => handleIconClick('Figma')} className="cursor-pointer" />
        <FaBootstrap size={iconSize} onClick={() => handleIconClick('Vercel')} className="cursor-pointer" />
        <FaNodeJs size={iconSize} onClick={() => handleIconClick('Vite')} className="cursor-pointer" />
        <FaReact size={iconSize} onClick={() => handleIconClick('React')} className="cursor-pointer" />
        <FaPython size={iconSize} onClick={() => handleIconClick('Python')} className="cursor-pointer" />
        <FaHtml5 size={iconSize} onClick={() => handleIconClick('HTML5')} className="cursor-pointer" />
        <FaJava size={iconSize} onClick={() => handleIconClick('Java')} className="cursor-pointer" />
        <FaJs size={iconSize} onClick={() => handleIconClick('Azure')} className="cursor-pointer" />
        <FaGitlab size={iconSize} onClick={() => handleIconClick('GitLab')} className="cursor-pointer" />
      </section>
    </section>
  );
};

export default SkillsIcon;
