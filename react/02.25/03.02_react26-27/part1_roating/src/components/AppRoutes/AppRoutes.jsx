import { useRoutes } from 'react-router-dom'
import Home from './Home'
import Settings from './Settings'

export default function AppRoutes() {
  let userType

  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: `${userType}`,
          element: <Settings />,
        },
      ],
    },
  ])

  return routes
}
