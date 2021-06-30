import React from 'react';
import './SingleElement.css';
import ElementInfo from './ElementInfo';

class SingleElement extends React.Component{
  constructor (props){
    super(props);
    this.state = {
    };
  }

render(){

  const { handlePanelShow } = this.props;

  return(
    <div class="card" id = {"equipement_" + this.props.id}
    onClick={() => handlePanelShow(this.props.serialnumber,this.props.mark,this.props.model,this.props.enviroment,this.props.description,this.props.state,this.props.campus,this.props.assignedUser)}>
        <img src={this.props.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc"></svg>
          <img class="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{this.props.status}</h3>
            <img class="status" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
            <span class="card__status">{this.props.assignedUser}</span>
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
