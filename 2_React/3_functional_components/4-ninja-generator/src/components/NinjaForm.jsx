import React ,{useState} from 'react';
const NinjaForm = ()=>{
    //create a state variable for each input form the form that we want to collect
    let [name,setName] = useState();
    let [proPicUrl, setProPicUrl] = useState();
    let [color, setColor] = useState();
    
    let [needsSpecialAttention, setNeedsSpecialAttention] = useState(false);


    //create state variable which is an array so that we can store all the pets that get submitted into it

    let [petList,setPetList] = useState([]);


    //create a submit handler below

    const submitPet = (event)=> {
      //the default bahavior of a form when it is submitted is to reload the page. we can prevent
      // that from happening using preventDefault();  
        event.preventDefault();

        //create a pet object (python dictionary) also called hashmap
        let pet = {name,proPicUrl,color,needsSpecialAttention}

        //use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList,pet])
        
        //clear out the state variables so that we can use this to empty the form inputs
        setName("");
        setColor("");
        setProPicUrl("");


        
        
    }
    
    //function to toggle if the pet needs special attention on form false<-->true and vice versa
    const toggleAttention =(event,idx)=>{
        console.log("toggoling",idx);
        //we will modify the petList aray at the specific index -> idx so that the pet at that index
        //has their "needsSpecialAttention" property changed to true/false

        //1.make a copy of petList
        //"..." <- spread operator
        let [...copyList] = petList;
        //2.change the pet at the specific index number property for special attention to true/false
        copyList[idx].needsSpecialAttention = event.target.checked;//e.target.check specifies if the checkbox is checked or not with a 
        // true/flase value
        //3.update our sate variable for petList with the modified copy
        setPetList(copyList);


    }

    const deletePet = (event,idx) =>{
        //idx represents the index of the pet we want to delete
        let filteredCopy = petList.filter((pet,i)=>{
            //inside the filter function, i represents the index number of each pet
            return i != idx //return back only the pets whose index number does not math the index numbr of the pet we want to delete
        })

        //3.update our sate variable for petList with the modified copy
        setPetList(filteredCopy);
    }


    //I want the state variable to update their values(seters like setName) 
    //whenever the inputs are changed (onChange)
    return(
        <>
        <form onSubmit={submitPet}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input onChange={(event)=>{setName(event.target.value)}} type="text" className="form-control" value = {name}  />
            </div>


            <div className="form-group">
                <label htmlFor="">Profile Pic Url:</label>
                <input onChange={(event)=>{setProPicUrl(event.target.value)}} type="text" className="form-control" value = {proPicUrl} />
            </div>

            <div className="form-group">
                <label htmlFor="">Belt Color:</label>
                <input onChange={(event)=>{setColor(event.target.value)}} type="text" className="form-control" value = {color} />
            </div>

            <input type="submit" value="Add Pet" className="btn btn-success mt-2" />
        </form>
        <hr />

        <div className="pet-list">

        {
            petList.map((petObj,idx)=>{
                return ( 
                            
                            
                                <div key={idx} className="pet-card" style ={{backgroundColor:petObj.color}}  >
                                    
                                    <h1 style = {{textDecoration: petObj.needsSpecialAttention? " red underline overline":"none"}}>{petObj.name}</h1>
                                    
                                    <p>Special Attention needed? <input onChange={(event)=>toggleAttention(event,idx)} type="checkbox" name="" id="" /></p>
                                    
                                    <button onClick={(event)=>{deletePet(event,idx)}} className="btn btn-danger">Delete</button>
                                    
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