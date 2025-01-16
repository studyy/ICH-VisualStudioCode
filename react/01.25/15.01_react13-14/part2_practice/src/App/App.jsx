import PostList from '../components/PostList/PostList'
import Timer from '../components/Timer/Timer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Timer />
      <PostList />
    </div>
  )
}

export default App
