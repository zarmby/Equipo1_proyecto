import React from 'react';

import './SideFilters.css'

function SideFilters(){

  return(
    <div>
      <div className="area"></div>
      <nav className="main-menu">
      <spam className="face-side">
        <i className="fas fa-angle-right fa-3x"></i>
      </spam>
        <ul>
          <li>
            <a href="#">
              <span className="nav-text">Audifonos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-text">Laptops</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-text">HDMI</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-text">Monitores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-text">Teclados</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideFilters;
