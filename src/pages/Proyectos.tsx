import FiltroProyectos from '../components/FiltroProyectos'
import ProyectoCard from '../components/ProyectoCard'
import Repositorios from '../components/Repositorios'
import Seccion from '../components/Seccion'
import { proyectos } from '../data/proyectos'
import { useFiltroProyectos } from '../hooks/useFiltroProyectos'

export default function Proyectos() {
  const { filtro, setFiltro, visibles } = useFiltroProyectos(proyectos)

  return (
    <Seccion titulo="Proyectos">
      <FiltroProyectos activo={filtro} onCambiar={setFiltro} />
      <p className="intro" role="status">
        {visibles.length} {visibles.length === 1 ? 'proyecto' : 'proyectos'}
      </p>
      <div className="rejilla">
        {visibles.map((p) => (
          <ProyectoCard key={p.id} proyecto={p} />
        ))}
      </div>
      <h3 className="subtitulo">Mis repositorios en GitHub</h3>
      <Repositorios />
    </Seccion>
  )
}