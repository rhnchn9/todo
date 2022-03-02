import { getUserByEmail } from '@/modules/users/userServices';
import { generateToken } from '@/helpers/tokenGenerator';
import { Request, Response } from 'express';
import { statusCodes } from '@/constants/statusCodes';
import { statusMessages } from '@/constants/statusMessages';

export default { 
    login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = getUserByEmail(email);
            if (user) {
                if (user.password && user.password === password) {
                    const token = generateToken({ userId: user.id });
                    const { password, ...restUser } = user;
                    res.status(statusCodes.OK).send({
                        code: statusCodes.USER_LOGGED_IN_SUCCESSFULLY,
                        msg: statusMessages.USER_LOGGED_IN_SUCCESSFULLY,
                        data: {
                            ...restUser,
                            ...token
                        }
                    });
                } else {
                    res.status(statusCodes.NOT_AUTHENTICATED).send({
                        code: statusCodes.INVALID_CREDENTIALS,
                        msg: statusMessages.INVALID_CREDENTIALS
                    });
                }
            } else {
                res.status(statusCodes.BAD_REQUEST).send({
                    code: statusCodes.INVALID_CREDENTIALS,
                    msg: statusMessages.INVALID_CREDENTIALS
                });
            }
        } catch (err) {
            res.status(statusCodes.INTERNAL_SERVER_ERROR).send({
                code: statusCodes.FAILED_TO_LOGIN_USER,
                msg: statusMessages.FAILED_TO_LOGIN_USER
            });
        }
    }
};
