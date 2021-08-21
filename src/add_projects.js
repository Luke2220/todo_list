import {projectManager} from './project_manager';

const newProjectBtn = document.getElementsByClassName('addProject')[0];
const newTodoBtn = document.getElementsByClassName('addTodo')[0];
const projectContainer = document.getElementsByClassName('projectList')[0];
const todoContainer = document.getElementsByClassName('todoList')[0];
const projectForm = document.getElementsByClassName('projectForm')[0];
const todoForm = document.getElementsByClassName('todoForm')[0];
const projectSaveBtn = document.getElementsByClassName('projectSave')[0];
const todoSaveBtn = document.getElementsByClassName('todoSave')[0];

let selectedProject;

newProjectBtn.addEventListener('click',() => {openForm(projectForm)});
newTodoBtn.addEventListener('click',() => {openForm(todoForm)});

projectSaveBtn.addEventListener('click',(event) => 
{event.preventDefault();
    addProjectDom();})
todoSaveBtn.addEventListener('click',(event) => 
{event.preventDefault();
    addTodoDom(selectedProject);})

function addProjectDom(){ 
    let formdata = new FormData(projectForm);
    const newProject = projectManager.addProject(formdata.get('title'),formdata.get('priority'),
    formdata.get('dueDate'),formdata.get('desc'));

       addDomInfo(newProject,projectForm,projectContainer);
}

function addTodoDom(project){ 
    if (project != null)
    {
        let formdata = new FormData(todoForm);
        const newTodo = project.addTodo(formdata.get('title'),formdata.get('priority'),
        formdata.get('dueDate'),formdata.get('desc'));

        addDomInfo(newTodo,todoForm,todoContainer);
    }
}


function addDomInfo(project,form,domContainer){
    console.log(project);
       let div = document.createElement('div');

        let title = document.createElement('p');
        title.textContent = project.getName();

        let detailednfo = document.createElement('div'); 
        detailednfo.classList.add('visibleForm');

        title.addEventListener('click',()=>{openProject(project,detailednfo)})

        let desc = document.createElement('p');
        desc.textContent = project.getDesc();

        let dueDate = document.createElement('p');
        dueDate.textContent = project.getDate();

        let editbtn = document.createElement('button');

        detailednfo.appendChild(desc);
        detailednfo.appendChild(dueDate);

        div.appendChild(title);
        div.appendChild(detailednfo);
        div.appendChild(editbtn);
        domContainer.appendChild(div);
        openForm(form);
}

function openProject(project,info){
    selectedProject = project;
    info.classList.toggle('visibleForm');
}

function openForm(form){
    form.classList.toggle('visibleForm');
}