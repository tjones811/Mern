import React, {useState,useEffect} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"
import moment from 'moment';


const AllTransactions = (props) =>{
    console.log("In AllTransactions:", props.selectedCategory)
    const [allTransactions,setAllTransactions] = useState([]);

    const [deleteToggle,setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/transactions")
        .then(res => {
            console.log("AllTransactions response:",res)
            if (props.selectedCategory){
                const filteredlist = res.data.results.filter((transaction)=>{
                    return transaction.category == props.selectedCategory;
                })
                console.log(filteredlist);
                setAllTransactions(filteredlist)
            }
            else{
                setAllTransactions(res.data.results)
            }
        })
        .catch(err => {
            console.log("error:",err)
        })
    },[deleteToggle,props.newTransactionToggle,props.selectedCategory])


    const deleteTransaction = (_id)=>{
        console.log("deleting transaction with this id:", _id)
        axios.delete(`http://localhost:8000/api/transactions/delete/${_id}`)
        .then(res=>{
            console.log("response after deleting:", res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=>console.log(err))
    }





    return(
        <>
            <div>
                <h1>History</h1>
                <hr />
                <table className="table">
                    {<>
                        
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Category</th>
                                <th scope="col">Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTransactions.map((transactionObj, idx)=>{
                                    return(
                                        <tr key={transactionObj._id}>
                                            <td>{transactionObj.name}</td>
                                            <td>${transactionObj.amount}</td>
                                            <td>{transactionObj.category}</td>
                                            <td>{moment.utc(transactionObj.date.toLocaleString()).format('MMM-DD-YYYY')}</td>
                                            <td className="d-flex justify-content-center">
                                            

                                            <Link to={`/edit/${transactionObj._id}`} className="btn btn-info ">Edit</Link>
                                            
                                            <button onClick={(e)=>{deleteTransaction(transactionObj._id)}} className="btn btn-danger">Delete</button>



                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </>
                        
                    }
                </table>
            </div>
        </>
    )
}

export default AllTransactions;