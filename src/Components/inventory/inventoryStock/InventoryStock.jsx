import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import RegisterEquipment from './RegisterEquipment';
import Loading from '../../loading/Loading';
import { EquipementListGet, FiltersApiGet } from '../../../services/utils/InventoryApi';

class InventoryStock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Equipments: [],
      EquipmentFilters: [],
      Panel: false,
      Modal: false,
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
      Loading: true
    };
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
  }

  handleCloseModal = () => {
    this.setState({ Modal: !this.state.Modal });
  }

  handleCategory = async (typeEquipment,imgURL,code) =>{
    this.setState({ Loading : true});
    this.setState({ Existences : false });
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
  }

  render() {
    return (
      <div className="inv-cont">
        {this.state.Loading ? <Loading/> : null}
        <Navbar />
        <SideFilter
          handleCategory={this.handleCategory}
          close={this.handleCloseModal}
          typeCategory = {this.state.typeCategory}/>
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
            equipmentFilters = {this.state.EquipmentFilters}/> : null}
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
