import React, {useState} from 'react';


const HookForm = () => {

    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");

    

    return(
        <>
            <h3>Fill out the form below!Neow!</h3>
            <form>
                <div className="form-gorup">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" onChange={(event)=> setFirstName(event.target.value)}  />
                    {
                        firstName.length<2? <p className="text-danger">First name must be at least 2 characters!</p> : null
                    }
                </div>
                
                <div className="form-gorup">
                    <label htmlFor="">Last Name</label>
                    <input type="text"className="form-control" onChange={(event)=> setLastName(event.target.value)} />
                    {
                        lastName.length<2? <p className="text-danger">Last name must be at least 2 characters!</p> : null
                    }
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Email</label>
                    <input type="email"className="form-control" onChange={(event)=> setEmail(event.target.value)} />
                    {
                        email.length<2? <p className="text-danger">Email must be at least 2 characters</p> : null
                    }
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Password</label>
                    <input type="password"className="form-control" onChange={(event)=> setPassword(event.target.value)} />
                    {
                        password.length<8? <p className="text-danger">Password must be at least 2 characters</p> : null
                    }
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password"className="form-control" onChange={(event)=> setConfirmPassword(event.target.value)}  />
                    {
                    password != confirmPassword? <p className="text-danger">Passwords must match</p> : null
                    }

                </div>


                <input className = "btn btn-success mt-2 "  type="submit" value="Submit" />
            </form>

            <hr />

            <h3>Your Form Data</h3>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            
        </>
    )
}

export default HookForm