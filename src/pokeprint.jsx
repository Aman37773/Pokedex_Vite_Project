import './innerpok.css'
import { Link } from 'react-router-dom'
function Pokeprint(props){
return(
/* we would have used anchor tag but it will refresh page which we do not want*/<Link to={`/details/${props.id}`}>   
          <div className="inner-pok"> 
                    <img src={props.image}></img>
                    <div>{props.name}</div>
          </div>
          </Link>
          
)
}
export default Pokeprint