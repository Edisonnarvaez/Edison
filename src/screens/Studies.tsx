import CarouselStudies from '../screens/CarouselStudies';

const Studies = () => {
  return (
    <section className='flex flex-col w-full h-[600px] bg-bunker-950 mb-10 p-4'>
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Estudios</h1>
      <section>
        <CarouselStudies />
      </section>
    </section>
  );
};

export default Studies;