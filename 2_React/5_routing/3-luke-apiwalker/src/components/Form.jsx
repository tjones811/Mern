import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

const Form = ()=>{
    
    let [category,setCategory] = useState("");
    let [id,setId] = useState("");
    const history = useHistory(); //history is used to redirect

    //submit handler
    const search = (e)=>{
        e.preventDefault();

        //redirect using history.push(routeGoesHere)
        history.push(`/${category}/${id}`);

    }
    
    return(
        <div>
            <form className="d-flex justify-content-around align-items-center" onSubmit={search}>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select className="form-select" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={'default'}>
                        <option value="default" disabled>Please select a category</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input type="number" className="form-control" onChange={(e)=>{setId(e.target.value)}} />
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Form