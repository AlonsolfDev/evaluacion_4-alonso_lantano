export const CATEGORIAS = ['web', 'backend', 'datos'] as const

export type Categoria = (typeof CATEGORIAS)[number]
export type Filtro = Categoria | 'todos'

export interface Tarjeta {
  titulo: string
  descripcion: string
}

export interface Proyecto extends Tarjeta {
  id: number
  tecnologias: string
  categoria: Categoria
}

export interface EnlaceNav {
  to: string
  texto: string
}