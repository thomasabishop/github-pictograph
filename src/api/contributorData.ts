import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'

type userParameters = Endpoints['GET /users/{username}']['parameters']
type userResponse = Endpoints['GET /users/{username}']['response']

/**
 * Generic query of GH User API
 */

async function queryUserApi(
  options: userParameters
): Promise<userResponse['data']> {
  const octokit = new Octokit({ auth: ghToken })
  try {
    const response = await octokit.request(`GET /users/${options.username}`)
    const data = response.data //eslint-disable-line
    return data
  } catch (error) {
    console.error(error) //eslint-disable-line
  }
  throw new Error('Something else went wrong')
}

/**
 * Match user-inputted name to User database. If valid, return validated GH username and interpolate user image URL from this
 */

// TO-DO:
// Link this function to error handling of form input
export async function contributorDetails(
  contributorName: string
): Promise<TContributor> {
  try {
    const checkUser = await queryUserApi({ username: contributorName })
    if (checkUser.login === contributorName) {
      const contributor: TContributor = {
        username: checkUser.login,
        userImage: `https://github.com/${contributorName}.png`,
      }
      return contributor
    }
  } catch (error) {
    console.error(error) //eslint-disable-line
  }
  throw new Error('User could not be found')
}
