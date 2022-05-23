import React, {useState,useEffect} from 'react';
import {useParams} from "react-router"
import axios from 'axios';
import {useHistory} from "react-router-dom"// import useHistory so we can redirect

const OneNinja = () => {

    const{_id} = useParams();

    const history = useHistory();//initialize useHistory into a variable



    //state variable to store the one ninja information we get back from the api call
    const[ninjaInfo,setNinjaInfo] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
        .then(res=>{
            console.log(res);
            setNinjaInfo(res.data.results);
        })
        .catch(err=>console.log(err));
    },[])


//when i click on the button, i want it to make a request to the backend to delete something based on the id

//delete ninja
const deleteNinja = ()=>{
    axios.delete(`http://localhost:8000/api/ninjas/delete/${_id}`)
    .then(res=>{
        console.log("res-->",res);
        history.push("/")
    })
    .catch(err=>console.log(err));
}



    return(
        <>
            <div>
                <h3>Name: {ninjaInfo.name}</h3>
                <p>Number of Projects: {ninjaInfo.numProjects}</p>
                <p>Graduation Date: {ninjaInfo.gradDate}</p>
                <p>Veteran Status: {ninjaInfo.isVeteran? "Veteran":"Non-Veteran"}</p>
                <button onClick={deleteNinja} className="btn btn-danger">Delete {ninjaInfo.name}</button>
            </div>
        </>
    );
};

export default OneNinja;