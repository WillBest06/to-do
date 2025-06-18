import "./styles.css";

class UI {
  static renderSidebar(projects) {
    const projectList = document.querySelector("#projects-list");
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }

    projects.forEach((project) => {
      const projectLink = document.createElement("button");
      projectLink.textContent = project._title;
      projectLink.setAttribute("project-id", project._id);
      projectLink.classList.add("sidebar-project");
      const deleteButton = document.createElement("i");
      deleteButton.classList.add("material-icons");
      deleteButton.textContent = "delete";
      projectLink.appendChild(deleteButton);
      projectList.appendChild(projectLink);
    });
  }

  static renderProject(project) {
    const projectTitleElement = document.querySelector(".project-title");
    projectTitleElement.textContent = project._title;
    projectTitleElement.setAttribute("project-id", project._id);

    const newTaskElement = document.querySelector(".new-task-create");
    newTaskElement.classList.remove("hidden");

    if (project._taskList === undefined) return;

    const taskListElement = document.querySelector(".task-list");
    while (taskListElement.firstChild) {
      taskListElement.removeChild(taskListElement.firstChild);
    }

    project._taskList.forEach((task) => {
      const taskElement = document.createElement("article");
      taskElement.classList.add("task");
      const taskTitle = document.createElement("h3");
      taskTitle.textContent = task._title;

      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      const taskDesc = document.createElement("p");
      taskDesc.textContent = task._description;
      const taskDueDate = document.createElement("p");
      taskDueDate.textContent = task._dueDate;
      taskInfo.appendChild(taskDesc);
      taskInfo.appendChild(taskDueDate);

      taskElement.appendChild(taskTitle);
      taskElement.appendChild(taskInfo);

      taskListElement.appendChild(taskElement);
    });
  }

  static renderBlankProject() {
    const projectTitleElement = document.querySelector(".project-title");
    projectTitleElement.textContent = "";

    const taskListElement = document.querySelector(".task-list");
    while (taskListElement.firstChild) {
      taskListElement.removeChild(taskListElement.firstChild);
    }

    const newTaskElement = document.querySelector(".new-task-create");
    newTaskElement.classList.add("hidden");
  }
  static toggleNewProjectDialog() {
    const createProjectButton = document.querySelector("#new-project-create");
    createProjectButton.classList.toggle("hidden");
    const createProjectDialog = document.querySelector("#new-project-dialog");
    createProjectDialog.classList.toggle("hidden");
  }

  static createNewProject() {
    this.toggleNewProjectDialog();
  }

  static saveNewProject() {
    document.querySelector("#new-project-name").value = null;
    this.toggleNewProjectDialog();
  }

  static cancelNewProject() {
    document.querySelector("#new-project-name").value = null;
    this.toggleNewProjectDialog();
  }

  static toggleNewTaskDialog() {
    const createTaskButton = document.querySelector(".new-task-create");
    createTaskButton.classList.toggle("hidden");
    const createTaskDialog = document.querySelector(".new-task-dialog");
    createTaskDialog.classList.toggle("hidden");
  }

  static createNewTask() {
    this.toggleNewTaskDialog();
  }

  static saveNewTask() {
    document.querySelector("#new-task-name").value = null;
    document.querySelector("#new-task-desc").value = null;
    document.querySelector("#new-task-due-date").value = null;
    this.toggleNewTaskDialog();
  }

  static cancelNewTask() {
    document.querySelector("#new-task-name").value = null;
    document.querySelector("#new-task-desc").value = null;
    document.querySelector("#new-task-due-date").value = null;
    this.toggleNewTaskDialog();
  }
}

export default UI;
