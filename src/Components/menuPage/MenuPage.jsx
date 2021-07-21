import React, { useState } from 'react';
import './MenuPageStyles.css';
import {Link} from 'react-router-dom';
import inventarioU from '../../assets/img/inventario_azul.png';
import inventarioS from '../../assets/img/inventario_rojo.png';
import usuarioA from '../../assets/img/usuario_azul.png';
import usuarioR from '../../assets/img/usuario_rojo.png';
import Navbar from '../navbar/Navbar';
import { useRef, useEffect } from 'react';
import Loading from '../loading/Loading';

function MenuPage() {
  const [loading,setLoading] = useState (true);
  const [img1State,setImg1State] = useState (inventarioU);
  const [img2State,setImg2State] = useState (usuarioA);
  const child_navbar = useRef();

  useEffect(()=>{
    loadingPage();
  },[])

  const loadingPage = ()=>{
    setTimeout(function(){setLoading(false)}, 200);
  }

  return(
    <div><Navbar ref={child_navbar} />
      {(loading) ? <Loading />
      : <div className="content-option" onClick={child_navbar.current.closeSideMenuNabvar}>
        <Link id="InventoryOption" to="InventoryCenter" style={{ textDecoration: 'none' }}>
          <div className="option"  onMouseEnter={() => setImg1State(inventarioS)} onMouseLeave={() => setImg1State(inventarioU)}>
            <div className="icon "><img className="material-icons md-18" src = {img1State} alt="Inventario"></img></div>
              <p className="title">Inventario</p>
              <p className="text">Administra el inventario de equipos y mira la informacion disponible sobre ellos.</p>
            </div>
        </Link>
        <Link id="UserOption" to="/user" className="link">
          <div className="option"  onMouseEnter={() => setImg2State(usuarioR)} onMouseLeave={() => setImg2State(usuarioA)}>
            <div className="icon"><img className="material-icons md-18" src = {img2State} alt="Usuario"></img></div>
              <p className="title">Reportes y Notificaciones</p>
              <p className="text">Descripcion del modulo</p>
            </div>
        </Link>
      </div>}
    </div>
  );
}
export default MenuPage;
