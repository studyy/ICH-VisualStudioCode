import { useContext } from 'react'
import TodosContext from '../context/TodosContext'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useContext(TodosContext)

  return (
    <>
      <AddTodoForm />

      <ul>
        {todos.map(item => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </>
  )
}
