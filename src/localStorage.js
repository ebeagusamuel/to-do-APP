const store = (() => {
  const projects = JSON.parse(window.localStorage.getItem('projects')) || [];
  const tasks = JSON.parse(window.localStorage.getItem('tasks')) || {};

  const saveProject = (project) => {
    projects.push(project);
    window.localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteProject = (index) => {
    if (index > -1) {
      if (tasks[index]) {
        delete tasks[index];
        const tasksKeys = Object.keys(tasks);
        const newestTasks = {};
        tasksKeys.forEach((task, index) => {
          newestTasks[index.toString(10)] = tasks[task];
        });
        window.localStorage.setItem('tasks', JSON.stringify(newestTasks));
      }
      projects.splice(index, 1);
    }
    window.localStorage.setItem('projects', JSON.stringify(projects));
    window.location.reload();
  };

  const getProjects = () => projects;

  const saveTask = (index, task) => {
    if (tasks[index]) {
      tasks[index].push(task);
    } else {
      tasks[index] = [];
      tasks[index].push(task);
    }

    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (projectIndex, taskIndex) => {
    const projectsList = tasks[projectIndex];
    projectsList.splice(taskIndex, 1);
    tasks[projectIndex] = projectsList;
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  };

  const getTasks = (index) => tasks[index];

  return {
    saveProject,
    deleteProject,
    getProjects,
    saveTask,
    deleteTask,
    getTasks,
  };
})();

export default store;
