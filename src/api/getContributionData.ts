/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from './credentials'

type listUserReposParameters =
  Endpoints['GET /repos/{owner}/{repo}']['parameters']
type listUserReposResponse = Endpoints['GET /repos/{owner}/{repo}']['response']

async function listRepos(
  options: listUserReposParameters
): Promise<listUserReposResponse['data']> {
  const octokit = new Octokit({ auth: ghToken })
  const response = await octokit.request(
    `GET /repos/${options.owner}/${options.repo}`
  )
  let data = response.data // eslint-disable-line
  return data.clone_url
}

const params = {
  owner: 'thomasabishop',
  repo: 'js-kata',
}

console.log(listRepos(params))
