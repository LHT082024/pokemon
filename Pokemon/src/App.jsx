import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TrainerImages } from "./variables";
import DragonTeam from "./pokemonStuff/Team";
import './styling/masterCss.css'

function App() 
{
  const trainer = new TrainerImages();
  const img = trainer.imgsTrain;
    return (
        
    <div id="trainerDisplay">
        <nav>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
        </nav>
        <Routes>
            <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
        </Routes>
    </div>
    );
}

export default App