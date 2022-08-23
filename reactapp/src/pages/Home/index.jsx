import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';


import { Button } from '../../components/Button';

export function Home() { 
  const navigate = useNavigate();  

    return (
      <>
        <h1>Bem Vindo !!</h1>      
        <div class="waterPump">      
          <img src="../src/assets/lampada.png" alt="" />
          <br></br>          
            <Button estado="ON"             
                        
            />
        </div>
    </>
    ); 
}


  
