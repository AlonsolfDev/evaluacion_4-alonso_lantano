import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ENLACES } from '../config/rutas'
import { useTemaGlobal } from '../hooks/useTemaGlobal'

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const { tema, alternar } = useTemaGlobal()
  const oscuro = tema === 'oscuro'

  return (
    <header>
      <nav aria-label="Principal">
        <NavLink className="logo" to="/" onClick={() => setAbierto(false)}>Alonso</NavLink>
        <button
          id="btn-menu"
          type="button"
          aria-expanded={abierto}
          aria-controls="nav-menu"
          onClick={() => setAbierto(!abierto)}
        >
          Menú
        </button>
        <ul id="nav-menu" className={abierto ? 'abierto' : ''}>
          {ENLACES.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} end={e.to === '/'} onClick={() => setAbierto(false)}>
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
        <button id="btn-tema" type="button" aria-pressed={oscuro} onClick={alternar}>
          {oscuro ? 'Modo claro' : 'Modo oscuro'}
        </button>
      </nav>
    </header>
  )
}