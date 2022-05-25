import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllPets from './components/AllPets'
import NewPetForm from './components/NewPetForm'
import OnePet from './components/OnePet'
import EditPetForm from './components/EditPetForm'

import {useState} from 'react';

function App() {

  const [newPetToggle,setNewPetToggle] = useState(false);



  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path = "/">
          <Link to = "/new">Add a pet to Shelter</Link>
            <AllPets></AllPets>
          </Route>
          <Route exact path = "/new">
          <NewPetForm newPetToggle={newPetToggle} setNewPetToggle= {setNewPetToggle}></NewPetForm>
          </Route>
          <Route exact path = "/edit/:_id">
            <EditPetForm></EditPetForm>
          </Route>
          <Route exact path="/pets/:_id">
            <OnePet></OnePet>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
