import './App.css';
import React, { useEffect, useState } from 'react';

///Components///
import Login from './Components/login/Login'
import MenuPage from './Components/menuPage/MenuPage'
import User from './Components/user/User'
import InventoryStock from './Components/inventory/inventoryStock/InventoryStock'
import Carousel from './Components/inventory/carousel/Carousel';
////Images///

//Routes
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState([]);

  /*useEffect(() => {
    cons loggedUser = window.localStorage.getItem('UserLogged');
  });*/

  return (
    //<Login />
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/HomePage">
          <MenuPage />
        </Route>
        <Route path="/InventoryCenter">
          <Carousel />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/*">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
