import Seccion from '../components/Seccion'
import TarjetaInfo from '../components/TarjetaInfo'
import { formacion } from '../data/sobreMi'

export default function SobreMi() {
  return (
    <Seccion
      titulo="Sobre mí"
      intro="Aprendo construyendo: cada ramo termina en algo que funciona y que puedo mostrar."
    >
      <div className="linea-tiempo">
        {formacion.map((f) => (
          <TarjetaInfo key={f.titulo} {...f} />
        ))}
      </div>
    </Seccion>
  )
}