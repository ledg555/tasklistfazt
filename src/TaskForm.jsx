import { useState } from "react";
import { tasks } from "./tasks";

export default function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTask(title);
  }
  
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Crear nueva tarea"
        onChange={(e) => setTitle(e.target.value)}/>
      <textarea name="" id=""></textarea>
      <button>
        Guardar
      </button>
    </form>
  )
}
