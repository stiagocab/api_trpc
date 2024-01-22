/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import AWS from 'aws-sdk';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

const config = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    sessionToken: 'sessionToken',
  },
};

AWS.config.update(config);

const ddbDocClient = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

export { ddbDocClient };
