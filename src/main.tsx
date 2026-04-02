import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Strict mode forces all framer motion components to use "m" instead of "motion" which dramatically cuts bundle size */}
      <LazyMotion features={domAnimation} strict>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>
)
