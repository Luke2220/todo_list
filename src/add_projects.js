import { projectManager } from "./project_manager";
import {addEditForm} from "./edit_form";
import {priorityColor} from "./priority-color";

const newProjectBtn = document.getElementsByClassName("addProject")[0];
const newTodoBtn = document.getElementsByClassName("addTodo")[0];
const projectContainer = document.getElementsByClassName("projectList")[0];
const todoContainer = document.getElementsByClassName("todoList")[0];
const projectForm = document.getElementsByClassName("projectForm")[0];
const todoForm = document.getElementsByClassName("todoForm")[0];
const projectSaveBtn = document.getElementsByClassName("projectSave")[0];
const todoSaveBtn = document.getElementsByClassName("todoSave")[0];

newProjectBtn.addEventListener("click", () => {
  toggleVisible(projectForm);
});
newTodoBtn.addEventListener("click", () => {
  toggleVisible(todoForm);
});

projectSaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addProjectDom(createNewProject(), projectForm, projectContainer, todoContainer);
});
todoSaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (projectManager.selectedProject != null) {
    addTodoDom(createNewTodo(projectManager.selectedProject), todoForm, todoContainer);
  }
});

function createNewProject() {
  let formdata = new FormData(projectForm);
  const newProject = projectManager.addProject(
    formdata.get("title"),
    formdata.get("priority"),
    formdata.get("dueDate"),
    formdata.get("desc")
  );

return newProject;  
}

function createNewTodo(selectedProject) {
    let formdata = new FormData(todoForm);
    const newTodo = selectedProject.addTodo(
      formdata.get("title"),
      formdata.get("priority"),
      formdata.get("dueDate"),
      formdata.get("desc")
    );
      return newTodo;
}

function addProjectDom(project, form, domContainer, containerToClear) {
  let div = document.createElement("div");
  project.ourDiv = div;

  let title = document.createElement("p");
  title.textContent = project.getName();
  title.classList.add('title');
  project.ourTitleP = title;
  
  priorityColor.changeColorPri(project.ourTitleP,project.getPriority());

  let detailedInfo = document.createElement("div");
  detailedInfo.classList.add("visibleForm", "info");
 

  title.addEventListener("click", () => {
    clearDomChildren(containerToClear);
    openProject(project);
    toggleVisible(detailedInfo);
  });

  let desc = document.createElement("p");
  desc.textContent = project.getDesc();
  desc.classList.add('desc');

  let dueDate = document.createElement("p");
  dueDate.textContent = project.getDate();
  dueDate.classList.add('dueDate');

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () =>{
    addEditForm(div,project);   
   });
    
    

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    projectManager.removeProject(project);
    removeDom(div);
  
    removeAllChildNodes(todoContainer);
  });

  detailedInfo.appendChild(desc);
  detailedInfo.appendChild(dueDate);

  div.appendChild(title);
  div.appendChild(detailedInfo);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  domContainer.appendChild(div);
  toggleVisible(form);
}


function addTodoDom(todo, form, domContainer) {
  let div = document.createElement("div");
  todo.ourDiv = div;

  let title = document.createElement("p");
  title.textContent = todo.getName();
  title.classList.add('title');
  todo.ourTitleP = title;

priorityColor.changeColorPri(todo.ourTitleP,todo.getPriority());


  let detailedInfo = document.createElement("div");
  detailedInfo.classList.add("visibleForm", "info");
 


  title.addEventListener("click", () => {
    toggleVisible(detailedInfo);
  });

  let desc = document.createElement("p");
  desc.textContent = todo.getDesc();
  desc.classList.add('desc');

  let dueDate = document.createElement("p");
  dueDate.textContent = todo.getDate();
  dueDate.classList.add('dueDate');

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener('click', () =>{
    addEditForm(div,todo);  
  })

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    projectManager.selectedProject.deleteTodo(todo.getName());
    removeDom(div);
  });

  detailedInfo.appendChild(desc);
  detailedInfo.appendChild(dueDate);

  div.appendChild(title);
  div.appendChild(detailedInfo);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  domContainer.appendChild(div);
  toggleVisible(form);
}

function removeAllChildNodes(parent)
{
  while (parent.firstChild) {
    removeDom(parent.firstChild);
  }
}

function removeDom(node){
  node.remove();
}

function openProject(project) {
  if (projectManager.selectedProject != null) {
    const info = projectManager.selectedProject.ourDiv.getElementsByClassName('info')[0];
    toggleVisible(info);
  }

  projectManager.selectedProject = project;
  project.ourTodos.forEach((element) => {
    addTodoDom(element, todoForm, todoContainer);
  });
}

function clearDomChildren(element) {
  if (element != null) {
    const array = Array.from(element.children);
    array.forEach((element) => {
      element.remove();
    });
  }
}

function toggleVisible(element) {
  element.classList.toggle("visibleForm");
}
