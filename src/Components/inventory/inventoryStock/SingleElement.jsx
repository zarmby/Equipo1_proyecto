import React from 'react';
import './SingleElement.css'

function SingleElement(){

  return(
    <a href="" class="card">
      <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-white-laptop-free-button-image_1372158.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img class="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Asignado </h3>
            <span class="card__status">Armando Hernandez Rivera</span>
          </div>
        </div>
        <p class="card__description">Laptop asus 16 Ram Intel Core I9</p>
      </div>
    </a>
  );
}


export default SingleElement;
