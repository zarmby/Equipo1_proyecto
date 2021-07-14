import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import SearchUser from './searchUser/SearchUser';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {UsersApiGet, UserApiGet} from '../../services/utils/Api';
import Loading from '../loading/Loading';


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            usersRecived : [],
            users : [],
            userId : "",
            userSearched :[]
            
        }       
        this.handleUserSearched = this.handleUserSearched.bind(this);
        this.getIdUser = this.getIdUser.bind(this);
        this.getUserSearched = this.getUserSearched.bind(this);
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
            this.setState({usersRecived:usrRecived});
            let usrAux = [];
            usrRecived.forEach(element => {
                let nameUsr = `${element.username} ${element.lastname} ■ ${element.account}`;
                usrAux.push(nameUsr);
            })
            this.setState({users : usrAux});
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    handleUserSearched(user){
        if(this.state.users.includes(user)){
            this.getIdUser(user).then(()=>{
                this.getUserSearched(this.state.userId).then(()=>{
                    this.setState({loading:false});
                })
            })
        }
        else      
            Alertify.error("Usuario no encontrado");
    }

    async getIdUser(user){
        this.setState({loading:true});
        let aux = user.split(' ■ ');
        this.state.usersRecived.forEach(e=>{
            if(e.account == aux[1]){
                this.setState({userId : e._id});
            }
        })
    }

    async getUserSearched(id){
        try {
            let res = await UserApiGet(id);
            let usrRecived = res.result.cont.name;
            this.setState({userSearched:usrRecived});
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    render(){
        return(
            <div id="user_container">                
                <Navbar/>
                {/*<div id="user_page">
                    <h1>Informacion de usuario</h1>
                    <div ref={this.input_search}  id="user_search">
                        <input type="text" id="user_search_input" placeholder="Escriba el nombre del usuario a consultar" onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        <input type="image" src={SearchIcon} id="user_search_btn" alt="Buscar" />
                    </div>
                    <br />
                    <Link to="/menu" className="link">Volver</Link>
                </div>*/}
                {(this.state.loading) ? <Loading /> 
                : 
                    <div>
                        <h1>Informacion de usuario</h1>
                        <SearchUser searchUser = {this.handleUserSearched} users = {this.state.users} /> 
                        {
                            (this.state.userId!=="")
                            ?
                                <div id="user_info_container">
                                    <p><b>Id:</b> {this.state.userSearched._id}</p>
                                    <p><b>Campus:</b> {this.state.userSearched.IDcampus}</p>
                                    <p><b>Sede:</b> {this.state.userSearched.IDrole}</p>
                                    <p><b>Nombre:</b> {this.state.userSearched.username} {this.state.userSearched.lastname}</p>
                                    <p><b>Correo electronico:</b> {this.state.userSearched.email}</p>
                                    <p><b>Cuenta:</b> {this.state.userSearched.account}</p>
                                    <p><b>Telefono:</b> {this.state.userSearched.phonenumber}</p>
                                    <p><b>Perfil del usuario:</b> {this.state.userSearched.userprofile}</p>
                                </div>
                            :null
                        }
                    </div>
                }

            </div>
        );
    }
}

export default User;