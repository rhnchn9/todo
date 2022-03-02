export interface IStatus {
    code: number,
    message: string
}

export const status = {
    OK: {
        code: 200,
        message: 'ok'
    },
    CREATED: {
        code: 201,
        message: 'created'
    },
    NO_CONTENT: {
        code: 204,
        message: 'No content'
    },
    BAD_REQUEST: {
        code: 400,
        message: 'Bad request'
    },
    NOT_AUTHENTICATED: {
        code: 401,
        message: 'User not authenticated'
    },
    NOT_AUTHORIZED: {
        code: 403,
        message: 'Insufficient permissions to access resource'
    },
    NOT_FOUND: {
        code: 404,
        message: 'Not found'
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Internal server error'
    },
    NO_RECORDS: {
        code: 0,
        message: 'No Data found'
    },
    AUTH_TOKEN_MISSING: {
        code: 1516,
        message: 'Authentication token missing'
    },
    AUTH_FAILED: {
        code: 1517,
        message: 'Authentication failed'
    },
    USER_LOGGED_IN_SUCCESSFULLY: {
        code: 1519,
        message: 'User logged in successfully'
    },
    INVALID_CREDENTIALS: {
        code: 1520,
        message: 'Invalid credentials'
    },
    USER_DOES_NOT_EXIST: {
        code: 1521,
        message: 'User does not exist'
    },
    FAILED_TO_LOGIN_USER: {
        code: 1522,
        message: 'Failed to login user'
    },
    TOKEN_EXPIRED: {
        code: 1523,
        message: 'Your session has expired.'
    },
    TASKS_FETCHED_SUCCESSFULLY: {
        code: 1524,
        message: 'Tasks fetched successfully.'
    },
    TASK_FETCH_FAILED: {
        code: 1525,
        message: 'Failed to fetch tasks.'
    },
    TASKS_ADDED_SUCCESSFULLY: {
        code: 1526,
        message: 'Tasks added successfully.'
    },
    TASKS_ADD_FAILED: {
        code: 1526,
        message: 'Failed to add task.'
    },
    TASKS_DELETED_SUCCESSFULLY: {
        code: 1527,
        message: 'Tasks deleted successfully.'
    },
    TASKS_DELETE_FAILED: {
        code: 1526,
        message: 'Failed to delete task.'
    },
    TASKS_UPDATED_SUCCESSFULLY: {
        code: 1529,
        message: 'Tasks updated successfully.'
    },
    TASKS_UPDATE_FAILED: {
        code: 1526,
        message: 'Failed to update task.'
    }
};
