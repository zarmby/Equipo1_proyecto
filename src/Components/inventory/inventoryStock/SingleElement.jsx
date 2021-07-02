import React from 'react';
import './SingleElement.css';

class SingleElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

  const { handlePanelShow } = this.props;
  var status_icon = "";
  this.props.status == "asignado" ? status_icon = "assigned" : status_icon = "avalible";

  return(
    <div class="card" id = {"equipement_" + this.props.id}
    onClick={() => handlePanelShow(this.props.serialnumber,this.props.mark,this.props.model,this.props.enviroment,this.props.description,this.props.state,this.props.campus,this.props.assignedUser)}>
        <img src={this.props.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc"></svg>
          <div class={status_icon} ></div>
          <div class="card__header-text">
            <h3 class="card__title">{this.props.status}</h3>
            <span class="card__status">{this.props.status != "Disponible" ? this.props.assignedUser : "N/A"}</span>
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
