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
        
    <div>
        <nav id="trainerDisplay">
            <Link to="/Team">
                 <button>
                    <img src={img[0]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[1]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[2]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[3]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[4]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[5]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[6]} alt="" id="trainerButton"/></button>
            </Link>
            <Link to="/Team">
                 <button>
                    <img src={img[7]} alt="" id="trainerButton"/></button>
            </Link>
        </nav>
        <Routes>
            <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
        </Routes>
    </div>
    );
}

export default App