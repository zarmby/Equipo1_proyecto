import React, {useState} from 'react';
import './ElementInfo.scss'
import Alertify from 'alertifyjs';
import RegisterEquipment from './RegisterEquipment';
import { DeleteEquipmentApiDelete } from '../../../services/utils/Api';

function ElementInfo(props) {

  const [Modal, setModal] = useState(false);

  const handleDelete = () => {
      Alertify.confirm('Eliminar tipo de equipo', '¿Esta seguro de elimar este tipo de equipo?',
          async function() {
              try {
                  await DeleteEquipmentApiDelete("Equipments/", false,props.idEquipment);
                  Alertify.success("<b style='color:white;'>Eliminado correctamente</b>");
                  props.handleCategory(props.category,props.image,props.code);
                  props.handlePanelShow();
                  setTimeout(true, 200);
              }
              catch (e) {
                  Alertify.error(`<b style='color:white;'>${e}</b>`);
              }
          },
          function(){}
      );
  }

  const handleCloseModal = () => {
    setModal(!Modal);
  }

  var status_icon = "";
  props.state == "asignado" ? status_icon = "asiggned_info" : status_icon = "avalible_info";

  return(
    <div class="Modal-template">
    {Modal == true ? <RegisterEquipment
      idEquipment = {props.idEquipment}
      serialnumber = {props.serialnumber}
      description = {props.description}
      image = {props.image}
      category = {props.category}
      code = {props.code}
      mark = {props.mark}
      model = {props.model}
      enviroment = {props.enviroment}
      handleCategory = {props.handleCategory}
      close = {handleCloseModal}
      handlePanelShow = {props.handlePanelShow}
      /> : null}
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
            <div class="celphone-position-info-label">
              <div>
              <p><strong>N/S:</strong></p>
              <p><strong>Marca:</strong></p>
              <p><strong>Modelo:</strong></p>
              <p><strong>Sede:</strong></p>
              <p><strong>ambiente:</strong></p>
              </div>
            </div>
            <div class="celphone-position-info-info">
              <div>
                <p>{" "}{props.serialnumber}</p>
                <p>{" "}{props.mark}</p>
                <p>{" "}{props.model}</p>
                <p>{" "}{props.campus}</p>
                <p>{" "}{props.enviroment}</p>
              </div>
            </div>

          </div>
        </div>
        <div class="Status-Info">
          <div class="Status-Info-Elements">
            <p class="Status-Info-Text"><strong>{props.state}</strong></p>
            <div class="Status-Info-Icon-container">
              <div class={status_icon} ></div>
            </div>
          </div>
        </div>
        <div class="Asigned-Person">
          <div class="Asigned-Person-Elements">
            <a class="person-link">{props.state != "Disponible" ? props.assignedUser : "Sin asignar"}</a>
          </div>
        </div>
        <div class="Equipment-menu">
          <button class="Equipment-menu-Asign" onClick={() => handleCloseModal()}>Editar</button>
          <button class="Equipment-menu-Delete" onClick={handleDelete}>Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ElementInfo;
