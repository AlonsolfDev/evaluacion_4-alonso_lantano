import { useState, type FormEvent } from 'react'
import Campo from '../components/Campo'
import Seccion from '../components/Seccion'
import type { CamposContacto, ErroresContacto } from '../types'
import { CAMPOS, SIN_ERRORES, VACIOS, validarCampo, validarTodo } from '../utils/validacion'

export default function Contacto() {
  const [datos, setDatos] = useState<CamposContacto>(VACIOS)
  const [errores, setErrores] = useState<ErroresContacto>(SIN_ERRORES)
  const [enviado, setEnviado] = useState(false)

  const cambiar = (campo: keyof CamposContacto, valor: string) =>
    setDatos((d) => ({ ...d, [campo]: valor }))

  const salir = (campo: keyof CamposContacto) =>
    setErrores((e) => ({ ...e, [campo]: validarCampo(campo, datos[campo]) }))

  const enviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    setEnviado(false)
    const nuevos = validarTodo(datos)
    setErrores(nuevos)
    const primero = CAMPOS.find((c) => nuevos[c] !== '')
    if (primero) {
      document.getElementById(primero)?.focus()
      return
    }
    setDatos(VACIOS)
    setEnviado(true)
  }

  return (
    <Seccion titulo="Contacto">
      <form onSubmit={enviar} noValidate>
        <Campo id="nombre" etiqueta="Nombre" autoComplete="name" valor={datos.nombre} error={errores.nombre} onCambiar={(v) => cambiar('nombre', v)} onSalir={() => salir('nombre')} />
        <Campo id="correo" etiqueta="Correo" tipo="email" autoComplete="email" valor={datos.correo} error={errores.correo} onCambiar={(v) => cambiar('correo', v)} onSalir={() => salir('correo')} />
        <Campo id="mensaje" etiqueta="Mensaje" tipo="textarea" valor={datos.mensaje} error={errores.mensaje} onCambiar={(v) => cambiar('mensaje', v)} onSalir={() => salir('mensaje')} />
        <button className="boton" type="submit">Enviar mensaje</button>
        {enviado && <p id="mensaje-exito" role="status">Mensaje enviado. Gracias por escribir.</p>}
      </form>
    </Seccion>
  )
}