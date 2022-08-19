import { useState } from 'react';

import './styles.css';

import { Button} from '../../components/Button';

export function On() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Dashboard Plants</h1>
      </header>

      <div class="container">
        <div>
        <p class="title">Temperature</p>
        <img src="../src/assets/termometro1.png" />
        <p id="apiResult1">0</p>
      </div>

      <div>
      <p class="title">Humidity</p>
      <img src="../src/assets/gota.png" alt="" />
      <p id="apiResult2">0</p>
    </div>

    <div>
      <p class="title">Sun</p>
      <img src="../src/assets/sol.png" alt="" />
      <p id="apiResult3">0</p>
    </div>

    <div>
      <p class="title">WaterPump</p>
      <img src="../src/assets/lampada.png" alt="" />
      <br></br>      
      <button type="button" onClick="../../pages/Home">OFF</button>
    </div>
        
      </div>

      
    </>
  )
}


