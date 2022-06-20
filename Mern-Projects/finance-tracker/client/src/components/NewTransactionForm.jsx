import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"


const NewTransactionForm = (props) => {


    let [name,setName] = useState("");
    let [category,setCategory] = useState("Automotive");
    let [amount,setAmount] = useState("");
    let [date,setDate] = useState("");

    //state variables to store validation errors
    let [errors,setErrors] = useState({})

    //submitHandler
    const addTransaction = (e)=>{
        e.preventDefault();

        //package up the state variable into an object
        let formInfo = {name,category,amount,date}

        axios.post("http://localhost:8000/api/transactions/new", formInfo)
        .then(res=>{
            console.log("response after posting form", res)

            //if statement means is there are validation errors we need to save, then save those validation errors into state
            if(res.data.error){
                setErrors(res.data.error.errors);
            }
            else{// else means there are no errors, and Transaction was successfully created, then we can clear out the form
                
                setName("");
                setCategory("");
                setDate("");
                setAmount("");

                props.setNewTransactionToggle(!props.newTransactionToggle)

            }
        })
        .catch(err=>console.log("errr",err))
        //
    }


    return (
        <>
            <div>
                <h3>Add Transaction</h3>
                <form onSubmit={addTransaction}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} />
                        <p className="text-danger">{errors.name?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" value = {category}  className="form-control" onChange={(e)=>setCategory(e.target.value)}>
                            <option value="Automotive">Automotive</option>
                            <option value="Department Stores">Department Stores</option>
                            <option value="Education">Education</option>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Government Services">Government Services</option>
                            <option value="Home Improvement">Home Improvement</option>
                            <option value="Medical">Medical</option>
                            <option value="Merchandise">Merchandise</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Services">Services</option>
                            <option value="Supermarkets">Supermarkets</option>
                            <option value="Travel/Entertainment">Travel/Entertainment</option>
                            <option value="Wholesale Club">Wholesale Club</option>
                            <option value="Other">Other</option>
                        </select>
                        <p className="text-danger">{errors.category?.message}</p>
                    </div>
                    
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" value={amount} className="form-control" onChange={(e)=>setAmount(e.target.value)} />
                        <p className="text-danger">{errors.amount?.message}</p>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Date</label>
                        <input type="date" className="form-control" value = {date} onChange={(e)=>setDate(e.target.value)} />
                        <p className="text-danger">{errors.date?.message}</p>
                        <input type="submit" value="Submit" className="btn btn-success mt-2" />
                    </div>

                </form>
            </div>
        </>
    );
};

export default NewTransactionForm;