// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <section className=' grid grid-rows-[150px_150px_1fr] w-screen h-screen bg-gray-700 font-Roboto'>
      <header className='order-1 bg-app-test sm:order-1'>
        <p>header</p>
      </header>
      <section className='order-2 bg-blue-300'>
        <p>menu</p>
      </section>

      <main className='order-3 grid grid-rows-[1fr_60px] '>
        <section className='bg-red-300 order-1'>
          <p>content</p>
        </section>
        <footer className='bg-green-300 sm:order-2'>
          <p>footer</p>
        </footer>
      </main>


    </section>
  );
}

export default App;

