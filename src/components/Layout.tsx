import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <>
      <a className="salto" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <footer>
        <p>Alonso, 2026. Hecho con React, TypeScript y Vite.</p>
      </footer>
    </>
  )
}