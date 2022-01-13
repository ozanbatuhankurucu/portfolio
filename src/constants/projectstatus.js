export const PROJECT_STATUS = {
  completed: "completed",
  progress: "progress",
  todo: "todo",
}

const PROJECT_STATUS_TEXT = {
  completed: "Completed",
  inProgress: "In Progress",
  toDo: "To Do",
}

const STATU_COLORS = {
  completed: "#50E37A",
  inProgress: "#458CF7",
  toDo: "#292C31",
}

export const getProjectStatuProps = projectStatu => {
  switch (projectStatu) {
    case PROJECT_STATUS.completed:
      return {
        statuColor: STATU_COLORS.completed,
        projectStatu: PROJECT_STATUS_TEXT.completed,
      }
    case PROJECT_STATUS.progress:
      return {
        statuColor: STATU_COLORS.inProgress,
        projectStatu: PROJECT_STATUS_TEXT.inProgress,
      }
    case PROJECT_STATUS.todo:
      return {
        statuColor: STATU_COLORS.toDo,
        projectStatu: PROJECT_STATUS_TEXT.toDo,
      }
    default:
      return {}
  }
}

export const sortProjectsByStatu = projects => {
  const completedProjects = [] // projects with status "completed"
  const inprogressProjects = [] // projects with status "progress"
  const todoProjects = [] // projects with status "todo"

  projects.forEach(project => {
    if (project.statu === PROJECT_STATUS.completed) {
      completedProjects.push(project)
    } else if (project.statu === PROJECT_STATUS.progress) {
      inprogressProjects.push(project)
    } else {
      todoProjects.push(project)
    }
  })
  return [...inprogressProjects, ...completedProjects]
}
