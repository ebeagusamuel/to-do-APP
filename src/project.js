import store from "./localStorage";

const projects = store.getProjects();

const project = (() => {
  const createProject = (name) => {
    return name;
  };

  const deleteProject = (projectName) => {
    var index = projects.indexOf(projectName);
    if(index > -1){
      projects.splice(index, 1);
    }
    window.localStorage.setItem('projectName', JSON.stringify(projects));
    location.reload();
  }

  const createProjectTagElements = () => {
    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute('id', 'projectsContainer');
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add(
        "d-flex",
        "flex-wrap",
        "justify-content-center",
        "p-2",
        "my-3"
      );
      projectDiv.style.fontSize = "2vw";
      projectDiv.style.fontWeight = "600";

      const projectPTag = document.createElement("p");
      projectPTag.classList.add("p-0", "m-0");
      projectPTag.style.cursor = "pointer"
      projectPTag.innerText = `${project}`;

      const iconsDiv = document.createElement("div");
      iconsDiv.classList.add("d-flex","ml-2");

      let addIconDiv = document.createElement('div');
      addIconDiv.setAttribute('id', 'addProjectIcon');
      addIconDiv.innerHTML = `<i class="fas fa-plus-square">`;

      let deleteIconDiv = document.createElement('div');
      deleteIconDiv.setAttribute('id', 'deleteProjectIcon');
      deleteIconDiv.classList.add("ml-2")
      deleteIconDiv.innerHTML = `<i class="fas fa-trash">`;

      iconsDiv.appendChild(addIconDiv);
      iconsDiv.appendChild(deleteIconDiv);

      projectDiv.appendChild(projectPTag);
      projectDiv.appendChild(iconsDiv);

      projectsContainer.appendChild(projectDiv);
    });

    return projectsContainer;
  };

  return { createProject, deleteProject, createProjectTagElements };
})();

export default project;
