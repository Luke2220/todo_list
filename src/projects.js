const projects = (name,priority,dueDate,desc) => {

    const getName = () => {return name};
    const getPriority = () => {return priority};
    const getDate = () => {return dueDate};
    const getDesc = () => {return desc};

    const ourTodos = [];

    const addTodo = (name,priority,dueDate,desc) => {
        const newTodo = todo(name,priority,dueDate,desc)
        ourTodos.push(newTodo);
        return newTodo;
    }

    const getTodo = (name) => {
        return ourTodos.map((todo) => {todo.getName == name});
    }

    const editProject = (_name,_priority,_dueDate,_desc) =>{
        name = _name;
        priority = _priority;
        dueDate = _dueDate;
        desc = _desc;
    }
    return {editProject, getName, getPriority,getDate,getDesc,addTodo,getTodo}
}

const todo = (name,priority,dueDate,desc) =>{
    const ourProject = projects(name,priority,dueDate,desc);
    return Object.assign(todo,ourProject);
}

export{projects};