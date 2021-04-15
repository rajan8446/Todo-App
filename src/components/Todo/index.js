import React, { useState } from "react";
import "./todo.css";

function Todo({
  todo,
  setTodo,
  handleSubmit,
  todos,
  setTodos,
  draggableParentID,
  setdraggableParentID,
}) {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, seteditingText] = useState("");
  const [disabled, setDisabled] = useState(false);

  function deletetodo(id) {
    const updatetodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatetodos);
  }

  const handledKeyUp = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") setDisabled(true);
    else setDisabled(false);
  };

  function editTodo(id) {
    if (editingText !== "") {
      const updatetodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });

      setTodos(updatetodos);
      setTodoEditing(null);
      seteditingText("");
    }
  }

  function drag(e) {
    setdraggableParentID(e.target.parentNode.id);
    console.log(e.target.id);
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div className="todo">
      <h3 className="todo-heading">Todo</h3>
      <form>
        <textarea
          id="task"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></textarea>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => seteditingText(e.target.value)}
                onKeyUp={handledKeyUp}
                defaultValue={todo.text}
              />
            ) : (
              <div
                className="list"
                id={todo.id}
                draggable
                onDragStart={drag}
                style={{ cursor: "pointer" }}
              >
                {todo.text}
              </div>
            )}

            <div>
              <button className="delete" onClick={() => deletetodo(todo.id)}>
                delete
              </button>
              {todoEditing === todo.id ? (
                <button onClick={() => editTodo(todo.id)} disabled={disabled}>
                  update
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => setTodoEditing(todo.id)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
