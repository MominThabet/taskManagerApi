const Task = require('./tasks.mongo');
//

async function saveTask(task) {
    await task.save();
}

async function addTask(task) {
    let newTask = new Task(task);
    await saveTask(newTask);
}

module.exports = {
    addTask,
};
