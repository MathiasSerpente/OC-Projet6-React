import './style.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <figure className="card">
      <Link to={`/housing/${props.id}`}>
        <img src={props.cover} alt={props.description} className="img-card" />
        <div className="overlay-card"></div>
        <figcaption className="figcaption-card">{props.title}</figcaption>
      </Link>
    </figure>
  )
}

export default Card
