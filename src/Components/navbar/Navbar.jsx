import React from 'react';
import './Navbar.scss';
import logo from '../../assets/img/Logo.png';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : ""
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        let loggedUser = window.localStorage.getItem('UserLogged');
        if(loggedUser){
        let UserLogged = JSON.parse(loggedUser)
        let nameUser = UserLogged.username + " " + UserLogged.lastname; 
        this.setState({username : nameUser});
        }
    }

    handleLogout(){
        window.localStorage.removeItem("UserLogged");
        window.location.href = "/";
    }

    render(){
        return(
            <nav id="navbar_principal">
                <img src={logo} alt="" />
                <div className="dropdown" id="navbar_menu">
                    <a href="/HomePage"><button className="dropbtn">Menu</button></a>
                    <div className="dropdown-content">
                        <a href="/InventoryCenter">Inventario</a>
                        <a href="/user">Usuario</a>
                        <a href="/scanner">Scanner</a>
                    </div>
                </div>
                <div className="dropdown" id="navbar_user">
                    <button className="dropbtn">{this.state.username}</button>
                    <div className="dropdown-content">
                        <a href="#navbar_principal" onClick={this.handleLogout} >Salir</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
