import React, { useState } from 'react';
import './MenuPageStyles.css';
import {Link} from 'react-router-dom';

import inventarioU from '../../assets/img/inventario_azul.png';
import inventarioS from '../../assets/img/inventario_rojo.png';
import usuario from '../../assets/img/usuario.png';
import Navbar from '../navbar/Navbar';

function MenuPage() {

  const [img1State,setImg1State] = useState (inventarioU);


    return(
      <div>
        <Navbar />
        <div class="content">
        <Link to="InventoryCenter" style={{ textDecoration: 'none' }}>
          <div class="card"  onMouseEnter={() => setImg1State(inventarioS)} onMouseLeave={() => setImg1State(inventarioU)}>
            <div class="icon"><img class="material-icons md-18" src = {img1State}  onmouseout="restaurarImagen()"></img></div>
              <p class="title">Inventario</p>
              <p class="text">Administra el inventario de equipos y mira la informacion disponible sobre ellos.</p>
            </div>
        </Link>
        <Link to="/user" className="link">
          <div class="card">
            <div class="icon"><img class="material-icons md-18" src = {usuario}></img></div>
              <p class="title">Reportes y Notificaciones</p>
              <p class="text">Descripcion del modulo</p>
            </div>
        </Link>
        </div>
      </div>
    );
  }

export default MenuPage;
