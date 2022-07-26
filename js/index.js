//Task Manager

//New TaskManager
const taskManager = new TaskManager(0);

//Load local storage of tasks, render
taskManager.load();

taskManager.render();

const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (event) => {
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

    taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';

});


//submitButton.addEventListener('submit', );

const tasksList = document.querySelector('.container3');

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





