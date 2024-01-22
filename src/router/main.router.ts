import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';

import { createContext } from 'context';
import { appRouter } from 'router';

import { swaggerRouter } from './swagger.router';

export const mainRouter = express.Router();

mainRouter.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

mainRouter.use('/api', swaggerRouter);

mainRouter.use(
  '/api',
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  createOpenApiExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
