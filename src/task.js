class Task {
  constructor(title, desc, dueDate, priority, validPriorities) {
    this._title = title;
    this._description = desc;
    this._dueDate = dueDate;
    this._priority = priority;
    this._validPriorities = validPriorities;
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

  set priority(newPriority) {
    this.validPriorities.forEach((validPriority) => {
      if (validPriority.name === newPriority.name) this._priority = newPriority; // priority must be in predefined valid list
    });
  }
}

export default Task;
