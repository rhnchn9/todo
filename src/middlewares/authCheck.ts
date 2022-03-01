import jwt, { JwtPayload } from 'jsonwebtoken';
import { getUserById } from '@/modules/users/userServices';
import { JWT_SECRET } from '@/config/env';
import { Request, Response, NextFunction } from 'express';
import { statusCodes } from '@/constants/statusCodes';
import { statusMessages } from '@/constants/statusMessages';

exports.isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization']; 
        if (token) {
            const decoded = await jwt.verify(token, JWT_SECRET) as JwtPayload;
            if (decoded && decoded.userId) {
                const user = getUserById(decoded.userId);
                if (user) {
                    // req.user = user;
                    next();
                } else {
                    res.status(statusCodes.USER_DOES_NOT_EXIST).send({
                        code: statusCodes.USER_DOES_NOT_EXIST,
                        msg: statusMessages.USER_DOES_NOT_EXIST
                    });
                }
            } else {
                res.status(statusCodes.NOT_AUTHENTICATED).send({
                    code: statusCodes.AUTH_FAILED,
                    msg: statusMessages.AUTH_FAILED
                });
            }
        } else {
            res.status(statusCodes.BAD_REQUEST).send({
                code: statusCodes.AUTH_TOKEN_MISSING,
                msg: statusMessages.AUTH_TOKEN_MISSING
            });
        } 
    }catch (err) {
        const error = err as Error;
        if (error && error.name === 'TokenExpiredError') {
            res.status(statusCodes.NOT_AUTHENTICATED).send({
                code: statusCodes.TOKEN_EXPIRED,
                msg: statusMessages.TOKEN_EXPIRED
            });
        }
        else {
            res.status(statusCodes.INTERNAL_SERVER_ERROR).send({
                code: statusCodes.AUTH_FAILED,
                msg: statusMessages.AUTH_FAILED
            });
        }
    }
};
