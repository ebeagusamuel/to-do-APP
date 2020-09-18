const display = (() => {
  const newProjectForm = () => {
    const formDiv = document.createElement("div");
    formDiv.classList.add("w-50", "w-md-25", "p-3", "rounded");
    formDiv.style.backgroundColor = "#fff"
    formDiv.style.position = "absolute";
    formDiv.style.top = "150px"
    formDiv.style.left = "25%";
    formDiv.style.right = "25%";
    formDiv.innerHTML = `
    <form id="projectForm">
      <div class="form-group">
        <label for="projectName">Project Name:</label>
        <input type="text" class="form-control" id="projectName" required>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>`;

    return formDiv;
  };

  const newTaskForm = () => {
    const formDiv = document.createElement('div');
    formDiv.innerHTML = `
    <form>
      <div class="form-group">
        <label for="newTask">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter task to complete" required>
      </div>
      <div class="form-group">
        <label for="projectName">Description:</label>
        <textarea type="text" class="form-control" id="description" placeholder="Task description" required rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="projectName">Due Date:</label>
        <input type="datetime-local" class="form-control" id="date" placeholder="Due date" required>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Priority</label>
        <select class="form-control" id="taskPriority">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;

    return formDiv;
  };

  return {newProjectForm, newTaskForm};
})();

export default display;
