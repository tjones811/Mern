import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,//this will enable routing for the application, otherwise the routing features will not work
  Switch, // Switch lets us detrmine  which components/elements need to show up onlyy  at certain routes
  Route, // Route llets us specify thhe route url address for an element to show up in
  Link // Link is just like an a href(anchor) but will not reload the page
} from "react-router-dom";
import About from './components/About'
import Players from './components/Players'
import Teams from './components/Teams'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <h1>Routing Intro</h1>

          <ul id = "nav-links">
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/players">Players</Link></li>
            <li><Link to = "/teams">Teams</Link></li>
          </ul>
        </div>

        <Switch>
          
          <Route exact path="/about">
            <About></About>
          </Route>
          
          <Route exact path="/players">
            <Players></Players>
          </Route>

          <Route exact path="/teams">
            <Teams></Teams>
          </Route>

          <Route exact path="/teams/:id">
            <Teams></Teams>
          </Route>

          <Route exact path="/teams/:id/:color">
            <Teams></Teams>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
