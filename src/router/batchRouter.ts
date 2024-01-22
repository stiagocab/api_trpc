import { db } from 'schemas';
import { sleep } from 'utils';

import { router, publicProcedure } from '../context';

export const batchRouter = router({
  list: publicProcedure.query(async () => {
    await sleep(1000);

    return db.batches;
  }),
});
