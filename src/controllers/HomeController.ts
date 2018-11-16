import 'reflect-metadata';
import { controller, httpGet, interfaces } from 'inversify-express-utils';

/**
 * Controller of main home page
 */

@controller('/')
export class HomeController implements interfaces.Controller {
  constructor() {}

  @httpGet('/')
  public getIndex(): string {
    return 'Main page';
  }
}
