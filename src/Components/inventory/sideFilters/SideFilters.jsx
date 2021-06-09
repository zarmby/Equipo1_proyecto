import React, { useState } from 'react';

import './SideFilters.css'

function SideFilters(){

  return(
    <div>
      <div class="area"></div>
      <nav class="main-menu">
      <spam class="face-side">
        <i class="fas fa-arrow-circle-right fa-2x"></i>
      </spam>
        <ul>
          <li>
            <a href="">
              <span class="nav-text">Computadoras</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="nav-text">Laptops</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideFilters;
