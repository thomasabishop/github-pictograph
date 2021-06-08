/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import type { ProjectCommits, CommitData } from './api'
import { scaffoldApiRequest } from './scaffoldApiRequest'

async function getAllCommitsForUser(): Promise<ProjectCommits[]> {
  const projects = await scaffoldApiRequest(
    'users/thomasabishop/repos?per_page=100'
  )
  const commits: ProjectCommits[] = []
  projects.forEach((project) => {
    const c: ProjectCommits = {
      projectName: project.name,
      commits: [],
    }
    commits.push(c)
  })
  return commits
}

//console.log(getAllCommitsForUser())

// async function getCommitsForProject(project: string): Promise<CommitData[]> {
//   const projectCommits = await scaffoldApiRequest(
//     `repos/thomasabishop/${project}/commits`
//   )
//   const allCommits: CommitData[] = []
//   console.log(projectCommits)

//   projectCommits.forEach((projectCommit) => {
//     const c: CommitData = {
//       date: projectCommit.commit.author.date,
//       email: projectCommit.commit.author.email,
//       message: projectCommit.commit.message,
//     }
//     allCommits.push(c)
//   })
//   return allCommits
// }

const firstEndpoint = async function () {
  const x = await scaffoldApiRequest('users/thomasabishop/repos?per_page=100')
  return x
}

const secondEndpoint = async function () {
  const x = await scaffoldApiRequest(
    'repos/thomasabishop/100-days-of-code/commits'
  )
  return x
}

console.group('Raw endpoints')
console.log('users endpoint')
//console.log(firstEndpoint())
console.log('repos endpoint')
console.log(secondEndpoint())
//console.log(getCommitsForProject('js-kata'))
console.groupEnd()
