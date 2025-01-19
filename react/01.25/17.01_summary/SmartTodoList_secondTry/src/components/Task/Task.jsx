import { useState } from 'react'

export default function Task({ task, setTaskList }) {
  const [edit, setEdit] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  function handleDelete(id) {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  function handleEdit() {
    setEdit(true)
  }

  function handleEditedText(e) {
    setEditedText(e.target.value)
    // e.target.disabled = false
  }

  function handleUpdate(id, text) {
    setTaskList(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, text: text } : task))
    )
  }

  function handleEditedTask(e) {
    e.preventDefault()
    if (editedText !== task.text) {
      handleUpdate(task.id, editedText)
    }
    setEdit(false)
  }

  function handleCancel() {
    setEdit(false)
    setEditedText(task.text)
  }

  return (
    <li>
      {edit ? (
        <form onSubmit={handleEditedTask}>
          <h4>Editing Task</h4>
          <input
            type='text'
            onChange={handleEditedText}
            value={editedText}
            required
          />
          <button>Save</button>
          <button type='button' onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>X</button>
        </>
      )}
    </li>
  )
}
