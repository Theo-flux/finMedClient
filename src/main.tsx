import { StrictMode } from 'react';
import { StoreProvider } from '@/store';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
