import { Sidebar } from '../../components/Sidebar'
import { Button } from '../../components/Button';
import './styles.css';

export function Home() {
  return (
    <div class="page">
      <Sidebar />
      <div class="pagina-home">      
        <h1>Bem Vindo !!</h1>
       
        <div class="login">
          <h2 class="title-login">Entrar</h2>          
          <input type="email" placeholder="Digite seu e-mail"></input>
          <input type="password" placeholder="Digite sua senha"></input>
          <button type="submit" class="btn-submit">Entrar</button>
        </div>                         
        <Button estado="Entrar" />  
      </div>
    </div>
  );
}