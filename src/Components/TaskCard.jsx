export default function TaskCard({task}) {
  return(
    <>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </>
  );
}