import { useContext } from 'react'
import TodosContext from '../context/TodosContext'
import { useState } from 'react'

export default function AddTodoForm() {
  const { handleAddTodo } = useContext(TodosContext)
  const [newTitle, setNewTitle] = useState('')

  function handleChange(e) {
    setNewTitle(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleAddTodo(newTitle)
    setNewTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newTitle} required />
      <button>Add Task</button>
    </form>
  )
}
