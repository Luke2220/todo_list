import {projects} from './projects';

const projectManager = (() => {

    const projectList = [];

    const getList = () => projectList;

    const addProject = (name,priority,dueDate,desc) =>{
        let newP = projects(name,priority,dueDate,desc);
        projectList.push(newP);
        return newP;
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
    return {addProject,removeProject,FindProject,getList};
})();
export{projectManager};