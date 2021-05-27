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
              ['#212B35', '#212B35'],
          ],
          transitionSpeed: 1000
      }
    }
  }

  render(){
    return(
      <div className = "login-container">
        <Granim id="granim" states={this.states} style={GradStyle} ></Granim>
        <div id="login-back"/>
        <div id = "login-form-container">
          <form id = "login-form">
            <div id="login-form-head" className = "full-width">
              <img src = {logo} ></img>
            </div>
            <span className="full-width">Inventory Arkus Center</span>
            <div id="login-form-body" className = "full-width">
              <div id="login-user-info" className="ajas">
                <img src = {userIcon} id = "login-user-icon" className="login-icon" />
                <input type="text" placeholder="Usuario"  id = "login-user-input" className = "login-input" />
              </div>

              <div id="login-password-info">
                <img src = {passWordIcon} id = "login-password-icon" className="login-icon" />
                <input type="password" placeholder="Contraseña" id = "login-password-input" className = "login-input"></input>
              </div>

              <div id="login-submit-info">
                <input type="submit" id="login-submit" value="Ingresar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const GradStyle = {
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -10000
}

export default Login;
