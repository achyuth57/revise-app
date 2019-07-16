import React from "react";
import "../../styles/loader.css";
function Spinner() {
  return (
    <div>
      <div class="container">
        <div class="ring">
          Loading
          <span className="spinspan" />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
