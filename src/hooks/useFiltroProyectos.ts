import { useMemo, useState } from 'react'
import type { Filtro, Proyecto } from '../types'

export function useFiltroProyectos(proyectos: Proyecto[]) {
  const [filtro, setFiltro] = useState<Filtro>('todos')

  const visibles = useMemo(
    () => (filtro === 'todos' ? proyectos : proyectos.filter((p) => p.categoria === filtro)),
    [proyectos, filtro],
  )

  return { filtro, setFiltro, visibles }
}