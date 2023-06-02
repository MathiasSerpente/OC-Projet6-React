import './style.css'

function CardHome({ id, title, cover, description }) {
  return (
    <figure key={id} className="card-gallery" onClick="">
      <img src={cover} alt={description} className="img-card-gallery" />
      <figcaption className="figcaption-card-gallery">{title}</figcaption>
    </figure>
  )
}

export default CardHome
