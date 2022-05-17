import React, {useState,useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';
import People from './People';

const Result = ()=>{
    let {category,id} = useParams();

    //state variable to save the information we get back from the api into
    let [detail,setDetail] = useState({});

    //state vriable for errors
    let [error,setError] = useState(false);

    useEffect(()=>{
        
        //make an axios call to the star wars api using axios
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(response=>{
            setError(false)
            console.log("response---->",response)
            setDetail(response.data);
        })
        
        .catch(err=>{
            console.log("error",err)
            setError(true)
        })
    
    },[category,id])


    return(
        <div>
            <h1>Results Component: You've selected the Category: {category} and Id:{id} </h1>

            {
                error == true?
                <>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/darth-vader-1549906397.jpg" width = "300px" alt="" />
                <h1>I am not your father and this is not a valid request!</h1>
                
                </>:
                
                category == "people"?
                <People detail={detail}></People>
                : category == "planets"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <p>Climate: {detail.climate}</p>
                    <p>Terrain: {detail.terrain}</p>
                    <p>Population: {detail.population}</p>
                </div>:
                <h1>Luke I am not your father</h1>
            }

        </div>
    )
}

export default Result;