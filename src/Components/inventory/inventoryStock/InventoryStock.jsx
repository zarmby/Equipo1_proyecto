import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import { EquipementListGet} from '../../../services/utils/InventoryApi';

class InventoryStock extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      Equipments : [],
      Panel : false,
      SerialNumber: "",
      Mark: "",
      Model:"",
      Enviroment:"",
      Description:"",
      State:"",
      Campus:"",
      AssignedUser:""
    };
  }

  async componentDidMount(){
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=cables");
      let dataEquipments = await equipmentsGet;
      this.setState({Equipments : dataEquipments.result.cont.equipment});
    }
    catch(e){
      console.log(e);
    }
  }

  handlePanelShow = (SerialNumber, Mark, Model, Enviroment, Description, State, Campus, AssignedUser) =>{
      this.setState({SerialNumber : SerialNumber});
      this.setState({Mark : Mark});
      this.setState({Model : Model});
      this.setState({Enviroment : Enviroment});
      this.setState({Description : Description});
      this.setState({State : State});
      this.setState({Campus : Campus});
      this.setState({AssignedUser : AssignedUser});
      this.setState({Panel : !this.state.Panel});
  }

  handleCategory = async (typeEquipment) =>{
    try{
      let equipmentsGet = await EquipementListGet("equipments?typeequipment=" + typeEquipment);
      let dataEquipments = await equipmentsGet;
      this.setState({Equipments : dataEquipments.result.cont.equipment});
    }
    catch(e){
      console.log(e);
    }
  }

  render(){
    return(
      <div class="inv-cont">
        <Navbar/>
        <SideFilter
        handleCategory = {this.handleCategory}/>
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
          /> : null}
        <div clas="Filters">
        </div>
        <div class="cont-list">
          <div class ="grid">
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
              assignedUser = {item.username}
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
