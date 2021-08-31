const projects = (name, priority, dueDate, desc) => {
  const getName = () => {
    return name;
  };
  const getPriority = () => {
    return priority;
  };
  const getDate = () => {
    return dueDate;
  };
  const getDesc = () => {
    return desc;
  };

  const ourTodos = [];
  const ourDiv = null;
  const ourTitleP = null;

  const addTodo = (name, priority, dueDate, desc) => {
    const newTodo = todo(name, priority, dueDate, desc);
    ourTodos.push(newTodo);
    return newTodo;
  };

  const deleteTodo = (todoName) => {
    ourTodos.forEach((element, i) => {
      if (element.getName() == todoName) {
         
        delete ourTodos[i];
      }
    });
  };

  const getTodos = () => {
    return ourTodos;
  };

  const editProject = (_name, _priority, _dueDate, _desc) => {
   
    name = _name;
    priority = _priority;
    dueDate = _dueDate;
    desc = _desc;
   
  };
  return {
    editProject,
    getName,
    getPriority,
    getDate,
    getDesc,
    addTodo,
    getTodos,
    ourTodos,
    ourDiv,
    deleteTodo,
  };
};

const todo = (name, priority, dueDate, desc) => {
  const getName = () => {
    return name;
  };
  const getPriority = () => {
    return priority;
  };
  const getDate = () => {
    return dueDate;
  };
  const getDesc = () => {
    return desc;
  };

  const editProject = (_name, _priority, _dueDate, _desc) => {
    name = _name;
    priority = _priority;
    dueDate = _dueDate;
    desc = _desc;
   
  };
  return {getName,getDesc,getDate,getPriority,editProject}
};

export { projects };
