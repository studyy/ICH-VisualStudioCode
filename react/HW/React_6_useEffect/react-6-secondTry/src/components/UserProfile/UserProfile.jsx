import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './UserProfile.module.css'

export default function UserProfile() {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  async function fetchUser() {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      const randomUser = getRandomUser(response.data)
      setUser(randomUser)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  function getRandomUser(users) {
    const randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
  }

  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <img src={user.imageUrl} alt='AVATERKA' />
      </div>

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>

      <button onClick={fetchUser}>Render random User</button>
    </div>
  )
}
