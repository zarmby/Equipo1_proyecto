import React from 'react';
import './SingleElement.css'

function SingleElement(){

  return(
    <a href="" class="card">
      <img src="https://www.officedepot.com.mx/medias/85814.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mjk3MDc5fGltYWdlL2pwZWd8aDA4L2gyNy85NTk1MjEwNTMwODQ2LmpwZ3wyMThhM2QzZjQ2MjllNTBiM2Y1NDljYzJiNzM4MTEzMTQ1ZTZhZmE1MGNlMzU5ZTZiOTRmZjJiMjE5ZTFmZWVj" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img class="card__thumb" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Sin Asignar </h3>
            <span class="card__status">Armando Hernandez Rivera</span>
          </div>
        </div>
        <p class="card__description">Mirar mas Informacion</p>
      </div>
    </a>
  );
}


export default SingleElement;
