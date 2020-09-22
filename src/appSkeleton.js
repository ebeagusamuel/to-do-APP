const skeleton = (() => {
  const nav = () => {
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar', 'bg-secondary');
    navBar.innerHTML = '<h3>Weekly Planner</h3>';

    navContainer.appendChild(navBar);
    return navContainer;
  };

  const projectAndTaskContainer = () => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-fluid');
    containerDiv.style.marginTop = '53px';

    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('row', 'myTodos');

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', 'projectDiv');
    projectDiv.classList.add('col-3', 'px-0', 'projectDiv');
    projectDiv.innerHTML = '<h3 id="new-project" class=\'py-3 px-2\' align="center"><i class="fas fa-plus-square"></i> Projects</h3>';

    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('id', 'todoDiv');
    toDoDiv.classList.add('col-9', 'p-0', 'todoDiv');
    toDoDiv.innerHTML = '<h3 class=\'py-3\' align="center">Tasks</>';

    columnsDiv.appendChild(projectDiv);
    columnsDiv.appendChild(toDoDiv);
    containerDiv.appendChild(columnsDiv);

    return containerDiv;
  };

  const footer = () => {
    const footerContainer = document.createElement('footer');
    footerContainer.innerHTML = '<div> Copyright &copy;&nbsp;2020 &nbsp;|&nbsp; Weekly Planner Inc. </div>';

    return footerContainer;
  };

  return { nav, projectAndTaskContainer, footer };
})();

export default skeleton;
