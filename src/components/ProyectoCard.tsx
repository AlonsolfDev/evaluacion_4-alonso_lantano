import type { Proyecto } from '../types'

interface Props {
  proyecto: Proyecto
}

export default function ProyectoCard({ proyecto }: Props) {
  return (
    <article className="proyecto">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <p className="tec">{proyecto.tecnologias}</p>
    </article>
  )
}