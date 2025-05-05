import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//Components
import { TrainerImages } from "./variables";
import DragonTeam from "./pokemonStuff/Team";
import TrainerButton from "./pokemonStuff/TrainerButton";
import './styling/masterCss.css'

function App() 
{
  const trainer = new TrainerImages();
  const img = trainer.imgsTrain;
    return (
        
    <div>
        <nav id="trainerDisplay">
         <TrainerButton imgSrc={img[0]} linkTo="/Team" />
         <TrainerButton imgSrc={img[1]} linkTo="/Team" />
         <TrainerButton imgSrc={img[2]} linkTo="/Team" />
         <TrainerButton imgSrc={img[3]} linkTo="/Team" />
        </nav>

         <nav id="trainerDisplay">
         <TrainerButton imgSrc={img[4]} linkTo="/Team" />
         <TrainerButton imgSrc={img[5]} linkTo="/Team" />
         <TrainerButton imgSrc={img[6]} linkTo="/Team" />
         <TrainerButton imgSrc={img[7]} linkTo="/Team" />
        </nav>

        <Routes>
            <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
        </Routes>
    </div>

    
    );
}

export default App