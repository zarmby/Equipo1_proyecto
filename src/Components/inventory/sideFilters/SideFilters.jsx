import React from 'react';
import './SideFilters.css';
import SingleElement from './SingleElement';
import { TypeEquipementListGet } from '../../../services/utils/InventoryApi';

class SideFilters extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      TypeEquipements : []
    };
  }

  async componentDidMount(){
    try{
      let typeEquipmentsGet = await TypeEquipementListGet("typeequipments/");
      let dataTypeEquipments = await typeEquipmentsGet;
      this.setState({TypeEquipements : dataTypeEquipments.result.cont.typeequipment});
    }
    catch(e){
      console.log(e);
    }
  }

  render(){
    return(
      <div>
        <nav className="main-menu">
          <spam className="face-side">
            <i className="fas fa-angle-right fa-3x"></i>
          </spam>
            <ul>
              {this.state.TypeEquipements.map((item, index) => (
                <SingleElement
                tename = {item.tename}
                index = {index}
                handleCategory = {this.props.handleCategory}/>
              ))}
            </ul>
        </nav>
      </div>
    );
  }
}

export default SideFilters;
