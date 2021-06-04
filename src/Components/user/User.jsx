import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import SearchIcon from '../../assets/img/search.png';

class User extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="user-container">
                <Navbar/>
                <div id="user_page">
                    <h1>Informacion de usuario</h1>
                    <div id="user_search">
                        <input type="text" id="user_search_input" placeholder="Escriba el nombre del usuario a consultar" />
                        <input type="image" src={SearchIcon} id="user_search_btn"/>
                    </div>
                    <br />
                    <Link to="/menu">Volver</Link>
                </div>
            </div>
        );
    }
}

export default User;