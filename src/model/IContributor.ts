export interface IContributor {
  username: string
  userImage: string
  contributions?: IContributionsFrequency
  events?: IContributorEvents
}

export interface IContributionsFrequency {
  totalContributions: number
  commits: number
  pullRequests: number
  newRepos: number
  forks: number
}

export interface IContributorEvents {}
