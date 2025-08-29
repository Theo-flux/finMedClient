import { StrictMode } from 'react';
import { StoreProvider } from '@/store';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './app.tsx';
import ModalBank from './components/modals/ModalBank.tsx';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/context/themeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster />
        <App />
        <ModalBank />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
