import { GameProvider } from '../../context/GameContext'
import Main from '../Main/Main'
import './App.css'

function App() {
  return (
    <GameProvider>
      <Main />
    </GameProvider>
  )
}

export default App
