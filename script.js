const addTask = document.getElementById('addtodobtn');
const taskContainer = document.getElementById('todocontainer');
const inputTask = document.getElementById('todoinput');


addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check" style="color: #000000;"></i>'
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-eraser" style="color: #000000;"></i>'
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === '') {
        alert('Please Add a Todo');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';


    checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function(){

        deleteButton.parentElement.remove();
    });


});