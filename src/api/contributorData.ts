import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'
import { IContributor } from '../model/IContributor'
import queryUserIdentity from './queryUserIdentity'
import queryUserEvents from './queryUserEvents'
/**
 * Match user-inputted name to User database. If valid, return validated GH username and interpolate user image URL from this
 */

// TO-DO:
// Link this function to error handling of form input

export async function getContributorDetails(
  contributorName: string
): Promise<IContributor> {
  try {
    const contributorDetails = await queryUserIdentity({
      username: contributorName,
    })
    const contributorEvents = await queryUserEvents({
      username: contributorName,
    })
    console.log(contributorEvents)
    if (contributorDetails.login === contributorName) {
      const contributor: TContributor = {
        username: contributorDetails.login,
        userImage: `https://github.com/${contributorName}.png`,
      }
      return contributor
    }
  } catch (error) {
    console.error(error) //eslint-disable-line
  }
  throw new Error('User could not be found')
}
