import React from 'react';
import Granim from 'react-granim'
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import './LoginStyles.scss'

import logo from '../../assets/img/Logo.png';
import userIcon from '../../assets/img/user.png';
import passWordIcon from '../../assets/img/password.png';

import Menu from '../menuPage/MenuPage';

class Login extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      "default-state": {
          gradients: [
              ['#212B35', '#DD1F26'],
              ['#DD1F26', '#DD1F26'],
              ['#DD1F26', '#212B35'],
              ['#212B35', '#212B35'],
              ['#212B35', '#212B35'],
          ],
          transitionSpeed: 1000
      },
      access : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    Alertify.alert("aja","Jala");
    //ruta de prueba
    window.location='/menu';
  }

  render(){
    return(
      <div className = "login_container">
        <Granim id="granim" states={this.state} style={GradStyle} ></Granim>
        <div id="login_back"/>
        <div id = "login_form_container">
          <form id = "login_form" onSubmit={this.handleSubmit}>
            <div id="login_form_head" className = "full_width">
              <img src = {logo} alt="Logo Arkus"></img>
            </div>
            <span className="full_width">Inventory Arkus Center</span>
            <div id="login_form_body" className = "full_width">
              <div id="login_user_info" className="login_info_container">
                <img src = {userIcon} id = "login_user_icon" className="login_icon" alt="Icono usuario" />
                <input type="email" placeholder="Usuario"  id = "login_user_input" className = "login_input" required />
              </div>
              <div id="login_password_info" className="login_info_container">
                <img src = {passWordIcon} id = "login_password_icon" className="login_icon" alt="Icono contraseña" />
                <input type="password" placeholder="Contraseña" id = "login_password_input" className = "login_input" requires/>
              </div>
              <div id="login_submit_info">
                <input type="submit" id="login_submit" className="btn_login" value="Ingresar" />
              </div>
              <hr id="separator" className="login_info_container" />
              <button id="login_register" className="btn_login">Registrarse</button>
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
