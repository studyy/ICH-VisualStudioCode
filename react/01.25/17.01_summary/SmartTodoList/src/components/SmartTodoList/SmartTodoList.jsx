import { useState } from 'react'
import Task from '../Task/Task'

export default function SmartTodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleChange(e) {
    setNewTask(e.target.value)
    console.log(e)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const task = {
      id: Date.now(),
      text: newTask,
    }
    setTasks(prevTasks => [...prevTasks, task])
    setNewTask('')
    console.log(e)
  }

  function handleDelete(id) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  function handleUpdate(id, text) {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        return task.id === id ? { ...task, text: text } : task
      })
    )
  }
  return (
    <div>
      <h3>ToDo-List</h3>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newTask} required />
        <button>Check</button>
      </form>

      <ul>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  )
}
