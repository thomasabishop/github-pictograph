import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'

type userEventsParameters =
  Endpoints['GET /users/{username}/events']['parameters']

type userEventsResponse = Endpoints['GET /users/{username}/events']['response']

export default async function queryUserEvents(
  options: userEventsParameters
): Promise<userEventsResponse['data']> {
  const octokit = new Octokit({ auth: ghToken })
  try {
    const response = await octokit.request(
      `GET /users/${options.username}/events?per_page=100`
    )
    const data = response.data //eslint-disable-line
    return data
  } catch (error) {
    console.error(error) //eslint-disable-line
  }
  throw new Error('Something else went wrong')
}
