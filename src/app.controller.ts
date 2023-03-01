import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('insta')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':user')
  async getUserInstagram(@Param() param: any): Promise<any> {
    return await this.appService.getUserInstagram(param.user);
  }
}
