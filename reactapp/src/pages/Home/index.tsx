import { useState, FormEvent  } from "react";
import { useNavigate } from "react-router-dom";

import { Sidebar } from '../../components/Sidebar';
import './styles.css';

export function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {

    navigate('/Off')
  }  

  return (
    <div className="page">
      <Sidebar />
      <div className="pagina-home">      
        <h1>Bem Vindo !!</h1>
       
        <div className="login">
          <h2 className="title-login">Entrar</h2>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)} 
            placeholder="Digite seu e-mail"           
          />

          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            placeholder="Digite sua senha"              
          />

          <button type="submit" className="btn-submit" onClick={handleLogin}>Entrar</button>
                    
        </div>        
      </div>
    </div>
  );
}