
import './Cards.css'
// eslint-disable-next-line react/prop-types
const Cards = ({image,heading,content}) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center card'>
      <img src={image} alt="card-svg" className="cardIcon"/>
      <h4>{heading}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Cards
