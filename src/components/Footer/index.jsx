import './style.css'
import Logo from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
