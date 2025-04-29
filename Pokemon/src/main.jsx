import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonTrainer from './PokemonTrainer'
import DragonTeam from './Team'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="appContainer">
    < PokemonTrainer/>
    <DragonTeam />
    </div>
  </StrictMode>,
)
