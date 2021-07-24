import React from 'react';
import './User.scss';
import Navbar from '../navbar/Navbar';
import SearchUser from './searchUser/SearchUser';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { UsersApiGet, UserApiGet, GenerateEmail, UserEquipsApiGet, ApiGet } from '../../services/utils/Api';
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
            IT: [],
            ITSelected: "",
            userEquips : []
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
        this.capitalLeter = this.capitalLeter.bind(this);
        this.getIT = this.getIT.bind(this);
        this.child_navbar = React.createRef();
        this.input_IT_container = React.createRef();
    }

    componentDidMount() {
        this.getUsers().then(() => {
            this.getIT().then(()=>{
                this.setState({ loading: false });
            })
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
        this.setState({ modal: true });
    }
    setLoading(value) {
        this.setState({ loading: value });
    }

    async generateFile(e) {
        e.preventDefault();
        this.setLoading(true);
        let email = this.state.userSearched.email;
        let ITemail = this.state.ITSelected;
        let ITname = "";
        this.state.IT.forEach((item)=>{
            if(item.ITemail === ITemail)
                ITname = item.ITname;
        })
        try {
            await GenerateEmail("pdf/generateReport", email, ITemail, ITname)
            Alertify.success("<b style='color:white;'>Se genero la carta correctamente</b>");
        }
        catch (er) {
            Alertify.error(`<b style='color:white;'>${er}</b>`);
            console.log(er);
        }
        //alert(`${email}---${ITemail}---${ITname}`);
        this.setLoading(false);
    }

    async getIT (){
        try {
            let res = await ApiGet("IT");
            let aux = res.result.cont.user;
            this.setState({IT : aux});
        }
        catch (e) {
            console.log(e);
        }
    }

    capitalLeter(stringRecived){
        if(stringRecived !== "" & stringRecived !== undefined){
            let stringMod = stringRecived.replace(/^\w/, (c) => c.toUpperCase());
            return stringMod;
        }
        else
            return "";
    }

    render() {
        return (
            <div id="user_container">
                <Navbar ref={this.child_navbar} />
                {(this.state.loading) ? <Loading />
                    :
                    <div id="user_search_contain" onClick={this.child_navbar.current.closeSideMenuNabvar}>
                        {(this.state.modal) ? <UserModal close={this.handleCloseModal} loading={this.setLoading} /> : null}
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
                                        <h2>{this.capitalLeter(this.state.userSearched.username)} {this.capitalLeter(this.state.userSearched.lastname)}</h2>
                                        <p><b>Cuenta:</b><br /> {this.capitalLeter(this.state.userSearched.account)}</p>
                                        <p><b>Correo electronico:</b><br /> {this.capitalLeter(this.state.userSearched.email)}</p>
                                        <p><b>Sede:</b><br /> {this.capitalLeter(this.state.userSearched.campusname)}</p>
                                        <p><b>Telefono:</b><br /> {this.capitalLeter(this.state.userSearched.phonenumber)}</p>
                                        <p><b>Perfil del usuario:</b><br /> {this.capitalLeter(this.state.userSearched.userprofile)}</p>
                                        <p><b>Rol:</b><br /> {this.capitalLeter(this.state.userSearched.rolename)}</p>
                                    </div>
                                    <div id="user_equip_container">
                                        <h2>Equipos</h2>
                                        <div id="table_contain">
                                            {
                                            (this.state.userEquips.length > 0) 
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
                                                                    <td>
                                                                        <p><b>{item.tename}</b></p>
                                                                        {(item.equipmentdescription) ?<p><b>Descripcion:</b>{item.equipmentdescription}</p> : null}
                                                                        {(item.serialnumber) ?<p><b>N/S:</b>{item.serialnumber}</p> : null}
                                                                        {(item.model) ?<p><b>Modelo:</b>{item.model}</p> : null}
                                                                        {(item.mark) ?<p><b>Marca:</b>{item.mark}</p> : null}
                                                                        {(item.enviroment) ?<p><b>Ambiente:</b>{item.enviroment}</p> : null}
                                                                    </td>
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
                                    {
                                        (this.state.userEquips.length > 0) 
                                        ?
                                        <div>
                                            <form id="user_form_cart"  onSubmit={this.generateFile}>
                                                <div id="user_IT_info" className="info_container" ref={this.input_IT_container}>
                                                    <label htmlFor="register_sede_input">TI*</label>
                                                    <select
                                                        id="user_IT_input" className="user_input" value={this.state.ITSelected}
                                                        required onFocus={(e)=>this.handleFocus(e)} onBlur={(e)=>this.handleBlur(e)}
                                                        onChange={(e) => { this.setState({ ITSelected: e.target.value }); e.target.style.color = 'black'; }}
                                                    >
                                                        <option value="" hidden disabled>Seleccione el usuario de IT</option>
                                                        {this.state.IT.map((item, index) => (
                                                            <option key={index} value={item.ITemail}>{item.ITname}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <input type="submit" id="user_cart_submit" className="search_input" value="Crear carta responsiva" /> 
                                            </form>
                                        </div>
                                    : null
                                }
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

            </div>
        );
    }
}

export default User;
