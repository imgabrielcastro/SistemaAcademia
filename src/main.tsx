import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material';
import AlunosProvider from "./contexts/AlunosContext";
import { theme } from './theme/';
import App from './App';
import AulasProvider from './contexts/AgendaContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlunosProvider>
        <AulasProvider>
          <App />
        </AulasProvider>
      </AlunosProvider>
    </ThemeProvider>
  </StrictMode>,
)
