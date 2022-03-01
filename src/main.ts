import 'dotenv/config';
import express from 'express';
import { appLogger, winstonLogger } from '@/config/logger';
import { APP_PORT } from '@/config/env';

const app = express();

app.use(appLogger);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(APP_PORT);
winstonLogger.info(`App is running at port ${APP_PORT}`);
