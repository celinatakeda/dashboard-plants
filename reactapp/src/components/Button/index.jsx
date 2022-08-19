import {useState} from 'react';

import './styles.css';

export function Button() {

  const [value, setValue] = useState(0);
  const [estado, setEstado] = useState("ON")

  function adicionar() {
    if (value == 0) {
      setEstado("ON")
    }
    if (value == 1 ) {
      return setEstado("OFF")
    }
  }

  return (
    <>
    <button type="button">{estado}</button>
    
    </>
  )

  

}