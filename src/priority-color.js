const priorityColor = (() => {

    const lowPriorityColor = '#2f7d99';
    const medPriorityColor = '#309121';
    const highPriorityColor = '#db3425';

    function changeColorPri(element,priority){
        if (priority == 'low'){
            element.style.color = lowPriorityColor;
          } 
          else if (priority == 'med'){
            element.style.color = medPriorityColor;
          }
          else{
            element.style.color = highPriorityColor;
          };
        
    }
    return {changeColorPri}
})();

export {priorityColor}
