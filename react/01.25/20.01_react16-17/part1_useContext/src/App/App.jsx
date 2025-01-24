import { useState } from 'react'
import ThemeContext from '../context/ThemeContext'
// import ThemeButton from '../components/ThemeButton'
import Buttons from '../components/Buttons'
import CounterProvider from '../components/CounterProvider'
import Data from '../components/Data'
import DataProvider from '../components/DataProvider'
import ThemeSwitcher from '../components/ThemeSwitcher'
import './App.css'

function App() {
  const [appTheme, setAppTheme] = useState('light')

  // const value = 'myValue'

  // const obj = {
  //   value, // => value: value
  // }

  return (
    <>
      <ThemeContext.Provider value={{ theme: appTheme, setTheme: setAppTheme }}>
        <CounterProvider>
          <DataProvider>
            {/* <ThemeButton /> */}
            <ThemeSwitcher />

            <Buttons />

            <Data />
          </DataProvider>
        </CounterProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
