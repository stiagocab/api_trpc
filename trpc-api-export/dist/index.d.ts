import * as _trpc_server from '@trpc/server';
import * as trpc_openapi from 'trpc-openapi';
import * as express from 'express';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';

type DeepMutable<T> = {
  -readonly [P in keyof T]: DeepMutable<T[P]>;
};

declare const appRouter: _trpc_server.CreateRouterInner<
  _trpc_server.RootConfig<{
    ctx: {
      req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
      res: express.Response<any, Record<string, any>>;
    };
    meta: trpc_openapi.OpenApiMeta;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
  }>,
  {
    bonuses: _trpc_server.CreateRouterInner<
      _trpc_server.RootConfig<{
        ctx: {
          req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
          res: express.Response<any, Record<string, any>>;
        };
        meta: trpc_openapi.OpenApiMeta;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
      }>,
      {
        list: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: trpc_openapi.OpenApiMeta;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: trpc_openapi.OpenApiMeta;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: void;
            _input_out: void;
            _output_in: {
              code: string;
              id: string;
              email: string;
              endDate: string;
              startDate: string;
              active?: boolean | undefined;
              description?: string | undefined;
              img?: string | null | undefined;
              lock?: boolean | undefined;
              minItemsValue?: number | undefined;
              name?: string | undefined;
              origin?: string | null | undefined;
              originType?: 'ORDER' | 'MANUAL' | 'PROMOTION' | 'REFERRAL' | 'REGISTRATION' | 'OTHER' | null | undefined;
              phone?: string | undefined;
              value?: number | undefined;
            }[];
            _output_out: {
              code: string;
              id: string;
              email: string;
              value: number;
              active: boolean;
              endDate: string;
              lock: boolean;
              minItemsValue: number;
              startDate: string;
              description?: string | undefined;
              img?: string | null | undefined;
              name?: string | undefined;
              origin?: string | null | undefined;
              originType?: 'ORDER' | 'MANUAL' | 'PROMOTION' | 'REFERRAL' | 'REGISTRATION' | 'OTHER' | null | undefined;
              phone?: string | undefined;
            }[];
          },
          unknown
        >;
      }
    >;
    users: _trpc_server.CreateRouterInner<
      _trpc_server.RootConfig<{
        ctx: {
          req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
          res: express.Response<any, Record<string, any>>;
        };
        meta: trpc_openapi.OpenApiMeta;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
      }>,
      {
        list: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: trpc_openapi.OpenApiMeta;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: trpc_openapi.OpenApiMeta;
          },
          DeepMutable<{
            name: string;
            id: string;
            email: string;
            username: string;
            role: 'administrator' | 'apprentice' | 'standard';
            imageUrl?: string | undefined;
          }>[]
        >;
        show: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: trpc_openapi.OpenApiMeta;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: trpc_openapi.OpenApiMeta;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: string;
            _input_out: string;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          | DeepMutable<{
              name: string;
              id: string;
              email: string;
              username: string;
              role: 'administrator' | 'apprentice' | 'standard';
              imageUrl?: string | undefined;
            }>
          | `User with id:${string} does not exist in database.`
        >;
        destroy: _trpc_server.BuildProcedure<
          'mutation',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: trpc_openapi.OpenApiMeta;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: trpc_openapi.OpenApiMeta;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          DeepMutable<{
            name: string;
            id: string;
            email: string;
            username: string;
            role: 'administrator' | 'apprentice' | 'standard';
            imageUrl?: string | undefined;
          }>[]
        >;
        create: _trpc_server.BuildProcedure<
          'mutation',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: trpc_openapi.OpenApiMeta;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: trpc_openapi.OpenApiMeta;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              user: {
                name: string;
                email: string;
                username: string;
                role: 'administrator' | 'apprentice' | 'standard';
                imageUrl?: string | undefined;
              };
            };
            _input_out: {
              user: {
                name: string;
                email: string;
                username: string;
                role: 'administrator' | 'apprentice' | 'standard';
                imageUrl?: string | undefined;
              };
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          {
            name: string;
            id: string;
            email: string;
            username: string;
            role: 'administrator' | 'apprentice' | 'standard';
            imageUrl?: string | undefined;
          }
        >;
      }
    >;
  }
>;
type AppRouter = typeof appRouter;

declare const USER_ROLES: readonly ['administrator', 'apprentice', 'standard'];

type Square = {
  shape: 'square';
  size: number;
};
type Rectangle = {
  shape: 'rectangle';
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
declare const SharedSquareObject: Shape;

export { type AppRouter, type Shape, SharedSquareObject, USER_ROLES };
