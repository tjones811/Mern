import React ,{useState} from 'react';
const NinjaForm = ()=>{
    //create a state variable for each input form the form that we want to collect
    let [name,setName] = useState();
    let [proPicUrl, setProPicUrl] = useState();
    let [color, setColor] = useState();


    //create state variable which is an array so that we can store all the pets that get submitted into it

    let [petList,setPetList] = useState([]);


    //create a submit handler below

    const submitPet = (event)=> {
      //the default bahavior o fa form when it is submitted is to reload the page. we can prevent
      // that from happening using preventDefault();  
        event.preventDefault();

        //create a pet object (python dictionary) also called hashmap
        let pet = {name,proPicUrl,color}

        //use th e setPetList settr to update the petList array to have the pet object inside of it
        setPetList([...petList,pet])


    }


    //I want the state variable to update their values(seters like setName) 
    //whenever the inputs are changed (onChange)
    return(
        <>
        <form onSubmit={submitPet}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input onChange={(event)=>{setName(event.target.value)}} type="text" className="form-control"  />
            </div>


            <div className="form-group">
                <label htmlFor="">Profile Pic Url:</label>
                <input onChange={(event)=>{setProPicUrl(event.target.value)}} type="text" className="form-control"  />
            </div>

            <div className="form-group">
                <label htmlFor="">Belt Color:</label>
                <input onChange={(event)=>{setColor(event.target.value)}} type="text" className="form-control"  />
            </div>

            <input type="submit" value="Add Pet" className="btn btn-success mt-2" />
        </form>
        <hr />

        <div className="pet-list">

        {
            petList.map((petObj,idx)=>{
                return ( 
                            
                            
                                <div className="pet-card" style ={{backgroundColor:petObj.color}} >
                                    <h1>{petObj.name}</h1>
                                    <p>Belt color: {petObj.color}</p>
                                    <img src={petObj.proPicUrl} alt="" width="250px" height="250px" />
                                </div>
                            
                        ) 
            })
               
        }
        </div>

        </>
    )
}

export default NinjaForm;