import { json, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import './pokemon_details.css'
//hooks(like usestate, useparams, and useeffect are functions provided by react for additional functionalities and they can only be used inside react component)
//map function in array can return html element too..

function Pokemondetails({name}){    
     
          const {id}=useParams();
          const [pokedetails,setdetails]=useState({});
          async function get(id,name){  
               let responce; 
               if(name){
                     responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
               }
               else{
                    responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
               }
                    
                    const get=responce.data.types.map((el)=>el.type.name); 
                    const pokresult=responce.data;
                   setdetails({
                    img:pokresult.sprites.other.dream_world.front_default,
                    name:pokresult.name,
                    height:pokresult.height,  
                    weight:pokresult.weight,    
                    types:get
                   })
          }
          useEffect(()=>{
               get(id,name);     
          },[])
          
return(
          <div className="fullone">
          <img src={pokedetails.img} className="image"></img>
          <div>name:{pokedetails.name}</div>
          <div>height:{pokedetails.height}</div>
          <div>weight:{pokedetails.weight}</div>
         <div>types:{(pokedetails.types)?pokedetails.types.map((el,idx)=>(<span key={idx}>{el}&nbsp; &nbsp;</span>)):'no types available'}</div>  
          </div>
)
}
export default Pokemondetails