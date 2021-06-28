import React from 'react';

function SingleElement(props){
  return(
    <li>
      <a id = {"filter_" + props.index}>
        <span class="nav-text">{props.tename}</span>
      </a>
    </li>
  );
}

export default SingleElement;
