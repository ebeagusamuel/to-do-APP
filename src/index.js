import './assets/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import skeleton from './appSkeleton';
import display from './newProjectAndTaskForm';
import project from './project';
import task from './task';
import store from './localStorage';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(skeleton.nav());
contentDiv.appendChild(skeleton.projectAndTaskContainer());
contentDiv.appendChild(skeleton.footer());

const projectDiv = document.getElementById('projectDiv');
const toDoDiv = document.getElementById('todoDiv');

function clearTasksContainer() {
  toDoDiv.lastChild.remove();
}

if (store.getProjects().length === 0) {
  store.saveProject('Default');
  store.saveTask('0', {
    title: 'Default Title',
    description: 'Please do not delete.',
    date: '2020-09-22',
    taskPriority: 'High',
  });
}

const newProjectButton = document.getElementById('new-project');
newProjectButton.addEventListener('click', () => {
  contentDiv.appendChild(display.newProjectForm());

  document.getElementById('projectForm').addEventListener('submit', () => {
    const projectName = document.getElementById('projectName').value;
    const newProject = project.createProject(projectName);
    store.saveProject(newProject);
  });
});

projectDiv.appendChild(project.createProjectTagElements());

const deleteProjectIcons = document.querySelectorAll('.deleteProjectIcon');
deleteProjectIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    const index = e.target.parentNode.parentNode.getAttribute('data-index');
    store.deleteProject(index);
  });
});

const newTaskIcons = document.querySelectorAll('.addProjectIcon');
newTaskIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    contentDiv.appendChild(display.newTaskForm());

    document.getElementById('taskForm').addEventListener('submit', (e) => {
      const projectIndex = icon.getAttribute('data-index');
      const taskTitle = e.target.elements.taskTitle.value;
      const taskDescription = e.target.elements.taskDescription.value;
      const taskDate = e.target.elements.taskDate.value;
      const taskPriority = e.target.elements.taskPriority.value;

      const newTask = task.createTask(
        taskTitle,
        taskDescription,
        taskDate,
        taskPriority,
      );
      store.saveTask(projectIndex, newTask);
    });
  });
});

const projectsContainers = document.querySelectorAll('.project');
projectsContainers.forEach((project) => {
  project.addEventListener('click', (e) => {
    const projectIndex = e.target.getAttribute('data-index');
    const tasksArray = store.getTasks(projectIndex);
    clearTasksContainer();
    toDoDiv.appendChild(task.createTaskElement(tasksArray, projectIndex));
  });
});

const tasksArray = store.getTasks('0');
toDoDiv.appendChild(task.createTaskElement(tasksArray, '0'));

toDoDiv.addEventListener('click', (e) => {
  if (
    e.target.parentNode.parentNode.getAttribute('class') === 'deleteTaskIcon'
  ) {
    const projectIndex = e.target.parentNode.parentNode.getAttribute(
      'data-projectIndex',
    );
    const taskIndex = e.target.parentNode.parentNode.getAttribute(
      'data-taskIndex',
    );
    store.deleteTask(projectIndex, taskIndex);
  }
});
