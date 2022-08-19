import './styles.css';
import { Button } from '../../components/Button';
import { On } from '../../pages/On';

export function Home() {
  return (
    <>
      <h1>Bem Vindo !!</h1>      
      <div class="waterPump">      
        <img src="../src/assets/lampada.png" alt="" />
        <br></br>
        <Button />                       
    </div>
  </>
  )
}