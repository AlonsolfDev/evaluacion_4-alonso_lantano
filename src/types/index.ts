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
export interface CamposContacto {
  nombre: string
  correo: string
  mensaje: string
}

export type ErroresContacto = Record<keyof CamposContacto, string>

export interface RepoGitHub {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
}