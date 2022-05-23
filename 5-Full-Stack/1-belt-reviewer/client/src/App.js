import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas'
import NewNinjaForm from './components/NewNinjaForm'
import OneNinja from './components/OneNinja';
import EditNinjaForm from './components/EditNinjaForm'

import {useState} from 'react';

function App() {

  const [newNinjaToggle,setNewNinjaToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Wall of Ninjas</h1>
        <Link to = "/new">Add new Ninja</Link>
        <Switch>
          <Route exact path="/">
            <AllNinjas newNinjaToggle={newNinjaToggle}></AllNinjas>
          </Route>
          <Route exact path = "/new">
          <NewNinjaForm newNinjaToggle={newNinjaToggle} setNewNinjaToggle= {setNewNinjaToggle}></NewNinjaForm>
            
          </Route>
          <Route exact path="/ninjas/:_id">
            <OneNinja></OneNinja>
          </Route>
          <Route exact path="/edit/:_id">
            <EditNinjaForm></EditNinjaForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
