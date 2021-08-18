import {projectManager} from './project_manager';

const newProjectBtn = document.getElementsByClassName('addProject')[0];
newProjectBtn.addEventListener('click',() => {projectManager.addProject('name','high','date','good description')});