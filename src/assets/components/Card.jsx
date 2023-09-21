import {Card as CardB} from 'react-bootstrap';
const Card = ({nombre,url, informacion,boton}) => {
  return (
    <div>
    <CardB>
      <h3>{nombre}</h3>
      <img src={url} alt={nombre} />
      <p>{informacion}</p>
      <div>{boton}</div>
    </CardB>
      </div>
    
  )
}

export default Card