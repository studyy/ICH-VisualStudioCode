import { useParams } from 'react-router-dom'

const users = [
  { id: 1, name: 'John Doe', age: 28, bio: 'Software Developer' },
  { id: 2, name: 'Jane Smith', age: 34, bio: 'Graphic Designer' },
  { id: 3, name: 'Bob Johnson', age: 45, bio: 'Project Manager' },
]
export default function UserProfile() {
  const params = useParams()
  const userId = params.id
  const user = users.find(user => user.id === +userId)

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  )
}
