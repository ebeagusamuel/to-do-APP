let tasks = {}

const task = (() => {
  const createTask = (title, description, date, taskPriority) => {
    return title, description, date, taskPriority;
  };

  const deleteTask = (taskName) => {
    let index = tasks.indexOf(taskName);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    window.localStorage.setItem('taskName', JSON.stringify(tasks));
    location.reload();
  }

  const createTaskElement = () => {
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute('id', 'taskContainer');
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add("d-flex", "flex-wrap", "justify-content-center", "p-2", "my-3");
      taskDiv.style.fontSize = "1.5vw";
      taskDiv.style.fontWeight = "bold";

      const taskParagraph = document.createElement('p');
      taskParagraph.classList.add("p-0", "m-0");
      taskParagraph.style.cursor = "pointer";
      taskParagraph.innerText = `${task}`;

      const iconsDiv = document.createElement("div");
      iconsDiv.classList.add("d-flex", "ml-2");

      let deleteIconDiv = document.createElement('div');
      deleteIconDiv.setAttribute('id', 'deleteTaskIcon');
      deleteIconDiv.classList.add("ml-2");
      deleteIconDiv.innerHTML = `<i class="fas fa-trash">`;

      iconsDiv.appendChild(deleteIconDiv);

      taskDiv.appendChild(taskParagraph);
      taskDiv.appendChild(iconsDiv);

      taskContainer.appendChild(taskDiv);
    });

    return taskContainer;
  };

  return { createTask, deleteTask, createTaskElement };
})();

export default task;
