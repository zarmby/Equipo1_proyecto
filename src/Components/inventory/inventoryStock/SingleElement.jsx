import React, {useState} from 'react';
import './SingleElement.css';

function SingleElement(props){

  return(
    <div class="card" id = {"equipement_" + props.id}>
      <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-white-laptop-free-button-image_1372158.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc"></svg>
          <img class="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
          <div class="card__header-text">
<<<<<<< HEAD
            <h3 class="card__title">Disponible</h3>
            <img class="status" src="https://emojitool.com/img/facebook/4.0/large-green-circle-4327.png" alt="" />
            <span class="card__status">N/A</span>
          </div>
        </div>
        <div class="card__description">
          <p>NS: 34452618 / Marca: Lenovo</p>
          <p>Sede: AGS / Modelo: XS-mamalouski 2.0</p>
=======
            <h3 class="card__title">{props.status}</h3>
            <img class="status" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
            <span class="card__status">Armando Hernandez Rivera</span>
          </div>
        </div>
        <div class="card__description">
          <p><strong>N/S /</strong> {props.serialnumber}</p>
          <p><strong>Model /</strong> {props.model}</p>
          <p><strong>Marca /</strong> {props.mark}</p>
>>>>>>> dev
        </div>
      </div>
    </div>
  );
}


export default SingleElement;
