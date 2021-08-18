import {projects} from './projects';

const projectManager = (() => {

    const projectList = [];

    const getList = () => projectList;

    const addProject = (name,priority,dueDate,desc) =>{
        projectList.push(projects(name,priority,dueDate,desc))
        console.log(projectList);
    }

    const FindProject = (project) =>{
        projectList.forEach((element,i)=>{
            if (element == project){
                return projectList[i];
            }
        })
    }

    const removeProject = (project) =>{
        projectList.forEach((element,i)=>{
            if (element == project){
                delete projectList[i];
            }
        })
    }
    return {addProject,removeProject,FindProject};
})();
export{projectManager};