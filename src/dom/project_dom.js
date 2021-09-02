import { projectManager } from "../project_manager";
import {addEditForm} from "./edit_form";
import {priorityColor} from "../priority-color";
import {domFunctions} from "./dom_functions";
import {openProjectTodos} from "./todo_dom";

const newProjectBtn = document.getElementsByClassName("addProject")[0];
const projectContainer = document.getElementsByClassName("projectList")[0];
const projectForm = document.getElementsByClassName("projectForm")[0];
const projectSaveBtn = document.getElementsByClassName("projectSave")[0];
const todoContainer = document.getElementsByClassName("todoList")[0];

newProjectBtn.addEventListener("click", () => {
  domFunctions.toggleVisible(projectForm);
  });
  
  
  projectSaveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addProjectDom(createNewProject(), projectForm, projectContainer, todoContainer);
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
  
  function addProjectDom(project, form, domContainer, containerToClear) {
    let div = document.createElement("div");
    project.ourDiv = div;
  
    let title = document.createElement("p");
    title.textContent = project.getName();
    title.classList.add('title');
    project.ourTitleP = title;
    
    const priColor = priorityColor.getColorPriority(project.getPriority());

    const can = domFunctions.newCanvas(40,40);
    can.classList.add('floatLeft');
    domFunctions.drawTriangle(can,priColor,priColor);
  
    let detailedInfo = document.createElement("div");
    detailedInfo.classList.add("visibleForm", "info");
   
  
    title.addEventListener("click", () => {
      domFunctions.clearDomChildren(containerToClear);
      domFunctions.openProject(project);
      openProjectTodos(project);
      domFunctions.toggleVisible(detailedInfo);
    });
  
    let desc = document.createElement("p");
    desc.textContent = 'Description: ' + project.getDesc();
    desc.classList.add('desc');
  
    let dueDate = document.createElement("p");
    dueDate.textContent = 'Date: ' + project.getDate();
    dueDate.classList.add('dueDate');
  
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
  
    editBtn.addEventListener("click", () =>{
      addEditForm(div,project);   
     });
      
      
  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('bump-right');
    deleteBtn.addEventListener("click", () => {
      projectManager.removeProject(project);
      domFunctions.removeDom(div);
    
      domFunctions.removeAllChildNodes(todoContainer);
    });
  
    detailedInfo.appendChild(desc);
    detailedInfo.appendChild(dueDate);
  
    div.appendChild(can);
    div.appendChild(title);
    div.appendChild(detailedInfo);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    domContainer.appendChild(div);
    domFunctions.toggleVisible(form);
  }
  