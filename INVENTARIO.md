# Inventario de la E2

Referencia visual: `docs/captura-E2.jpeg` (portafolio de la E2, repositorio ICINF1107-2026/web01alonso).

| Elemento de la E2 | Estado en React | Dónde está |
|---|---|---|
| Secciones: Inicio, Sobre mí, Proyectos, Habilidades, Contacto | Conservadas, ahora como rutas | `src/pages` |
| Menú hamburguesa en móvil | Recuperado con estado | `components/Navbar.tsx` |
| Modo claro/oscuro con memoria | Recuperado, ahora con Context API | `hooks/useTema.ts`, `src/context` |
| Filtro de proyectos por categoría | Recuperado con estado | `hooks/useFiltroProyectos.ts`, `components/FiltroProyectos.tsx` |
| Formulario con validación y confirmación | Recuperado, con foco en el primer error | `pages/Contacto.tsx`, `utils/validacion.ts` |
| Salto al contenido, etiquetas y roles ARIA | Conservados | `components/Layout.tsx`, `components/Campo.tsx` |
| Paleta y tipografías (Poppins, Inter) | Conservadas | `styles/global.css` |
| Textos de las secciones | Movidos a archivos de datos | `src/data` |

## Qué se corrigió o mejoró
- Navegación por anclas → React Router, con sección activa y página 404.
- Manipulación del DOM con `getElementById` → estado de React.
- Animaciones de entrada y hover, que respetan `prefers-reduced-motion`.
- Sección nueva de repositorios con la API de GitHub.