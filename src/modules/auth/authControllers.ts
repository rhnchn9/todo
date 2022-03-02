import { getUserByEmail } from '@/modules/users/userServices';
import { generateToken } from '@/helpers/tokenGenerator';
import { Request, Response } from 'express';
import { status } from '@/constants/status';
import { handleError, handleResponse } from '@/helpers/utils';

export default { 
    login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = getUserByEmail(email);
            if (user) {
                if (user.password && user.password === password) {
                    const token = generateToken({ userId: user.id });
                    const { password, ...restUser } = user;
                    handleResponse(res, status.OK, {
                        ...status.USER_LOGGED_IN_SUCCESSFULLY,
                        data: {
                            ...restUser,
                            ...token
                        }
                    });
                } else {
                    handleResponse(res, status.NOT_AUTHENTICATED, {
                        ...status.INVALID_CREDENTIALS
                    });
                }
            } else {
                handleResponse(res, status.BAD_REQUEST, {
                    ...status.INVALID_CREDENTIALS
                });
            }
        } catch (err) {
            handleError(res, status.INTERNAL_SERVER_ERROR, {
                ...status.FAILED_TO_LOGIN_USER
            }, err);
        }
    }
};
