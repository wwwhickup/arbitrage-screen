import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './components/Layout/AuthLayout'
import AppLayout from './components/Layout/AppLayout'
import NotFoundLayout from './components/Layout/NotFoundLayout'
import Dashbaord from './pages/Dashboard'
import Track from './pages/Track'
import PageNotFound from './pages/404'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import ForgottenPassword from './pages/Auth/ForgottenPassword'

const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashbaord />
      }, {
        path: 'track',
        element: <Track />
      }
    ]
  }, {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        element: <SignIn />
      }, {
        path: 'signup',
        element: <SignUp />
      }, {
        path: 'forgotten-password',
        element: <ForgottenPassword />
      }
    ]
  }, {
    path: '*',
    element: <NotFoundLayout />,
    children: [
      {
        path: '*',
        element: <PageNotFound />
      }
    ],
  }
])

export default router