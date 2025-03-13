
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  );
}
