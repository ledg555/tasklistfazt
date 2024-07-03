import { FaTrash } from "react-icons/fa";

export default function TaskCard({task, removeTask}) {

  return (
    <>
      <h2>{task.title}</h2>
      <p>
        {task.description}
        <button onClick={() => removeTask(task.id)}>
          <FaTrash />
        </button>
      </p>
    </>
  );
}