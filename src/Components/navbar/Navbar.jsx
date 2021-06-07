import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/Logo.png';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav id="navbar_principal">
                <img src={logo} alt="" />
                <div class="dropdown" id="navbar_menu">
                    <button class="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <a href="/InventoryCenter">Inventario</a>
                        <a href="/user">Usuario</a>
                    </div>
                </div>
                <div class="dropdown" id="navbar_user">
                    <button class="dropbtn">Cuenta</button>
                    <div class="dropdown-content">
                        <a href="/HomePage">Cambiar contraseña</a>
                        <hr />
                        <a href="/">Salir</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
