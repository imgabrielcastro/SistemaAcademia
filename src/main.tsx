import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material';
import AlunosProvider from "./contexts/AlunosContext";
import { theme } from './theme/';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlunosProvider>
        <App />
      </AlunosProvider>
    </ThemeProvider>
  </StrictMode>,
)
