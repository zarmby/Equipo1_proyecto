import React, { useState } from 'react';
import './MenuPageStyles.css';
import {Link} from 'react-router-dom';
import inventarioU from '../../assets/img/inventario_azul.png';
import inventarioS from '../../assets/img/inventario_rojo.png';
import usuarioA from '../../assets/img/usuario_azul.png';
import usuarioR from '../../assets/img/usuario_rojo.png';
import Navbar from '../navbar/Navbar';

function MenuPage() {
  const [img1State,setImg1State] = useState (inventarioU);
  const [img2State,setImg2State] = useState (usuarioA);

    return(
      <div>
        <Navbar />
        <div class="content">
        <Link to="InventoryCenter" style={{ textDecoration: 'none' }}>
          <div class="card"  onMouseEnter={() => setImg1State(inventarioS)} onMouseLeave={() => setImg1State(inventarioU)}>
            <div class="icon "><img class="material-icons md-18" src = {img1State}  onmouseout="restaurarImagen()"></img></div>
              <p class="title">Inventario</p>
              <p class="text">Administra el inventario de equipos y mira la informacion disponible sobre ellos.</p>
            </div>
        </Link>
        <Link to="/user" className="link">
          <div class="card"  onMouseEnter={() => setImg2State(usuarioR)} onMouseLeave={() => setImg2State(usuarioA)}>
            <div class="icon"><img class="material-icons md-18" src = {img2State}></img></div>
              <p class="title">Reportes y Notificaciones</p>
              <p class="text">Descripcion del modulo</p>
            </div>
        </Link>
        </div>
      </div>
    );
  }
export default MenuPage;
