import React, {useState,useEffect} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"

const AllAuthors = (props) => {

    const [allAuthors,setAllAuthors] = useState([])

    const [deleteToggle,setDeleteToggle] = useState(false);

    useEffect(() => {

        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
               // console.log("response:", res)
                setAllAuthors(res.data.results)
            })
            .catch(err=>{
                console.log("errrr",err)
            })
    },[deleteToggle,props.newAuthorToggle])


    const deleteAuthor = (_id)=>{
        console.log("deleting author with this id:", _id)
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
        .then(res=>{
            console.log("response after deleting:", res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=>console.log(err))
    }




    return(
        <div>
            <h2>We have quotes by:</h2>
                <div className="cards">
                    {
                        allAuthors.map((authorObj,idx)=>{
                            return(
                                <div key = {authorObj._id} className ="card mx-auto mb-2" style={{width: '18rem'}}>
                                    <div className ="card-body">
                                        
                                        <h5 className ="card-title">Author: {authorObj.name}</h5>
                                        
                                        
                                        <p><Link to={`/edit/${authorObj._id}`} className="btn btn-info">Edit </Link></p>
                                        
                                        <button onClick={(e)=>{deleteAuthor(authorObj._id)}} className="btn btn-danger">Delete </button>
                                    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    );
};

export default AllAuthors;