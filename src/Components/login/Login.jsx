import React from 'react';
import Granim from 'react-granim'

import './LoginStyles.css'

import logo from '../../assets/img/Logo.png';
import userIcon from '../../assets/img/user.png';
import passWordIcon from '../../assets/img/password.png';

class Login extends React.Component {

  constructor (props){
    super(props);
    this.states = {
      "default-state": {
          gradients: [
              ['#212B35', '#DD1F26'],
              ['#DD1F26', '#DD1F26'],
              ['#DD1F26', '#212B35'],
              ['#212B35', '#212B35'],
          ]
      }
    }
  }

  render(){
    return(
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
        <Granim id="granim" states={this.states}></Granim>
      </div>
    );
  }
}

export default Login;
