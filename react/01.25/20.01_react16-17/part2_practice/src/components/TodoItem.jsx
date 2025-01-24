import { useContext } from 'react'
import TodosContext from '../context/TodosContext'

export default function TodoItem({ todo }) {
  const { handleDelete, handleChecked } = useContext(TodosContext)

  return (
    <li onClick={() => handleChecked(todo.id)}>
      <h4 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </h4>
      <button onClick={() => handleDelete(todo.id)}>X</button>
    </li>
  )
}
