import { useState,useEffect } from "react";
import axios from "axios";
//           let [x,setx]=useState(0);
// useEffect(()=>{console.log('state called')},[x])   any change in x will call useeffect and if i mention [](empty array) then useeffect will be called at first rendering(loading) of site and if i do not mention array then firsteffect will be called by rendering(loading) of anything..


// let [isloading,setloading]=useState(true);
// let [pokemonlist,setpokemonlist]=useState([]);
// let [url,seturl]=useState(' https://pokeapi.co/api/v2/pokemon')
// let [prev,setprev]=useState(null);
// let [next,setnext]=useState(null);
//instead of allthese state variables, we used singe statevariable as object.. 
function pokemon_custom_hook(){
          let [statevar,setstatevar]=useState({
                    isloading:true,
                    pokemonlist:[],
                    url:' https://pokeapi.co/api/v2/pokemon',
                    prev:null,
                    next:null
          });
          
          
          useEffect( ()=>{  //function just inside useeffect shoud never be async
                    (async()=>{ 
                     let responce=await axios.get(statevar.url)
                     const pokresult=responce.data.results;
                    setstatevar((state)=>({...state,prev:responce.data.previous}));   //we wrote setstateevar multiple times but this same function so only last one will run but if we want to run  multiple times then mention ...state
                    setstatevar((state)=>({...state,next:responce.data.next}));
                    const pokresults=pokresult.map((pok)=> axios.get(pok.url));
                    const pokemonresults=await axios.all(pokresults);
                    let info=pokemonresults.map((pok)=>{
                              const pokdata=pok.data;
                              return{name:pokdata.species.name,image:pokdata.sprites.other.dream_world.front_default,types:pokdata.types,id:pokdata.id}
                    })
                    
                    setstatevar((state)=>({...state,pokemonlist:info}));
                    setstatevar((state)=>({...state,isloading:false}));
                    })()
          },[statevar.url]) 
          return {statevar,setstatevar};
}


export {pokemon_custom_hook}