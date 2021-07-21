import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import './Navbar.scss';
import logo from '../../assets/img/Logo.png';
import logoMenu from '../../assets/img/icono_menu.png';
import logoClose from '../../assets/img/icono_close.png';

const Navbar = forwardRef((props,ref) => {
    const [username, setUserName] = useState("");   
    const [openMenu, setOpenMenu] = useState(false);
    const buttonMenu = useRef();
    const sidenMenu = useRef();
    const navBar = useRef();
    
    useImperativeHandle(ref, () => ({
        closeSideMenuNabvar(){let width_container  = navBar.current.clientWidth;
            if(width_container <= 520){
                setOpenMenu(false);
                let url_imagen = logoMenu;
                let side_height = '0';
                buttonMenu.current.style.backgroundImage = 'url(' + url_imagen + ')';
                sidenMenu.current.style.height = side_height + '%';
                sidenMenu.current.style.overflow = 'hidden';
            }
        }

    }));

    const handleOpenSideMenu = ()=>{
        setOpenMenu(!openMenu);
        let url_imagen = (openMenu) ? logoClose : logoMenu;
        let side_height = (openMenu) ? '120' : '0';
        buttonMenu.current.style.backgroundImage = 'url(' + url_imagen + ')';
        sidenMenu.current.style.height = side_height + '%';
        sidenMenu.current.style.overflow = (openMenu) ? 'visible' : 'hidden';
    }

    const handleBlurSideMenu = (e)=>{
        let width_container  = navBar.current.clientWidth;
        if(width_container <= 520){
            if(
                e.target.id!=="navbar_menu" & 
                e.target.id!=="navbar_user" & 
                e.target.id!=="navbar_menu_btn"&
                e.target.id!=="navbar_user_btn"&
                e.target.id!=="navbar_icono_menu"

                ){
                setOpenMenu(false);
                let url_imagen = logoMenu;
                let side_height = '0';
                buttonMenu.current.style.backgroundImage = 'url(' + url_imagen + ')';
                sidenMenu.current.style.height = side_height + '%';
                sidenMenu.current.style.overflow = 'hidden';
            }
        }
    }

    useEffect(()=>{
        let loggedUser = window.localStorage.getItem('UserLogged');
        if (loggedUser) {
            let UserLogged = JSON.parse(loggedUser)
            let nameUser = UserLogged.username + " " + UserLogged.lastname;
            setUserName(nameUser);
        }
    },[]);

    const handleLogout = ()=>{
        window.localStorage.removeItem("UserLogged");
        window.location.href = "/Login";
    }

    return (
        <nav id="navbar_principal" ref={navBar} onClick={(e) => handleBlurSideMenu(e)}>
            <img id="navbar_logo" src={logo} alt="Logo Arkus" />
            <input type="button" id="navbar_icono_menu" 
            ref={buttonMenu} onClick={handleOpenSideMenu} />
            <div id="navbar_menu_container" ref={sidenMenu}>
                <div className="dropdown" id="navbar_menu">
                    <button className="dropbtn" id="navbar_menu_btn">Menu</button>
                    <div className="dropdown-content">
                        <a href="/InventoryCenter">Inventario</a>
                        <a href="/user">Usuario</a>
                        <a href="/scanner">Scanner</a>
                    </div>
                </div>
                <div className="dropdown" id="navbar_user">
                    <button className="dropbtn" id="navbar_user_btn">{username}</button>
                    <div className="dropdown-content">
                        <a href="#navbar_principal" onClick={handleLogout} >Salir</a>
                    </div>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
