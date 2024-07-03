import "./App.css";
import { tasks as data } from "./tasks.js";
import TaskForm from "./Components/TaskForm.jsx";
import TaskList from "./Components/TaskList.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(data);

  function createTask(title, description) {
    const newTask = {
      id: tasks.length,
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
  }

  function removeTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} removeTask={removeTask}/>
    </>
  );
}

export default App;
