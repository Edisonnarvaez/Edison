import { Routes, Route, Navigate } from 'react-router-dom';
import Beginning from '../screens/Beginning';
import About from '../screens/About';
import Interests from '../screens/Interests';
import Projects from '../screens/Projects';
import Skills from '../screens/Skills';
import Experience from '../screens/Experience';
import Studies from '../screens/Studies';

const Content = () => {
  return (
    <section className="min-h-screen bg-oxford-blue-800">
      <section className="order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950">
        <section className="bg-oxford-blue-800"></section>
        <section className="w-full">
          <section id="beginning" className="scroll-mt-40">
            <Beginning />
          </section>
          <section id="about" className="scroll-mt-32">
            <About />
          </section>
          <section id="interests" className="scroll-mt-32">
            <Interests />
          </section>
          <section id="projects" className="scroll-mt-32">
            <Projects />
          </section>
          <section id="skills" className="scroll-mt-32">
            <Skills />
          </section>
          <section id="experience" className="scroll-mt-32">
            <Experience />
          </section>
          <section id="studies" className="scroll-mt-32">
            <Studies />
          </section>
        </section>
        <section className="bg-oxford-blue-800"></section>
      </section>
    </section>
  );
};

export default Content;
