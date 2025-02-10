import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/Havbar'
import Article from '../Pages/Article/Article'
import Home from '../Pages/Home/Home'
import List from '../Pages/List/List'
import './App.css'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchArticle() {
    try {
      setLoading(true)
      const res = await axios.get(
        'https://67a26156409de5ed52554364.mockapi.io/articles'
      )

      setArticles(res.data)
      console.log(res.data)

      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/List'
          element={<List loading={loading} articles={articles} />}
        />
        <Route path='/List/:id' element={<Article articles={articles} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
