import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

export default function LanguageSwitcher() {
  const { currentLanguage, toggleLanguage, translations } =
    useContext(LanguageContext)
  return (
    <>
      <button onClick={toggleLanguage}>Switch Language</button>
    </>
  )
}
