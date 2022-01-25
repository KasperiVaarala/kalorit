import { useState } from 'react';
import './App.css';

function App() {
  const [paino, setPaino] = useState(0);
  const [intensiteetti, setIntensiteetti] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);

  function laske(e) {
    e.preventDefault();
    let kalorit = 0;
    if (sukupuoli === 'mies') {
      kalorit = (879 + 10.2 * paino) * intensiteetti
    } else { 
      kalorit = (795 + 7.18 * paino) * intensiteetti

    }
    setTulos(kalorit)
  }

  return (
   <form>
     <div>
     <label> Paino</label>
     <input type="number" value={paino} onChange={e => setPaino(e.target.value)} ></input>
     </div>
     <div>
       <label>Intensiteettii</label>
       <select onChange={e => setIntensiteetti(e.target.value)}>
         <option value="1.3">Kevyt</option>
         <option value="1.5">Tavallinen</option>
         <option value="1.7">kohtuullinen</option>
         <option value="2">kova</option>
         <option value="2.2">erittäin kova</option>

       </select>
     </div>
     <div>
       <label>Sukupuoli</label>
       <label> <input type="radio" name="sukupuoli" value="mies" onChange={e => setSukupuoli(e.target.value)} defaultChecked>Mies</input></label>
       <label> <input type="radio" name="sukupuoli" value="nainen" >Nainen</input></label>
     </div>
     <div>
       <label>Kalorit</label>
       <output>{tulos.toFixed(0)}</output>
     </div>
     <button type="button" onClick={laske}>Laske</button>
   </form>
  );
}

export default App;
