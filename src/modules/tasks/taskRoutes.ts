import express from 'express';
import taskControllers from './taskController';

const router = express.Router();

// task sub routes
router.get('/', taskControllers.fetchAllTasks);
router.post('/', taskControllers.addNewTask);
router.delete('/:id', taskControllers.deleteTask);
router.put('/:id', taskControllers.updateTask);

export default router;
