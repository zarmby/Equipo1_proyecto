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
        <nav class="main-menu">
          <spam class="face-side">
            <i class="fas fa-angle-right fa-3x arrow"></i>
          </spam>
            <ul>
            <li>
              <a id = "add-Equipment">
                <span class="nav-text">Agregar Equipo</span>
                <div class="plus_container">
                  <i class="fas fa-plus-square fa-2x plus"></i>
                </div>
              </a>
            </li>
              {this.state.TypeEquipements.map((item, index) => (
                <SingleElement
                tename = {item.tename}
                imagen = {item.imagen}
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
