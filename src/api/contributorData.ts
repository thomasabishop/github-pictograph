import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'

type TContributor = {
  username: string | undefined
  userImage?: string | undefined
}

type userParameters = Endpoints['GET /users/{username}']['parameters']

type userResponse = Endpoints['GET /users/{username}']['response']

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

export async function contributorDetails(
  contributorName: string
): Promise<TContributor | string> {
  const checkUser = await queryUserApi({ username: contributorName })
  if (checkUser.login === contributorName) {
    const contributor: TContributor = {
      username: checkUser.login,
      userImage: `https://github.com/${contributorName}.png`,
    }
    return contributor
  }
  return 'User could not be found'
}

console.log(contributorDetails('thomasabishop'))
