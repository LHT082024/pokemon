import '../styling/masterCss.css'
import { Pokemons } from '../variables';
import PokemonButton from './PokemonButton';
import PokemonTrainer from './PokemonTrainer';

function DragonTeam(selectedId)
{
    const pokemon = new Pokemons();
    const img = pokemon.ImgPoke;

    switch(selectedId)
    {
        case '0':
            return <div>
            < PokemonButton imgSrc={img[0]} />
            < PokemonButton imgSrc={img[1]} />
            < PokemonButton imgSrc={img[2]} />
            < PokemonButton imgSrc={img[3]} />
            < PokemonButton imgSrc={img[4]} />
            < PokemonButton imgSrc={img[5]} />       
            </div>;
        
        case '1':
            return <div>working</div>;
        
        case '2':
            return <div>lets go</div>;         
    }

         
   

  
}

export default DragonTeam