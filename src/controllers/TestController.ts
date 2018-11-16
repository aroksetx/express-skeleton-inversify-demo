import 'reflect-metadata';
import { controller, httpGet, interfaces, requestParam, response } from 'inversify-express-utils';
import express = require('express');


@controller('/test')
export class TestController implements interfaces.Controller {
  constructor() {}

  @httpGet('/')
  public getIndex(req: express.Request, @response() res: express.Response): string {
    return 'Test page';
  }

  @httpGet('/:id')
  public getIndexId(@requestParam("id") id): string {
    return `Test page ${id} `;
  }
}
