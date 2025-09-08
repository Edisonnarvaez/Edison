import Beginning from '../screens/Beginning';
import About from '../screens/About';
import Interests from '../screens/Interests';
import Projects from '../screens/Projects';
import Skills from '../screens/Skills';
import Experience from '../screens/Experience';
import Studies from '../screens/Studies';
import Contact from '../screens/Contact';
import { Analytics } from '@vercel/analytics/next';

const Content = () => {
  return (
    <section className="min-h-screen bg-oxford-blue-800 w-full">
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1200px_1fr] bg-gradient-to-b from-black-950 via-oxford-blue-900 to-black-950">
        <section className="hidden lg:block bg-gradient-to-r from-oxford-blue-800 to-transparent"></section>
        
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <section id="beginning" className="scroll-mt-32 mb-8">
            <Beginning />
          </section>
          <section id="about" className="scroll-mt-32 mb-8">
            <About />
          </section>
          <section id="interests" className="scroll-mt-32 mb-8">
            <Interests />
          </section>
          <section id="projects" className="scroll-mt-32 mb-8">
            <Projects />
          </section>
          <section id="skills" className="scroll-mt-32 mb-8">
            <Skills />
          </section>
          <section id="experience" className="scroll-mt-32 mb-8">
            <Experience />
          </section>
          <section id="studies" className="scroll-mt-32 mb-8">
            <Studies />
          </section>
          <section id="contact" className="scroll-mt-32 mb-8">
            <Contact />
          </section>
        </section>
        <Analytics />
        <section className="hidden lg:block bg-gradient-to-l from-oxford-blue-800 to-transparent"></section>
      </section>
    </section>
  );
};

export default Content;
