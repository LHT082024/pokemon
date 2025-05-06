import trainerModel from '../assets/trainerModel.json'


function PokemonTmodel()
{
    const trainer = trainerModel.Trainers;

    return(
        trainer.trainerName = "",
        trainer.trainerImg = "",
        
        trainer.pokemonName1 = "",
        trainer.pokemonName2 = "",
        trainer.pokemonName3 = "",
        trainer.pokemonName4 = "",
        trainer.pokemonName5 = "", 
        trainer.pokemonName6 = ""
    );
}

export default PokemonTmodel