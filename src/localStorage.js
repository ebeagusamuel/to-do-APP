const store = (() => {
  const projectName = JSON.parse(window.localStorage.getItem('projectName')) || [];
  const Tasks = {};

  const saveProject = (project) => {
    projectName.push(project);
    window.localStorage.setItem('projectName', JSON.stringify(projectName))
  }

  const getProjects = () => {
    return projectName;
  }

  return {saveProject, getProjects}
})();

export default store