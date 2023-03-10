import { request } from "./utils"

export interface Project {
  id?: string
  name: string
  key?: string
  userId?: string
  user?: any
}

export const findProjectByOwner = async (): Promise<Project[]> => {
  try {
    const data = await request({
      url: "/project",
      method: "GET",
      data: {},
    })

    return data.data
  } catch (e: any) {
    if (e && e.response && e.response.data.error)
      throw new Error(e.response.data.error)

    throw new Error("api not responding")
  }
}

export const findProjectById = async (id: string): Promise<Project[]> => {
  try {
    const data = await request({
      url: "/project",
      method: "GET",
      data: {
        id: id,
      },
    })

    return [data.data]
  } catch (e: any) {
    if (e && e.response && e.response.data.error)
      throw new Error(e.response.data.error)

    throw new Error("api not responding")
  }
}

export const createProject = async (project: Project): Promise<Project> => {
  try {
    const data = await request({
      url: "/project",
      method: "POST",
      data: project,
    })

    return data.data
  } catch (e: any) {
    if (e && e.response && e.response.data.error)
      throw new Error(e.response.data.error)

    throw new Error("api not responding")
  }
}
