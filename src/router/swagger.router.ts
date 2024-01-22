import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { openApiDocument } from 'openApi';

export const swaggerRouter = express.Router();

swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(openApiDocument));
