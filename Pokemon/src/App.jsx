import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokemonTrainer from "./pokemonStuff/PokemonTrainer";
import DragonTeam from "./pokemonStuff/Team";

function App() 
{
    return (
    <div>
        <nav>
            <Link to="./pokemonStuff/Team">
                 <button>Team</button>
            </Link>
        </nav>
        <Routes>
            <Route path="./pokemonStuff/Team" element={<DragonTeam />}/>
        </Routes>
    </div>
    );
}

export default App