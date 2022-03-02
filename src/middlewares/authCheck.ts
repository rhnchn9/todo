import jwt, { JwtPayload } from 'jsonwebtoken';
import { getUserById } from '@/modules/users/userServices';
import { JWT_SECRET } from '@/config/env';
import { Request, Response, NextFunction } from 'express';
import { status } from '@/constants/status';
import { handleError, handleResponse } from '@/helpers/utils';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization'];
        if (token) {
            const decoded = await jwt.verify(token, JWT_SECRET) as JwtPayload;
            if (decoded && decoded.userId) {
                const user = getUserById(decoded.userId);
                if (user) {
                    next();
                } else {
                    handleResponse(res, status.USER_DOES_NOT_EXIST);
                }
            } else {
                handleResponse(res, status.NOT_AUTHENTICATED, {
                    ...status.AUTH_FAILED
                });
            }
        } else {
            handleResponse(res, status.BAD_REQUEST, {
                ...status.AUTH_TOKEN_MISSING
            });
        } 
    }catch (err) {
        const error = err as Error;
        if (error && error.name === 'TokenExpiredError') {
            handleError(res, status.NOT_AUTHENTICATED, {
                ...status.TOKEN_EXPIRED
            }, error);
        }
        else {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.AUTH_FAILED,
            }, error);
        }
    }
};
