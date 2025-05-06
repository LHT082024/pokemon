import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import PokemonButton from './PokemonButton';
import PokemonTrainer from './PokemonTrainer';

function DragonTeam()
{
    const pokemon = new Pokemons();
    const img = pokemon.ImgPoke;

         return(
        <div className='1'>
            < PokemonButton imgSrc={img[0]} />
            < PokemonButton imgSrc={img[1]} />
            < PokemonButton imgSrc={img[2]} />
            < PokemonButton imgSrc={img[3]} />
            < PokemonButton imgSrc={img[4]} />
            < PokemonButton imgSrc={img[5]} />
        </div>
       )

       return(
        <div className='2'>
            <h1>lol</h1>
        </div>
       )
  
}

export default DragonTeam