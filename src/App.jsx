import "./App.css";
import { tasks as data } from "./tasks.js";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(data);

  function createTask(newTitle) {
    const newTask = {
      id: tasks.length,
      title: newTitle,
      description: "nueva tarea",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
