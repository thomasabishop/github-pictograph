/* eslint-hdisable import/no-unresolved */
/* eslint-disable import/extensions */

// import { Octokit } from 'octokit'
// import { Endpoints } from '@octokit/types'
// import { ghToken } from '../credentials'

// type userCommitsParameters =
//   Endpoints['GET /repos/{owner}/{repo}/commits']['parameters']

// type userCommitsResponse =
//   Endpoints['GET /repos/{owner}/{repo}/commits']['response']

// export type CommitData = {
//   date: string | undefined
//   message: string
// }

// async function queryRepoApi(
//   options: userCommitsParameters
// ): Promise<userCommitsResponse['data']> {
//   const octokit = new Octokit({ auth: ghToken })
//   const response = await octokit.request(
//     `GET /repos/${options.owner}/${options.repo}/commits`
//   )
//   const data = response.data //eslint-disable-line
//   return data
// }

// export async function userCommits(
//   user: string,
//   project: string
// ): Promise<CommitData[]> {
//   const commits: CommitData[] = []
//   try {
//     const data = await queryRepoApi({
//       owner: user,
//       repo: project,
//     })
//     data.forEach((datum) => {
//       commits.push({
//         date: datum.commit.author?.date,
//         message: datum.commit.message,
//       })
//     })
//     return commits
//   } catch (error) {
//     console.error(error) //eslint-disable-line
//   }

//   throw new Error()
// }
