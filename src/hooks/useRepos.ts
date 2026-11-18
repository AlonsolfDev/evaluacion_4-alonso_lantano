import { useEffect, useState } from 'react'
import { obtenerRepos } from '../services/github'
import type { RepoGitHub } from '../types'

type Estado =
  | { estado: 'cargando' }
  | { estado: 'error'; mensaje: string }
  | { estado: 'listo'; repos: RepoGitHub[] }

export function useRepos() {
  const [datos, setDatos] = useState<Estado>({ estado: 'cargando' })
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let activo = true
    obtenerRepos()
      .then((repos) => {
        if (activo) setDatos({ estado: 'listo', repos })
      })
      .catch(() => {
        if (activo) {
          setDatos({
            estado: 'error',
            mensaje: 'No se pudieron cargar los repositorios. Revisa tu conexión o inténtalo más tarde.',
          })
        }
      })
    return () => {
      activo = false
    }
  }, [intento])

  const reintentar = () => {
    setDatos({ estado: 'cargando' })
    setIntento((n) => n + 1)
  }

  return { datos, reintentar }
}