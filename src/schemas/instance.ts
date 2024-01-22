import { DeepMutable, mockBatches, mockUsers } from 'utils';
import { mockBonuses } from 'utils/mocks/mockBonuses';

import { Batches } from './Batch';
import { Bonuses } from './Bonus';
import { Users } from './User';

export const db = {
  bonuses: structuredClone(mockBonuses) as unknown as DeepMutable<Bonuses>,
  users: structuredClone(mockUsers) as unknown as DeepMutable<Users>,
  batches: structuredClone(mockBatches) as unknown as DeepMutable<Batches>,
};
