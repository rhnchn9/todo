import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { appLogger, winstonLogger } from '@/config/logger';
import { APP_PORT } from '@/config/env';
import appRouter from './router';

const app = express();

// allow CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(appLogger);
app.use(appRouter);

app.listen(APP_PORT);
winstonLogger.info(`App is running at port ${APP_PORT}`);
