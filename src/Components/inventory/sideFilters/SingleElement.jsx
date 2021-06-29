import React from 'react';

function SingleElement(props){
  return(
    <li>
      <a id = {"filter_" + props.index} onClick = {() => props.handleCategory(props.tename)}>
        <span class="nav-text">{props.tename}</span>
      </a>
    </li>
  );
}

export default SingleElement;
