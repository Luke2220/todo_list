import {priorityColor} from "./priority-color";

function addEditForm(div,projectToEdit){
    if (document.getElementsByClassName('editForm').length <= 0) {
    let editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const editTitle = document.createElement('p');
    editTitle.textContent = 'Edit';

    let titleBox = document.createElement('input');
    titleBox.setAttribute('type','text');
    titleBox.setAttribute('name','title');


    let descBox = document.createElement('input');
    descBox.setAttribute('type','text');
    descBox.setAttribute('name','desc');


    let dateBox = document.createElement('input');
    dateBox.setAttribute('type','text');
    dateBox.setAttribute('name','dueDate');
  

    let radioLow = document.createElement('input');
    radioLow.setAttribute('type','radio');
    radioLow.setAttribute('name','priority');
    radioLow.setAttribute('id','low');
    radioLow.setAttribute('value','low');
    

    let radioMed = document.createElement('input');
    radioMed.setAttribute('type','radio');
    radioMed.setAttribute('name','priority');
    radioMed.setAttribute('id','med');
    radioMed.setAttribute('value','Med');

    let radioHigh = document.createElement('input');
    radioHigh.setAttribute('type','radio');
    radioHigh.setAttribute('name','priority');
    radioHigh.setAttribute('id','high');
    radioHigh.setAttribute('value','High');

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('value','Save');
    submitBtn.classList.add('editSave');
    submitBtn.addEventListener('click',(e) => {
        e.preventDefault();
        const formData = getFormData(editForm);
        projectToEdit.editProject( formData.get("title"),
        formData.get("priority"),
        formData.get("dueDate"),
        formData.get("desc"));
        priorityColor.changeColorPri(projectToEdit.ourTitleP,projectToEdit.getPriority());
        updateDom(projectToEdit);
        removeForm(editForm);
    });

    
    editForm.appendChild(createBR());
    editForm.appendChild(createLabel('Edit Title:', 'title'));
    editForm.appendChild(createBR());
    editForm.appendChild(titleBox);
    editForm.appendChild(createBR());
    editForm.appendChild(createLabel('Edit Description:', 'desc'));
    editForm.appendChild(createBR());
    editForm.appendChild(descBox);
    editForm.appendChild(createBR());
    editForm.appendChild(createLabel('Edit Due-Date:', 'dueDate'));
    editForm.appendChild(createBR());
    editForm.appendChild(dateBox);
    editForm.appendChild(createBR());
    editForm.appendChild(radioLow);
    editForm.appendChild(createLabel('Low', 'dueDate'));  
    editForm.appendChild(radioMed); 
    editForm.appendChild(createLabel('High', 'dueDate'));
    editForm.appendChild(radioHigh);
    editForm.appendChild(createLabel('Medium', 'dueDate'));
    editForm.appendChild(createBR());
    editForm.appendChild(submitBtn);
    div.appendChild(editForm);
    return editForm;
    } else {
        removeForm(document.getElementsByClassName('editForm')[0]);
    }
}

function removeForm(form){
    form.remove();
}

function getFormData(form){
    let formdata = new FormData(form);
    return formdata;
}

function createBR(){
    return document.createElement('br');
}

function createLabel(text, ele){
    const label = document.createElement('label');
    label.textContent = text;
    label.setAttribute('name', ele);
    return label;
    
}

function updateDom(project){
    project.ourDiv.getElementsByClassName('title')[0].textContent = project.getName();
    project.ourDiv.getElementsByClassName('desc')[0].textContent = project.getDesc();
    project.ourDiv.getElementsByClassName('dueDate')[0].textContent = project.getDate();
  }

export {addEditForm, getFormData}