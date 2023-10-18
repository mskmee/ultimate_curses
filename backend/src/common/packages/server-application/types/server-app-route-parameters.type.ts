import {
  type FastifyReply,
  type FastifyRequest,
  type preHandlerHookHandler,
} from 'fastify';

import { type HttpMethod } from '~/common/http/http.js';

import { type ValidationParameters } from './validation-parameters.type.js';

type ServerAppRouteParameters = {
  path: string;
  method: HttpMethod;
  preHandler?: preHandlerHookHandler;
  handler: (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => Promise<void> | void;
  validation?: ValidationParameters;
};

export { type ServerAppRouteParameters };
