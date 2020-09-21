const store = (() => {
  const projectName =
    JSON.parse(window.localStorage.getItem("projectName")) || [];
  const tasks = JSON.parse(window.localStorage.getItem("tasks")) || {};

  const saveProject = (project) => {
    projectName.push(project);
    window.localStorage.setItem("projectName", JSON.stringify(projectName));
  };

  const getProjects = () => {
    return projectName;
  };

  const saveTask = (index, task) => {
    if (tasks[index]) {
      tasks[index].push(task);
    } else {
      tasks[index] = [];
      tasks[index].push(task);
    }

    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return { saveProject, getProjects, saveTask };
})();

export default store;
