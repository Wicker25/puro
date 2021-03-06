/**
 * @file testing/mocks.ts
 *
 * Copyright (C) 2018 | Giacomo Trudu aka `Wicker25`
 *
 * This file is part of Puro.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { IHttpExceptionHints } from '../http';

export class Request {
  method?: string;
  query?: any;
  body?: any;
  params?: any;
  bucket?: any;
  user?: any;
  entities: any;
  prepare? = jest.fn((schema: any) => this);
  login = jest.fn((user: any, handler: Function) => this);
}

export class Response {
  finished = false;
  status = jest.fn((code: number) => this);
  send = jest.fn((body?: any) => this);
  prepare? = jest.fn((body: any, hints?: IHttpExceptionHints) => this);
}

export interface NextFunction {
  (error?: any): void;
}

export interface Middleware {
  (request: Request, response: Response): Promise<void>;
  (request: Request, response: Response, next: NextFunction): Promise<void>;
  (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void>;
}

export const mock = <T = any>(target: any) => (target as unknown) as T;
