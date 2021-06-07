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
    this.input_user = React.createRef(); 
    this.input_pass = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    Alertify.alert("aja","Jala");
    //ruta de prueba
    window.location='/menu';
  }

  handleFocus(e){
    if(e.target.id==="login_user_input")
      this.input_user.current.className="login_info_container login_input_focus";
    else
      this.input_pass.current.className="login_info_container login_input_focus";
  }

  handleBlur(e){
    if(e.target.id==="login_user_input")
      this.input_user.current.className="login_info_container";
    else
      this.input_pass.current.className="login_info_container";
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
            <span>Inventory Arkus Center</span>
            <div id="login_form_body" className = "full_width">
              <div  ref={this.input_user} id="login_user_info" className="login_info_container">
                <label htmlFor="login_user_input"><img src = {userIcon} id = "login_user_icon" className="login_icon" alt="Icono usuario" /></label>
                <input type="email" placeholder="Usuario"  id = "login_user_input" className = "login_input" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
              </div>
              <div ref={this.input_pass} id="login_password_info" className="login_info_container">
              <label htmlFor="login_password_input"><img src = {passWordIcon} id = "login_password_icon" className="login_icon" alt="Icono contraseña" /></label>
                <input type="password" placeholder="Contraseña" id = "login_password_input" className = "login_input" required  onFocus={this.handleFocus} onBlur={this.handleBlur} />
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
