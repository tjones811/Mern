import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,Link} from "react-router-dom"


const NewPetForm = (props) => {

    let [name,setName] = useState("");
    let [type,setType] = useState("");
    let [description,setDescription] = useState("");
    let [skill1,setSkill1] = useState("");
    let [skill2,setSkill2] = useState("");
    let [skill3,setSkill3] = useState("");

    let [errors,setErrors] = useState({})

    const history = useHistory();




    const addPet = (e)=>{
        e.preventDefault();

        let formInfo = {name,type,description,skill1,skill2,skill3}

        axios.post("http://localhost:8000/api/pets/new", formInfo)
        .then(res=>{
            console.log("response after posting form", res)

            if(res.data.error){
                setErrors(res.data.error.errors);
            }
            else{
                
                setName("");
                setType("");
                setDescription("");
                setSkill1("");
                setSkill2("");
                setSkill3("");

                props.setNewPetToggle(!props.newPetToggle)

                history.push("/");
            }
        })
        .catch(err=>console.log("errr",err))
        
    }


    return(
        <>
            <div>
            <Link to = "/">back to home</Link>

                <h3>Know a pet  needing a home?</h3>
                <form onSubmit={addPet}>
                    <div className="form-group">
                        <label htmlFor="">Pet Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name} />
                        <p className="text-danger">{errors.name?.message}</p> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Type:</label>
                        <input type="text" onChange={(e)=>setType(e.target.value)} className="form-control" value={type} />
                        <p className="text-danger">{errors.type?.message}</p> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Description:</label>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description} />
                        <p className="text-danger">{errors.description?.message}</p> 
                    </div>
                    <h1>Skills(optional)</h1>
                    <div className="form-group">
                        <label htmlFor="">Skill 1:</label>
                        <input type="text" onChange={(e)=>setSkill1(e.target.value)} className="form-control" value={skill1} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 2:</label>
                        <input type="text" onChange={(e)=>setSkill2(e.target.value)} className="form-control" value={skill2} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 3:</label>
                        <input type="text" onChange={(e)=>setSkill3(e.target.value)} className="form-control" value={skill3} />
                    </div>
                    
                    <input type="submit" value="Add Pet" className="btn btn-primary mt-2" />
                </form>
            </div>
        </>
    );
};

export default NewPetForm;
