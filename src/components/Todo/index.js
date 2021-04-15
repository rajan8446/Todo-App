import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Todo({
  deletetodo,
  todo,
  editTodo,
  todoEditing,
  setTodoEditing,
  seteditingText,
  handledKeyUp,
  disabled,
}) {
  const [showEditoption, setShowEditoption] = useState(true);

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setData("parentClass", e.target.parentNode.className);
    setShowEditoption(false);
  }

  return (
    <>
      <div
        key={todo.id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px",
          backgroundColor: "#bbfacd",
        }}
      >
        {todoEditing === todo.id ? (
          <input
            type="text"
            onChange={(e) => seteditingText(e.target.value)}
            onKeyUp={handledKeyUp}
            defaultValue={todo.text}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#bbfacd",
              flex: "1",
              padding: "5px",
            }}
          />
        ) : (
          <div
            className="list"
            id={todo.id}
            draggable
            onDragStart={drag}
            style={{
              cursor: "pointer",
              display: "flex",
              backgroundColor: "#bbfacd",
              margin: "5px",
              padding: "5px",
              flex: "1",
            }}
          >
            {todo.text}
          </div>
        )}

        {showEditoption && (
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <div
              className="delete"
              onClick={() => deletetodo(todo.id)}
              title="delete"
              style={{ cursor: "pointer" }}
            >
              <DeleteIcon />
            </div>
            {todoEditing === todo.id ? (
              <div
                onClick={() => editTodo(todo.id)}
                disabled={disabled}
                title="update"
                style={{ cursor: "pointer" }}
              >
                <CheckCircleIcon />
              </div>
            ) : (
              <div
                className="edit"
                onClick={() => setTodoEditing(todo.id)}
                title="edit"
                style={{ cursor: "pointer" }}
              >
                <EditIcon />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
