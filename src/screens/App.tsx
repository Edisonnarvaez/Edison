// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/content';
import '/src/i18n.ts';

function App() {
  // Alto estimado del header + navbar (ajusta según tu diseño real)
  const headerNavbarHeight = 'h-[140px] md:h-[120px]';

  return (
    <section className="min-h-screen w-full bg-oxford-blue-800 font-Roboto flex flex-col">
      {/* Header + Navbar fijos arriba */}
      <section className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
        <div className="w-full max-w-6xl px-2 pointer-events-auto">
          <Header />
          <Navbar />
        </div>
      </section>

      {/* Espacio reservado para header + navbar */}
      <div className={`${headerNavbarHeight} w-full`} />

      {/* Contenido principal */}
      <main className="flex-1 w-full flex flex-col items-center">
        <Content />
      </main>

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default App;
