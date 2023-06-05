import './style.css'
import Card from '../Card'
import housingList from '../../datas/housingList.json'

function Gallery() {
  return (
    <div className="gallery">
      {housingList.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          title={e.title}
          cover={e.cover}
          description={e.description}
        />
      ))}
    </div>
  )
}

export default Gallery
