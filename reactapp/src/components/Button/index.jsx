import {Link, useNavigate} from 'react-router-dom';
import './styles.css';

export function Button(props) {
  const navigate = useNavigate();

  const chamarOn = (() => {
    return (     
        navigate('./On')      
    )
    
  });
  

  return (
    <>
      <button onClick={chamarOn}>      
        {props.estado}        
      </button>    
    </>
  )

}