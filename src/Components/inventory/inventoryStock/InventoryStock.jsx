import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import Alertify from 'alertifyjs';
import RegisterEquipment from './RegisterEquipment';
import Loading from '../../loading/Loading';
import { EquipementListGet, FiltersApiGet } from '../../../services/utils/InventoryApi';
import { UsersApiGet, UserApiGet } from '../../../services/utils/Api';

class InventoryStock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Equipments: [],
      EquipmentFilters: [],
      Panel: false,
      Modal: false,
      closeFilters: true,
      SerialNumber: "",
      Mark: "",
      Model:"",
      Enviroment:"",
      Description:"",
      State:"",
      Campus:"",
      CampusName:"",
      AssignedUser:"",
      Image:"",
      typeCategory:"",
      codeCategory:"",
      idEquipment:"",
      Existences:true,
      Loading: true,
      users : [],
      userId : "",
      userSearched :[]
    };
    this.handleUserSearched = this.handleUserSearched.bind(this);
  }



  async componentDidMount(){
    let loggedUser = window.localStorage.getItem('UserLogged');
    if(loggedUser){
    let UserLogged = JSON.parse(loggedUser)
      let campusL = UserLogged.IDcampus;
      this.setState({Campus : campusL});
    }
    this.setState({Image : this.props.image});
    this.setState({typeCategory : this.props.typeCategory});
    this.setState({codeCategory : this.props.code});
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=" + this.props.typeCategory);
      let dataEquipments = await equipmentsGet;
      this.setState({ Equipments: dataEquipments.result.cont.equipment });
      let res = await FiltersApiGet(this.state.codeCategory);
      let filters = res.result.cont.name[0];
      this.setState({ EquipmentFilters: filters});
    }
    catch (e) {
      console.log(e);
    }
    this.getUsers().then(()=>{
        this.setState({loading:false});
    });
    this.state.Equipments.length == 0 ? this.setState({ Existences : false }) : this.setState({ Existences : true });
    this.setState({Loading : false});
  }

  handlePanelShow = (SerialNumber, Mark, Model, Enviroment, Description, State, CampusName, AssignedUser,IdEquipment) => {
    this.setState({ SerialNumber: SerialNumber });
    this.setState({ Mark: Mark });
    this.setState({ Model: Model });
    this.setState({ Enviroment: Enviroment });
    this.setState({ CampusName: CampusName });
    this.setState({ Description: Description });
    this.setState({ State: State });
    this.setState({ AssignedUser: AssignedUser });
    this.setState({ idEquipment: IdEquipment });
    this.setState({ Panel: !this.state.Panel });
    this.setState({ userId: ""});
  }

  handleCloseModal = () => {
    this.setState({ Modal: !this.state.Modal });
    this.setState({ userId: ""});
  }

  handlecloseFilters= () => {
    this.setState({ closeFilters: !this.state.closeFilters });
  }

  handleCategory = async (typeEquipment,imgURL,code) =>{
    this.handlecloseFilters();
    this.setState({ Loading : true});
    this.setState({ Existences : true });
    this.setState({ Equipments : []});
    this.setState({ Image : imgURL});
    this.setState({ typeCategory : typeEquipment});
    this.setState({ codeCategory : code});
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=" + typeEquipment);
      let dataEquipments = await equipmentsGet;
      this.setState({ Equipments: dataEquipments.result.cont.equipment });
    }
    catch (e) {
      console.log(e);
    }
    try{
      let res = await FiltersApiGet(this.state.codeCategory);
      let filters = res.result.cont.name[0];
      this.setState({ EquipmentFilters: filters});
    }
    catch (e) {
      console.log(e);
    }
    this.state.Equipments.length == 0 ? this.setState({ Existences : false }) : this.setState({ Existences : true });
    this.setState({Loading : false});
    this.handlecloseFilters();
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
          console.log(res);
          this.setState({userSearched:usrRecived});
      }
      catch (e) {
          Alertify.error(`<b style='color:white;'>${e}</b>`);
      }
  }

  render() {
    return (
      <div className="inv-cont">
        {this.state.Loading ? <Loading/> : null}
        <Navbar/>
        {this.state.closeFilters ?
          <SideFilter
          handleCategory={this.handleCategory}
          close={this.handleCloseModal}
          typeCategory = {this.state.typeCategory}
          /> : null}
          {this.state.Existences == false ?
            <div class="nothing-msg">
              <p>No hay ningun equipo de tipo (<b>{this.state.typeCategory}</b>{") en este momento."}</p>
            </div> : null
          }
        {this.state.Panel ?
          <ElementInfo handlePanelShow = {this.handlePanelShow}
          serialnumber = {this.state.SerialNumber}
          mark = {this.state.Mark}
          model = {this.state.Model}
          enviroment = {this.state.Enviroment}
          description = {this.state.Description}
          state = {this.state.State}
          campus = {this.state.CampusName}
          assignedUser = {this.state.AssignedUser}
          idEquipment = {this.state.idEquipment}
          handleCategory = {this.handleCategory}
          image = {this.state.Image}
          category = {this.state.typeCategory}
          code = {this.state.codeCategory}
          handleCloseModal = {this.handleCloseModal}
          equipmentFilters = {this.state.EquipmentFilters}
          searchUser = {this.handleUserSearched}
          users = {this.state.users}
          userId = {this.state.userId}/> : null}
          /> : null}
          {this.state.Modal == true ?
            <RegisterEquipment
            close={this.handleCloseModal}
            image = {this.state.Image}
            category = {this.state.typeCategory}
            code = {this.state.codeCategory}
            codeEquipment = {this.state.CodeEquipment}
            handleCategory = {this.handleCategory}
            campus = {this.state.Campus}
            userId = {this.state.userId}
            equipmentFilters = {this.state.EquipmentFilters}
            searchUser = {this.handleUserSearched}
            users = {this.state.users}/> : null}
        <div className="Filters">
        </div>
        <div className="cont-list">
          <div className="grid">
            {this.state.Equipments.map((item, index) => (
              <SingleElement
              status = {item.state}
              serialnumber = {item.serialnumber}
              mark = {item.mark}
              model = {item.model}
              enviroment = {item.enviroment}
              description = {item.equipmentdescription}
              state = {item.state}
              campus = {item.campusname}
              assignedUser = {item.username + " " + item.lastname}
              idEquipment = {item._id}
              image = {this.state.Image}
              id = {index}
              handlePanelShow = {this.handlePanelShow}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryStock;
