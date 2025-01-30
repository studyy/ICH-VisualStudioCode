import { LanguageProvider } from '../../context/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import './App.module.css'

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  )
}

export default App
