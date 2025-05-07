import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import { useParams } from 'react-router-dom';
import PokemonButton from './PokemonButton';
import trainerData from '../trainerModel.json'

function DragonTeam()
{
    const trainer = trainerData.Trainers
    const pokemon = new Pokemons();
    const img = pokemon.ImgPoke;
      const { id } = useParams();
 
   fetch("https://pokeapi.co/api/v2/pokemon/zekrom")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

    switch(id)
    {
        case 'blue':
            return (
            <div id='pokemonTeamB'>
                <div>{trainer[0].trainerName}</div>
                <div>{trainer[0].pokemons[0]}</div>
                <div>{trainer[0].pokemons[1]}</div>
            </div>
            );
        
        case 'calem':
            return (
            <div>working</div>
            );
        
        case 'elio':
            return (

                <div>lets go</div>        
            );
        default:
        return <div>Trainer not found.</div>;
    }
}

export default DragonTeam