import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRY_TIME } from '@/config/env';

interface ITokenPayload {
    userId: string
}

const expiryDuration = JWT_EXPIRY_TIME * 24 * 60 * 60;
const tokenExpiryDate = new Date(Date.now() + (expiryDuration * 1000)).toISOString();

export const generateToken = (tokenPayload: ITokenPayload) => {
    return {
        token: jwt.sign(
            tokenPayload,
            JWT_SECRET,
            {
                expiresIn: expiryDuration
            }
        ),
        tokenExpiryDate 
    };
};
