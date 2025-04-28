import './App.css';
import Trainer from './variables';

function App() {
   const Alice = new Trainer ("Alice", "Dragon", "Female");
   
   return(
    <div className='aliceTxt'>
      <p>{Alice._name}</p>
      <p>{Alice._types}</p>
      <p>{Alice._gender}</p>
    </div>
   );
}
export default App
