import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { appLogger, winstonLogger } from '@/config/logger';
import { APP_PORT } from '@/config/env';
import appRouter from './router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(appLogger);
app.use(appRouter);

app.listen(APP_PORT);
winstonLogger.info(`App is running at port ${APP_PORT}`);
