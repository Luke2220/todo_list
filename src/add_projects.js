import {projectManager} from './project_manager';

const newProjectBtn = document.getElementsByClassName('addProject')[0];
const projectContainer = document.getElementsByClassName('projectFlex')[0];
const projectForm = document.getElementsByClassName('visibleForm')[0];
const projectSaveBtn = document.getElementsByClassName('projectSave')[0];
console.log(projectSaveBtn);
newProjectBtn.addEventListener('click',() => {openForm(projectForm)});

projectSaveBtn.addEventListener('click',(event) => 
{event.preventDefault();
    addProjectDom();})

function addProjectDom(){ 
    let formdata = new FormData(document.getElementsByClassName('projectForm')[0]);
    const newProject = projectManager.addProject(formdata.get('title'),formdata.get('priority'),
    formdata.get('dueDate'),formdata.get('desc'));

        let div = document.createElement('div');

        let title = document.createElement('p');
        title.textContent = newProject.getName();

        let detailednfo = document.createElement('div'); 
        detailednfo.classList.add('visibleForm');

        title.addEventListener('click',()=>{openProject(newProject,detailednfo)})

        let desc = document.createElement('p');
        desc.textContent = newProject.getDesc();

        let dueDate = document.createElement('p');
        dueDate.textContent = newProject.getDate();

        let editbtn = document.createElement('button');

        detailednfo.appendChild(desc);
        detailednfo.appendChild(dueDate);

        div.appendChild(title);
        div.appendChild(detailednfo);
        div.appendChild(editbtn);
        projectContainer.appendChild(div);
        openForm(projectForm);
}

function openProject(project,info){
    
    info.classList.toggle('visibleForm');
}

function openForm(form){
    form.classList.toggle('visibleForm');
}