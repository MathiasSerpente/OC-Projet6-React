import './style.css'
import { useEffect } from 'react'
import BgAbout from '../../assets/banner-about.png'
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
      <ul className="collapse-container-about">
        {aboutList.map((e) => (
          <Collapse key={e.id} title={e.title} content={e.content} />
        ))}
      </ul>
    </main>
  )
}

export default About
