import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonTrainer from './pokemonTrainer.jsx'
import DragonTeam from './team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < PokemonTrainer/>
    <DragonTeam />
  </StrictMode>,
)
