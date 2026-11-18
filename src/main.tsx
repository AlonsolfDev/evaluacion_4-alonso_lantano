import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import TemaProvider from './context/TemaProvider'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <App />
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>,
)