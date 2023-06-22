import { Module } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingController } from './crawling.controller';


@Module({
// Include the JobListing entity
  providers: [CrawlingService],
  controllers: [CrawlingController]
})
export class CrawlingModule {}
