/* eslint-disable camelcase */
// Improve the shape when I understand generics better
export type GithubResponse = {
  name: string
  commit: string
  message: string
  date: string
  author: string
  login: string
  email: string
}

type author = {
  name: string
  date: string
}

// export interface GithubRepoResponse extends GithubResponse {
//   commit: author
//   message: string
// }

type shit = {
  name: string
  date: string
}

export type CommitData = {
  date: string
  message: string
  email: string
}

export type ProjectCommits = {
  projectName: string
  commits: CommitData[]
}
