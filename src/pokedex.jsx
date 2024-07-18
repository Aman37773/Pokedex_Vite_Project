import Search from "./search"
import { pokemon_custom_hook } from "./poke-custom-hook"
import './pokedex-wrapper.css'
import Pokeprint from "./pokeprint"
import Pokemondetails from "./pokemon_details"
import { useState } from "react"
 function Pokedex(){  //react component should never be async
   /*{isloading&&(<div>loading...</div>)}    {!isloading&& <div>data downloaded</div>}  */  /*isloading can also be written like this*/
const {statevar,setstatevar}=pokemon_custom_hook()
const [term,setterm]=useState('');
          return(
                    <div className="pokedex-wrapper">
                    <h1>pokedex</h1>
                    <Search setterm={setterm}/>
                    {term.length!=0 && <Pokemondetails key={term} name={term}/>  /*here whenever term changed and its length!=0 react was trying to call pokemon_details but as pokemon_details was same component everytime so it call it once but we used key prop to uniquely identify pokemon_details component at every term length change which helps to call it multiple times*/ }
                 {!term.length &&  <div>{(statevar.isloading)?'loading...':'data downloaded...'}</div> }  
                    {!statevar.isloading && !term.length && <div className="pok-wrapper">{statevar.pokemonlist.map((pok)=><Pokeprint name={pok.name} image={pok.image} id={pok.id} key={pok.id} />)}</div>}
                    <div className="btn">
                   {!term.length && <button className="btn1" disabled={!statevar.prev} onClick={()=>setstatevar((state)=>({...state,url:statevar.prev}))}>prev</button> }
                   {!term.length && <button className="btn2" disabled={!statevar.next} onClick={()=>setstatevar((state)=>({...state,url:statevar.next}))}>next</button>  }
                    </div>
 
                    </div>
                    
                    
          )
}

export default Pokedex