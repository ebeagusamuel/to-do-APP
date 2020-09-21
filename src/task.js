const task = (() => {
  const createTask = (title, description, date, taskPriority) => {
    return {title, description, date, taskPriority};
  };

  const deleteTask = (taskName) => {
    let index = tasks.indexOf(taskName);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    window.localStorage.setItem('taskName', JSON.stringify(tasks));
    location.reload();
  }

  const createTaskElement = (tasksArray) => {
    const taskContainer = document.createElement("table");
    const heading = document.createElement("thead");
    heading.innerHTML = `
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Due Date</th>
        <th scope="col">Priority</th>
        <th scope="col"></th>
      </tr>
    `;
    taskContainer.appendChild(heading);

    const taskBody = document.createElement("tbody");
    tasksArray.forEach((task, index) => {
      let tableRow = document.createElement("tr");
      let taskTitle = document.createElement("td");
      taskTitle.textContent = `${task.title}`;
      let taskDescription = document.createElement("td");
      taskDescription.textContent = `${task.description}`;
      let taskDate = document.createElement("td");
      taskDate.textContent = `${task.date}`;
      let taskPriority = document.createElement("td");
      taskPriority.textContent = `${task.taskPriority}`;
      let deleteIcon = document.createElement("td");
      deleteIcon.innerHTML = `<i class="fas fa-trash">`;
      deleteIcon.setAttribute("data-index", index);

      tableRow.appendChild(taskTitle);
      tableRow.appendChild(taskDescription);
      tableRow.appendChild(taskDate);
      tableRow.appendChild(taskPriority);
      tableRow.appendChild(deleteIcon);

      taskContainer.appendChild(tableRow);
    });

    return taskContainer;
  };

  return { createTask, deleteTask, createTaskElement };
})();

export default task;
