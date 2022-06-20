import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import {useState} from 'react';

import NewTransactionForm from './components/NewTransactionForm';
import AllTransactions from './components/AllTransactions';
import EditTransactionForm from './components/EditTransactionForm';

function App() {

  const [logged,setLogged] = useState(null);

  const [newTransactionToggle,setNewTransactionToggle] = useState(false);

  const [selectedCategory,setSelectedCategory] = useState(""); //create a variable to store info about which type of tea to filter by when thr buttons are clicked

  const filterCategory = (category) => {
    console.log("working",category)
    setSelectedCategory(category)
  }

  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path = "/">
            <SignIn  setLogged = {setLogged} ></SignIn>
          </Route>
          <Route exact path = "/dashboard">
            <Dashboard ></Dashboard>
            <NewTransactionForm newTransactionToggle={newTransactionToggle} setNewTransactionToggle= {setNewTransactionToggle} ></NewTransactionForm>
            <h3>Filter by category:</h3>
            <button onClick = {()=>filterCategory("")} className = "btn btn-info">All</button>
            <button onClick = {()=>filterCategory("Automotive")} className = "btn btn-primary">Automotive</button>
            <button onClick = {()=>filterCategory("Department Stores")} className = "btn btn-secondary">Department Stores</button>
            <button onClick = {()=>filterCategory("Education")} className = "btn btn-success">Education</button>
            <button onClick = {()=>filterCategory("Gasoline")} className = "btn btn-danger">Gasoline</button>
            <button onClick = {()=>filterCategory("Home Improvement")} className = "btn btn-warning">Home Improvement</button>
            <button onClick = {()=>filterCategory("Medical")} className = "btn btn-info">Medical</button>
            <button onClick = {()=>filterCategory("Merchandise")} className = "btn btn-primary">Merchandise</button>
            <button onClick = {()=>filterCategory("Restaurant")} className = "btn btn-secondary">Restaurant</button>
            <button onClick = {()=>filterCategory("Services")} className = "btn btn-success">Services</button>
            <button onClick = {()=>filterCategory("Supermarkets")} className = "btn btn-info">Supermarkets</button>
            <button onClick = {()=>filterCategory("Travel/Entertainment")} className = "btn btn-danger">Travel/Entertainment</button>
            <button onClick = {()=>filterCategory("Wholesale Club")} className = "btn btn-warning">Wholesale Club</button>
            <button onClick = {()=>filterCategory("Other")} className = "btn btn-info">Other</button>
            <AllTransactions newTransactionToggle={newTransactionToggle} selectedCategory = {selectedCategory}  ></AllTransactions>
          </Route>
          <Route exact path = "/edit/:_id">
            <EditTransactionForm></EditTransactionForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
