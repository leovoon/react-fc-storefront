import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'

import './index.css'

import App from './App'
import ErrorPage from './ErrorPage'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Products from './pages/Products'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Navigate to="/all" />,
        path: '/',
      },
      {
        element: <Products />,
        path: ':category',
      },
      {
        element: <Product />,
        path: ':category/:productId',
      },
      {
        element: <Cart />,
        path: 'cart',
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: '/',
  },
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
