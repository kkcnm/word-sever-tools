// src/middlewares/remove-charset.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RemoveCharsetMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 劫持 res.setHeader 方法
    const originalSetHeader = res.setHeader.bind(res);
    res.setHeader = (key: string, value: any) => {
      if (key.toLowerCase() === 'content-type' && typeof value === 'string') {
        value = value.split(';')[0]; // 移除 charset
      }
      return originalSetHeader(key, value);
    };
    next();
  }
}