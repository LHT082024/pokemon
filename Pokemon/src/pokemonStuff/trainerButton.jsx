import '../styling/masterCss.css'
import { Link } from 'react-router-dom'

function trainerButton({imgSrc, linkTo})
{
    return(
        <Link to={linkTo}>
                 <button>
                    <img src={imgSrc} alt="" id="trainerButton"/>
                 </button>
        </Link>
    );     
}

export default trainerButton