import { useState } from 'react'

export default function Task({ task, handleDelete, handleUpdate }) {
  const [edit, setEdit] = useState(false)
  const [editedTask, setEditedTask] = useState(task.text)

  function handleEdit() {
    setEdit(true)
  }

  function handleChange(e) {
    setEditedTask(e.target.value)
  }

  function handleSaveEdit() {
    handleUpdate(task.id, editedTask)
    setEdit(false)
  }

  function handleCancel() {
    setEdit(false)
    setEditedTask(task.text)
  }

  return (
    <li>
      {edit ? (
        <form onSubmit={handleSaveEdit}>
          <input onChange={handleChange} value={editedTask} />
          <button>Save</button>
          <button type='button' onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  )
}
