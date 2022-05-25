import React, {useState,useEffect} from 'react';
import {useParams} from "react-router"
import axios from 'axios';
import {useHistory,Link} from "react-router-dom"

const OnePet = () => {

    const{_id} = useParams();

    const history = useHistory();



    const[petInfo,setPetInfo] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res=>{
            console.log(res);
            setPetInfo(res.data.results);
        })
        .catch(err=>console.log(err));
    },[])



const deletePet = ()=>{
    axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
    .then(res=>{
        console.log("res-->",res);
        history.push("/")
    })
    .catch(err=>console.log(err));
}



    return(
        <>
            <div>
                <h3>Details About: {petInfo.name}</h3>
                <h4>Pet Type: {petInfo.type}</h4>
                <h4>Pet Description: {petInfo.description}</h4>
                <h4>Skills:</h4>
                <ul class="list-group">
                    <li class="list-group-item">{petInfo.skill1}</li>
                    <li class="list-group-item">{petInfo.skill2}</li>
                    <li class="list-group-item">{petInfo.skill3}</li>
                </ul>

                <button onClick={deletePet} className="btn btn-danger">Adopt {petInfo.name}</button>
                <Link to = "/">back to home</Link>
            </div>
        </>
    );
};

export default OnePet;