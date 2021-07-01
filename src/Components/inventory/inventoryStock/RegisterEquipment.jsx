import { useState, forwardRef, useImperativeHandle } from "react";
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import { RegisterUserApiPost } from '../../../services/utils/Api';
import '../../login/registerform/RegisterForm.scss';

const RegisterEquipment = ((props,ref) => {

  return (
    <div id="register_form_div" >
      <form id="register_form" autoComplete="off">
        <div id="register_form_body">
          <div id="register_name_info" className="info_container">
            <label htmlFor="register_name_input">Nombre*</label>
            <input
              type="text"id="register_name_input"
              className="register_input" maxLength="50" required
              value="hola"
            />
          </div>
        </div>
        <br />
        <input type="submit" id="register_submit" className="btn_login" value="Registrarse"></input>
      </form>
    </div>
  )
});

export default RegisterEquipment;
