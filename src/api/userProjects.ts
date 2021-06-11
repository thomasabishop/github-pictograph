/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import { ghToken } from '../credentials'

type userProjectsParameters =
  Endpoints['GET /users/{username}/repos']['parameters']

type userProjectsResponse = Endpoints['GET /users/{username}/repos']['response']

async function queryUserApi(
  options: userProjectsParameters
): Promise<userProjectsResponse['data']> {
  const octokit = new Octokit({ auth: ghToken })
  const response = await octokit.request(
    `GET /users/${options.username}/repos?per_page=100`
  )
  const data = response.data //eslint-disable-line
  return data
}

export async function userProjects(user: string): Promise<string[]> {
  const projects: string[] = []
  try {
    const data = await queryUserApi({ username: user })
    data.forEach((datum) => {
      projects.push(datum.name)
    })
    return projects
  } catch (error) {
    if (error.code === 404) {
      console.log('User could not be found') //eslint-disable-line
    } else {
      console.error(error) //eslint-disable-line
    }
  }
  throw new Error()
}

//console.log(userProjects('thomasabishop'))

// Check that error carries through to wrapper function
