/* eslint-disable @typescript-eslint/no-misused-promises */
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import responseTime from 'response-time';

import { mainRouter } from 'router/main.router';

const app = express();

app.use(cors());
app.use(compression());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: true, exposedHeaders: ['X-Next-Token'] }));
app.use(express.json({ limit: '500kb', type: '*/*' }));
app.use(express.urlencoded({ extended: true }));
app.use(responseTime({ header: 'Server-Timing' }));

app.use(mainRouter);

app.listen(8080);
