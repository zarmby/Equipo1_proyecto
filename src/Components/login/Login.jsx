import React from 'react';
import Granim from 'react-granim'
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Link } from "react-router-dom";

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

    this.form_user = React.createRef();
    this.input_user = React.createRef();
    this.input_pass = React.createRef();
    this.container_input_user = React.createRef();
    this.container_input_pass = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount(){
    let inputElements = document.getElementsByClassName('login_input');
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].oninvalid = function (e) {
          e.target.setCustomValidity(""); 
          if (!e.target.validity.valid) {
            if (e.target.id == "login_user_input") {
              e.target.setCustomValidity("El correo no es valido, verifique bien sus datos. El dominio debe ser arkusnexus.com");
            }
            else {
              e.target.setCustomValidity("El campo no puede estar en blanco");
            }
          }
      };
  }
  }

  handleSubmit(e){
    e.preventDefault();
    //ruta de prueba
    window.location='/HomePage';
  }

  handleFocus(e){
    if(e.target.id==="login_user_input")
      this.container_input_user.current.className="login_info_container login_input_focus";
    else
      this.container_input_pass.current.className="login_info_container login_input_focus";
  }

  handleBlur(e){
    if(e.target.id==="login_user_input"){
      this.container_input_user.current.className="login_info_container";
      if (!e.target.validity.valid & e.target.value != "")
        document.getElementById('login_submit').click();
    }
    else
      this.container_input_pass.current.className="login_info_container";
  }

  render(){
    return(
      <div className = "login_container">
        <Granim id="granim" states={this.state} style={GradStyle} ></Granim>
        <div id="login_back"/>
        <div id = "login_form_container">
          <div id="login_form_div">
            <form id = "login_form" onSubmit={this.handleSubmit} ref={this.form_user}>
              <div id="login_form_head">
                <img src = {logo} alt="Logo Arkus"></img>
              </div>
              <span>Inventory Arkus Center</span>
              <div id="login_form_body">
                <div  ref={this.container_input_user} id="login_user_info" className="login_info_container">
                  <label htmlFor="login_user_input"><img src = {userIcon} id = "login_user_icon" className="login_icon" alt="Icono usuario" /></label>
                  <input ref={this.input_user} type="email" placeholder="Usuario"  id = "login_user_input" className = "login_input" maxLength="50" pattern="[a-z0-9._%+-]+@arkusnexus.com" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                </div>
                <div ref={this.container_input_pass} id="login_password_info" className="login_info_container">
                  <label htmlFor="login_password_input"><img src = {passWordIcon} id = "login_password_icon" className="login_icon" alt="Icono contraseña" /></label>
                  <input ref={this.input_pass} type="password" placeholder="Contraseña" id = "login_password_input" className = "login_input" maxLength="20" required  onFocus={this.handleFocus} onBlur={this.handleBlur} />
                </div>
                <div id="login_submit_info">
                  <input type="submit" id="login_submit" className="btn_login" value="Ingresar" />
                </div>
                
              </div>
            </form>
            <hr id="separator" className="login_info_container" />
            <button id="login_register" className="btn_login">Registrarse</button>
          </div>
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
