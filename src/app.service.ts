import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(@InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue) {}

  async transcode() {
    this.logger.log(`Add to Transcode Queue`);
    await this.transcodeQueue.add({
      fileName: './file.mp3',
    })
  }
}
