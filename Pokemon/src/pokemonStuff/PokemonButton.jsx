function pokemonButton({imgSrc, linkTo})
{
   return(
        <Link to={linkTo}>
                 <button id="pokemonButton">
                    <img src={imgSrc} alt="" id="pokemonButtonImg"/>
                 </button>
        </Link>
    );     
}