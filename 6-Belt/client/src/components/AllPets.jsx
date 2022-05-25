import React, {useState,useEffect} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"

const AllPets = (props) => {
    
    const [allPets,setAllPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            console.log("response:",res)
            setAllPets(res.data.results)
        })
        .catch(err => {
            console.log("error:",err)
        })
    },[])
    
    
    return(
        <>
            <div>
                <h2>These pets are looking for a good home</h2>
                <table className="table">
                    {<>
                        
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPets.map((petObj, idx)=>{
                                    return(
                                        <tr>
                                            <td>{petObj.name}</td>
                                            <td>{petObj.type}</td>
                                            <td className="d-flex justify-content-center">
                                            <p><Link to={`/pets/${petObj._id}`} className="btn btn-info">Details</Link></p>
                                            <p><Link to={`/edit/${petObj._id}`} className="btn btn-info">Edit</Link></p>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </>
                        
                    }
                </table>
            </div>
        </>
    )
}

export default AllPets