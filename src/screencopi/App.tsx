// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Dashboard from './Dashboard';
import Marketplace from './Marketplace';
import Tables from './Tables';
import Kanban from './Kanban';
import Profile from './Profile';
import SignIn from './SignIn';
import NotFound from './NotFound';
import Footer from '../components/footer';
import Header from '../components/header';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <Header />
        <section className='bg-red-300'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          H
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
