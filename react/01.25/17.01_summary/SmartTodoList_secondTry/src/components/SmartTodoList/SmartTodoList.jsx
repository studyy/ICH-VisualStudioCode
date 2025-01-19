import { useState } from 'react'
import Task from '../Task/Task'

export default function SmartTodoList() {
  const [taskList, setTaskList] = useState([])
  const [newTask, SetNewTask] = useState('')

  function handleChange(e) {
    SetNewTask(e.target.value)
    // console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const task = {
      id: Date.now(),
      text: newTask,
    }
    setTaskList(prevTasks => [...prevTasks, task])
    SetNewTask('')
  }

  function handleDeleteAll() {
    setTaskList([])
  }

  return (
    <div>
      <h2>Spisok zadach:</h2>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newTask} required />
        <button>Dobavit zadachu</button>
      </form>

      {taskList.length < 1 ? (
        <p>Tasklist is empty</p>
      ) : (
        <>
          <button type='button' onClick={handleDeleteAll}>
            Alles Löschen
          </button>
          <ul>
            {taskList.map(task => (
              <Task key={task.id} task={task} setTaskList={setTaskList} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
