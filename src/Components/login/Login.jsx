import React, { useEffect } from 'react';
import Granim from 'react-granim'
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Redirect } from "react-router-dom";
import Loading from '../loading/Loading';
import {LoginApiGet} from '../../services/utils/Api';

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
      user : '',
      loading: false
    };

    this.login_register_div = React.createRef();
    this.div_login = React.createRef();
    this.div_register = React.createRef();
    this.form_user = React.createRef();
    this.register_user = React.createRef();
    this.input_user = React.createRef();
    this.input_pass = React.createRef();
    this.container_input_user = React.createRef();
    this.container_input_pass = React.createRef();
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handleCancelRegister = this.handleCancelRegister.bind(this);
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

  async handleSubmitLogin(e){
    e.preventDefault();
    this.setState({loading:true});
    try {
      const res = await LoginApiGet("user/login",[this.input_user.current.value, this.input_pass.current.value]);
      const data = await res;
      console.log(data);
      localStorage.setItem("UserLogged", JSON.stringify(data.result));
      Alertify.success("entraste prro");
      window.location.href ='/HomePage'; 
    }
    catch (e) {
      Alertify.error("Datos erroneos"+e);
      this.setState({loading:false}); 
    }    
  }

  handleSubmitRegister(e){
    e.preventDefault();
  }

  handleRegister(){
    let width_container  = this.login_register_div.current.clientWidth;
    this.div_login.current.style.transform = "translateX(-"+width_container+"px)";
    this.div_register.current.style.transform = "translateX(-"+width_container+"px)";
  }
  handleCancelRegister(){
    let width_container  = this.login_register_div.current.clientWidth;
    this.div_login.current.style.transform = "translateX(0px)";
    this.div_register.current.style.transform = "translateX("+width_container+"px)";
  }

  handleFocus(e){
    switch(e.target.id){
      case 'login_user_input': 
        document.getElementById('login_user_info').className="info_container input_focus";
        break;
      case 'login_password_input': 
        document.getElementById('login_password_info').className="info_container input_focus";
        break;
      case 'register_name_input': 
        document.getElementById('register_name_info').className="info_container input_focus";
        break;
      case 'register_last_input': 
        document.getElementById('register_last_info').className="info_container input_focus";
        break;
      case 'register_email_input': 
        document.getElementById('register_email_info').className="info_container input_focus";
        break;
      case 'register_phone_input': 
        document.getElementById('register_phone_info').className="info_container input_focus";
        break;
      case 'register_password_input': 
        document.getElementById('register_password_info').className="info_container input_focus";
        break;
      case 'register_confirm_input': 
        document.getElementById('register_confirm_info').className="info_container input_focus";
        break;
      case 'register_sede_input': 
        document.getElementById('register_sede_info').className="info_container input_focus";
        break;
    }
  }

  handleBlur(e){
    if(e.target.id==="login_user_input"){
      this.container_input_user.current.className="info_container";
      if (!e.target.validity.valid & e.target.value != "")
        document.getElementById('login_submit').click();
    }
    else{
      let inputsArray = document.getElementsByClassName('info_container');
      for (let index = 0; index < inputsArray.length; index++) {
        inputsArray[index].className="info_container";
        
      }
    }
  }

  render(){
    return(
      <div className = "login_container">
        {(this.state.loading) ? <Loading/> : null}
        <Granim id="granim" states={this.state} style={GradStyle} ></Granim>
        <div id="login_back"/>
        <div id = "login_form_container">
          <div id="login_register_container" ref={this.login_register_div}>
            <div className="form_head">
              <img src = {logo} alt="Logo Arkus"></img>
              <span>Inventory Arkus Center</span>
            </div>
            <div id="login_form_div" ref={this.div_login}>
              <form id = "login_form" onSubmit={this.handleSubmitLogin} ref={this.form_user}>
                <div id="login_form_body">
                  <div  ref={this.container_input_user} id="login_user_info" className="info_container">
                    <label htmlFor="login_user_input"><img src = {userIcon} id = "login_user_icon" className="login_icon" alt="Icono usuario" /></label>
                    <input ref={this.input_user} type="email" placeholder="Usuario"  id = "login_user_input" className = "login_input" maxLength="50" pattern="[A-Za-z0-9._%+-]+@arkusnexus.com" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div ref={this.container_input_pass} id="login_password_info" className="info_container">
                    <label htmlFor="login_password_input"><img src = {passWordIcon} id = "login_password_icon" className="login_icon" alt="Icono contraseña" /></label>
                    <input ref={this.input_pass} type="password" placeholder="Contraseña" id = "login_password_input" className = "login_input" minLength="6" maxLength="20" required  onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="login_submit_info">
                    <input type="submit" id="login_submit" className="btn_login" value="Ingresar" />
                  </div>
                </div>
              </form>
              <hr id="separator" className="info_container" />
              <button id="login_register" className="btn_login" onClick={this.handleRegister}>Registrarse</button>
            </div>
            <div id="register_form_div" ref={this.div_register}>
              <form id = "register_form" onSubmit={this.handleSubmitRegister} ref={this.register_user}>
                <div id="register_form_body">
                  <div id="register_name_info" className="info_container">
                    <input type="text" placeholder="Nombre"  id = "register_name_input" className = "register_input" maxLength="50" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_last_info" className="info_container">
                    <input type="text" placeholder="Apellido"  id = "register_last_input" className = "register_input" maxLength="50" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_email_info" className="info_container">
                    <input type="email" placeholder="Correo electronico"  id = "register_email_input" className = "register_input" maxLength="50" pattern="[A-Za-z0-9._%+-]+@arkusnexus.com" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_phone_info" className="info_container">
                    <input type="text" placeholder="Telefono"  id = "register_phone_input" className = "register_input" maxLength="15" pattern="[0-9]" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_password_info" className="info_container">
                    <input type="password" placeholder="Contraseña"  id = "register_password_input" className = "register_input" minLength="10" maxLength="20" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_confirm_info" className="info_container">
                    <input type="password" placeholder="Confirmacion de la contraseña"  id = "register_confirm_input" className = "register_input" minLength="10" maxLength="20" required onFocus={this.handleFocus} onBlur={this.handleBlur} />
                  </div>
                  <div id="register_sede_info" className="info_container">
                    <select id = "register_sede_input" className="register_input" required onFocus={this.handleFocus} onBlur={this.handleBlur} >
                      <option value="d" hidden disabled selected>Sede</option>
                      <option value="d">f</option>
                      <option value="d">f</option>
                      <option value="d">f</option>
                      <option value="d">f</option>
                    </select>  
                  </div>
                </div>
                <br />
                <input type="submit" id="register_submit" className="btn_login" value="Registrarse"></input>
                
              </form>
              
              <button id="register_cancel" className="btn_login" onClick={this.handleCancelRegister}>Cancelar</button>
            </div>
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
