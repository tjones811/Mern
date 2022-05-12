import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = ()=>{

    let [pokemonList,setPokemonList] = useState([])
    
    const getPokemon = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

        

        .then(convertedResponse=>{
            console.log("got response!",convertedResponse)
           setPokemonList(convertedResponse.data.results)
        })

        .catch(err=>{
            console.log("somethingwent wrong", err)
        })


    }
    
    
    return(
        <>
        <div>
            <button onClick = {getPokemon}>Fetch Pokemon</button>

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

export default Pokemon;