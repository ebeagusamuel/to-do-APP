const display = (() => {
  const newProjectForm = () => {
    const formDiv = document.createElement("div");
    formDiv.classList.add("w-50", "w-md-25", "p-3", "rounded");
    formDiv.style.backgroundColor = "#fff"
    formDiv.style.position = "absolute";
    formDiv.style.top = "100px"
    formDiv.style.left = "50%";
    formDiv.style.right = "50%";
    formDiv.innerHTML = `
    <form id="projectForm">
      <div class="form-group">
        <label for="projectName">Project Name:</label>
        <input type="text" class="form-control" id="projectName" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;

    return formDiv;
  };

  const newTaskForm = () => {
    const formDiv = document.createElement('div');
    formDiv.innerHTML = `
    <form>
      <div class="form-group">
        <label for="newTask">Task Name</label>
        <input type="text" class="form-control" id="" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
    `;

    return formDiv;
  };

  return {newProjectForm, newTaskForm};
})();

export default display;
