/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import validator from 'validator';
import z from 'zod';

import { ddbDocClient } from 'clients/dax.client';
import { BonusSchema } from 'schemas';

import { router, publicProcedure } from '../context';

export const bonusesRouter = router({
  lol: publicProcedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/bonuses',
        tags: ['bonuses'],
        summary: 'Register as a new user',
      },
    })
    .input(z.void())
    .output(BonusSchema.array())
    .query(async () => {
      const snapshot = await ddbDocClient
        .query({
          TableName: 'HEB_PAYLOOT',
          KeyConditionExpression: 'dataEntity = :dataEntity',
          ExpressionAttributeValues: {
            ':dataEntity': 'BONUSES',
          },
        })
        .promise();

      const filtered = snapshot?.Items?.filter(({ documentId }) => !validator.isEmail(documentId as string))?.filter(
        ({ documentId }) => documentId !== 'CONFIG',
      );

      const result = BonusSchema.array().parse(filtered);

      return result;
    }),
});
