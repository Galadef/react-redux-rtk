import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp.jsx'
import { TodoApp } from './TodoApp.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CounterApp } from './CounterApp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'counterapp',
        element: <CounterApp />
      },
      {
        path: '/pokemonapp',
        element: <PokemonApp />
      },
      {
        path: 'todoapp',
        element: <TodoApp />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
)
