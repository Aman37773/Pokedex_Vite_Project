import { Route, Routes} from 'react-router-dom'
import Pokedex from './pokedex'
import Pokemondetails from './pokemon_details'
function Customroutes(){
return(
<Routes>
<Route path='/' element={<Pokedex/>}></Route>
<Route path='/details/:id' element={<Pokemondetails/>}></Route>
</Routes>
)
}
export default Customroutes