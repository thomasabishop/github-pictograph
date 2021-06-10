/* eslint-disable camelcase */
// Improve the shape when I understand generics better

export type CommitData = {
  date: string
  message: string
  name: string
}

export type ProjectCommits = {
  projectName: string
  commits: CommitData[]
}
