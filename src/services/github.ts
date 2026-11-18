import type { RepoGitHub } from '../types'

const URL_REPOS = 'https://api.github.com/users/AlonsolfDev/repos?sort=updated&per_page=6'

let cache: Promise<RepoGitHub[]> | null = null

export function obtenerRepos(): Promise<RepoGitHub[]> {
  if (!cache) {
    cache = fetch(URL_REPOS, { headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub respondió ${res.status}`)
        return res.json() as Promise<RepoGitHub[]>
      })
      .catch((error) => {
        cache = null
        throw error
      })
  }
  return cache
}