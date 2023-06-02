import './style.css'
import { useEffect } from 'react'
import BgAbout from '../../assets/about-bg.jpg'
import aboutList from '../../datas/aboutList.json'
import Collapse from '../../components/Collaspe'

function About() {
  useEffect(() => {
    document.title = 'Kasa - A Propos'
  }, [])

  return (
    <main className="container-about">
      <div className="img-container-about">
        <img src={BgAbout} alt="Paysage de montagne" className="bg-about" />
        <div className="overlay-about"></div>
      </div>
      <section className="collapse-container-about">
        {aboutList.map((element) => (
          <Collapse
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}
      </section>
    </main>
  )
}

export default About
