
import Beginning from '../screens/Beginning';
import About from '../screens/About';
import Interests from '../screens/Interests';
import Projects from '../screens/Projects';
import Skills from '../screens/Skills';
import Experience from '../screens/Experience';
import Studies from '../screens/Studies';

const Content = () => {
  return (
    <section className='grid grid-rows-1 bg-oxford-blue-800 overflow-scroll'>
      <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
        <section className='bg-oxford-blue-800'></section>
        <Beginning />
        <section className='bg-oxford-blue-800'></section>
      </section>

      <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-oxford-blue-800'>
        <section className='bg-oxford-blue-800'></section>

        <section className='bg-oxford-blue-800 p-4'>
          
          <About />
          <Interests />
          <Projects />
          <Skills />
          <Experience />
          <Studies />

        </section>

        <section className='bg-oxford-blue-800'></section>
    </section>
      
    </section>
    
  );
};

export default Content;
