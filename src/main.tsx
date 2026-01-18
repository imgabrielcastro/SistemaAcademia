  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import Inicio from './pages/Inicio';
  import { ThemeProvider, CssBaseline } from '@mui/material';
  import { theme } from './theme/';  

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Inicio /> 
      </ThemeProvider>
    </StrictMode>,
  )
