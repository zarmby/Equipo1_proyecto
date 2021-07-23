import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import SearchUser from './searchUser/SearchUser';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { UsersApiGet, UserApiGet, GenerateEmail, UserEquipsApiGet } from '../../services/utils/Api';
import Loading from '../loading/Loading';
import search_user_icon_default from '../../assets/img/user_search_default.png';
import edit from '../../assets/img/edit.png';
import UserModal from './userModal/UserModal';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            users: [],
            userEmail: "",
            userSearched: [],
            modal: false,
            generate: false,
            TI: [["a", "ajalas"], ["b", "bueno"], ["c", "cmamo"]],
            TISelected: ""
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleUserSearched = this.handleUserSearched.bind(this);
        this.getEmailUser = this.getEmailUser.bind(this);
        this.getUserSearched = this.getUserSearched.bind(this);
        this.getUserSearchedEquips = this.getUserSearchedEquips.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.generateFile = this.generateFile.bind(this);
        this.child_navbar = React.createRef();
        this.input_IT_container = React.createRef();
    }

    componentDidMount() {
        this.getUsers().then(() => {
            this.setState({ loading: false });
        });
    }

    async getUsers() {
        try {
            let res = await UsersApiGet("user");
            let usrRecived = res.result.cont.user;
            this.setState({ usersRecived: usrRecived });
            let usrAux = [];
            usrRecived.forEach(element => {
                let nameUsr = `${element.username} ${element.lastname} ■ ${element.account}`;
                usrAux.push(nameUsr);
            })
            this.setState({ users: usrAux });
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    handleUserSearched(user) {
        if (this.state.users.includes(user)) {
            this.getEmailUser(user).then(() => {
                this.getUserSearched(this.state.userEmail).then(() => {
                    this.getUserSearchedEquips(this.state.userEmail).then(() => {
                        this.setState({ loading: false });
                    });
                });
            });
        }
        else
            Alertify.error("<b style='color:white;'>Usuario no encontrado</b>");
    }


    async getEmailUser(user) {
        this.setState({ loading: true });
        let aux = user.split(' ■ ');
        this.state.usersRecived.forEach(e => {
            if (e.account === aux[1]) {
                this.setState({ userEmail: e.email });
            }
        })
    }

    async getUserSearched(email) {
        try {
            let res = await UserApiGet(email);
            let usrRecived = res.result.cont.name[0];
            this.setState({ userSearched: usrRecived });
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    async getUserSearchedEquips(email) {
        try {
            let res = await UserEquipsApiGet(email);
            let equipsRecived = res.result.cont.name;
            console.log(equipsRecived);
            this.setState({ userEquips: equipsRecived });
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
        }
    }

    handleFocus(e) {
        this.input_IT_container.current.className = "info_container input_focus";
    }

    handleBlur(e) {
        this.input_IT_container.current.className = "info_container";
    }

    handleCloseModal() {
        this.setState({ modal: false });
    }
    handleOpenModal() {
        this.setState({ modal: false });
    }
    setLoading(value) {
        this.setState({ loading: value });
    }

    async generateFile(email, ITemail, ITname) {
        this.setLoading(true);
        try {
            await GenerateEmail("pdf/generateReport", email, ITemail, ITname)
            Alertify.success("<b style='color:white;'>Se genero la carta correctamente</b>");
        }
        catch (e) {
            Alertify.error(`<b style='color:white;'>${e}</b>`);
            console.log(e);
        }
        this.setLoading(false);
    }

    render() {
        return (
            <div id="user_container">
                <Navbar ref={this.child_navbar} />
                {(this.state.loading) ? <Loading />
                    :
                    <div id="user_search_contain" onClick={this.child_navbar.current.closeSideMenuNabvar}>
                        {(this.state.modal) ? <UserModal /> : null}
                        <h1>Informacion de usuario</h1>
                        <SearchUser searchUser={this.handleUserSearched} users={this.state.users} />
                        {
                            (this.state.userEmail !== "")
                                ?
                                <div id="user_contain">
                                    <div id="user_info_container">
                                        <span title="Editar usuario"
                                            className="user_edit_container" onClick={this.handleOpenModal}>
                                            <img src={edit} alt="editar"
                                                className="user_edit_icon"
                                                id="user_editar"
                                            />
                                        </span>
                                        <h2>{this.state.userSearched.username.replace(/^\w/, (c) => c.toUpperCase())} {this.state.userSearched.lastname.replace(/^\w/, (c) => c.toUpperCase())}</h2>
                                        <p><b>Cuenta:</b><br /> {this.state.userSearched.account.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                        <p><b>Correo electronico:</b><br /> {this.state.userSearched.email}</p>
                                        <p><b>Sede:</b><br /> {this.state.userSearched.campusname.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                        <p><b>Telefono:</b><br /> {this.state.userSearched.phonenumber.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                        <p><b>Perfil del usuario:</b><br /> {this.state.userSearched.userprofile.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                        <p><b>Rol:</b><br /> {this.state.userSearched.rolename.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                    </div>
                                    <div id="user_equip_container">
                                        <h2>Equipos</h2>
                                        <div id="table_contain">
                                            {
                                            (this.state.userEquips > 0) 
                                            ?
                                                <table id="table_equip_user" border="1">
                                                    <thead>
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th>Descripción</th>
                                                            <th>Asignadado por</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.userEquips.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td><img src={item.imagen} alt="imagen" /></td>
                                                                    <td>{item.tename}-{item.equipmentdescription}</td>
                                                                    <td>{item.assignedBy}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                                
                                            :
                                                <h3>Sin equipos asignados.</h3>
                                            }
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <div id="user_IT_info" className="info_container" ref={this.input_IT_container}>
                                            <label htmlFor="register_sede_input">TI*</label>
                                            <select
                                                id="user_IT_input" className="user_input" value={this.state.TISelected}
                                                required onFocus={(e)=>this.handleFocus(e)} onBlur={(e)=>this.handleBlur(e)}
                                                onChange={(e) => { this.setState({ TISelected: e.target.value }); e.target.style.color = 'black'; }}
                                            >
                                                <option value="" hidden disabled>Seleccione el usuario de IT</option>
                                                {this.state.TI.map((item, index) => (
                                                    <option key={index} value={item[0]}>{item[1]}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <input onClick={() => this.generateFile("MurilloR.Carlos@outlook.com", "Victor@arkusnexus.com", "Victor")} type="submit" id="user_cart_submit" className="search_input" value="Crear carta responsiva" />
                                    </div>
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
