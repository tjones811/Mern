import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,Link} from "react-router-dom"


const NewAuthorForm = (props) => {

    let [name,setName] = useState("");
    

    //state variables to store validation errors
    let [errors,setErrors] = useState({})

    const history = useHistory();//initialize history so we can redirect using history.push()




    //submitHandler
    const addAuthor = (e)=>{
        e.preventDefault();

        //package up the state variable into an object
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors/new", formInfo)
        .then(res=>{
            console.log("response after posting form", res)

            //if statement means is there are validation errors we need to save, then save those validation errors into state
            if(res.data.error){
                setErrors(res.data.error.errors);
            }
            else{// else means there are no errors, and author was successfully created, then we can clear out the form
                
                setName("");
                

                props.setNewAuthorToggle(!props.newAuthorToggle)

                history.push("/");//redirect after submmitting the form and successfully creating a author
            }
        })
        .catch(err=>console.log("errr",err))
        //
    }


    return(
        <>
            <div>
                <Link to={`/`}>Home </Link>
                <h3>Add a new author:</h3>
                <form onSubmit={addAuthor}>
                    <div className="form-group">
                        <label htmlFor="">Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                        <p className="text-danger">{errors.name?.message}</p> 
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success mt-2" />
                </form>
                <p><Link to={`/`} className="btn btn-danger mt-2">Cancel </Link></p>
            </div>
        </>
    );
};

export default NewAuthorForm;
