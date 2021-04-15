import "./App.css";

import TodoList from "./components/TodoList";
import Progress from "./components/Progress";
import Done from "./components/Done";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Progress />
      <Done />
    </div>
  );
}

export default App;
