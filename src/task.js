class Task {
  constructor(title, desc, dueDate) {
    this._title = title;
    this._description = desc;
    this._dueDate = dueDate;
  }

  styleClass = "to-do-item";

  set title(newTitle) {
    if (newTitle != "") this._title = newTitle;
  }

  set description(newDesc) {
    this._description = newDesc;
  }

  set dueDate(newDueDate) {
    if (Date.parse(newDueDate) > Date.now()) this._dueDate = newDueDate; // date must be in future
  }
}

export default Task;
