const dom = (() => {
  const nav = () => {
    let navBar = document.createElement("nav");
    navBar.classList.add("navbar", "navbar-light", "bg-secondary");
    navBar.innerHTML = `<h3>Weekly Planner</h3>`;

    return navBar;
  };

  const projectAndTaskContainer = () => {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container-fluid");

    let columnsDiv = document.createElement("div");
    columnsDiv.classList.add("row", "myTodos");

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("col-3", "px-0", "projectDiv");
    projectDiv.innerHTML = `<h3 id="new-project" class='py-3 px-2' align="center"><i class="fas fa-plus-square"></i> Projects</h3>`;

    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("col-9", "p-0", "todoDiv");
    toDoDiv.innerHTML = `<h3 class='py-3' align="center">Tasks</>`;

    columnsDiv.appendChild(projectDiv);
    columnsDiv.appendChild(toDoDiv);
    containerDiv.appendChild(columnsDiv);

    return containerDiv;
  };

  const footer = () => {
    let footerContainer = document.createElement("footer");
    footerContainer.innerHTML = `<div> Copyright &copy;&nbsp;2020 &nbsp;|&nbsp; Weekly Planner Inc. </div>`;

    return footerContainer;
  };

  return { nav, projectAndTaskContainer, footer };
})();

export default dom;
