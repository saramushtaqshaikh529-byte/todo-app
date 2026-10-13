
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h2>ToDo Manager</h2>
        <TodoInput addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
