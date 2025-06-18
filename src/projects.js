class Project {
  constructor(title) {
    this._id = crypto.randomUUID();
    this._title = title;
    this._taskList = [];
  }

  set taskList(taskList) {
    this._taskList = taskList;
  }
}

export default Project;
