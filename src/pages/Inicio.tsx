import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.svg'
import { RUTAS } from '../config/rutas'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Inicio() {
  useTituloPagina('Portafolio')

  return (
    <section className="hero">
      <div>
        <h1>Construyo software que se puede leer, probar y mantener.</h1>
        <p>Soy Alonso, estudiante de Ingeniería Civil Informática. Me interesan las APIs, las bases de datos y las interfaces claras.</p>
        <Link className="boton" to={RUTAS.proyectos}>Ver proyectos</Link>
      </div>
      <img src={avatar} alt="Logotipo con la letra A, inicial de Alonso" width={200} height={200} />
    </section>
  )
}