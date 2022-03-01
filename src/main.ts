import express from 'express';
import { appLogger } from '@/config/logger';

const app = express();

app.use(appLogger);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(4000);
