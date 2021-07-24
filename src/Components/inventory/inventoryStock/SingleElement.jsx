import React from 'react';
import './SingleElement.scss';
import repairIcon from '../../../assets/img/repairIcon.png';

class SingleElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asignedName: props.assignedUser != "" ? props.assignedUser.split(' ■ ') : ""
    };
  }

  render() {

  const { handlePanelShow } = this.props;
  var status_icon = "";
  this.props.status === "Asignado" ? status_icon = "assigned" : this.props.status === "En reparación" ? status_icon = "repair" : status_icon = "avalible";

  return(
    <div class="card" id = {"equipement_" + this.props.id}
    onClick={() => handlePanelShow(this.props.serialnumber,this.props.mark,this.props.model,this.props.enviroment,this.props.description,this.props.state,this.props.campus,this.props.assignedUser,this.props.idEquipment)}>
        <img src={this.props.image} class="card__image" alt="" />
        {this.props.status === "En reparación" ? <img src={repairIcon} class="card__image-repair" alt="" /> : null}
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc"></svg>
          <div class={status_icon} ></div>
          <div class="card__header-text">
            <h3 class="card__title">{this.props.status}</h3>
            <span class="card__status">{this.props.status != "Disponible" ? this.state.asignedName[0] : "Sin Asignar"}</span>
          </div>
        </div>
        <div class="card__description">
          <div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default SingleElement;
