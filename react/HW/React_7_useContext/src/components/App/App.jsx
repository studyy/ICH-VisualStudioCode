import { LanguageProvider } from '../../context/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import LanguageText from '../LanguageText/LanguageText'
import './App.module.css'

function App() {
  return (
    <LanguageProvider>
      <LanguageText />
      <LanguageSwitcher />
    </LanguageProvider>
  )
}

export default App
