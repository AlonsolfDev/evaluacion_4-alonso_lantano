import type { Proyecto } from '../types'

export const proyectos: Proyecto[] = [
  { id: 1, titulo: 'Portafolio web', descripcion: 'Sitio estático con HTML5, CSS3 y JavaScript, publicado en GitHub Pages.', tecnologias: 'HTML, CSS, JavaScript', categoria: 'web' },
  { id: 2, titulo: 'API de reservas', descripcion: 'API REST para reservar salas y equipamiento, con usuarios y reservas.', tecnologias: 'Python, FastAPI', categoria: 'backend' },
  { id: 3, titulo: 'API en contenedores', descripcion: 'API REST empaquetada con Docker y Compose para desarrollo y producción.', tecnologias: 'Docker, Compose, SQLite', categoria: 'backend' },
  { id: 4, titulo: 'Procedimientos almacenados', descripcion: 'Lógica de negocio en la base de datos con procedimientos almacenados.', tecnologias: 'MySQL, SQL', categoria: 'datos' },
]