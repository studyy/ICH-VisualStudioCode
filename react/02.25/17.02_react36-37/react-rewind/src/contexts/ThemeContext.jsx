import { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}