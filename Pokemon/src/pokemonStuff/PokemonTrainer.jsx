import trainerData from "../assets/trainerModel.json";

function PokemonTrainer() {
  console.log(trainerData)
  return(
    // <div>
    //   {trainerData.Trainers.map((el, index) => (
    //     <div key={index}>
    //       <p>{trainerData.Trainers[0].trainerName}</p>
    //       {/* <img src={el.trainerImg} alt="" /> */}
    //     </div>
    //   ))}
    // </div> 
    <div>
      {trainerData.Trainers[0].trainerName}
    </div>
  );
  
}
export default PokemonTrainer
