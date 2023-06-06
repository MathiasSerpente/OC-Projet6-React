import './style.css'
import housingList from '../../datas/housingList.json'
import RedStar from '../../assets/red-star.svg'
import GreyStar from '../../assets/grey-star.svg'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collaspe'

function Housing() {
  const { id } = useParams()
  const housing = housingList.find((housing) => housing.id === id)
  const ratingsArray = [1, 2, 3, 4, 5]
  const tagsArray = housing.tags
  const equipmentsArray = housing.equipments

  return (
    <main className="container-housing">
      <Carousel
        id={housing.id}
        pictures={housing.pictures}
        title={housing.title}
      />
      <div className="description-housing">
        <div className="container-tlt-or-housing">
          <div className="container-title-location-tags-housing">
            <h1 className="title-housing">{housing.title}</h1>
            <h2 className="location-housing">{housing.location}</h2>
            <div className="tags-housing">
              {tagsArray.map((e, index) => {
                const tag = (
                  <div className="container-tag" key={index}>
                    <span className="tag">{e}</span>
                  </div>
                )
                return tag
              })}
            </div>
          </div>
          <div className="container-owner-ratings-housing">
            <div className="owner-housing">
              <div className="name-owner-housing">{housing.host.name}</div>
              <img
                className="picture-owner-housing"
                src={housing.host.picture}
                alt="Propriétaire"
              />
            </div>
            <div className="ratings-housing">
              {ratingsArray.map((e) => {
                const star =
                  parseInt(housing.rating) >= e ? (
                    <img
                      key={e}
                      className="star"
                      src={RedStar}
                      alt={`${e} étoile`}
                    />
                  ) : (
                    <img key={e} className="star" src={GreyStar} alt="" />
                  )
                return star
              })}
            </div>
          </div>
        </div>
        <ul className="container-collapses-housing">
          <Collapse title="Description" content={housing.description} />
          <Collapse
            title="Équipements"
            content={
              <div className="collapse-equipment-housing">
                {equipmentsArray.map((e, index) => {
                  const collaspeContent = (
                    <span key={index} className="item-collapse">
                      {e}
                    </span>
                  )
                  return collaspeContent
                })}
              </div>
            }
          />
        </ul>
      </div>
    </main>
  )
}

export default Housing
