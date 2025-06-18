class Storage {
  static saveProjectLocally(newProj) {
    // true if key does not exist
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", JSON.stringify([newProj])); // inits new array
    } else {
      const existingProjects = JSON.parse(localStorage.getItem("projects"));
      existingProjects.push(newProj);
      localStorage.setItem("projects", JSON.stringify(existingProjects));
    }
  }

  static deleteProject(projectID) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    projects = projects.filter((project) => project._id !== projectID);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static getProject(projectID) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.filter((project) => project._id === projectID);
    return project[0];
  }

  static saveTask(task, projectID) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    projects.forEach((project) => {
      if (project._id === projectID) {
        project._taskList.push(task);
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

export default Storage;
