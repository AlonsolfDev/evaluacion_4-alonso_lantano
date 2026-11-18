import { useEffect, useState } from 'react'

export type Tema = 'claro' | 'oscuro'

function temaInicial(): Tema {
  try {
    const guardado = localStorage.getItem('tema')
    if (guardado === 'claro' || guardado === 'oscuro') return guardado
  } catch {
    // sin acceso a localStorage
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
}

export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    try {
      localStorage.setItem('tema', tema)
    } catch {
      // sin acceso a localStorage
    }
  }, [tema])

  const alternar = () => setTema((t) => (t === 'oscuro' ? 'claro' : 'oscuro'))
  return { tema, alternar }
}