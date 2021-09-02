import { projectManager } from "../project_manager";

const domFunctions = (() => {
  function removeAllChildNodes(parent)
{
  while (parent.firstChild) {
    removeDom(parent.firstChild);
  }
}

function removeDom(node){
  node.remove();
}

function openProject(project) {
  if (projectManager.selectedProject != null) {
    const info = projectManager.selectedProject.ourDiv.getElementsByClassName('info')[0];
    toggleVisible(info);
  }

  projectManager.selectedProject = project;
}

function clearDomChildren(element) {
  if (element != null) {
    const array = Array.from(element.children);
    array.forEach((element) => {
      element.remove();
    });
  }
}

function toggleVisible(element) {
  element.classList.toggle("visibleForm");
}

function drawTriangle(canvas, colorOutline, colorFill){
  if (canvas.getContext)
  {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(20, 30);
    context.lineTo(10,10);
    context.lineTo(30,10);
    context.closePath();

    context.lineWidth = 5;
    context.strokeStyle = colorOutline;
    context.stroke();

    context.fillStyle = colorFill;
    context.fill();
  }
}

function newCanvas(w,h){
  const can = document.createElement('canvas');
    can.setAttribute('width', w);
    can.setAttribute('height', h);
    return can;
}

  return {removeAllChildNodes, removeDom, openProject, clearDomChildren, drawTriangle,newCanvas,toggleVisible}

})();

export {domFunctions}

