// Avoid image import ts-eslint error
declare module '*.png'
declare module '*.svg'

type TContributor = {
  username: string
  userImage: string
}

type Contributions = {
  projectName: string
  commits: CommitData[]
}

type CommitData = {
  date: string | undefined
  message: string
}

type Project = {
  commits: CommitData[]
}
/*
contributor: {
  username: string
  userImage: string
  repositories: string[]
  commits = {
    repositoryName: [
      {
        date: string,
        message: string
      }
    ]
  }
}
*/
