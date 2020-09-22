const task = (() => {
  const createTask = (title, description, date, taskPriority) => ({
    title, description, date, taskPriority,
  });

  const createTaskElement = (tasksArray, projectIndex) => {
    const taskContainer = document.createElement('table');
    taskContainer.classList.add('table', 'mx-2', 'mb-5');
    const heading = document.createElement('thead');
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

    const taskBody = document.createElement('tbody');
    tasksArray.forEach((task, index) => {
      const tableRow = document.createElement('tr');
      tableRow.classList.add('mb-2');
      const taskTitle = document.createElement('td');
      taskTitle.textContent = `${task.title}`;
      const taskDescription = document.createElement('td');
      taskDescription.textContent = `${task.description}`;
      const taskDate = document.createElement('td');
      taskDate.textContent = `${task.date}`;
      const taskPriority = document.createElement('td');
      taskPriority.textContent = `${task.taskPriority}`;
      const deleteTaskIconContainer = document.createElement('td');
      const deleteTaskIconDiv = document.createElement('div');

      deleteTaskIconDiv.innerHTML = '<i class="fas fa-trash">';
      deleteTaskIconDiv.setAttribute('data-projectIndex', projectIndex);
      deleteTaskIconDiv.setAttribute('data-taskIndex', index);
      deleteTaskIconDiv.setAttribute('class', 'deleteTaskIcon');

      deleteTaskIconContainer.appendChild(deleteTaskIconDiv);

      tableRow.appendChild(taskTitle);
      tableRow.appendChild(taskDescription);
      tableRow.appendChild(taskDate);
      tableRow.appendChild(taskPriority);
      tableRow.appendChild(deleteTaskIconContainer);

      taskBody.appendChild(tableRow);

      taskContainer.appendChild(taskBody);
    });

    return taskContainer;
  };

  return { createTask, createTaskElement };
})();

export default task;
