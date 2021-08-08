import { IContributionsFrequency } from '../model/IContributor'
import queryUserEvents from '../api/queryUserEvents'

export default async function getContributionFrequencies(
  contributorName: string
): Promise<IContributionsFrequency> {
  try {
    // Request user events
    const rawContributorEventData = await queryUserEvents({
      username: contributorName,
    })
    // Populate event frequency object of shape `IContributionsFrequency`
    const contributionFrequencies: IContributionsFrequency = {
      totalContributions: rawContributorEventData.length,
      commits: 0,
      pullRequests: 0,
      newRepos: 0,
      forks: 0,
    }
    for (const event of rawContributorEventData) {
      switch (event.type) {
        case 'PushEvent':
          contributionFrequencies.commits!++
          break
        case 'PullRequestEvent':
          contributionFrequencies.pullRequests!++
          break
        case 'CreateEvent':
          contributionFrequencies.newRepos!++
          break
        case 'ForkEvent':
          contributionFrequencies.forks!++
      }
    }
    return contributionFrequencies
  } catch (error) {
    console.error(error)
  }
  throw new Error('Contribution frequencies could not be calculated.')
}
