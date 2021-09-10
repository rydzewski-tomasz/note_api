import { Context } from 'koa';

export enum HttpResponseStatus {
  SUCCESS = 'SUCCESS', FAIL = 'FAIL'
}

export type SuccessHttpStatus = 200 | 201 | 204;
export type ErrorHttpStatus = 400 | 401 | 404 | 503;

export interface HttpResponseMessage {
  type: string;
  message: string;
  field?: string;
}

export interface HttpResponseBody {
  status: HttpResponseStatus;
  messages: HttpResponseMessage[];
  data?: any;
}

export interface ErrorResponseMessage {
  type: string,
  message: string,
  field?: string
}

function createSuccessResponse(ctx: Context) {
  return (status: SuccessHttpStatus | number, data?: Record<string, any>) => {
    ctx.response.status = status;
    ctx.response.body = createSuccessBody(data);
  };
}

function createSuccessBody(data?: any): HttpResponseBody {
  return { status: HttpResponseStatus.SUCCESS, messages: [], data };
}

function createErrorResponse(ctx: Context) {
  return (status: ErrorHttpStatus | number, ...messages: ErrorResponseMessage[]) => {
    ctx.response.status = status;
    ctx.response.body = createErrorBody(...messages);
  };
}

function createErrorBody(...messages: ErrorResponseMessage[]): HttpResponseBody {
  return { status: HttpResponseStatus.FAIL, messages };
}

function httpResponse(ctx: Context) {
  return {
    createSuccessResponse: createSuccessResponse(ctx),
    createErrorResponse: createErrorResponse(ctx)
  };
}

export default httpResponse;