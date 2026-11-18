import type { ReactNode } from 'react'
import { useTema } from '../hooks/useTema'
import { TemaContext } from './TemaContext'

export default function TemaProvider({ children }: { children: ReactNode }) {
  const valor = useTema()
  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>
}