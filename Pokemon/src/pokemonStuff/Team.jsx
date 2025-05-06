import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import PokemonButton from './PokemonButton';

function DragonTeam()
{
    const pokemon = new Pokemons();
    const img = pokemon.ImgPoke;
    return(
        <div>
            < PokemonButton imgSrc={img[0]} />
            < PokemonButton imgSrc={img[1]} />
            < PokemonButton imgSrc={img[2]} />
            < PokemonButton imgSrc={img[3]} />
            < PokemonButton imgSrc={img[4]} />
            < PokemonButton imgSrc={img[5]} />
        </div>
    )
}

export default DragonTeam