import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TRANSCODE_QUEUE } from './constants';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Post(TRANSCODE_QUEUE)
  async transcode() {
    this.logger.log(`Transcode POST request received`);
    return this.appService.transcode()
  }
}
