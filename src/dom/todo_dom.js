import { projectManager } from "../project_manager";
import {addEditForm} from "./edit_form";
import {priorityColor} from "../priority-color";
import {domFunctions} from "./dom_functions";

const newTodoBtn = document.getElementsByClassName("addTodo")[0];
const todoSaveBtn = document.getElementsByClassName("todoSave")[0];
const todoForm = document.getElementsByClassName("todoForm")[0];
const todoContainer = document.getElementsByClassName("todoList")[0];

newTodoBtn.addEventListener("click", () => {
  domFunctions.toggleVisible(todoForm);
  });

  todoSaveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (projectManager.selectedProject != null) {
      addTodoDom(createNewTodo(projectManager.selectedProject), todoForm, todoContainer);
    }
  });

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

function addTodoDom(todo, form, domContainer) {
    let div = document.createElement("div");
    div.classList.add('todo-grid');
    todo.ourDiv = div;
  
    let title = document.createElement("p");
    title.textContent = todo.getName();
    title.classList.add('title');
    todo.ourTitleP = title;
  
    
    const priColor = priorityColor.getColorPriority(todo.getPriority());
  
    const can = domFunctions.newCanvas(40,40);
    can.classList.add('floatLeft');
    domFunctions.drawTriangle(can,priColor,priColor);
  
  
  
    let detailedInfo = document.createElement("div");
    detailedInfo.classList.add("visibleForm", "info");
   
  
  
    title.addEventListener("click", () => {
      domFunctions.toggleVisible(detailedInfo);
    });
  
    let desc = document.createElement("p");
    desc.textContent = 'Description: ' + todo.getDesc();
    desc.classList.add('desc');
  
    let dueDate = document.createElement("p");
    dueDate.textContent = 'Due: ' + todo.getDate();
    dueDate.classList.add('dueDate');
  
    let editBtn = document.createElement("button");
    editBtn.classList.add('editButton');
    editBtn.textContent = "Edit";
    editBtn.addEventListener('click', () =>{
      addEditForm(div,todo);  
    })
  
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add('bump-right', 'deleteButton');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      projectManager.selectedProject.deleteTodo(todo.getName());
      domFunctions.removeDom(div);
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

  function openProjectTodos(project){
    project.ourTodos.forEach((element) => {
      addTodoDom(element, todoForm, todoContainer);
    });
  }

  export {openProjectTodos}