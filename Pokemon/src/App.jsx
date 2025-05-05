import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//Components
import { TrainerImages } from "./variables";
import DragonTeam from "./pokemonStuff/Team";
import trainerButton from "./pokemonStuff/TrainerButton";
import './styling/masterCss.css'

function App() 
{
  const trainer = new TrainerImages();
  const img = trainer.imgsTrain;
    return (
        
    <div>
        <nav id="trainerDisplay">
         
        </nav>
        <Routes>
            <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
        </Routes>
    </div>
    );
}

export default App