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
      <div className="cont-list">
      <div className ="grid">
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
