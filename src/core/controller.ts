import express from 'express';
import { asyncHandler } from './async.handler';

export class Controller {
  router = express.Router();

  all(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.all(path, ...handlers, asyncHandler(routeHandler!));
  }

  get(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.get(path, ...handlers, asyncHandler(routeHandler!));
  }

  post(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.post(path, ...handlers, asyncHandler(routeHandler!));
  }

  put(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.put(path, ...handlers, asyncHandler(routeHandler!));
  }

  patch(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.patch(path, ...handlers, asyncHandler(routeHandler!));
  }

  delete(path: string, ...handlers: express.RequestHandler[]) {
    const routeHandler = handlers.pop();
    this.router.delete(path, ...handlers, asyncHandler(routeHandler!));
  }
}
