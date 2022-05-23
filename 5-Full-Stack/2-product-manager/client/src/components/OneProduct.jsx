import React, {useState,useEffect} from 'react';
import {useParams} from "react-router"
import axios from 'axios';
import {useHistory} from "react-router-dom"// import useHistory so we can redirect

const OneProduct = () => {

    const{_id} = useParams();

    const history = useHistory();//initialize useHistory into a variable



    //state variable to store the one product information we get back from the api call
    const[productInfo,setProductInfo] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.results);
        })
        .catch(err=>console.log(err));
    },[])


//when i click on the button, i want it to make a request to the backend to delete something based on the id

//delete product
const deleteProduct = ()=>{
    axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
    .then(res=>{
        console.log("res-->",res);
        history.push("/")
    })
    .catch(err=>console.log(err));
}



    return(
        <>
            <div>
                <h3>{productInfo.title}</h3>
                <p>Price: ${productInfo.price}</p>
                <p>Description: {productInfo.description}</p>
                <button onClick={deleteProduct} className="btn btn-danger">Delete {productInfo.name}</button>
            </div>
        </>
    );
};

export default OneProduct;