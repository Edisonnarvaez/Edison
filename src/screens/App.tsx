// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/content';

import '/src/i18n.ts';

function App() {
  return (
    <section className='  w-screen h-screen bg-oxford-blue-800 font-Roboto '>
      <section className='flex w-[20px] h-[20xp] bg-black-950'><img src="./public/black.png" alt="black" /></section>
      <section className='relative'>
      
      <div className='h-32'></div>
      
      
      <section className='fixed top-1 left-1/2 transform -translate-x-1/2 z-10'>
        <Header />
        <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950 '>
          <section className='bg-oxford-blue-800'></section>
          <Navbar />
          <section className='bg-oxford-blue-800'></section>
        </section>
      </section>


      </section>
      <Content/>
      
    <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
      
      <section className='bg-oxford-blue-800'></section>
    </section>
      <Footer />
    </section>
  );
}

export default App;
