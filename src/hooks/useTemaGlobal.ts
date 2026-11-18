import { useContext } from 'react'
import { TemaContext } from '../context/TemaContext'

export function useTemaGlobal() {
  const ctx = useContext(TemaContext)
  if (!ctx) throw new Error('useTemaGlobal debe usarse dentro de TemaProvider')
  return ctx
}