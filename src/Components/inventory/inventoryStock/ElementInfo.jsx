import React, {useState} from 'react';
import './ElementInfo.scss'
import Alertify from 'alertifyjs';
import RegisterEquipment from './RegisterEquipment';
import { DeleteEquipmentApiDelete, SendToRepai, Repair } from '../../../services/utils/Api';

function ElementInfo(props) {

  const [Modal, setModal] = useState(false);
  const [asigned, setAsigned] = useState(props.assignedUser)
  const [asignedName, setAsignedName] = useState(asigned.split(' ■ '));

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

  const sendToRepair = () => {
      Alertify.confirm('Poner el equipo en reparacion', '¿Esta seguro de mandar a reparar este equipo?',
          async function() {
              try {
                  await SendToRepai("Equipments/", props.idEquipment);
                  Alertify.success("<b style='color:white;'>Se mando a reparar el equipo correctamente</b>");
                  props.handleCategory(props.category,props.image,props.code);
                  props.handlePanelShow();
                  setTimeout(true, 200);
              }
              catch (e) {
                Alertify.success("<b style='color:white;'>Se mando a reparar el equipo correctamente</b>");
                props.handleCategory(props.category,props.image,props.code);
                props.handlePanelShow();
              }
          },
          function(){}
      );
  }

  const repairEquipment = () => {
      Alertify.confirm('Arreglar el equipo', '¿poner el equipo otra vez disponible?',
          async function() {
              try {
                  await Repair("Equipments/", props.idEquipment, asignedName[0]);
                  Alertify.success("<b style='color:white;'>Se Cambio el estatus del equipo correctamente</b>");
                  props.handleCategory(props.category,props.image,props.code);
                  props.handlePanelShow();
                  setTimeout(true, 200);
              }
              catch (e) {
                Alertify.success("<b style='color:white;'>Se Cambio el estatus del equipo correctamente</b>");
                props.handleCategory(props.category,props.image,props.code);
                props.handlePanelShow();
              }
          },
          function(){}
      );
  }

  const handleCloseModal = () => {
    setModal(!Modal);
    props.searchUser(props.assignedUser);
  }

  var status_icon = "";
  props.state == "Asignado" ? status_icon = "asiggned_info" : props.state == "En reparación" ? status_icon = "repair_info" : status_icon = "avalible_info";

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
      equipmentFilters = {props.equipmentFilters}
      searchUser = {props.searchUser}
      users = {props.users}
      userId = {props.userId}
      assigned = {props.assignedUser}
      userAsign = {props.userAsign}
      state = {props.state}/>
       : null}
      <div class="exit-row" id="exitEquipment" onClick={props.handlePanelShow}>
        <spam class="Exit-icon">X</spam>
      </div>
      <div class="Modal-box">
        <div class="Modal-Header">
          <img src={props.image} class="Equipement-img" />
        </div>
        <div class="Modal-Body">
        {props.equipmentFilters.equipmentdescription ?
          <div class="Description-Tittle">
          <div class="Tittles-Container">
            <p class="Tittles-Element"><strong>Descripcion:</strong></p>
          </div>
        </div> : null}
        <div class="Info-Tittle">
          <div class="Tittles-Container">
            <p class="Tittles-Element"><strong>Caracteristicas:</strong></p>
          </div>
        </div>
        {props.equipmentFilters.equipmentdescription ? <div class="Description-Text">
          <div class="Description-Text-Container">
            <p>{props.description}</p>
          </div>
        </div> : null}
        <div class="Info-Text">
          <div class ="Info-Text-Elements">
            <div class="celphone-position-info-label">
              <div class="label-grid">
              <p><strong>N/S:</strong></p>
              {props.equipmentFilters.mark ? <p><strong>Marca:</strong></p> : null }
              {props.equipmentFilters.model ? <p><strong>Modelo:</strong></p> : null }
              <p><strong>Sede:</strong></p>
              {props.equipmentFilters.enviroment ? <p><strong>ambiente:</strong></p> : null }
              </div>
            </div>
            <div class="celphone-position-info-info">
              <div class="info-grid">
                <p>{props.serialnumber}</p>
                {props.equipmentFilters.mark ? <p>{props.mark}</p> : null }
                {props.equipmentFilters.model ? <p>{props.model}</p> : null }
                <p>{props.campus}</p>
                {props.equipmentFilters.enviroment ? <p>{props.enviroment}</p> : null }
              </div>
            </div>

          </div>
        </div>
        <div class="Status-Info">
          <div class="Status-Info-Elements">
            <div class="Status-Info-Icon-container">
              <div class="Status-Info-Text"><p><strong>{props.state}</strong></p></div>
              <div class={status_icon} ></div>
            </div>
          </div>
        </div>
        <div class="Asigned-Person">
          <div class="Asigned-Person-Elements">
            <a class="person-link">{props.state == "Asignado" ? asignedName[0] : props.state == "Disponible" ?
             "No asignado" : asignedName[0] != "undefined undefined" ? asignedName[0] : "No asignado" }</a>
          </div>
        </div>
        <div class="Equipment-menu">
          {props.state == "En reparación" ? <button class="Equipment-menu-repair-AIR" id="EquipmentrepairButton" onClick={() => repairEquipment()}>Reparar</button> :
          <button class="Equipment-menu-repair" id="EquipmentrepairButton" onClick={() => sendToRepair()}>Reparar</button>}
          <button class="Equipment-menu-Asign" id="EquipmentAssignButton" onClick={() => handleCloseModal()}>Editar</button>
          <button class="Equipment-menu-Delete" id="EquipmentDeleteButton" onClick={handleDelete}>Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ElementInfo;
