import { ButtonSidebar } from '../ButtonSidebar';
import './styles.css';

export function Sidebar() { 
  return (
    <div className="page">
      <aside>
        <div className="logo">
          <img src="https://avatars.githubusercontent.com/u/112397871?s=200&v=4" />
          <span>Organization</span>
        </div>
        <div className="btn-sidebar">
          <ButtonSidebar estado="Home" />
          <ButtonSidebar estado="Sobre" />
          <ButtonSidebar estado="Contato" />  
        </div>
      </aside>
    </div>
  )
}