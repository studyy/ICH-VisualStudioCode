import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserStatus() {
  const [todos, setTodos] = useState('неизвестно')

  const fetchStatus = async () => {
    // const res = await fetch(`https://api.example.com/users/${userId}`);
    // const data = await res.json();
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(res)

    setTodos(res.data)
  }

  // useEffect(() => {
  //   fetchStatus();
  // }) // будет вызов на КАЖДЫЙ ререндер

  // useEffect(() => {
  //   fetchStatus();
  // }, []); // выполнится только 1 раз при первом рендере

  // useEffect(() => {
  //   fetchStatus()
  // }, [userId]) // выполнится при изменении userId

  return <div>Данные: {todos.title}</div>
}
