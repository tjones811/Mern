import React, {useState} from 'react';



const Form = ()=>{

    //create a state variable for each input that will store the information inside each input

    let [name,setName] = useState("");
    let [age,setAge] = useState("");
    let [type,setType] = useState("Dog");
    let [date,setDate] = useState("");
    let [imgUrl,setImgUrl] = useState("");
    let [specialReq,setSpecialReq] = useState("");

    return(
        <>
            <h3>Schedule an appointment below</h3>
            <form >
                <div className="form-gorup">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(event)=> setName(event.target.value)} name="" id="" className="form-control" />
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Age:</label>
                    <input type="number" onChange={(event)=> setAge(event.target.value)} name="" id="" className="form-control" />
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Type:</label>
                    <select className="form-select" onChange={(event)=> setType(event.target.value)}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>

                <div className="form-gorup">
                    <label htmlFor="">Appointment Date:</label>
                    <input type="date" onChange={(event)=> setDate(event.target.value)}  name="" id="" className="form-control" />
                </div>
                    <label htmlFor="">Pet Url:</label>
                    <input type="text" onChange={(event)=> setImgUrl(event.target.value)} name="" id="" className="form-control" />
                <div>

                </div>

                <div className="form-gorup">
                    <label htmlFor="">Special Request:</label>
                    <textarea className="form-control" onChange={(event)=> setSpecialReq(event.target.value)} id="" cols="30" rows="10"></textarea>
                </div>
                <input className ="btn btn-success mt-2" type="submit" value="Submit" />
            </form>

            <hr />

            <h3>Your Pets Info:</h3>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>Appointment: {date}</p>
            <p>Pet Url: <img src={imgUrl} alt="" width ="300px" /></p>
            <p>Special Request: {specialReq}</p>
        </>
    )
}

export default Form