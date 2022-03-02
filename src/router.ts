import express from 'express';
import authRoutes from '@/modules/auth/authRoutes';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/auth', authRoutes);

export default router;
