import React, { useState } from 'react';
import './MenuPageStyles.css'

<<<<<<< HEAD
import inventario from '../../assets/img/inventario_azul.png';
=======
import inventarioU from '../../assets/img/inventario_azul.png';
import inventarioS from '../../assets/img/inventario_rojo.png';
>>>>>>> e400c26bdee7cbb1382c146cdaec3c4f21dbc9d2
import usuario from '../../assets/img/usuario.png';

function MenuPage() {

<<<<<<< HEAD
  const [img1State,setImg1State] = useState (inventario);

  const cambiarImagen = () => {
            inventario.src="../../assets/img/inventario_rojo.png";
        }

  function restaurarImagen() {
            inventario.src="../../assets/img/usuario_azul.png";
        }
=======
  const [img1State,setImg1State] = useState (inventarioU);

>>>>>>> e400c26bdee7cbb1382c146cdaec3c4f21dbc9d2

    return(
      <div>
        <div class="content">
<<<<<<< HEAD
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

=======
          <div class="card"  onMouseEnter={() => setImg1State(inventarioS)} onMouseLeave={() => setImg1State(inventarioU)}>
            <div class="icon"><img class="material-icons md-18" src = {img1State}  onmouseout="restaurarImagen()"></img></div>
              <p class="title">Inventario</p>
              <p class="text">Administra el inventario de equipos disponibles y asi</p>
            </div>
          <div class="card">
            <div class="icon"><img class="material-icons md-18" src = {usuario}></img></div>
              <p class="title">Reportes y Notificaciones</p>
              <p class="text">Descripcion del modulo</p>
            </div>
>>>>>>> e400c26bdee7cbb1382c146cdaec3c4f21dbc9d2
          </div>
      </div>
    );
  }

export default MenuPage;
