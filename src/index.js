import "./assets/style.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import dom from "./dom";
import display from "./newProjectAndTaskForm"
import project from './project'
import store from './localStorage'

const contentDiv = document.getElementById("content");

contentDiv.appendChild(dom.nav());
contentDiv.appendChild(dom.projectAndTaskContainer());
contentDiv.appendChild(dom.footer());

const newProjectButton = document.getElementById('new-project');
newProjectButton.addEventListener('click', () =>  {
  contentDiv.appendChild(display.newProjectForm());

  document.getElementById('projectForm').addEventListener('submit', (e) => {
    const projectName = document.getElementById('projectName').value;
    const newProject = project.createProject(projectName);
    store.saveProject(newProject);
  })
  
});
