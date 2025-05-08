import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import { useParams } from 'react-router-dom';
import trainerData from '../trainerModel.json'

function DragonTeam()
{
    const trainer = trainerData.Trainers
    const pokemon = "";
      const { id } = useParams();

         function fetchData(pokemon)
            {
                
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

            }


    switch(id)
    {
        case 'blue':
            trainer[0].pokemons.forEach(pokemon =>{
                fetchData(pokemon);
            })
            
            return (
            <div id='pokemonTeamB'>
                <p>{pokemon}</p>
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