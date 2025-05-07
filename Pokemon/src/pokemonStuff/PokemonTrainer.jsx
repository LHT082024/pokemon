import trainerData from "../assets/trainerModel.json";

function PokemonTrainer() {
  console.log(trainerData)
  return(
    <div>
      {trainerData.Trainers.map((el, index) => (
        <div key={index}>
          <p>{el.trainerName}</p>
          <img src={el.trainerImg} alt="" />
        </div>
        
      ))}
    </div> 
  );
  
}
export default PokemonTrainer
