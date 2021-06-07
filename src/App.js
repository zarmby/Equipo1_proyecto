import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

///Components///
import Login from './Components/login/Login'
import MenuPage from './Components/menuPage/MenuPage'
import SideFilter from './Components/inventory/sideFilters/SideFilters'
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
          <SideFilter />
        </Route>
        <Route path="/user">
          <SideFilter />
        </Route>
        <Route path="/*">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
