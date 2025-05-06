import { Link } from 'react-router-dom'

function PokemonButton({imgSrc, linkTo})
{
   return(
        <Link to={linkTo}>
                 <button id="pokemonButton">
                    <img src={imgSrc} alt="" id="pokemonButtonImg"/>
                 </button>
        </Link>
    );     
}

export default PokemonButton