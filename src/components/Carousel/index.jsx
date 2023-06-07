import './style.css'
import React, { useState } from 'react'
import Previous from '../../assets/previous-carousel.svg'
import Next from '../../assets/next-carousel.svg'

function Carousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function previousImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1
    )
  }

  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.pictures.length)
  }

  return (
    <div className="carousel">
      <img
        className="img-carousel"
        src={props.pictures[currentImageIndex]}
        alt={props.title}
      />
      {props.pictures.length > 1 ? (
        <div className="container-btn-carousel">
          <button className="btn-previous-carousel" onClick={previousImage}>
            <img className="arrow-carousel" src={Previous} alt="Précédente" />
          </button>
          <button className="btn-next-carousel" onClick={nextImage}>
            <img className="arrow-carousel" src={Next} alt="Suivante" />
          </button>
        </div>
      ) : null}
      {props.pictures.length > 1 ? (
        <span className="counter">
          {`${currentImageIndex + 1}/${props.pictures.length}`}
        </span>
      ) : null}
    </div>
  )
}

export default Carousel
