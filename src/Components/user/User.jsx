import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import SearchUser from './searchUser/SearchUser';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {UsersApiGet} from '../../services/utils/Api';
import Loading from '../loading/Loading';


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            users : [],
            
        }       
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleUserSearched = this.handleUserSearched.bind(this);
    }

    componentDidMount(){
        this.getUsers().then(()=>{
            this.setState({loading:false});
        });
    }

    async getUsers() {
        try {
            let res = await UsersApiGet("user/userName");
            let usrRecived = res.result.cont.user;
            this.setState({users : usrRecived});
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    handleFocus(e){
        this.input_search.current.className="login_input_focus";
    }
    
    handleBlur(e){
        this.input_search.current.className="";
    }

    handleUserSearched(user){
        Alertify.alert(user);
    }

    render(){
        return(
            <div id="user_container">                
                <Navbar/>
                <h1>Informacion de usuario</h1>
                {/*<div id="user_page">
                    <h1>Informacion de usuario</h1>
                    <div ref={this.input_search}  id="user_search">
                        <input type="text" id="user_search_input" placeholder="Escriba el nombre del usuario a consultar" onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        <input type="image" src={SearchIcon} id="user_search_btn" alt="Buscar" />
                    </div>
                    <br />
                    <Link to="/menu" className="link">Volver</Link>
                </div>*/}
                {(this.state.loading) ? <Loading /> : <SearchUser searchUser = {this.handleUserSearched} users = {this.state.users} /> }

            </div>
        );
    }
}

export default User;