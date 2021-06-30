import React from 'react';
import './InventoryStock.css'
import SideFilter from '../sideFilters/SideFilters';
import Navbar from '../../navbar/Navbar';
import SingleElement from './SingleElement';
import ElementInfo from './ElementInfo';
import { useEffect } from 'react';

function InventoryStock() {

  return(
    <div className="inv-cont">
      <Navbar />
      <SideFilter />
      {//<ElementInfo />
      }
      <div clas="Filters">
      </div>
      <div className="cont-list">
        <div className ="grid">
          <SingleElement />
        </div>
      </div>
    </div>
  );
}

export default InventoryStock;
