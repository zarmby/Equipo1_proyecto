import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

///Components///
import Login from './Components/login/Login'
import MenuPage from './Components/menuPage/MenuPage'
import User from './Components/user/User'
import InventoryStock from './Components/inventory/inventoryStock/InventoryStock'
////Images///


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/HomePage">
          <MenuPage />
        </Route>
        <Route path="/InventoryCenter">
          <InventoryStock />
        </Route>
        <Route path="/user">
          <User/>
        </Route>
        <Route path="/*">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
