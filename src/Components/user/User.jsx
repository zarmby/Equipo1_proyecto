import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import SearchUser from './searchUser/SearchUser';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {UsersApiGet, UserApiGet} from '../../services/utils/Api';
import Loading from '../loading/Loading';
import search_user_icon_default from '../../assets/img/user_search_default.png';
import edit from '../../assets/img/edit.png';
import UserModal from './userModal/UserModal';


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            users : [],
            userId : "",
            userSearched :[],
            modal : false

        }
        this.handleUserSearched = this.handleUserSearched.bind(this);
        this.getIdUser = this.getIdUser.bind(this);
        this.getUserSearched = this.getUserSearched.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.child_navbar = React.createRef();
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
            if(e.account === aux[1]){
                this.setState({userId : e._id});
            }
        })
    }

    async getUserSearched(id){
        try {
            let res = await UserApiGet(id);
            let usrRecived = res.result.cont.name;
            console.log(res);
            this.setState({userSearched:usrRecived});
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    handleCloseModal(){
        this.setState({modal:false});
    }
    handleOpenModal(){
        this.setState({modal:false});
    }
    setLoading(value){
        this.setState({loading: value});
    }

    render(){
        return(
            <div id="user_container">
                <Navbar ref={this.child_navbar}/>
                {(this.state.loading) ? <Loading />
                :
                    <div id="user_search_contain" onClick={this.child_navbar.current.closeSideMenuNabvar}>
                        <h1>Informacion de usuario</h1>
                        <SearchUser searchUser = {this.handleUserSearched} users = {this.state.users} />
                        {
                            (this.state.userId!=="")
                            ?
                                <div id="user_contain">
                                    <div id="user_info_container">
                                        <span  title="Editar usuario"
                                            className="user_edit_container">
                                            <img src={edit} alt="editar"
                                                className="user_edit_icon"
                                                id="user_editar"
                                            />
                                        </span>
                                        <h2>{this.state.userSearched.username} {this.state.userSearched.lastname}</h2>
                                        <p><b>Cuenta:</b><br /> {this.state.userSearched.account}</p>
                                        <p><b>Correo electronico:</b><br /> {this.state.userSearched.email}</p>
                                        <p><b>Campus:</b><br /> {this.state.userSearched.campusname}</p>
                                        <p><b>Telefono:</b><br /> {this.state.userSearched.phonenumber}</p>
                                        <p><b>Perfil del usuario:</b><br /> {this.state.userSearched.userprofile}</p>
                                        <p><b>Rol:</b><br /> {this.state.userSearched.rolename}</p>
                                    </div>
                                    <div id="user_equip_container">
                                        <h2>Equipos</h2>
                                        <table id="table_equip_user" border="1">
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>Descripción</th>
                                                    <th>Asignadado por</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <input type="submit" id="user_cart_submit" className="search_input" value="Crear carta responsiva" />
                                </div>
                            :
                                <label htmlFor="user_search_input">
                                    <img
                                        src={search_user_icon_default} title="Buscar usuario"
                                        id="icon_usr_defautl" alt="Search User" />
                                </label>
                        }
                    </div>
                }

                {(this.state.modal) ? <UserModal close={this.handleCloseModal} loading={this.setLoading} /> : null}

            </div>
        );
    }
}

export default User;
