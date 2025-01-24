import axios from 'axios'
import { useEffect, useState } from 'react'
import TodosContext from '../context/TodosContext'

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState([])

  async function fetchTodos() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setTodos(res.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  function handleAddTodo(newTitle) {
    // setTodos(prevTodos=> [...prevTodos, newTodo])
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      completed: false,
    }
    setTodos(prevTodos => {
      return [newTodo, ...prevTodos]
    })
  }

  function handleDelete(id) {
    setTodos(prevTodos => prevTodos.filter(task => task.id !== id))
  }

  //   const obj = { // primer
  //     id: 1,
  //     title: 'title',
  //     completed: true,
  //   }

  function handleChecked(id) {
    // 1. nayti nashu Todo po ID iz Todos
    // 2. pomenyat completed na !completed
    setTodos(prevTodos =>
      prevTodos.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
    console.log()
  }

  return (
    <TodosContext.Provider
      //business logic ?
      value={{ todos, handleAddTodo, handleDelete, handleChecked }}
    >
      {children}
    </TodosContext.Provider>
  )
}
