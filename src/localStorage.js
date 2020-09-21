const store = (() => {
  const projects = JSON.parse(window.localStorage.getItem("projects")) || [];
  const tasks = JSON.parse(window.localStorage.getItem("tasks")) || {};

  const saveProject = (project) => {
    projects.push(project);
    window.localStorage.setItem("projects", JSON.stringify(projects));
  };

  const deleteProject = (index) => {
    if (index > -1) {
      if (tasks[index]) {
        delete tasks[index];
        var tasksKeys = Object.keys(tasks);
        var newestTasks = {};
        tasksKeys.forEach((task, index) => {
          newestTasks[index.toString(10)] = tasks[task];
        });
      }
      projects.splice(index, 1);
    }
    window.localStorage.setItem("projects", JSON.stringify(projects));
    window.localStorage.setItem("tasks", JSON.stringify(newestTasks));
    location.reload();
  };

  const getProjects = () => {
    return projects;
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

  const getTasks = (index) => {
    return tasks[index];
  };

  return { saveProject, deleteProject, getProjects, saveTask, getTasks };
})();

export default store;
