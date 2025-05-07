import trainerData from "../assets/trainerModel.json";

function PokemonTrainer() {
  console.log(trainerData)
  return(
    <div className="blueTrainerCard">
      {trainerData.Trainers[0].trainerName}
      <img src={trainerData.Trainers[0].trainerImg} alt="blue" />
    </div>
  );
  
}
export default PokemonTrainer
