import React from 'react';
import './Navbar.scss';
import logo from '../../assets/img/Logo.png';
import logoMenu from '../../assets/img/icono_menu.png';
import logoClose from '../../assets/img/icono_close.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            openMenu: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleOpenSideMenu = this.handleOpenSideMenu.bind(this);
        this.buttonMenu = React.createRef();
        this.sidenMenu = React.createRef();
    }

    handleOpenSideMenu() {
        this.setState({ openMenu: !this.state.openMenu });
        let url_imagen = (this.state.openMenu) ? logoClose : logoMenu;
        let side_height = (this.state.openMenu) ? '120' : '0';
        this.buttonMenu.current.style.backgroundImage = 'url(' + url_imagen + ')';
        this.sidenMenu.current.style.height = side_height + '%';
    }

    componentDidMount() {
        let loggedUser = window.localStorage.getItem('UserLogged');
        if (loggedUser) {
            let UserLogged = JSON.parse(loggedUser)
            let nameUser = UserLogged.username + " " + UserLogged.lastname;
            this.setState({ username: nameUser });
        }
    }

    handleLogout() {
        window.localStorage.removeItem("UserLogged");
        window.location.href = "/";
    }

    render() {
        return (
            <nav id="navbar_principal">
                <img id="navbar_logo" src={logo} alt="Logo Arkus" />
                <input type="button" id="navbar_icono_menu" ref={this.buttonMenu} onClick={this.handleOpenSideMenu} />
                <div id="navbar_menu_container" ref={this.sidenMenu}>
                    <div className="dropdown" id="navbar_menu">
                        {<a href="/HomePage"><button className="dropbtn">Menu</button></a>}
                        <div className="dropdown-content">
                            <a href="/InventoryCenter">Inventario</a>
                            <a href="/user">Usuario</a>
                        </div>
                    </div>
                    <div className="dropdown" id="navbar_user">
                        <button className="dropbtn">{this.state.username}</button>
                        <div className="dropdown-content">
                            <a href="#navbar_principal" onClick={this.handleLogout} >Salir</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
