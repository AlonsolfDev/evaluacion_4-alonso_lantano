import type { Tarjeta } from '../types'

export default function TarjetaInfo({ titulo, descripcion }: Tarjeta) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  )
}