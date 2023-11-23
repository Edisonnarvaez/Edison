const Projects = () => {
  return (
    <section className='flex h-[450px] bg-bunker-950 mb-10'>
    <section className="flex-1 ">
      <img src="./public/intereses.jpg" alt="imagen de perfil" className="w-full h-full object-cover  rounded-xl" />
    </section>
    <section className="flex-1 grid grid-flow-row-[25px_40_px] items-center text-white p-40 w-[40%]">
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Intereses</h1>
      <p className="flex justify-center">En este repositorio se encuentran varios proyectos en java cuyo propósito es la implementación de patrones de software</p>
    </section>
    
  </section>
);
};

export default Projects;
