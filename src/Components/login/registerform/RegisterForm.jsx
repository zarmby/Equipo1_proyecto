import { useState, forwardRef, useImperativeHandle } from "react";
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import { RegisterUserApiPost } from '../../../services/utils/Api';
import './RegisterForm.scss';

const RegisterForm = forwardRef((props,ref) => {

  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pconf, setPconf] = useState('');
  const [sede, setSede] = useState('');

  const param = [name, last, email, phone, pass, pconf, sede];

  useImperativeHandle(ref, () => ({
    cleanInputsChild(){
      setName('');
      setLast('');
      setPass('');
      setEmail('');
      setPhone('');
      setPass('');
      setPconf('');
      setSede('');
      let RSI = document.getElementById("register_sede_input");
      RSI.value = "";
      RSI.style.color = '#777';
    }

  }));


  const handleSubmit = async (e) => {
    e.preventDefault();
    props.loading();
    if(pass === pconf){
      try {
        await RegisterUserApiPost("user/", param);
        Alertify.success("<b style='color:white;'>Registro completo</b>");
        cleanInputs();
        handleCancelRegister();
      }
      catch (e) {
        Alertify.error(`<b style='color:white;'>${e}</b>`);
        console.log(e.status);
      }
    }
    else{
      Alertify.error(`<b style='color:white;>Las contraseñas no coinciden</b>`);
      document.getElementById('register_confirm_input').focus();
    }
    props.loaded();
  }

  const cleanInputs = () => {
    setName('');
    setLast('');
    setPass('');
    setEmail('');
    setPhone('');
    setPass('');
    setPconf('');
    setSede('');
    let RSI = document.getElementById("register_sede_input");
    RSI.value = "";
    RSI.style.color = '#777';
  }
  

  const handleCancelRegister = () => {
    props.cancelRegister();
  }

  const handleFocus = (e) => {
    switch (e.target.id) {
        case 'register_name_input':
          document.getElementById('register_name_info').className = "info_container input_focus";
          break;
      case 'register_last_input':
        document.getElementById('register_last_info').className = "info_container input_focus";
        break;
      case 'register_email_input':
        document.getElementById('register_email_info').className = "info_container input_focus";
        break;
      case 'register_phone_input':
        document.getElementById('register_phone_info').className = "info_container input_focus";
        break;
      case 'register_password_input':
        document.getElementById('register_password_info').className = "info_container input_focus";
        break;
      case 'register_confirm_input':
        document.getElementById('register_confirm_info').className = "info_container input_focus";
        break;
      case 'register_sede_input':
        document.getElementById('register_sede_info').className = "info_container input_focus";
        break;
      default:
        document.getElementById('register_photo_info').className = "info_container input_focus";
        break;
    }
  }

  const handleBlur = (e) => {
    let inputsArray = document.getElementsByClassName('info_container');
    for (let index = 0; index < inputsArray.length; index++) {
      inputsArray[index].className = "info_container";
    }
  }

  return (
    <div id="register_form_div" ref={props.reference}>
      <form id="register_form" onSubmit={handleSubmit} autoComplete="off">
        <div id="register_form_body">
          <div id="register_name_info" className="info_container">
            <label htmlFor="register_name_input">Nombre*</label>
            <input
              type="text"id="register_name_input" 
              className="register_input" maxLength="50" required
              onFocus={handleFocus} onBlur={handleBlur}
              value={name} onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div id="register_last_info" className="info_container">
            <label htmlFor="register_last_input">Apellido*</label>
            <input
              type="text" id="register_last_input"
              className="register_input" maxLength="50" required
              onFocus={handleFocus} onBlur={handleBlur}
              value={last} onChange={(e) => { setLast(e.target.value) }}
            />
          </div>
          <div id="register_email_info" className="info_container">
            <label htmlFor="register_email_input">Correo electronico*</label>
            <input
              type="email" placeholder="Correo electronico con dominio de arkusnexus"
              id="register_email_input" className="register_input"
              maxLength="50" pattern="[A-Za-z0-9._%+-]+@arkusnexus.com"
              required onFocus={handleFocus} onBlur={handleBlur}
              value={email} onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div id="register_phone_info" className="info_container">
            <label htmlFor="register_phone_input">Telefono*</label>
            <input
              type="text" placeholder="Solo ingresar numeros, sin espacios"
              id="register_phone_input" className="register_input"
              pattern="[0-9]{10}" title="Este campo solo acepta numeros"
              maxLength="10" required onFocus={handleFocus} onBlur={handleBlur}
              value={phone} onChange={(e) => { setPhone(e.target.value) }}
            />
          </div>
          <div id="register_password_info" className="info_container">
            <label htmlFor="register_password_input">Contraseña*</label>
            <input
              type="password" placeholder="Caracteres y numeros"
              id="register_password_input" className="register_input"
              minLength="10" maxLength="20" required
              title="Debe tener una longitud minima de 10 caracteres usando numeros y letras"
              onFocus={handleFocus} onBlur={handleBlur}
              value={pass} onChange={(e) => { setPass(e.target.value) }}
            />
          </div>
          <div id="register_confirm_info" className="info_container">
            <label htmlFor="register_confirm_input">Confirmación*</label>
            <input
              type="password" placeholder="Vuelva a escribir la contraseña"
              id="register_confirm_input" className="register_input"
              minLength="10" maxLength="20" required
              title="Debe tener una longitud minima de 10 caracteres usando numeros y letras"
              onFocus={handleFocus} onBlur={handleBlur}
              value={pconf} onChange={(e) => { setPconf(e.target.value) }}
            />
          </div>
          <div id="register_sede_info" className="info_container">
            <label htmlFor="register_sede_input">Sede*</label>
            <select
              id="register_sede_input" className="register_input" value={sede}
              required onFocus={handleFocus} onBlur={handleBlur}
              onChange={(e) => { setSede(e.target.value); e.target.style.color = 'black'; }}
            >
              <option value="" hidden disabled>Seleccione la sede donde se encuentra</option>
              {props.sedes.map((item, index) => (
                <option key={index} value={item._id}>{item.campusname}</option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <input type="submit" id="register_submit" className="btn_login" value="Registrarse"></input>
      </form>
      <button id="register_cancel" className="btn_login" onClick={handleCancelRegister}>Cancelar</button>
    </div>
  )
});

export default RegisterForm;