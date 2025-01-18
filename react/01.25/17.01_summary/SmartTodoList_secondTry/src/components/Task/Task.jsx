export default function Task({ task, setTaskList }) {
  function handleDelete(id) {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== id))
  }
  return (
    <li>
      <p>{task.text}</p>
      <button>Edit</button>
      <button onClick={() => handleDelete(task.id)}>X</button>
    </li>
  )
}
