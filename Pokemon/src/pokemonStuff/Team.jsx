import '../styling/masterCss.css'
import { data, useParams } from 'react-router-dom';
import trainerData from '../trainerModel.json'

function DragonTeam()
{
    const trainer = trainerData.Trainers
    const pokemon = "";
    const datas = "";
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
            //decides this trainer is the right one
            trainer[0].pokemons.forEach(pokemon =>{
                fetchData(pokemon);
            })

            return (
            <div id='pokemonTeamB'>
                <p>{data}</p>
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