import express from 'express';
import authControllers from './authControllers';

const router = express.Router();

// auth sub routes
router.post('/login', authControllers.login);

export default router;
