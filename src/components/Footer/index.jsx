import './style.css'
import VectorK from '../../assets/logo-k-footer.svg'
import VectorH from '../../assets/logo-house-footer.svg'
import VectorS from '../../assets/logo-s-footer.svg'
import VectorA from '../../assets/logo-a-footer.svg'

function Footer() {
  return (
    <footer>
      <div className="logo-container-footer">
        <img className="logo-footer" id="kL-footer" src={VectorK} alt="K" />
        <img className="logo-footer" id="hL-footer" src={VectorH} alt="A" />
        <img className="logo-footer" id="sL-footer" src={VectorS} alt="S" />
        <img className="logo-footer" id="aL-footer" src={VectorA} alt="A" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
