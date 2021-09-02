const priorityColor = (() => {

    const lowPriorityColor = '#2f7d99';
    const medPriorityColor = '#309121';
    const highPriorityColor = '#db3425';

    function getColorPriority(priority){
        if (priority == 'low'){
            return lowPriorityColor;
          } 
          else if (priority == 'med'){
            return medPriorityColor;
          }
          else{
            return highPriorityColor;
          };
        
    }
    return {getColorPriority}
})();

export {priorityColor}
