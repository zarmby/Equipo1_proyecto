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

    return (
      <div className="card" id={"equipement_" + this.props.id}
        onClick={() => handlePanelShow(this.props.serialnumber, this.props.mark, this.props.model, this.props.enviroment, this.props.description, this.props.state, this.props.campus)}>
        <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-white-laptop-free-button-image_1372158.jpg" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc"></svg>
            <img className="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{this.props.status}</h3>
              <img className="status" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
              <span className="card__status">{this.props.assignedUser}</span>
            </div>
          </div>
          <div className="card__description">
            <div className="show-more">
              <p><strong></strong>Mirar Equipo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default SingleElement;
