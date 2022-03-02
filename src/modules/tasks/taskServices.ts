import taskMockDB from './taskMockDB.json';

interface ITask {
    name: string,
    description: string,
    status: string,
    estimatedTime: string
}

let mockDBInstance = [...taskMockDB];

export const fetchAllTasksService = () => mockDBInstance;

export const addNewTaskService = (newTask: ITask) => {
    const id = Math.floor(Math.random() * 1000000000000000);
    mockDBInstance.push({
        id: id.toString(),
        ...newTask
    });
    return mockDBInstance;
};

export const deleteTaskService = (taskId: string) => {
    const taskIndex = mockDBInstance.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        mockDBInstance.splice(taskIndex, 1);
    }
    else {
        throw 'Task doesn\'t exist in database';
    }
    return mockDBInstance;
};

export const updateTaskService = (updatedTask: ITask, taskId: string) => {
    const matchedTask = mockDBInstance.find(task => task.id === taskId);
    if (matchedTask) {
        mockDBInstance = mockDBInstance.map(task => task.id === matchedTask.id ? { id: task.id, ...updatedTask } : task);
    } else {
        throw 'Task doesn\'t exist in database';
    }
    return mockDBInstance;
};
