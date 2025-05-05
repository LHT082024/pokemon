import '../styling/masterCss.css'
import { Link } from 'react-router-dom'

function TrainerButton({imgSrc, linkTo})
{
    return(
        <Link to={linkTo}>
                 <button id="trainerButton">
                    <img src={imgSrc} alt="" id="trainerButtonImg"/>
                 </button>
        </Link>
    );     
}

export default TrainerButton