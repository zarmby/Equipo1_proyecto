import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import { EquipementListGet } from '../../../services/utils/InventoryApi';

class InventoryStock extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      Equipments : []
    };
  }


  async componentDidMount(){
    try{
      let equipmentsGet = await EquipementListGet("equipments/");
      let dataEquipments = await equipmentsGet;
      this.setState({Equipments : dataEquipments.result.cont.equipment});
      console.log(this.state.Equipments);
    }
    catch(e){
      console.log(e);
    }
  }

  render(){
    return(
      <div class="inv-cont">
        <Navbar />
        <SideFilter />
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
              description = {item.equipmentdescription}
              id = {index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryStock;
