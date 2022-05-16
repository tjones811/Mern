import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Page from './components/Page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Routing Practice</h1>
      <Switch>
        
        
        <Route exact path= "/:word">
          <Page></Page>
        </Route>
        <Route exact path= "/:word/:color1/:color2">
          <Page></Page>
        </Route>

        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
