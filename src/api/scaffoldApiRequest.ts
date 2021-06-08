/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Octokit } from 'octokit'
import { ghToken } from './credentials'
import type { GithubResponse } from './api'

export async function scaffoldApiRequest(
  url: string
): Promise<GithubResponse[]> {
  let data
  const octokit = new Octokit({ auth: ghToken })
  try {
    const response = await octokit.request(`GET /${url}`)
    //console.log(url)
    data = response.data
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
  return data
}
