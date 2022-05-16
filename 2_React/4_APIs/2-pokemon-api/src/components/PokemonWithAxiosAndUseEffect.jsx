import React, {useState,useEffect} from 'react';
import axios from 'axios';

const PokemonWithAxiosAndUseEffect = ()=>{
    console.log("first line of code in the component");

    let [pokemonList,setPokemonList] = useState([])
    let [count,setCount] = useState(0)


    useEffect(()=>{
        console.log("inside the use effect!!")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    
        .then(convertedResponse=>{
            console.log("got response!",convertedResponse)
            setPokemonList(convertedResponse.data.results)
        })
    
        .catch(err=>{
            console.log("somethingwent wrong", err)
        })

    },[count])

    console.log("doing other stuff while waiting for the api results to come back")

    //const getPokemon = ()=>{


    //}
    
    
    return(
        <>
        <div>
           {/* <button onClick = {getPokemon}></button> */}
           <button onClick= {()=>setCount(count+1)}>Reload this page</button>
           <h3>I have reloded this page {count} times</h3>
            {
                pokemonList.map((pokemon,idx)=>{
                    return(
                        <div key = {idx}>
                            <h2>-{pokemon.name}</h2>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default PokemonWithAxiosAndUseEffect;