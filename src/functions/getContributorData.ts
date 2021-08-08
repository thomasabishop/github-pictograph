/**
 * Match user-inputted name to User database. If valid, return validated GH username and interpolate user image URL from this
 * @param username GitHub username entered by user (not yet validated)
 */

// TO-DO:
// Link this function to error handling of form input

import { IContributor } from '../model/IContributor'
import queryUserIdentity from '../api/queryUserIdentity'
import queryUserEvents from '../api/queryUserEvents'
import getContributionFrequencies from './getContributionFrequencies'
export async function getContributorData(
  contributorName: string
): Promise<IContributor> {
  try {
    const contributorDetails = await queryUserIdentity({
      username: contributorName,
    })
    const contributorEvents = await queryUserEvents({
      username: contributorName,
    })

    const contributorFreqs = await getContributionFrequencies(contributorName)

    // console.group('contributorDetails:')
    // console.log(contributorDetails)
    // console.groupEnd()

    // console.group('contributorEvents:')
    // console.log(contributorEvents)
    // console.groupEnd()

    // console.group('contributorFrequencies:')
    // console.log(contributorFreqs)
    // console.groupEnd()

    // Check username corresponds to actual GitHub contributor
    if (contributorDetails.login === contributorName) {
      // If so set fields for contributor using above API requests
      const contributor: IContributor = {
        username: contributorDetails.login,
        userImage: `https://github.com/${contributorName}.png`,
        contributions: contributorFreqs,
      }
      return contributor
    }
  } catch (error) {
    console.error(error) //eslint-disable-line
  }
  throw new Error('User could not be found')
}
