import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Index, {loader as clientesLoader} from './pages/Index';
import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente';
import EditarCliente, { loader as editarClienteLoader } from './pages/EditarCliente';
import Error from './pages/Error';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <Error/>
      },
      {
        path: 'clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: 'clientes/:clienteId/editar',
        element: <EditarCliente/>,
        errorElement: <Error/>,
        loader: editarClienteLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
