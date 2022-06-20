import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import moment from 'moment';

const EditTransactionForm = () => {

    const{_id} = useParams();

    const [transactionInfo,setTransactionInfo] = useState({})

    const history = useHistory();//initialize history so we can redirect using history.push()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/transactions/${_id}`)
        .then(res=>{
            console.log("res-->",res)
            setTransactionInfo(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])

    const changeHandler = (e) => {

        if(e.target.type == "checkbox"){
            setTransactionInfo({
                ...transactionInfo,
                [e.target.name]:e.target.checked
            })
        }else{
            setTransactionInfo({
                ...transactionInfo,
                [e.target.name]:e.target.value
            })
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/transactions/update/${_id}`,transactionInfo)
            .then(res=>{
                console.log(res)
                history.push("/dashboard")//redirect after updating form
            })
            .catch(err=>console.log(err))

    }



    return(
        <>
            <div>
                <h3>Edit Transaction</h3>
                <form onSubmit={submitHandler}>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name = "name" value={transactionInfo.name} className="form-control" onChange={changeHandler} />
                    </div>
                    
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" value = {transactionInfo.category}  className="form-control" onChange={changeHandler}>
                            <option value="Automotive">Automotive</option>
                            <option value="Department Store">Department Stores</option>
                            <option value="Education">Education</option>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Government Services">Government Services</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Home Improvement">Home Improvement</option>
                            <option value="Medical">Medical</option>
                            <option value="Merchandise">Merchandise</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Services">Services</option>
                            <option value="Supermarkets">Supermarkets</option>
                            <option value="Travel/Entertainment">Travel/Entertainment</option>
                            <option value="Wholesale Club">Wholesale Club</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" name = "amount" value={transactionInfo.amount} className="form-control" onChange={changeHandler} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Date</label>
                        <input type="date" className="form-control" name = "date" value = {moment.utc(transactionInfo.date?.toLocaleString()).format("YYYY-MM-DD")} onChange={changeHandler} />
                        <input type="submit" value="Submit" className="btn btn-success mt-2" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default EditTransactionForm;