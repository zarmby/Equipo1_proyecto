import React, { useState } from 'react';

import './SideFilters.css'

function SideFilters(){

  return(
    <div>
      <div class="area"></div>
      <nav class="main-menu">
      <spam class="face-side">
        <i class="fas fa-angle-right fa-3x"></i>
      </spam>
        <ul>
          <li>
            <a href="">
              <span class="nav-text">Audifonos</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="nav-text">Laptops</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="nav-text">HDMI</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="nav-text">Monitores</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="nav-text">Teclados</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideFilters;
