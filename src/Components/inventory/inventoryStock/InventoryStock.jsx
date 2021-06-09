import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';

function InventoryStock() {

  return(
    <div>
      <Navbar />
      <SideFilter />
      <div class="cont-list">
      <div class ="grid">
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
        <SingleElement />
      </div>
      </div>
    </div>
  );
}

export default InventoryStock;
