import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'

type usernameParameters = Endpoints['GET /users/{username}']['parameters']

type usernameResponse = Endpoints['GET /users/{username}']['response']

export default async function queryUserIdentity(
  options: usernameParameters
): Promise<usernameResponse['data']> {
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

const test = queryUserIdentity({
  username: 'thomasabishop',
})
