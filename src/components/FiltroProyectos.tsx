import { CATEGORIAS, type Filtro } from '../types'

const ETIQUETAS: Record<Filtro, string> = {
  todos: 'Todos',
  web: 'Web',
  backend: 'Backend',
  datos: 'Datos',
}

const OPCIONES: Filtro[] = ['todos', ...CATEGORIAS]

interface Props {
  activo: Filtro
  onCambiar: (filtro: Filtro) => void
}

export default function FiltroProyectos({ activo, onCambiar }: Props) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar proyectos por categoría">
      {OPCIONES.map((valor) => (
        <button
          key={valor}
          type="button"
          className={`btn-filtro${activo === valor ? ' activo' : ''}`}
          aria-pressed={activo === valor}
          onClick={() => onCambiar(valor)}
        >
          {ETIQUETAS[valor]}
        </button>
      ))}
    </div>
  )
}