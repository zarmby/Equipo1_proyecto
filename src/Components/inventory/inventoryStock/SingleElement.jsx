import React, {useState} from 'react';
import './SingleElement.css';

function SingleElement(){

  return(
    <div className="card" id = "element-index">
      <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-white-laptop-free-button-image_1372158.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc"></svg>
          <img className="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Asignado</h3>
            <img className="status" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
            <span className="card__status">Armando Hernandez Rivera</span>
          </div>
        </div>
        <div className="card__description">
          <p>NS: 34452618 / Marca: Lenovo</p>
          <p>Sede: AGS / Modelo: N/A</p>
        </div>
      </div>
    </div>
  );
}


export default SingleElement;
