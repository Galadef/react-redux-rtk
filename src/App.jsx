import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Pruebas redux y rtk</h1>
      <ul className='nav'>
        <li><NavLink
          to='/counterapp'
          className={({ isActive }) => isActive ? "active" : ""}
        >
          CounterApp
        </NavLink></li>
        <li><NavLink
          to='/pokemonapp'
          className={({ isActive }) => isActive ? "active" : ""}
        >
          PokemonApp
        </NavLink></li>
        <li><NavLink
          to='todoapp'
          className={({ isActive }) => isActive ? "active" : ""}
        >
          TodoApp
        </NavLink></li>
      </ul >
      <hr />
      <Outlet />
    </>
  )
}

export default App
