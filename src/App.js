import './App.css';

///Components///
import Login from './Components/login/Login';
import MenuPage from './Components/menuPage/MenuPage';
import User from './Components/user/User';
import SideFilters from './Components/inventory/sideFilters/SideFilters';

////Routing///
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
    //<Login />
    <Router>
      <Switch>
          <Route path="/menu" component={MenuPage} />
          <Route path="/user" component={User} />
          <Route path="/InventoryCenter" component={SideFilters} />
          <Route exact path="/" component={Login} />
          <Route>Not Found</Route>
        </Switch>
    </Router>
  );
}

export default App;
