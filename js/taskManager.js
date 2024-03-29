const createTaskHtml = (id, name, description, assignedTo, dueDate, status) =>
`<div><li class="list-group-item" data-task-id=${id}>
<div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>${name}</h5>
    <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
</div>
<div class="d-flex w-100 mb-3 justify-content-between">
    <assigned-plus-date>Assigned To: ${assignedTo}</assigned-plus-date>
    <assigned-plus-date>Due: ${dueDate}</assigned-plus-date>
</div>
<div>
<p>${description}</p>
</div>
<div class="d-flex .flex w-100 justify-content-center">
    <button class="btn btn-outline-success done-button mr-1 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
    <button class="btn btn-outline-danger delete-button">Delete</button>
</div>
</li></div>
`;

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };


        this.tasks.push(task);
    }
    // this creates deleteTask

    deleteTask(taskId) {
        const newTasks = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const tasks = this.tasks[i];

            if (tasks.id !== taskId) {
                newTasks.push(tasks);
            }
        }

        this.tasks = newTasks;
    }

    getTaskById(taskId) {
        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            if (task.id === taskId) {
                foundTask = task;
            }
        }

        return foundTask;
    }

    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const tasks = this.tasks[i];
            const date = new Date(tasks.dueDate);
            const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(tasks.id, tasks.name, tasks.description, tasks.assignedTo, formattedDate, tasks.status);

            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.querySelector('.container3');
        tasksList.innerHTML = tasksHtml;


    }

    save() {
        const tasksJson = JSON.stringify(this.tasks);

        localStorage.setItem('tasks', tasksJson);

        const currentId = String(this.currentId);

        localStorage.setItem('currentId', currentId);

    }

    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }
    }
}