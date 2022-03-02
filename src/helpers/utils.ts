import { IStatus } from '@/constants/status';
import { Response } from 'express';

interface IResponseBody extends IStatus {
    data?: unknown
}

export const handleResponse = (res: Response, status: IStatus, responseBody?: IResponseBody) => {
    res.status(status.code).send({
        ...(responseBody || status)
    });
};

export const handleError = (res: Response, status: IStatus, responseBody: IResponseBody, error: unknown) => {
    console.log(error);
    handleResponse(res, status, responseBody);
};
