import "./assets/style.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import skeleton from "./appSkeleton";
import display from "./newProjectAndTaskForm"
import project from './project'
import store from './localStorage'

const contentDiv = document.getElementById("content");

contentDiv.appendChild(skeleton.nav());
contentDiv.appendChild(skeleton.projectAndTaskContainer());
contentDiv.appendChild(skeleton.footer());

const projectDiv = document.getElementById('projectDiv');
const toDoDiv = document.getElementById('todoDiv');

const newProjectButton = document.getElementById('new-project');
newProjectButton.addEventListener('click', () =>  {
  contentDiv.appendChild(display.newProjectForm());

  document.getElementById('projectForm').addEventListener('submit', (e) => {
    const projectName = document.getElementById('projectName').value;
    const newProject = project.createProject(projectName);
    store.saveProject(newProject);
  })
});

projectDiv.appendChild(project.createProjectTagElements());

const projectsContainer = document.getElementById('projectsContainer');
projectsContainer.addEventListener('click', (e) => {
  console.log(e.target.parentNode)
})