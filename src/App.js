import "./App.css";
// import Todo from "./Todo";
// import Progress from "./Progress";
// import Done from "./Done";
import { useState } from "react";
import Done from "./components/Done";
import Progress from "./components/Progress";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [draggableParentID, setdraggableParentID] = useState("");

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
      <Todo
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        todos={todos}
        setTodos={setTodos}
        draggableParentID={draggableParentID}
        setdraggableParentID={setdraggableParentID}
      />
      <Progress
        draggableParentID={draggableParentID}
        setdraggableParentID={setdraggableParentID}
      />
      <Done />
    </div>
  );
}

export default App;
