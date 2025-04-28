import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DragonTeam from './Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DragonTeam />
  </StrictMode>,
)
