import { IContributionsFrequency } from '../model/IContributor'
import queryUserEvents from '../api/queryUserEvents'

export default async function getContributionFrequencies(
  contributorName: string
): Promise<IContributionsFrequency> {
  try {
    const rawContributorEventData = await queryUserEvents({
      username: contributorName,
    })
    const contributionFrequencies: IContributionsFrequency = {
      totalContributions: rawContributorEventData.length,
    }
    return contributionFrequencies
  } catch (error) {
    console.error(error)
  }
  throw new Error('Contribution frequencies could not be calculated.')
}
