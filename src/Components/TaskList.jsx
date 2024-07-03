import TaskCard from "./TaskCard";

export default function TaskList({tasks, removeTask}) {

  if (tasks.length === 0) return (
    <h1>No hay tareas pendientes v:&lt; </h1>
  );

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} removeTask={removeTask} />
      ))}
    </>
  );
}