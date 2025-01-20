import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReciboPage from './ReciboPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    <ReciboPage />
  </StrictMode>,
)
