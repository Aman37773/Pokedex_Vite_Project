import './search.css'
import debounce from './debounce'
function Search({setterm}){
          const p=debounce((el)=>setterm(el.target.value))
return (
          <>
          <input
           type="text" 
           placeholder='search pokemon..' 
           className="search"
           onChange={p}>
          </input>
          </>
)
}
export default Search