import '../styling/masterCss.css'
import { Link } from 'react-router-dom'

function TrainerButton({imgSrc, linkTo, state})
{
    return(
        <Link to={linkTo} state={state}>
                 <button id="trainerButton">
                    <img src={imgSrc} alt="" id="trainerButtonImg"/>
                 </button>
        </Link>
    );     
}

export default TrainerButton