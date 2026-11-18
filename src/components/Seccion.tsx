import type { ReactNode } from 'react'
import { useTituloPagina } from '../hooks/useTituloPagina'

interface Props {
  titulo: string
  intro?: string
  children?: ReactNode
}

export default function Seccion({ titulo, intro, children }: Props) {
  useTituloPagina(titulo)

  return (
    <section className="pagina">
      <h2>{titulo}</h2>
      {intro && <p className="intro">{intro}</p>}
      {children}
    </section>
  )
}