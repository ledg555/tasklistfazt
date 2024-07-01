import { useState } from "react";
import { tasks } from "../tasks";

export default function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Nueva tarea"
        value={title}
        onChange={handleTitleChange}
        autoFocus
      />
      <textarea
        name="description"
        placeholder="Descripción..."
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}
