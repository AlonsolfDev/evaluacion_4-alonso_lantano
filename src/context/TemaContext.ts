import { createContext } from 'react'
import type { Tema } from '../hooks/useTema'

export interface ValorTema {
  tema: Tema
  alternar: () => void
}

export const TemaContext = createContext<ValorTema | null>(null)