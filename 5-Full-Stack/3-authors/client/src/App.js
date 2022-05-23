import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors'
import NewAuthorForm from './components/NewAuthorForm'
import EditAuthorForm from './components/EditAuthorForm'

import {useState} from 'react';

function App() {

  const [newAuthorToggle,setNewAuthorToggle] = useState(false);



  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>
        
        <Switch>
          <Route exact path="/">
          <Link to = "/new">Add new Author</Link>
            <AllAuthors newAuthorToggle={newAuthorToggle}></AllAuthors>
          </Route>
          <Route exact path = "/new">
          <NewAuthorForm newAuthorToggle={newAuthorToggle} setNewAuthorToggle= {setNewAuthorToggle}></NewAuthorForm>
            
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthorForm></EditAuthorForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
