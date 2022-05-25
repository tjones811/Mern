import React, {useState}from 'react';
import axios from 'axios';

const RegistrationForm = () => {

    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");

    const register = (e)=>{
        e.preventDefault();

        //objectify the info
        let formInfo = {firstName,lastName,email,password,confirmPassword};

        axios.post("http://localhost:8000/api/users/register",formInfo,{withCredentials:true})
        .then(res=>{
            console.log("res after registration",res);
        })
        .catch(err=>{
            console.log("error after registration",err)
        })

    }


    return(
        <>
            <div>
                <h3>Register</h3>
                <form onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="firstName" id="" className="form-control" onChange = {(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastName" id="" className="form-control" onChange = {(e)=>setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" className="form-control" onChange = {(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" className="form-control" onChange = {(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Confrim Password</label>
                        <input type="password" name="confirm" id="" className="form-control" onChange = {(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Register" className="btn btn-primary mt-3" />
                </form>
            </div>
        </>
    )
}

export default RegistrationForm;