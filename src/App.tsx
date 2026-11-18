import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { RUTAS } from './config/rutas'
import Habilidades from './pages/Habilidades'
import Inicio from './pages/Inicio'
import NoEncontrada from './pages/NoEncontrada'
import Proyectos from './pages/Proyectos'
import SobreMi from './pages/SobreMi'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path={RUTAS.sobreMi} element={<SobreMi />} />
        <Route path={RUTAS.proyectos} element={<Proyectos />} />
        <Route path={RUTAS.habilidades} element={<Habilidades />} />
        <Route path={RUTAS.contacto} element={<section><h2>Contacto</h2></section>} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}