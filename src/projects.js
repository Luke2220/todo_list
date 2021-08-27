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
  const ourInfoDiv = null;

  const addTodo = (name, priority, dueDate, desc) => {
    const newTodo = todo(name, priority, dueDate, desc);
    ourTodos.push(newTodo);
    return newTodo;
  };

  function debugNames(){
    ourTodos.forEach((element)=>{
      console.log(element.getName());
    })
  }

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
    ourInfoDiv,
    deleteTodo,
  };
};

const todo = (name, priority, dueDate, desc) => {
  const {getName} = projects(name, priority, dueDate, desc)
  const {getDesc} = projects(name, priority, dueDate, desc)
  const {getDate} = projects(name, priority, dueDate, desc)
  const {getPriority} = projects(name, priority, dueDate, desc)
  const {editProject} = projects(name, priority, dueDate, desc)

  return {getName,getDesc,getDate,getPriority,editProject}
};

export { projects };
