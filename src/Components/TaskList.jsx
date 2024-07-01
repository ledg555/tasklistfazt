import TaskCard from "./TaskCard";

export default function TaskList({tasks}) {

  if (tasks.length === 0) return (
    <h1>No hay tareas pendientes</h1>
  );

  return (
    <>
      {tasks.map(task =>
      <TaskCard 
        key={task.id}
        task={task}/>
      )}
    </>
  );
}