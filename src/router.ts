import express from 'express';
import authRoutes from '@/modules/auth/authRoutes';
import taskRoutes from '@/modules/tasks/taskRoutes';
import { isAuthenticated } from '@/middlewares/authCheck';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/auth', authRoutes);
router.use('/tasks', isAuthenticated, taskRoutes);

export default router;
