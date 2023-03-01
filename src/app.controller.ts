import { Controller, Get, Param } from '@nestjs/common';

import { InstagramService } from './instagram/instagram.service';

@Controller('insta')
export class AppController {
  constructor(private readonly instaService: InstagramService) {}

  @Get(':user')
  async getUserInstagram(@Param() param: any): Promise<any> {
    return await this.instaService.getUserInstagram(param.user);
  }
}
