
import Carousel from '../screens/Carousel';

const Projects = () => {
  return (
    <section className='flex flex-col bg-bunker-950 mb-10 p-4'>
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Proyectos</h1>
      <section className="flex-1 flex items-center">
        <Carousel />
      </section>
    </section>
  );
};

export default Projects;

