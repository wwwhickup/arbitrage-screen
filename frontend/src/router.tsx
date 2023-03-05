import { createBrowserRouter } from 'react-router-dom'

import Dashbaord from './pages/Dashboard'
import Track from './pages/Track'
import PageNotFound from './pages/404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashbaord />
  }, {
    path: 'track',
    element: <Track />
  }, {
    path: '*',
    element: <PageNotFound />
  }
])

export default router