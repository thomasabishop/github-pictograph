import { userProjects } from './userProjects'
import { userCommits, CommitData } from './userCommits'

type Contributions = {
  projectName: string
  commits: CommitData[]
}

export async function userContributions(
  username: string
): Promise<Contributions[]> {
  const contributions: Contributions[] = []
  try {
    const projects = await userProjects(username)
    projects.forEach(async (project) => {
      const c = await userCommits(username, project)
      contributions.push({
        projectName: project,
        commits: c,
      })
    })
    return contributions
  } catch (error) {
    console.log(error) //eslint-disable-line
  }
  throw new Error()
}

console.log(userContributions('sdras'))
