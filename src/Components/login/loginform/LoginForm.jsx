import { useState, forwardRef, useImperativeHandle  } from "react";
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import userIcon from '../../../assets/img/user.png';
import passWordIcon from '../../../assets/img/password.png';
import { LoginApiPost } from '../../../services/utils/Api';
import './LoginForm.scss';

const LoginForm = forwardRef((props,ref)  => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    useImperativeHandle(ref, () => ({
        cleanInputsChild(){
          setEmail('');
          setPass('');
        }
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.loading();
        try {
            const res = await LoginApiPost("user/login", [email, pass]);
            const data = await res;
            localStorage.setItem("UserLogged", JSON.stringify(data.result));
            Alertify.success("entraste prro");
            window.location.href = '/HomePage';
        }
        catch (e) {
            Alertify.error("<b style='color:white;'>Datos erroneos</b>"+e);
            props.loaded();
        }
    }

    const handleRegister = () => {
        props.register();
    }

    const handleFocus = (e) => {
        if (e.target.id === "login_user_input")
            document.getElementById('login_user_info').className = "info_container input_focus";
        else
            document.getElementById('login_password_info').className = "info_container input_focus";
    }

    const handleBlur = (e) => {
        if (e.target.id === "login_user_input") {
            document.getElementById('login_user_info').className = "info_container";
            if (!e.target.validity.valid & e.target.value !== "")
                document.getElementById('login_submit').click();
        }
        else
            document.getElementById('login_password_info').className = "info_container";
    }

    return (
        <div id="login_form_div" ref={props.reference} >
            <form id="login_form" onSubmit={handleSubmit} autocomplete="off" >
                <div id="login_form_body">
                    <div id="login_user_info" className="info_container">
                        <label htmlFor="login_user_input">
                            <img src={userIcon} id="login_user_icon" className="login_icon" alt="Icono usuario" />
                        </label>
                        <input
                            type="email"
                            placeholder="Usuario"
                            id="login_user_input"
                            className="login_input"
                            maxLength="50"
                            pattern="[A-Za-z0-9._%+-]+@arkusnexus.com"
                            value={email}
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div id="login_password_info" className="info_container">
                        <label htmlFor="login_password_input">
                            <img src={passWordIcon} id="login_password_icon" className="login_icon" alt="Icono contraseña" />
                        </label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            id="login_password_input"
                            className="login_input"
                            minLength="8"
                            maxLength="20"
                            value={pass}
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                    </div>
                    <div id="login_submit_info">
                        <input type="submit" id="login_submit" className="btn_login" value="Ingresar" />
                    </div>
                </div>
            </form>
            <hr id="separator" />
            <button className="btn_login" id="login_register" onClick={handleRegister}>Registrarse</button>
        </div>
    );
});

export default LoginForm;