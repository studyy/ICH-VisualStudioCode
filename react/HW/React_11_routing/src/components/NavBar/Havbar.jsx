import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <NavLink to='/'>HOMEPAGE</NavLink>
      <NavLink to='/List'>Articles</NavLink>
    </>
  )
}
