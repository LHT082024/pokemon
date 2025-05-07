import { Routes, Route, Link } from "react-router-dom";

//Components
import { TrainerImages } from "./variables";
import DragonTeam from "./pokemonStuff/Team";
import TrainerButton from "./pokemonStuff/TrainerButton";
import PokemonTmodel from "./pokemonTrainers";
import PokemonTrainer from "./pokemonStuff/PokemonTrainer";
import './styling/masterCss.css'

function App() 
{
  // const trainerM = new PokemonTmodel();
  // const trainer = new TrainerImages();
  // const img = trainer.imgsTrain;
    return (
      <PokemonTrainer />

  //       //Trainer buttons with images and links
  //       <div className="trainerRows">
  //           <div className="trainerDisplay">
  //             <nav className="trainerRow">
  //               <h1>{trainerM.trainerName = "blue"}</h1>



  //           <TrainerButton id='blue' imgSrc={img[0]} linkTo="/Team/blue" />
  //           <TrainerButton id='calem'  imgSrc={img[1]} linkTo="/Team/calem" />
  //           <TrainerButton id='elio'  imgSrc={img[2]} linkTo="/Team/elio" />
  //           <TrainerButton id='gold' imgSrc={img[3]} linkTo="/Team/gold" />
  //           </nav>

  //           <nav className="trainerDisplay">
  //           <TrainerButton id='hilbert' imgSrc={img[4]} linkTo="/Team/hilbert" />
  //           <TrainerButton id='lucas' imgSrc={img[5]} linkTo="/Team/lucas" />
  //           <TrainerButton id='nate' imgSrc={img[6]} linkTo="/Team/nate" />
  //           <TrainerButton id='red' imgSrc={img[7]} linkTo="/Team/red" />
  //           </nav>

  //           <Routes>
  //               <Route path="/Team/:id" element={<DragonTeam />}/>
  //           </Routes>
  //           </div>

  //           <div className="pokedexImage">
  //             <button className="pokedexButton">
  //                <img src="src/assets/pokedex.png" alt="Pokedex" />
  //             </button>
  //           </div>
  //       </div>
    );
}

export default App