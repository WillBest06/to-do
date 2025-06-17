class Project {
  constructor(title) {
    this._id = crypto.randomUUID();
    this._title = title;
    this._toDoList = [];
  }

  set toDoList(toDoList) {
    this._toDoList = toDoList;
  }
}

function noExistingProjects() {
  return localStorage.getItem("projects") === null; // true if key does not exist
}

function createNewProjectObj(title) {
  const newProj = new Project(title);
  if (noExistingProjects()) {
    localStorage.setItem("projects", JSON.stringify([newProj])); // inits new array
  } else {
    const existingProjects = JSON.parse(localStorage.getItem("projects"));
    existingProjects.push(newProj);
    localStorage.setItem("projects", JSON.stringify(existingProjects));
  }

  return newProj;
}

function deleteProject(id) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects = projects.filter((project) => project.id !== id);
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { createNewProjectObj, deleteProject };
