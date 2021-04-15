import React, { useState } from "react";
import "./Todo.css";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import Todo from "./Todo";

function TodoList() {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, seteditingText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      const newtodo = {
        id: new Date().getTime(),
        text: todo,
      };
      setTodos([...todos].concat(newtodo));
      setTodo("");
    }
  }
  function deletetodo(id) {
    const updatetodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatetodos);
  }

  const handledKeyUp = (event) => {
    // console.log(event.target.value);
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

  return (
    <div className="todo">
      <h3 className="todo-heading">Todo</h3>
      <form
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <textarea
          id="task"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></textarea>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div
          id="btn"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          style={{ marginTop: "5px", cursor: "pointer" }}
          title="Add"
        >
          <AddCircleIcon fontSize="large" />
        </div>
      </form>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            deletetodo={deletetodo}
            todo={todo}
            editTodo={editTodo}
            todoEditing={todoEditing}
            setTodoEditing={setTodoEditing}
            seteditingText={seteditingText}
            handledKeyUp={handledKeyUp}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
