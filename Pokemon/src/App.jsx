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

        //Trainer buttons with images and links
        <div className="trainerRows">
            <div className="trainerDisplay">
              <nav className="trainerRow">
            <TrainerButton id='blue' imgSrc={img[0]} linkTo="/Team" />
            <TrainerButton id='calem' imgSrc={img[1]} linkTo="/Team" />
            <TrainerButton id='elio' imgSrc={img[2]} linkTo="/Team" />
            <TrainerButton id='gold' imgSrc={img[3]} linkTo="/Team" />
            </nav>

            <nav className="trainerDisplay">
            <TrainerButton id='hilbert' imgSrc={img[4]} linkTo="/Team" />
            <TrainerButton id='lucas' imgSrc={img[5]} linkTo="/Team" />
            <TrainerButton id='nate' imgSrc={img[6]} linkTo="/Team" />
            <TrainerButton id='red' imgSrc={img[7]} linkTo="/Team" />
            </nav>

            <Routes>
                <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
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