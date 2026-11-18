import type { EnlaceNav } from '../types'

export const RUTAS = {
  inicio: '/',
  sobreMi: '/sobre-mi',
  proyectos: '/proyectos',
  habilidades: '/habilidades',
  contacto: '/contacto',
} as const

export const ENLACES: EnlaceNav[] = [
  { to: RUTAS.inicio, texto: 'Inicio' },
  { to: RUTAS.sobreMi, texto: 'Sobre mí' },
  { to: RUTAS.proyectos, texto: 'Proyectos' },
  { to: RUTAS.habilidades, texto: 'Habilidades' },
  { to: RUTAS.contacto, texto: 'Contacto' },
]