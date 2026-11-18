import type { ChangeEvent } from 'react'
import type { CamposContacto } from '../types'

interface Props {
  id: keyof CamposContacto
  etiqueta: string
  tipo?: 'text' | 'email' | 'textarea'
  autoComplete?: string
  valor: string
  error: string
  onCambiar: (valor: string) => void
  onSalir: () => void
}

export default function Campo({ id, etiqueta, tipo = 'text', autoComplete, valor, error, onCambiar, onSalir }: Props) {
  const comunes = {
    id,
    name: id,
    value: valor,
    autoComplete,
    'aria-invalid': error !== '',
    'aria-describedby': `error-${id}`,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onCambiar(e.target.value),
    onBlur: onSalir,
  }

  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      {tipo === 'textarea' ? <textarea {...comunes} rows={5} /> : <input {...comunes} type={tipo} />}
      <span id={`error-${id}`} className="error" role="alert">{error}</span>
    </div>
  )
}