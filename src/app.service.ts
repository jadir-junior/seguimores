import * as cheerio from 'cheerio'; //
import * as rp from 'request-promise'; ///

import { Injectable } from '@nestjs/common';
import fs from 'fs';
import puppeteer from 'puppeteer'; //

// npm run start:dev
// porta 3000


@Injectable()
export class AppService {
  url: 'https://www.instagram.com/petry.exe';
  url2: 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States';

  async getHello(): Promise<string> {
    // return 'Hello World!';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(this.url2);
    const pageContent = await page.content();

    // fs.writeFileSync('instagram.html', pageContent);

    await browser.close();

    return 'success';
  }
}
