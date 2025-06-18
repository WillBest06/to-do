import "./styles.css";
import Project from "./projects";
import UI from "./ui.js";
import Storage from "./storage.js";
import Task from "./task.js";

class App {
  static init() {
    this.addEventListeners();
    this.refreshUI();
  }

  static refreshUI() {
    this.refreshProjects();
  }

  static refreshProjects() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    UI.renderSidebar(projects);
  }

  static handleProjectSave() {
    const projName = document.querySelector("#new-project-name").value;

    if (projName === "") {
      alert("Project name cannot be left empty");
      return;
    }

    const newProj = new Project(projName);

    Storage.saveProjectLocally(newProj);
    UI.saveNewProject();
    this.refreshProjects();
  }

  static handleProjectDelete(e) {
    if (e.target.classList.contains("material-icons")) {
      const project = e.target.parentElement;
      const projectID = project.getAttribute("project-id");
      Storage.deleteProject(projectID);
      this.refreshProjects();
      UI.renderBlankProject();
    }
  }

  static handleProjectOpen(e) {
    if (e.target.classList.contains("sidebar-project")) {
      const project = Storage.getProject(e.target.getAttribute("project-id"));
      UI.renderProject(project);
    }
  }

  static handleTaskSave(projectID) {
    const taskName = document.querySelector("#new-task-name").value;

    if (taskName === "") {
      alert("Task name cannot be left empty");
      return;
    }

    const taskDesc = document.querySelector("#new-task-desc").value;
    const taskDueDate = document.querySelector("#new-task-due-date").value;
    const newTask = new Task(taskName, taskDesc, taskDueDate);

    Storage.saveTask(newTask, projectID);
    UI.saveNewTask();
    UI.renderProject(Storage.getProject(projectID));
  }

  static addEventListeners() {
    // start creating a new project
    const createNewProjectBTN = document.querySelector("#new-project-create");
    createNewProjectBTN.addEventListener("click", () => UI.createNewProject());

    // save a new project
    const saveNewProjectBTN = document.querySelector("#new-project-save");
    saveNewProjectBTN.addEventListener("click", () => this.handleProjectSave());

    // cancel a new project
    const cancelNewProjectBTN = document.querySelector("#new-project-cancel");
    cancelNewProjectBTN.addEventListener("click", () => UI.cancelNewProject());

    // select or delete a project
    const projectsList = document.querySelector("#projects-list");
    projectsList.addEventListener("click", (e) => {
      this.handleProjectDelete(e);
      this.handleProjectOpen(e);
    });

    // start creating a new task
    const createNewTaskBTN = document.querySelector(".new-task-create");
    createNewTaskBTN.addEventListener("click", () => UI.createNewTask());

    // save a new project
    const saveNewTaskBTN = document.querySelector(".new-task-save");
    saveNewTaskBTN.addEventListener("click", () =>
      this.handleTaskSave(
        document.querySelector(".project-title").getAttribute("project-id")
      )
    );

    // cancel a new project
    const cancelNewTaskBTN = document.querySelector(".new-task-cancel");
    cancelNewTaskBTN.addEventListener("click", () => UI.cancelNewTask());
  }
}

App.init();
