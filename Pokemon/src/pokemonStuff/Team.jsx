import { useLocation } from "react-router-dom"
import { PokemonCard } from "./PokemonCard"

function DragonTeam(props)
{
    const location  = useLocation();
    const trainer = location.state;
    console.log(trainer);
    console.log(location);
    return (
        <>
        {trainer.pokemons.map(pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>)}
        </>
    )
}

export default DragonTeam 