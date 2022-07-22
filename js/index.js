//Task Manager

//New TaskManager
const taskManager = new TaskManager(0);

//Load local storage of tasks, render
taskManager.load();

taskManager.render();

const newTaskForm = document.querySelector('.container1');

newTaskForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    taskManager.addTask(name, description, assignedTo, dueDate);

    taskManager.save();

    //taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';

});


//submitButton.addEventListener('submit', );

const tasksList = document.querySelector('.container2');

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.save();

        taskManager.render();
    }

    // This checks for if the delete button clicked
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);






        

        // Saves the tasks to local storage
        taskManager.save();

        taskManager.render();
    }
});


// Header Image 1 JavaScript
//let modal = document.getElementById("myModal");

//let img = document.getElementById("myImg");
//let modalImg = document.getElementById("img01");
//let captionText = document.getElementById("caption");
//img.onclick = function(){
  //  modal.style.display = "block";
   // modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
//}

//let span = document.getElementsByClassName("close")[0];


//span.onclick = function() {
  //  modal.style.display = "none";
//}



