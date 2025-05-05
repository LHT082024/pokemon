// import './css/masterCss.css';
import {Trainer} from '../variables';

function PokemonTrainer() {
   const Alice = new Trainer("Alice", "Dragon", "Female");

   return(
    <div className='aliceTxt'>
      <p>Name: {Alice._name}</p>
      <p>Pokemon type: {Alice._types}</p>
      <p>Gender: {Alice._gender}</p>
    </div>
   );
}
export default PokemonTrainer
