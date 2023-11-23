import SkillsIcon from '../screens/SkillsIcon';

const Studies = () => {
  return (
    <section className='flex flex-col justify-center w-full h-[800px] bg-bunker-950 mb-10 p-4'>
      <section>
      <h1 className='text-8xl font-roboto flex justify-center text-electric-violet-700'>Habilidades</h1>
      </section>
      <section className='flex justify-center bg-electric-violet-500 h-[400px]'>
        <SkillsIcon />
      </section>
    </section>
  );
};

export default Studies;