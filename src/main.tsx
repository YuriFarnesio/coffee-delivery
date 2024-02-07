import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Root } from './layouts/Root'
import { Cart, Home, Success } from './pages'

import 'react-toastify/dist/ReactToastify.css'
import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Página inválida</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <ToastContainer />
  </React.StrictMode>,
)
