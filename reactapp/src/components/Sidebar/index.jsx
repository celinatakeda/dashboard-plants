import './styles.css';

export function Sidebar() {
  return (
    <div class="page">
      <aside>
        <div class="logo">
          <img src="https://avatars.githubusercontent.com/u/112397871?s=200&v=4" />
          <span>Organization</span>
        </div>

        <div id="rootMenu">
          <p><a href="">Home</a></p>
          <p><a href="./src/pages/sobre/index.jsx">Sobre</a></p>
          <p><a href="./src/pages/">Contato</a></p>          
        </div>
      </aside>
    </div>
  )
}