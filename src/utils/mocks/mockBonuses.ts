import { Bonuses } from 'schemas';

export const mockBonuses = [
  {
    active: true,
    code: 'FF72D9ACB0B9BC55',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nibh, facilisis eu risus eget, ultrices mattis est. Donec purus ante, malesuada ut nibh id, finibus vehicula mauris',
    email: 'descareno@hebmex.com',
    endDate: '2023-12-16T16:45:16.524Z',
    id: 'FF72D9ACB0B9BC55',
    img: null,
    lock: false,
    minItemsValue: 0,
    name: 'Lorem ipsum dolor',
    origin: '1381880503086-01',
    originType: 'ORDER',
    phone: '+525555555555',
    startDate: '2023-12-11T16:45:16.523Z',
    value: 47.2,
  },
] as const satisfies Bonuses;
