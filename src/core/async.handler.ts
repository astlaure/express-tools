import express from 'express';

export function asyncHandler(func: express.RequestHandler) {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      return await Promise.resolve(func(req, res, next));
    } catch (err) {
      return next(err);
    }
  }
}
