import { Routes, Route, Link } from "react-router-dom";

//Components
import DragonTeam from "./pokemonStuff/Team";
import TrainerButton from "./pokemonStuff/TrainerButton";
import './styling/masterCss.css'
import trainerData from "./assets/trainerModel.json";

function App() 
{
  const trainer = trainerData.Trainers
    return (

        //Trainer buttons with images and links
        <div className="trainerRows">
            <div className="trainerDisplay">
              <nav className="trainerRow">

            <TrainerButton id='blue' imgSrc={trainer[0].trainerImg} linkTo="/Team/blue" />
            <TrainerButton id='calem'  imgSrc={trainer[1].trainerImg} linkTo="/Team/calem" />
            <TrainerButton id='elio'  imgSrc={trainer[2].trainerImg} linkTo="/Team/elio" />
            <TrainerButton id='gold' imgSrc={trainer[3].trainerImg} linkTo="/Team/gold" />
            </nav>

            <nav className="trainerDisplay">
            <TrainerButton id='hilbert' imgSrc={trainer[4].trainerImg} linkTo="/Team/hilbert" />
            <TrainerButton id='lucas' imgSrc={trainer[5].trainerImg} linkTo="/Team/lucas" />
            <TrainerButton id='nate' imgSrc={trainer[6].trainerImg} linkTo="/Team/nate" />
            <TrainerButton id='red' imgSrc={trainer[7].trainerImg} linkTo="/Team/red" />
            </nav>

            <Routes>
                <Route path="/Team/:id" element={<DragonTeam />}/>
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