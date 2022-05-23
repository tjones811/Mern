import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

import {useState} from 'react';

function App() {

  const[newProductToggle,setNewProductToggle] = useState(false);

  return (
    <div className="App container">
      <BrowserRouter>
        <h1>Product Manager</h1>

        <Switch>
          <Route exact path="/">
            <NewProductForm newProductToggle={newProductToggle} setNewProductToggle={setNewProductToggle}></NewProductForm>
            <AllProducts newProductToggle={newProductToggle}></AllProducts>
          </Route>
          <Route exact path="/products/:_id">
            <OneProduct></OneProduct>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
