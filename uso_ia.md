# Uso de IA

Este documento declara el uso de inteligencia artificial en el proyecto, desarrollado entre el 17 y el 18 de noviembre de 2026.

## 1. Herramientas
- Claude (Anthropic)
- VS Code, Git y GitHub.

## 2. Para qué se usaron
- Ayuda complementaria dentro del código de VS Code y Git.
- Diagnóstico de errores a partir de capturas de pantalla.
- Generación de código (componentes, hooks, tipos, API, contexto del tema, formulario y CSS) a partir de mi portafolio de la E2, que luego copié, integré y probé.
- Asistencia en la creación de plantillas de README y INVENTARIO.md.
- Lectura de la rúbrica y estimación de puntaje, usada solo como referencia y orientación.

## 3. Prompts
- "Ayúdame a modificar las subcarpetas."
- "Dime qué le podría cambiar: quiero que sea más interactiva y visual, respetando la pauta y requerimientos."
- "verifica si esta bien esta parte del codigo y que podria corregir."
- "Revisa toda la rúbrica, dime un puntaje y dime si mi página y mi repositorio cumplen con lo requerido."
- "¿Aparece algo en el README que deba cambiar?"

## 4. Qué se recibió
- Comandos y la estructura de carpetas del proyecto.
- Plantillas de README, INVENTARIO.md, uso_ia.md y de la descripción de los pull requests.
- Código de componentes, hooks, tipos, datos, servicio de la API, contexto del tema y CSS adicional.
- Un análisis de la rúbrica que señaló lo pendiente: nombre del repositorio, Context API, documentos y flujo con ramas y pull requests.

## 5. Qué se ajustó y cómo se verificó
- El diseño, los textos, la paleta, las tipografías y el CSS base provienen de mi portafolio de la E2.
- Ubiqué el repositorio de la E2 (ICINF1107-2026/web01alonso) y lo clonamos como referencia.
- Resolví errores de ejecución: la creación del proyecto con Vite falló en una carpeta con README y la rehice con una carpeta temporal, corregí rutas al copiar el CSS y reemplacé los archivos App.tsx y main.tsx de la plantilla.
- Detecté que Navbar.tsx había quedado incompleto y corregí imports mezclados entre dos versiones del contexto del tema.
- Corregí el nombre del paquete, renombré el repositorio al formato exigido (evaluacion_4-alonso_lantano) y la ruta de la captura de la E2 en el README.
- Trabajé en ramas con pull requests, commits convencionales y revisión de mis propios cambios.

Verificación:
- `npm run build` y `npm run lint`, sin errores.
- Pruebas manuales en el navegador: rutas y página 404, menú móvil, modo claro/oscuro con memoria al recargar, filtro de proyectos, formulario con validación y confirmación, y carga de repositorios desde la API de GitHub.
- Comparación visual con la captura de la E2 (docs/captura-E2.jpeg).

## 6. Reflexión final
El uso de IA me permitió encontrar nuevas ideas y a su vez ampliar el desarrollo del proyecto.