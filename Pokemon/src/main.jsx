import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonTrainer from './pokemonTrainer.jsx'
import DragonTeam from './Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < PokemonTrainer/>
    <DragonTeam />
  </StrictMode>,
)
