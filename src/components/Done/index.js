import React from "react";
import "./done.css";

function Done() {
  function drop(e) {
    e.preventDefault();

    let draggableID = e.dataTransfer.getData("text");

    let draggable = document.getElementById(draggableID);
    draggable.setAttribute("draggable", "false");

    let container = document.getElementsByClassName("done-list")[0];

    container.appendChild(draggable);
  }

  function allowDrop(e) {
    e.preventDefault();
  }
  return (
    <div className="done" onDrop={drop} onDragOver={allowDrop}>
      <h3 className="done-heading">Done</h3>
      <div className="done-list"></div>
    </div>
  );
}

export default Done;
