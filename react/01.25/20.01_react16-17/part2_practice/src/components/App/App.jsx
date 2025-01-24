import TodoList from '../TodoList'
import TodosProvider from '../TodosProvider'
import './App.module.css'

function App() {
  return (
    <div className='style.app'>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  )
}

export default App
