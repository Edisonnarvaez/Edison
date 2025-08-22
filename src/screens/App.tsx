// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/content';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useEffect, useState } from 'react';
import '/src/i18n.ts';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('main-header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <section className="min-h-screen w-full bg-oxford-blue-800 font-roboto flex flex-col">
      {/* Header + Navbar fijos arriba */}
      <section 
        id="main-header"
        className="fixed top-0 left-0 w-full z-40 flex flex-col items-center"
        style={{ 
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="w-full max-w-7xl px-2 sm:px-4">
          <Header />
          <Navbar />
        </div>
      </section>

      {/* Espacio dinámico para header + navbar */}
      <div style={{ height: `${headerHeight}px` }} />

      {/* Contenido principal */}
      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        <Content />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </section>
  );
}

export default App;
