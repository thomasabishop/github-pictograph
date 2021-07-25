export interface IContributor {
  username: string
  userImage: string
  contributions?: IContributionsFrequency
  events?: IContributorEvents
}

interface IContributionsFrequency {
  totalContributions: number
  commits: number
  issues: number
  pullRequests: number
  newRepos: number
}

export interface IContributorEvents {}
