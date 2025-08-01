import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { users } from './user';

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getConfig(@Headers("Authorization") auth: string): object {
    return this.appService.getConfig(auth);
  }

  @Get("items/:id")
  async getItems(@Headers("Authorization") auth: string) {
    return this.appService.getItems(JSON.parse(await users.get(auth.slice(8))));
  }

  @Post("items/:id")
  async equipItem(@Headers("Authorization") auth: string, @Body() body) {
    this.appService.equipItem(JSON.parse(await users.get(auth.slice(8))), body)
    return body;
  }
}
