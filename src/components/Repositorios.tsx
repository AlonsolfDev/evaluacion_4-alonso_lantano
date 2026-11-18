import { useRepos } from '../hooks/useRepos'

export default function Repositorios() {
  const { datos, reintentar } = useRepos()

  if (datos.estado === 'cargando') {
    return (
      <div className="rejilla" role="status" aria-label="Cargando repositorios">
        <article className="esqueleto" aria-hidden="true" />
        <article className="esqueleto" aria-hidden="true" />
        <article className="esqueleto" aria-hidden="true" />
      </div>
    )
  }

  if (datos.estado === 'error') {
    return (
      <div role="alert">
        <p>{datos.mensaje}</p>
        <button className="btn-filtro" type="button" onClick={reintentar}>Reintentar</button>
      </div>
    )
  }

  if (datos.repos.length === 0) return <p>Aún no hay repositorios públicos.</p>

  return (
    <div className="rejilla">
      {datos.repos.map((r) => (
        <article key={r.id}>
          <h3><a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a></h3>
          <p>{r.description ?? 'Sin descripción.'}</p>
          <p className="tec">{r.language ?? 'Sin lenguaje'} · ★ {r.stargazers_count}</p>
        </article>
      ))}
    </div>
  )
}