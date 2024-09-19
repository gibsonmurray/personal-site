import type { Project } from "~/types"

export const honeycombify = (projects: Project[]) => {
    const honeycombified: (Project | null)[][] = []
    let projectIndex = 0

    while (projectIndex < projects.length) {
        // Add a row of 3 projects
        const row3 = projects.slice(projectIndex, projectIndex + 3)
        honeycombified.push(row3.concat(Array(3 - row3.length).fill(null)))
        projectIndex += 3

        // Add a row of 4 projects
        const row4 = projects.slice(projectIndex, projectIndex + 4)
        if (row4.length > 0) {
            honeycombified.push(row4.concat(Array(4 - row4.length).fill(null)))
            projectIndex += 4
        }
    }

    return honeycombified
}
