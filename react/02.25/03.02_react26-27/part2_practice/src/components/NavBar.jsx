import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : '#646cff' })}
        to='/users'
      >
        Users
      </NavLink>
    </nav>
  )
}
