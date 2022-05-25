import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router";
import {useHistory,Link} from "react-router-dom"



const EditPetForm = () =>{

    const{_id} = useParams();

    const [petInfo,setPetInfo] = useState({})

    const history = useHistory();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res=>{
            console.log("res-->",res)
            setPetInfo(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])

    const changeHandler = (e) => {

            setPetInfo({
                ...petInfo,
                [e.target.name]:e.target.value
            })
        
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${_id}`,petInfo)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }

    return (
        <>
            <div>
            <Link to = "/">back to home</Link>

                    <h3>Edit :</h3>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor=""> Pet Name:</label>
                            <input type="text" name="name" onChange={changeHandler}  className="form-control" value={petInfo.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Pet Type:</label>
                            <input type="text" name="type" onChange={changeHandler}  className="form-control" value={petInfo.type} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Pet Description:</label>
                            <input type="text" name="description" onChange={changeHandler}  className="form-control" value={petInfo.description} />
                        </div>
                        <h1>Skills(optional)</h1>
                        <div className="form-group">
                            <label htmlFor="">Skill 1:</label>
                            <input type="text" name="skill1" onChange={changeHandler}  className="form-control" value={petInfo.skill1} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Skill 2:</label>
                            <input type="text" name="skill2" onChange={changeHandler}  className="form-control" value={petInfo.skill2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Skill 3:</label>
                            <input type="text" name="skill3" onChange={changeHandler}  className="form-control" value={petInfo.skill3} />
                        </div>
                        
                        <input type="submit" value="Edit Pet" className="btn btn-primary mt-2" />
                    </form>
            </div>
        </>
    );
};

export default EditPetForm;