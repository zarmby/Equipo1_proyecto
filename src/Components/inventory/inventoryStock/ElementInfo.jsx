import React from 'react';
import './ElementInfo.scss'
import ExitIcon from '../../../assets/img/exit-Icon.png'

function ElementInfo() {
  return(
    <div class="Modal-template">
      <div class="exit-row">
        <spam class="Exit-icon">X</spam>
      </div>
      <div class="Modal-box">
        <div class="Modal-Header">
          <img src="https://thumbs.dreamstime.com/b/vector-del-dibujo-lineal-de-la-caja-embalaje-cartulina-el-una-grab%C3%B3-todo-para-arriba-en-estilo-isom%C3%A9trico-143158250.jpg" class="Equipement-img" alt="" />
        </div>
        <div class="Modal-Body">
        <div class="Description-Tittle">
          <div class="Tittles-Container">
            <p class="Tittles-Element"><strong>Descripcion:</strong></p>
          </div>
        </div>
        <div class="Info-Tittle">
          <div class="Tittles-Container">
            <p class="Tittles-Element"><strong>Caracteristicas:</strong></p>
          </div>
        </div>
        <div class="Description-Text">
          <div class="Description-Text-Container">
            <p>Dell Intel g3 15 3500 Gamer Core I5 8Gb Negro</p>
          </div>
        </div>
        <div class="Info-Text">
          <div class ="Info-Text-Elements">
            <p><strong>N/S:</strong></p><p>AB34TK</p>
            <p><strong>Marca:</strong></p><p>Intel</p>
            <p><strong>Modelo:</strong></p><p>Nose</p>
            <p><strong>Sede:</strong></p><p>Aguascalientes</p>
            <p><strong>ambiente:</strong></p><p>Windows</p>
          </div>
        </div>
        <div class="Status-Info">
          <div class="Status-Info-Elements">
            <p class="Status-Info-Text"><strong>Asigndo</strong></p>
            <div class="Status-Info-Icon-container">
              <img class="Status-Info-Icon" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
            </div>
          </div>
        </div>
        <div class="Asigned-Person">
          <div class="Asigned-Person-Elements">
            <a class="person-link">Armando Hernandez Rivera</a>
          </div>
        </div>
        <div class="Equipment-menu">
          <button class="Equipment-menu-Asign">Editar</button>
          <button class="Equipment-menu-Delete">Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ElementInfo;
