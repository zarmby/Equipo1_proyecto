import React from 'react';
import './ElementInfo.scss'
import ExitIcon from '../../../assets/img/exit-Icon.png'

function ElementInfo(props) {
  return(
    <div class="Modal-template">
      <div class="exit-row" onClick={props.handlePanelShow}>
        <spam class="Exit-icon">X</spam>
      </div>
      <div class="Modal-box">
        <div class="Modal-Header">
          <img src={props.image} class="Equipement-img" />  
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
            <p>{props.description}</p>
          </div>
        </div>
        <div class="Info-Text">
          <div class ="Info-Text-Elements">
            <p><strong>N/S:</strong></p><p>{props.serialnumber}</p>
            <p><strong>Marca:</strong></p><p>{props.mark}</p>
            <p><strong>Modelo:</strong></p><p>{props.model}</p>
            <p><strong>Sede:</strong></p><p>{props.campus}</p>
            <p><strong>ambiente:</strong></p><p>{props.enviroment}</p>
          </div>
        </div>
        <div class="Status-Info">
          <div class="Status-Info-Elements">
            <p class="Status-Info-Text"><strong>{props.state}</strong></p>
            <div class="Status-Info-Icon-container">
              <img class="Status-Info-Icon" src="https://images.emojiterra.com/google/android-10/512px/1f534.png" alt="" />
            </div>
          </div>
        </div>
        <div class="Asigned-Person">
          <div class="Asigned-Person-Elements">
            <a class="person-link">{props.assignedUser}</a>
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
