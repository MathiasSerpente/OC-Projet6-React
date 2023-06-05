import './style.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <div>
        <Link className="link-logo-header" to="/">
          <img className="logo" src={Logo} alt="Logo Kasa" />
        </Link>
      </div>
      <nav className="links-container-header">
        <Link className="nav-link-header" to="/">
          Accueil
        </Link>
        <Link className="nav-link-header" to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
