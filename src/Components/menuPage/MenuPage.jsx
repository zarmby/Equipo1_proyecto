import React from 'react';
import './MenuPageStyles.css'

import inventario from '../../assets/img/inventario.png';

class MenuPage extends React.Component {
  render(){
    return(
      <div>
        <div class="content">
          <div class="card">
            <div class="icon"><img class="material-icons md-18" src = {inventario}></img></div>
              <p class="title">Inventario</p>
              <p class="text">Administra el inventario de equipos disponibles y assi</p>
            </div>
          <div class="card">
          <div class="icon"><img class="material-icons md-18" src = {inventario}></img></div>
            <p class="title">Reportes y Notificaciones</p>
            <p class="text">Descripcion del modulo</p>
          </div>
          <div class="card">
            <div class="icon"><img class="material-icons md-18" src = {inventario}></img></div>
              <p class="title">Administracion de aplicacion</p>
              <p class="text">Descripcion del modulo</p>
            </div>
          </div>
      </div>
    );
  }
}

export default MenuPage;
