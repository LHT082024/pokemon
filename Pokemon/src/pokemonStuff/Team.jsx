import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import { useParams } from 'react-router-dom';
import PokemonButton from './PokemonButton';

function DragonTeam()
{
    const pokemon = new Pokemons();
    const img = pokemon.ImgPoke;
      const { id } = useParams();

    switch(id)
    {
        case 'blue':
            return (
            <div>
            < PokemonButton imgSrc={img[0]} />
            < PokemonButton imgSrc={img[1]} />
            < PokemonButton imgSrc={img[2]} />
            < PokemonButton imgSrc={img[3]} />
            < PokemonButton imgSrc={img[4]} />
            < PokemonButton imgSrc={img[5]} />       
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