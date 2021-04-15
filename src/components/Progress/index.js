import React from "react";
import "./progress.css";

function Progress() {
  function drop(e) {
    e.preventDefault();

    let draggableID = e.dataTransfer.getData("text");
    let draggable = document.getElementById(draggableID);
    let container = document.getElementsByClassName("progress-list")[0];

    container.appendChild(draggable);
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div className="progress" onDrop={drop} onDragOver={allowDrop}>
      <h3 className="progress-heading">Progress</h3>
      <div className="progress-list"></div>
    </div>
  );
}

export default Progress;
