import { useEffect, useState } from 'react'
import ColorChange from '../components/ColorChange/ColorChange'
import Component from '../components/Component/Component'
import PageTitle from '../components/PageTitle/PageTitle'
import UserStatus from '../components/UserStatus/UserStatus'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [title, setTitle] = useState('Start title')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    console.log(`Count changed to ${count}`)
  }, [count])

  useEffect(() => {
    console.log(`Text changed to ${text}`)
  }, [text])

  // useEffect(() => {
  //   const subscription = dataSource.subscribe(data => {
  //     // обработка данных
  //   })

  //   return function cleanup() {
  //     subscription.unsubscribe()
  //   }
  // })

  const handleChange = e => {
    setNewTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTitle(newTitle)
  }

  //useEffect used to:
  // 1. Запросы в сеть
  // 2. Синхронизация с другими источниками данных (например, localStorage)
  // 3. Прямые изменения в DOM (например, scroll, resize)

  return (
    <div>
      <h1>Изучаем useEffect</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}></button>
      </div>
      <div>
        <p>Text: {text}</p>
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <UserStatus />
      <form onSubmit={handleSubmit}>
        <label>Page Title</label>
        <input type='text' value={newTitle} onChange={handleChange} />
        <button>Изменить</button>
      </form>
      <PageTitle title={title} />
      <ColorChange />
      <Component />
    </div>
  )
}

export default App
