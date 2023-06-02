import './style.css'
import { useEffect } from 'react'
import BgHome from '../../assets/home-bg.jpg'
import CardHome from '../../components/CardHome'
import housingList from '../../datas/housingList.json'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    document.title = 'Kasa - Accueil'
  }, [])

  return (
    <main className="container-home">
      <figure className="img-container-home">
        <img src={BgHome} alt="Paysage de plage" className="bg-home" />
        <figcaption className="figcaption-bg-home">
          Chez vous, partout et ailleurs
        </figcaption>
        <div className="overlay-home"></div>
      </figure>
      <section className="card-container-home">
        {housingList.map(({ id, cover, title, description }) => (
          <Link>
            <CardHome
              key={id}
              cover={cover}
              title={title}
              description={description}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
