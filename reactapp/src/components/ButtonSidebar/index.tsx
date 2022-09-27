import {useNavigate} from 'react-router-dom';
import './styles.css';

type BtnSidebarProps = {
  estado: string;
} 

export function ButtonSidebar(props: BtnSidebarProps) {

  const navigate = useNavigate(); 
  
  function MudarPagina() {
    
    if(props.estado == 'Home')
      navigate('../') 
      
    if(props.estado == 'Sobre')
      navigate('../About')
      
    if(props.estado == 'Contato')
      navigate('../Contact') 
  }

  return (
    <>
      <button className="btn" onClick={MudarPagina}>
        {props.estado}             
      </button>    
    </>
  )
}