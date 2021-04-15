import React from "react";
import "./progress.css";

function Progress(draggableParentID, setdraggableParentID) {
  function drop(e) {
    e.preventDefault();

    let draggableID = e.dataTransfer.getData("text");
    let draggable = document.getElementById(draggableID);
    console.log(draggable);
    // draggable.setAttribute(ondragstart, { drag });
    let container = document.getElementsByClassName("progress-list")[0];

    container.appendChild(draggable);
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    setdraggableParentID(e.target.parentNode.id);
    // console.log(e.target.id);
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div className="progress" onDrop={drop} onDragOver={allowDrop}>
      <h3 className="progress-heading">Progress</h3>
      <div className="progress-list" onDragStart={drag}></div>
    </div>
  );
}

export default Progress;
