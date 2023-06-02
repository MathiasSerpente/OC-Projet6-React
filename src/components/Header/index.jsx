import './style.css'
import { Link } from 'react-router-dom'
import VectorK from '../../assets/logo-k.svg'
import VectorH from '../../assets/logo-house.svg'
import VectorS from '../../assets/logo-s.svg'
import VectorA from '../../assets/logo-a.svg'

function Header() {
  return (
    <header className="logo-container-header">
      <div>
        <Link className="link-logo-header" to="/">
          <img className="logo-header" id="kL-header" src={VectorK} alt="K" />
          <img className="logo" id="hL-header" src={VectorH} alt="A" />
          <img className="logo" id="sL-header" src={VectorS} alt="S" />
          <img className="logo" id="aL-header" src={VectorA} alt="A" />
        </Link>
      </div>
      <nav className="links-container-header">
        <Link className="nav-link-header" to="/">
          Accueil
        </Link>
        <Link className="nav-link-header" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
