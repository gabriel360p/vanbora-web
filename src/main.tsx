import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Roteamento from './routes.tsx'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
Yup.setLocale(pt);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Roteamento />
  </StrictMode>,
)
