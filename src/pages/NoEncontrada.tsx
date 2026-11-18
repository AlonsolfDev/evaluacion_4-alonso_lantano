import { Link } from 'react-router-dom'
import Seccion from '../components/Seccion'
import { RUTAS } from '../config/rutas'

export default function NoEncontrada() {
  return (
    <Seccion titulo="Página no encontrada" intro="La dirección que buscas no existe.">
      <Link className="boton" to={RUTAS.inicio}>Volver al inicio</Link>
    </Seccion>
  )
}