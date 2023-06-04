import { createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout/index'
import Income from '@pages/Income'
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
        element: <Income />,
        children: [
          {
            path: 'subscription',
            element: <Income />
          },
          {
            path: 'donation',
            element: <Income />
          },
          {
            path: 'sale',
            element: <Income />
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
