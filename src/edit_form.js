function addEditForm(div,submitFunction){
    let editForm = document.createElement('form');

    let titleBox = document.createElement('input');
    titleBox.setAttribute('type','text');
    titleBox.setAttribute('name','title');


    let descBox = document.createElement('input');
    descBox.setAttribute('type','text');
    descBox.setAttribute('name','desc');


    let dateBox = document.createElement('input');
    dateBox.setAttribute('type','text');
    dateBox.setAttribute('name','date');
  

    let radioLow = document.createElement('input');
    radioLow.setAttribute('type','radio');
    radioLow.setAttribute('name','priority');
    radioLow.setAttribute('id','low');
    

    let radioMed = document.createElement('input');
    radioMed.setAttribute('type','radio');
    radioMed.setAttribute('name','priority');
    radioMed.setAttribute('id','med');
  

    let radioHigh = document.createElement('input');
    radioHigh.setAttribute('type','radio');
    radioHigh.setAttribute('name','priority');
    radioHigh.setAttribute('id','high');

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('value','Save');
    submitBtn.addEventListener('click',(e) => {
        e.preventDefault();
        const formData = getFormData(editForm);
        submitFunction( formData.get("title"),
        formData.get("priority"),
        formData.get("dueDate"),
        formData.get("desc"));
    })

    editForm.appendChild(titleBox);
    editForm.appendChild(descBox);
    editForm.appendChild(dateBox);
    editForm.appendChild(radioLow);
    editForm.appendChild(radioMed);
    editForm.appendChild(radioHigh);
    editForm.appendChild(submitBtn);
    div.appendChild(editForm);
    return editForm;
}

function getFormData(form){
    let formdata = new FormData(form);
    return formdata;
}


export {addEditForm, getFormData}