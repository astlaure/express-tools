import express from 'express';
import { HttpError } from './http.error';

export function errorHandler(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  let status = 500;

  if (err instanceof HttpError) {
    status = err.status;
  }

  return res.status(status).json({
    message: err.message,
  });
}
