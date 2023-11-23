// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Beginning from './Beginning';
import About from './About';
import Interests from './Interests';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Studies from './Studies';
import NotFound from './NotFound';


function App() {
  return (
    <section className='  w-screen h-screen bg-oxford-blue-800 font-Roboto'>
    <Header/>
    <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
      <section className='bg-oxford-blue-800'></section>
      <Navbar/>
      <section className='bg-oxford-blue-800'></section>
    </section>
   
    <section className='order-2 grid grid-cols-[1fr_1200px_1fr] bg-black-950'>
      <section className='bg-oxford-blue-800'></section>
      <Routes>
        <Route path='/' element={<Beginning />} />
        <Route path='/About' element={<About />} />
        <Route path='/Interests' element={<Interests />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/Studies' element={<Studies />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <section className='bg-oxford-blue-800'></section>
    </section>
      <Footer />
    </section>
  );
}

export default App;
