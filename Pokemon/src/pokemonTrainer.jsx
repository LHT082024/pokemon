import './masterCss.css';
import {trainer} from './variables';

function pokemonTrainer() {
   const Alice = new trainer("Alice", "Dragon", "Female");
   
   return(
    <div className='aliceTxt'>
      <p>Name: {Alice._name}</p>
      <p>Pokemon type: {Alice._types}</p>
      <p>Gender: {Alice._gender}</p>
    </div>
   );
}
export default pokemonTrainer
