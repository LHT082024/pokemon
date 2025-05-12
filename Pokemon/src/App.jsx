import { Routes, Route } from "react-router-dom";

import TrainerButton from "./pokemonStuff/TrainerButton";
import DragonTeam from "./pokemonStuff/Team";
import './styling/masterCss.css'
import trainerData from "./trainerModel.json";
import { useState } from "react";

function App() 
{
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const trainers = trainerData.Trainers
    return (

        //Trainer buttons with images and links
        <div className="trainerRows">
            <div className="trainerDisplay">
              
              <nav className="trainerRow">
            {trainers.map(trainer =><TrainerButton imgSrc={trainer.trainerImg} linkTo={trainer.link} state={trainer}></TrainerButton>)}
            </nav>

            <Routes>
                <Route path="/Team/:id" element={<DragonTeam trainer={selectedTrainer} />}/>
            </Routes>
            </div>

            <div className="pokedexImage">
              <button className="pokedexButton">
                 <img src="src/assets/pokedex.png" alt="Pokedex" />
              </button>
            </div>
        </div>
    );
}

export default App