import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './screens/App.tsx';
import './assets/styles/index.css';
import './i18n.ts';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

