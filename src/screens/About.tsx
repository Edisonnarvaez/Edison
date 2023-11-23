    const About = () => {
      return (
        <section className='flex h-[450px] bg-bunker-950 mb-10'>
          <section className="flex-1 grid grid-flow-row items-center text-white p-40 w-[40%]">
            <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Sobre Mí</h1>
            <p className="flex justify-center">Soy un ingeniero de software apasionado por la resolución de desafíos con experiencia en el sector de la salud y en el desarrollo de soluciones tecnológicas que cumplen con los estándares normativos de las IPS.</p>
          </section>
          <section className="flex-1">
            <img src="./public/perfil.jpg" alt="imagen de perfil" className="w-full h-full object-cover  rounded-xl" />
          </section>
        </section>
      );
    };
    
  

export default About;
