import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import RegisterEquipment from './RegisterEquipment';
import { EquipementListGet } from '../../../services/utils/InventoryApi';

class InventoryStock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Equipments: [],
      Panel: false,
      Modal: false,
      SerialNumber: "",
      Mark: "",
      Model:"",
      Enviroment:"",
      Description:"",
      State:"",
      Campus:"",
      AssignedUser:"",
      Image:"",
      typeCategory:"",
      codeCategory:"",
      CodeEquipment:""
    };
  }

  async componentDidMount(){
    this.setState({Image : this.props.image});
    this.setState({typeCategory : this.props.typeCategory});
    this.setState({codeCategory : this.props.code});
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=" + this.props.typeCategory);
      let dataEquipments = await equipmentsGet;
      this.setState({ Equipments: dataEquipments.result.cont.equipment });
    }
    catch (e) {
      console.log(e);
    }
  }

  handlePanelShow = (SerialNumber, Mark, Model, Enviroment, Description, State, Campus, AssignedUser,CodeEquipment) => {
    this.setState({ SerialNumber: SerialNumber });
    this.setState({ Mark: Mark });
    this.setState({ Model: Model });
    this.setState({ Enviroment: Enviroment });
    this.setState({ Description: Description });
    this.setState({ State: State });
    this.setState({ Campus: Campus });
    this.setState({ AssignedUser: AssignedUser });
    this.setState({ CodeEquipment: CodeEquipment });
    this.setState({ Panel: !this.state.Panel });
  }

  handleCloseModal = () => {
    this.setState({ Modal: !this.state.Modal });
  }

  handleCategory = async (typeEquipment,imgURL,code) =>{
    this.setState({Equipments : []});
    this.setState({Image : imgURL});
    this.setState({typeCategory : typeEquipment});
    this.setState({codeCategory : code});
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=" + typeEquipment);
      let dataEquipments = await equipmentsGet;
      this.setState({Equipments : dataEquipments.result.cont.equipment});
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="inv-cont">
        <Navbar />
        <SideFilter
          handleCategory={this.handleCategory}
          close={this.handleCloseModal}/>
        {this.state.Panel ?
          <ElementInfo handlePanelShow = {this.handlePanelShow}
          serialnumber = {this.state.SerialNumber}
          mark = {this.state.Mark}
          model = {this.state.Model}
          enviroment = {this.state.Enviroment}
          description = {this.state.Description}
          state = {this.state.State}
          campus = {this.state.Campus}
          assignedUser = {this.state.AssignedUser}
          codeEquipment = {this.state.CodeEquipment}
          handleCategory = {this.handleCategory}
          image = {this.state.Image}
          category = {this.state.typeCategory}
          code = {this.state.codeCategory}
          handleCloseModal = {this.handleCloseModal}
          /> : null}
          {this.state.Modal == true ? <RegisterEquipment
            serialnumber = {this.state.SerialNumber}
            close={this.handleCloseModal}
            image = {this.state.Image}
            category = {this.state.typeCategory}
            code = {this.state.codeCategory}
            codeEquipment = {this.state.CodeEquipment}
            handleCategory = {this.handleCategory}/> : null}
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
              codeEquipment = {item._id}
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
