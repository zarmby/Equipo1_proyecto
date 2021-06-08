import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';

function InventoryStock() {

  return(
    <div>
      <SideFilter />
      <div class="wrapper">
      <div class="cols">
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div class="front" >
            <div class="inner">
              <p>Diligord</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="cols">
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div class="front" >
            <div class="inner">
              <p>Diligord</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="cols">
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div class="front" >
            <div class="inner">
              <p>Diligord</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="cols">
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div class="front" >
            <div class="inner">
              <p>Diligord</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default InventoryStock;
