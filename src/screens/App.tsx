// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/content';




function App() {
  return (
    <section className='  w-screen h-screen bg-oxford-blue-800 font-Roboto'>
    <Header/>
    <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
      <section className='bg-oxford-blue-800'></section>
      <Navbar/>
      <section className='bg-oxford-blue-800'></section>
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
