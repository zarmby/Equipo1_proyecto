import React, { useState } from 'react';
import './MenuPageStyles.css'

import inventario from '../../assets/img/inventario_azul.png';
import usuario from '../../assets/img/usuario.png';

function MenuPage() {

  const [img1State,setImg1State] = useState (inventario);

  const cambiarImagen = () => {
            inventario.src="../../assets/img/inventario_rojo.png";
        }

  function restaurarImagen() {
            inventario.src="../../assets/img/usuario_azul.png";
        }

    return(
      <div>
        <div class="content">
          <div class="card" onmouseover={cambiarImagen}>
            <div class="icon"><img class="material-icons md-18" src = {inventario}  onmouseout="restaurarImagen()"></img></div>
              <p class="title">Inventario</p>
              <p class="text">Administra el inventario de equipos disponibles y assi</p>
            </div>
          <div class="card">
          <div class="icon"><img class="material-icons md-18" src = {usuario}></img></div>
            <p class="title">Reportes y Notificaciones</p>
            <p class="text">Descripcion del modulo</p>
          </div>

          </div>
      </div>
    );
  }

export default MenuPage;
