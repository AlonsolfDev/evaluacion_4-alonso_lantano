import Seccion from '../components/Seccion'
import TarjetaInfo from '../components/TarjetaInfo'
import { habilidades } from '../data/habilidades'

export default function Habilidades() {
  return (
    <Seccion titulo="Habilidades">
      <div className="rejilla">
        {habilidades.map((h) => (
          <TarjetaInfo key={h.titulo} {...h} />
        ))}
      </div>
    </Seccion>
  )
}