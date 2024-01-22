import { router } from '../context';

import { bonusesRouter } from './bonuses.router';
import { userRouter } from './userRouter';

export const appRouter = router({
  bonuses: bonusesRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
