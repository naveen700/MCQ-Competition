import React from "react";
import "./modal.css";
function modal(props) {
  return (
    <div id="id01" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            onClick={() =>
              (document.getElementById("id01").style.display = "none")
            }
            className="w3-button w3-display-topright"
          >
            &times;
          </span>
          <p>Right Answers:{props.right}</p>
          <p>Wrong Answers: {props.wrong}</p>
          <p>UnAnswered Question {props.unans}</p>
        </div>
      </div>
    </div>
  );
}

export default modal;
