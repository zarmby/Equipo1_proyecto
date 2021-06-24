import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';

function InventoryStock() {

  return(
    <div class="inv-cont">
      <Navbar />
      <SideFilter />
      <ElementInfo />
      <div clas="Filters">
      </div>
      <div class="cont-list">
        <div class ="grid">
          <SingleElement />
<<<<<<< HEAD
          <SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement /><SingleElement />
          <SingleElement />
          <SingleElement />
          <SingleElement />
=======
>>>>>>> dev
        </div>
      </div>
    </div>
  );
}

export default InventoryStock;
