import './styles.css';

import { On } from '../../pages/On';

export function Home() {
  return (
    <>
      <h1>Bem Vindo !!</h1>      
      <div class="waterPump">      
        <img src="../src/assets/lampada.png" alt="" />
        <br></br>
        <button type="button" onClick="../../pages/On">ON</button>                
    </div>
  </>
  )
}