import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router";
import {useHistory,Link} from "react-router-dom"



const EditAuthorForm = () =>{

    const{_id} = useParams();

    const [authorInfo,setAuthorInfo] = useState({})

    const history = useHistory();//initialize history so we can redirect using history.push()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            console.log("res-->",res)
            setAuthorInfo(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])

    const changeHandler = (e) => {

            setAuthorInfo({
                ...authorInfo,
                [e.target.name]:e.target.value
            })
        
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`,authorInfo)
            .then(res=>{
                console.log(res)
                history.push("/")//redirect after updating form
            })
            .catch(err=>console.log(err))

    }

    return (
        <>
            <div>
                    <Link to={`/`}>Home </Link>
                    <h3>Edit this Author</h3>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text" name="name" onChange={changeHandler}  className="form-control" value={authorInfo.name} />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-success mt-2" />
                    </form>
                    <p><Link to={`/`} className="btn btn-danger mt-2">Cancel </Link></p>
            </div>
        </>
    );
};

export default EditAuthorForm;