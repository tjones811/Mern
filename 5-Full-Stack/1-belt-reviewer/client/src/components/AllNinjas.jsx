import React, {useState,useEffect} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"

const AllNinjas = (props) => {

    const [allNinjas,setAllNinjas] = useState([])

    const [deleteToggle,setDeleteToggle] = useState(false);

    useEffect(() => {

        axios.get("http://localhost:8000/api/ninjas")
            .then(res=>{
               // console.log("response:", res)
                setAllNinjas(res.data.results)
            })
            .catch(err=>{
                console.log("errrr",err)
            })
    },[deleteToggle,props.newNinjaToggle])


    const deleteNinja = (_id)=>{
        console.log("deleting ninja with this id:", _id)
        axios.delete(`http://localhost:8000/api/ninjas/delete/${_id}`)
        .then(res=>{
            console.log("response after deleting:", res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=>console.log(err))
    }




    return(
        <div>
            <h2>All the ninjas</h2>
                <div className="cards">
                    {
                        allNinjas.map((ninjaObj,idx)=>{
                            return(
                                <div key = {ninjaObj._id} className ="card mx-auto mb-2" style={{width: '18rem'}}>
                                    <div className ="card-body">
                                        
                                        <h5 className ="card-title"><Link to={`/ninjas/${ninjaObj._id}`}>{ninjaObj.name}</Link></h5>
                                        
                                        <h6 className ="card-subtitle mb-2 text-muted">Number of Projects: {ninjaObj.numProjects}</h6>
                                        
                                        <p className ="card-text">Gradution Date: {ninjaObj.gradDate}</p>
                                        
                                        <p className ="card-text">Veteran Status:{ninjaObj.isVeteran? "Veteran": "Non-Veteran"}</p>
                                        
                                        <p><Link to={`/edit/${ninjaObj._id}`} className="btn btn-info">Edit {ninjaObj.name}</Link></p>
                                        
                                        <button onClick={(e)=>{deleteNinja(ninjaObj._id)}} className="btn btn-danger">Delete {ninjaObj.name}</button>
                                    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    );
};

export default AllNinjas;