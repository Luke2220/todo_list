const projects = (name,priority,dueDate,desc) => {

    const getName = () => {return name};
    const getPriority = () => {return priority};
    const getDate = () => {return dueDate};
    const getDesc = () => {return desc};

    const editProject = (_name,_priority,_dueDate,_desc) =>{
        name = _name;
        priority = _priority;
        dueDate = _dueDate;
        desc = _desc;
    }
    return {editProject, getName, getPriority,getDate,getDesc}
}

const todo = (name,priority,dueDate,desc) =>{
    const ourProject = project(name,priority,dueDate,desc);
    return Object.assign(todo,ourProject);
}

export{projects};