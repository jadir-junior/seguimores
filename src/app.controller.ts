import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const { Header } = require('@nestjs/common');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36')
  //Esse header sobrescreve a variável User-Agent no header, dizendo pro servidor que estamos tentando raspar, que somos um navegador ok!
  //curl -I http://localhost:3000
  async getHello(): Promise<any> {
    return await this.appService.getHello();
  }
}
