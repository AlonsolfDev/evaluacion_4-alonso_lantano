import type { CamposContacto, ErroresContacto } from '../types'

export const CAMPOS: (keyof CamposContacto)[] = ['nombre', 'correo', 'mensaje']

export const VACIOS: CamposContacto = { nombre: '', correo: '', mensaje: '' }
export const SIN_ERRORES: ErroresContacto = { nombre: '', correo: '', mensaje: '' }

const REGLAS: Record<keyof CamposContacto, (valor: string) => string> = {
  nombre: (v) => (v.trim().length < 2 ? 'Escribe tu nombre (mínimo 2 letras).' : ''),
  correo: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Escribe un correo válido, por ejemplo nombre@correo.com.',
  mensaje: (v) => (v.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres.' : ''),
}

export function validarCampo(campo: keyof CamposContacto, valor: string): string {
  return REGLAS[campo](valor)
}

export function validarTodo(datos: CamposContacto): ErroresContacto {
  return {
    nombre: validarCampo('nombre', datos.nombre),
    correo: validarCampo('correo', datos.correo),
    mensaje: validarCampo('mensaje', datos.mensaje),
  }
}