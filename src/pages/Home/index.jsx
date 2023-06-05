import './style.css'
import { useEffect } from 'react'
import BgHome from '../../assets/banner-home.png'
import Gallery from '../../components/Gallery'

function Home() {
  useEffect(() => {
    document.title = 'Kasa - Accueil'
  }, [])

  return (
    <main className="container-home">
      <figure className="img-container-home">
        <img src={BgHome} alt="Paysage de plage" className="bg-home" />
        <h1 className="figcaption-bg-home">Chez vous, partout et ailleurs</h1>
        <div className="overlay-home"></div>
      </figure>
      <Gallery />
    </main>
  )
}

export default Home
