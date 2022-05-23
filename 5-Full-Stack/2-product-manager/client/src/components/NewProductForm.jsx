
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const NewProductForm = (props)=>{

    let [title,setTitle] = useState("");
    let [price,setPrice] = useState("");
    let [description,setDescription] = useState("");

    let [errors,setErrors] = useState({});

    const addProduct= (e)=>{
        e.preventDefault();

        let formInfo = {title,price,description}

        axios.post("http://localhost:8000/api/products/new",formInfo)
        .then(res=>{
            console.log("response after posting form",res)

            if(res.data.error){
                setErrors(res.data.error.errors);
            }
            else{
                setTitle("");
                setPrice("");
                setDescription("");

                props.setNewProductToggle(!props.NewProductToggle)


            }
        })
        .catch(err=>console.log("err",err))
    }



    return(
        <>
            <div>
                <form onSubmit={addProduct}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title} />
                        <p className="text-danger">{errors.title?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price} />
                        <p className="text-danger">{errors.price?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description} />
                        <p className="text-danger">{errors.description?.message}</p>
                    </div>
                    <input type="submit" value = "Submit" className="btn btn-success mt-2" />
                </form>
            </div>
            <hr />
        </>
    )
}

export default NewProductForm;