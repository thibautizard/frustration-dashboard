import { createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout/index'
import Revenus from './pages/Revenus/index'
import Accueil from './pages/Accueil/index'
import Audiences from './pages/Audiences/index'
import Laboratoire from './pages/Laboratoire/index'
import Passwords from './pages/Identifiants/index'
import Error from './pages/Erreur/index'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Accueil />
      },
      {
        path: '/revenus',
        element: <Revenus />,
        children: [
          {
            path: 'subscription',
            element: <Revenus />
          },
          {
            path: 'donation',
            element: <Revenus />
          },
          {
            path: 'sale',
            element: <Revenus />
          }
        ]
      },
      {
        path: '/audiences',
        element: <Audiences />
      },
      {
        path: '/passwords',
        element: <Passwords />
      },
      {
        path: '/laboratoire',
        element: <Laboratoire />
      }
    ]
  }
])

export default router
