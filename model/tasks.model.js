const Task = require('./tasks.mongo');

async function saveTask(task) {
    await task.save();
}

async function findTask(filter) {
    return await Task.findOne(filter);
}

async function existsTaskWithId(taskId) {
    return await findTask({
        _id: taskId,
    });
}

async function getAllTasks() {
    return await Task.find({ upcoming: true });
}

async function getTaskById(taskId) {
    return await Task.findById(taskId);
}

async function addTask(task) {
    let newTask = new Task(task);
    await saveTask(newTask);
    return newTask;
}

async function patchTaskById(taskId, newTask) {
    const patchedTask = await Task.updateOne(
        {
            _id: taskId,
        },
        {
            name: newTask.name,
            completed: newTask.completed,
        }
    );

    return patchedTask.acknowledged;
}

async function deleteTask(taskId) {
    const deleted = await Task.updateOne(
        {
            _id: taskId,
        },
        {
            upcoming: false,
        }
    );
    return deleted.acknowledged;
}

module.exports = {
    existsTaskWithId,
    getAllTasks,
    getTaskById,
    addTask,
    patchTaskById,
    deleteTask,
};
