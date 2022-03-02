import { status } from '@/constants/status';
import { handleError, handleResponse } from '@/helpers/utils';
import { Request, Response } from 'express';
import { addNewTaskService, deleteTaskService, fetchAllTasksService, updateTaskService } from './taskServices';


export default {
    fetchAllTasks (req: Request, res: Response) {
        try {
            const tasks = fetchAllTasksService();
            handleResponse(res, status.OK, {
                ...status.TASKS_FETCHED_SUCCESSFULLY,
                data: {
                    tasks
                }
            });
        } catch (err) {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.TASK_FETCH_FAILED
            }, err);
        }
    },
    addNewTask (req: Request, res: Response) {
        try {
            const tasks = addNewTaskService(req.body);
            handleResponse(res, status.CREATED, {
                ...status.TASKS_ADDED_SUCCESSFULLY,
                data: {
                    tasks
                }
            });
        } catch (err) {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.TASKS_ADD_FAILED
            }, err);
        }
    },
    deleteTask (req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = deleteTaskService(id);
            handleResponse(res, status.OK, {
                ...status.TASKS_DELETED_SUCCESSFULLY,
                data: {
                    tasks
                }
            });
        } catch (err) {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.TASKS_DELETE_FAILED
            }, err);
        }
    },
    updateTask (req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = updateTaskService(req.body, id);
            handleResponse(res, status.OK, {
                ...status.TASKS_UPDATED_SUCCESSFULLY,
                data: {
                    tasks
                }
            });
        } catch (err) {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.TASKS_UPDATE_FAILED
            }, err);
        }
    }
};
