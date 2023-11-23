const Interests = () => {
  return (
    <section className='flex h-[450px] bg-bunker-950 mb-10'>
    <section className="flex-1">
      <img src="./public/intereses.jpg" alt="imagen de perfil" className="w-full h-full object-cover  rounded-xl" />
    </section>
    <section className="flex-1 grid grid-flow-row items-center text-white p-40 w-[40%]">
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Intereses</h1>
      <p className="flex justify-center">Mis intereses se centran en la búsqueda de aprender mas sobre la tecnología  y saber e implementar todas las bondades que puede ofrecer. Me gusta explorar nuevas formas de mejorar la eficiencia y disfrutar del proceso.</p>
    </section>
    
  </section>
);
};

export default Interests;
