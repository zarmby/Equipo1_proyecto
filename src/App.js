import './App.css';
import React, { useEffect, useState } from 'react';

///Components///
import Login from './Components/login/Login'
import MenuPage from './Components/menuPage/MenuPage'
import User from './Components/user/User'
import InventoryStock from './Components/inventory/inventoryStock/InventoryStock'
import ScannerC from './Components/inventory/Scanner/ScannerC'
import Carousel from './Components/inventory/carousel/Carousel';
////Images///

//Routes
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('UserLogged');
    if(loggedUser){
      const UserLogged = JSON.parse(loggedUser)
      setUser(UserLogged);
    }
  },[]);

  const routerLogged = () =>{
    return(
      <Switch>
        <Route path="/HomePage">
          <MenuPage />
        </Route>
        <Route path="/InventoryCenter">
          <Carousel />
        </Route>
        <Route path="/InventoryStock">
          <InventoryStock />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/Scanner">
          <ScannerC />
        </Route>
        <Route path="/*">
          <MenuPage />
        </Route>
      </Switch>
    )
  }

  const routerUnlogged = ()=>{
    return(
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
        <Route path="/InventoryStock">
          <InventoryStock />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/Scanner">
          <ScannerC />
        </Route>
        <Route path="/*">
          <Login />
        </Route>
      </Switch>
    )
  }

  return (
    <Router>
      {user === null ? routerUnlogged() : routerLogged() }
    </Router>
  );
}

export default App;
