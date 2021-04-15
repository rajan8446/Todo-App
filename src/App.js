import "./App.css";

import { useState } from "react";
import TodoList from "./components/TodoList";
import Progress from "./components/Progress";
import Done from "./components/Done";

function App() {
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

  return (
    <div className="App">
      <TodoList
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        todos={todos}
        setTodos={setTodos}
      />
      <Progress />
      <Done />
    </div>
  );
}

export default App;
