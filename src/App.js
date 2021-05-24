

import './App.css';
import logo from './assets/img/Logo.png';
import userIcon from './assets/img/user.png';
import passWordIcon from './assets/img/password.png';

function App() {


  return (
    <div className = "Container">
      <div className = "Form">
        <form className = "Box">
          <div className = "Form-Head">
            <img src = {logo} className = "logo"></img>
          </div>
          <div className = "Form-Body">
            <div className = "userInfo">
              <img src = {userIcon} className = "userIcon"></img>
              <input type="text" placeholder="Usuario" className = "InputT"></input>
            </div>
            <div className = "PasswordInfo">
              <img src = {passWordIcon} className = "userIcon"></img>
              <input type="text" placeholder="Contraseña" className = "InputT"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
