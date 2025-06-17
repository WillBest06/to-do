import "./styles.css";
import { createNewProjectObj, deleteProject } from "./projects";

class UI {
  static initialise() {
    UI.addListeners();
    UI.refreshProjectsSidebar();
  }

  static refreshProjectsSidebar() {
    const projectList = document.querySelector("#projects-list");
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }

    const projects = JSON.parse(localStorage.getItem("projects"));
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
  static toggleNewProjectDialog() {
    const createProjectButton = document.querySelector("#new-project-create");
    createProjectButton.classList.toggle("hidden");
    const createProjectDialog = document.querySelector("#new-project-dialog");
    createProjectDialog.classList.toggle("hidden");
  }

  static createNewProject() {
    UI.toggleNewProjectDialog();
  }

  static saveNewProject() {
    document.querySelector("#new-project-name").value = null;
    UI.toggleNewProjectDialog();
    this.refreshProjectsSidebar();
  }

  static cancelNewProject() {
    document.querySelector("#new-project-name").value = null;
    UI.toggleNewProjectDialog();
  }

  static addListeners() {
    const createNewProjectBTN = document.querySelector("#new-project-create");
    createNewProjectBTN.addEventListener("click", () =>
      this.createNewProject()
    );

    const saveNewProjectBTN = document.querySelector("#new-project-save");
    saveNewProjectBTN.addEventListener("click", () => {
      const newProjectName = document.querySelector("#new-project-name").value;
      if (newProjectName === "") {
        alert("New project name cannot be left blank");
      } else {
        createNewProjectObj(newProjectName);
        this.saveNewProject();
      }
    });

    const cancelNewProjectBTN = document.querySelector("#new-project-cancel");
    cancelNewProjectBTN.addEventListener("click", () =>
      this.cancelNewProject()
    );
  }
}

export default UI;
