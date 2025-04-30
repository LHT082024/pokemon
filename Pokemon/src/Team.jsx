import './css/masterCss.css';
import { Team } from "./variables";

function DragonTeam()
{
    return(
   <div className="teamDragon">
    <button onClick={"button clicked"}>
        <img className='pokemon' src="./src/assets/pokemon/Zekrom.png" alt="Zekrom" />
    </button>
    <button>
        <img className='pokemon' src="./src/assets/pokemon/Dragonair.png" alt="Zekrom" />
    </button>
    <button>
        <img className='pokemon' src="./src/assets/pokemon/Haxorus.png" alt="Zekrom" />
    </button>
    <button>
        <img className='pokemon' src="./src/assets/pokemon/Hydreigon.png" alt="Zekrom" />
    </button>
    <button>
        <img className='pokemon' src="./src/assets/pokemon/Kingdra.png" alt="Zekrom" />
    </button>
    <button>
        <img className='pokemon' src="./src/assets/pokemon/Salamence.png" alt="Zekrom" />
    </button>
   </div> 
    )
}

export default DragonTeam