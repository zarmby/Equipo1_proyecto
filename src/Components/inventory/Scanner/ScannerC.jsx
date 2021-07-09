
import React, { useState } from "react";
import Scanner from "./Scanner";

import "./styles.css";

function ScannerC(props) {
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    props.handleScanner(result);
    props.handleCamera();
  };

  return (
    <div className="App">
      <div className="container">
        <Scanner onDetected={onDetected} />
      </div>
    </div>
  );
}

export default ScannerC;
