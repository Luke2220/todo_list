import { projectManager } from "./project_manager";
import {addEditForm, getFormData} from "./edit_form";

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
  addProjectDom(getProjectFormData(), projectForm, projectContainer, todoContainer);
});
todoSaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTodoDom(getTodoFormData(projectManager.selectedProject, todoForm, todoContainer));
});

function getProjectFormData() {
  let formdata = new FormData(projectForm);
  const newProject = projectManager.addProject(
    formdata.get("title"),
    formdata.get("priority"),
    formdata.get("dueDate"),
    formdata.get("desc")
  );

return newProject;  
}

function getTodoFormData(selectedProject) {
  if (selectedProject != null) {
    let formdata = new FormData(todoForm);
    const newTodo = selectedProject.addTodo(
      formdata.get("title"),
      formdata.get("priority"),
      formdata.get("dueDate"),
      formdata.get("desc")
    );
      return newTodo;
    
  }
}

function addProjectDom(project, form, domContainer, containerToClear) {
  let div = document.createElement("div");

  let title = document.createElement("p");
  title.textContent = project.getName();

  let detailedInfo = document.createElement("div");
  detailedInfo.classList.add("visibleForm", "info");
  project.ourInfoDiv = detailedInfo;

  title.addEventListener("click", () => {
    clearDomChildren(containerToClear);
    openProject(project);
    toggleVisible(detailedInfo);
  });

  let desc = document.createElement("p");
  desc.textContent = project.getDesc();

  let dueDate = document.createElement("p");
  dueDate.textContent = project.getDate();

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () =>{
    addEditForm(div,project.editProject)   
   });
    
    

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    projectManager.removeProject(project);
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

function addTodoDom(todo, form, domContainer) {
  let div = document.createElement("div");

  let title = document.createElement("p");
  title.textContent = todo.getName();

  let detailedInfo = document.createElement("div");
  detailedInfo.classList.add("visibleForm", "info");
  todo.ourInfoDiv = detailedInfo;


  title.addEventListener("click", () => {
    toggleVisible(detailedInfo);
  });

  let desc = document.createElement("p");
  desc.textContent = todo.getDesc();

  let dueDate = document.createElement("p");
  dueDate.textContent = todo.getDate();

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

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

function removeDom(node){
  node.remove();
}

function openProject(project) {
  if (projectManager.selectedProject != null) {
    toggleVisible(projectManager.selectedProject.ourInfoDiv);
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
