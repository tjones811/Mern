import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"


const NewNinjaForm = (props) => {

    let [name,setName] = useState("");
    let [numProjects, setNumProjects] = useState("");
    let [gradDate,setGradDate] = useState("");
    let [isVeteran,setIsVeteran] = useState(false);

    //state variables to store validation errors
    let [errors,setErrors] = useState({})

    const history = useHistory();//initialize history so we can redirect using history.push()




    //submitHandler
    const addNinja = (e)=>{
        e.preventDefault();

        //package up the state variable into an object
        let formInfo = {name,numProjects,gradDate,isVeteran}

        axios.post("http://localhost:8000/api/ninjas/new", formInfo)
        .then(res=>{
            console.log("response after posting form", res)

            //if statement means is there are validation errors we need to save, then save those validation errors into state
            if(res.data.error){
                setErrors(res.data.error.errors);
            }
            else{// else means there are no errors, and ninja was successfully created, then we can clear out the form
                
                setName("");
                setNumProjects("");
                setGradDate("");
                setIsVeteran(false);

                props.setNewNinjaToggle(!props.newNinjaToggle)

                history.push("/");//redirect after submmitting the form and successfully creating a ninja
            }
        })
        .catch(err=>console.log("errr",err))
        //
    }


    return(
        <>
            <div>
                <h3>Create Ninja</h3>
                <form onSubmit={addNinja}>
                    <div className="form-group">
                        <label htmlFor="">Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                        <p className="text-danger">{errors.name?.message}</p> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Number of Projects:</label>
                        <input type="number" onChange={(e)=>setNumProjects(e.target.value)} className="form-control" value={numProjects}/>
                        <p className="text-danger">{errors.numProjects?.message}</p> 

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Graduation Date:</label>
                        <input type="date" onChange={(e)=>setGradDate(e.target.value)} className="form-control" value={gradDate} />
                        <p className="text-danger">{errors.gradDate?.message}</p> 

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Check if Veteran</label>
                        <input type="checkbox" onChange={(e)=>setIsVeteran(e.target.checked)} className="form-check-input" value ={isVeteran} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success mt-2" />
                </form>
            </div>
        </>
    );
};

export default NewNinjaForm;
