import Navbar from '../components/navbar';

const Content = () => {
  return (
    <section className='grid grid-rows-1 p-4 bg-red-300 overflow-scroll'>
       
      <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
        <section className='bg-oxford-blue-800'></section>
          <Navbar/>
        <section className='bg-oxford-blue-800'></section>
      </section>
      <section className='bg-oxford-blue-800'></section>
        <Navbar/>
      <section className='bg-oxford-blue-800'></section>
      
    </section>
    
  );
};

export default Content;
